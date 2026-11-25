# Frontend Design Studio — Phase 0 Prototype Submission

**Repository:** [UI-Design-Studio](https://github.com/yeyunbingyang/UI-Design-Studio)  
**Submission date:** 2026-11-25  
**Status:** Prototype entry submitted; existing mainline preserved.

## Preview

- [Phase 0 submission entry](../../prototype/phase0-submission/index.html)
- [Current latest prototype](../../prototype/latest/index.html)
- [Design Composer V2](../../prototype/v2/index.html)
- [Application Alpha](../../app/index.html)

## Run locally

From the repository root:

```bash
python -m http.server 8080
```

Open `http://localhost:8080/prototype/phase0-submission/`.

## Scope

1. Resource library and style gallery.
2. Online preview entry points.
3. AI design assistant workflow.
4. Windows local STDIO MCP integration, with explicit confirmation for actions.

## Repository alignment

This repository already contains a more advanced prototype line (`prototype/latest`, `prototype/v2`) and an application shell (`app`). The submission therefore adds a dedicated Phase 0 entry point rather than copying an earlier standalone demo over the existing implementation.

## Not yet implemented by this submission

- Live GitHub resource synchronization and license/activity verification.
- Real AI model invocation.
- SQLite persistence and backend APIs.
- Installed Windows MCP server and ChatGPT connection verification.
- Full screenshot-based visual regression for this Phase 0 entry page.

These remain implementation milestones, not completed capabilities.
