function Initialize-PluginPortJobType {
    if (-not ('ToolOrbitPluginPortJob' -as [type])) {
        Add-Type -TypeDefinition @'
using System;
using System.ComponentModel;
using System.Diagnostics;
using System.Runtime.InteropServices;

public static class ToolOrbitPluginPortJob {
    private static IntPtr handle;

    [StructLayout(LayoutKind.Sequential)]
    private struct BasicLimits {
        public long ProcessTime, JobTime;
        public uint Flags;
        public UIntPtr MinimumWorkingSet, MaximumWorkingSet;
        public uint ActiveProcesses;
        public UIntPtr Affinity;
        public uint Priority, SchedulingClass;
    }

    [StructLayout(LayoutKind.Sequential)]
    private struct ExtendedLimits {
        public BasicLimits Basic;
        public ulong ReadOperations, WriteOperations, OtherOperations;
        public ulong ReadBytes, WriteBytes, OtherBytes;
        public UIntPtr ProcessMemory, JobMemory, PeakProcessMemory, PeakJobMemory;
    }

    [DllImport("kernel32.dll", CharSet = CharSet.Unicode, ExactSpelling = true, SetLastError = true)]
    private static extern IntPtr CreateJobObjectW(IntPtr attributes, string name);
    [DllImport("kernel32.dll", SetLastError = true)]
    private static extern bool SetInformationJobObject(IntPtr job, int kind, ref ExtendedLimits limits, uint length);
    [DllImport("kernel32.dll", SetLastError = true)]
    private static extern bool AssignProcessToJobObject(IntPtr job, IntPtr process);
    [DllImport("kernel32.dll")]
    private static extern IntPtr GetCurrentProcess();
    [DllImport("kernel32.dll")]
    private static extern bool CloseHandle(IntPtr value);

    [DllImport("kernel32.dll", CharSet = CharSet.Unicode, ExactSpelling = true, SetLastError = true)]
    private static extern IntPtr OpenJobObjectW(uint access, bool inherit, string name);
    [DllImport("kernel32.dll", SetLastError = true)]
    private static extern bool IsProcessInJob(IntPtr process, IntPtr job, out bool result);
    [DllImport("kernel32.dll", SetLastError = true)]
    private static extern bool TerminateJobObject(IntPtr job, uint code);

    public static bool Owns(string name, int pid) {
        IntPtr job = OpenJobObjectW(4, false, name);
        if (job == IntPtr.Zero) return false;
        try {
            using (Process process = Process.GetProcessById(pid)) {
                bool result;
                return IsProcessInJob(process.Handle, job, out result) && result;
            }
        } catch (ArgumentException) {
            return false;
        } catch (InvalidOperationException) {
            return false;
        } catch (Win32Exception) {
            return false;
        } finally {
            CloseHandle(job);
        }
    }

    public static bool Stop(string name) {
        IntPtr job = OpenJobObjectW(8, false, name);
        if (job == IntPtr.Zero) {
            int error = Marshal.GetLastWin32Error();
            if (error == 2) return false;
            throw new Win32Exception(error);
        }
        try {
            if (!TerminateJobObject(job, 0)) throw new Win32Exception(Marshal.GetLastWin32Error());
            return true;
        } finally {
            CloseHandle(job);
        }
    }

    public static void Attach(string name) {
        if (handle != IntPtr.Zero) return;
        const int extendedLimitInformation = 9;
        const uint killOnJobClose = 0x2000;
        IntPtr job = CreateJobObjectW(IntPtr.Zero, String.IsNullOrEmpty(name) ? null : name);
        if (job == IntPtr.Zero) throw new Win32Exception(Marshal.GetLastWin32Error());
        ExtendedLimits limits = new ExtendedLimits();
        limits.Basic.Flags = killOnJobClose;
        if (!SetInformationJobObject(job, extendedLimitInformation, ref limits, (uint)Marshal.SizeOf(typeof(ExtendedLimits))) ||
            !AssignProcessToJobObject(job, GetCurrentProcess())) {
            int error = Marshal.GetLastWin32Error();
            CloseHandle(job);
            throw new Win32Exception(error);
        }
        // 启动进程退出时，Windows 释放句柄并结束同组的服务进程。
        handle = job;
    }
}
'@
    }
}


function Get-PluginPortJobName {
    $project = (Split-Path -Parent $PSScriptRoot).ToUpperInvariant()
    $sha = [Security.Cryptography.SHA256]::Create()
    try { $hash = [BitConverter]::ToString($sha.ComputeHash([Text.Encoding]::UTF8.GetBytes($project))).Replace('-', '') }
    finally { $sha.Dispose() }
    return "Local\ToolOrbit-WebUI-$hash"
}

function Get-PluginJobListener {
    param([string]$JobName, [int]$Port)
    $listeners = if ($Port) {
        Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue
    } else {
        Get-NetTCPConnection -State Listen -ErrorAction SilentlyContinue | Where-Object LocalAddress -eq '127.0.0.1'
    }
    $listeners | Where-Object { [ToolOrbitPluginPortJob]::Owns($JobName, [int]$_.OwningProcess) } | Select-Object -First 1
}
