// 本机文件模式无需关闭服务。
if (location.protocol === 'http:' && location.hostname === '127.0.0.1') {
  const button = document.querySelector('#exit-service');
  const status = document.querySelector('#exit-status');
  button.hidden = false;
  button.addEventListener('click', async () => {
    button.disabled = true;
    status.textContent = '正在退出服务…';
    try {
      const response = await fetch('/api/shutdown', {
        method: 'POST',
        headers: {'X-Designforge-Action': 'shutdown'}
      });
      if (!response.ok) throw new Error(String(response.status));
      status.textContent = '服务已退出。';
    } catch {
      status.textContent = '退出失败，请再试一次或使用停止入口。';
      button.disabled = false;
    }
  });
}
