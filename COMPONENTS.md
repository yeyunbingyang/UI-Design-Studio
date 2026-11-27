# DesignForge Component Guidelines

| Component | Purpose | States / behavior |
| --- | --- | --- |
| App Shell | Shared application frame | Sidebar, top bar, content region |
| Sidebar | Global navigation | Default, hover, active, keyboard focus, compact |
| Top Bar | Breadcrumb and global actions | Default, search action, responsive |
| Dashboard Hero | Product introduction and primary context | Static content, responsive heading |
| Module Card | Navigation to a business module | Default, hover, focus, active navigation |
| Module Placeholder | Honest entry state for planned modules | Ready shell, future integration notice |
| Resource Card | Future resource list item | Loading, default, hover, selected, archived |
| Preview Frame | Isolated HTML / image / code preview | Loading, loaded, blocked, error |
| Search and Filter | Resource discovery | Idle, searching, selected filters, empty results |
| Task Status | Research/import/generation feedback | Queued, running, success, failed, cancelled |

## Shared behavior

- Use semantic buttons and links. A clickable card must have a clear accessible name.
- Keyboard focus must be visible and must not rely on color alone.
- Navigation uses a persistent active indicator.
- Async actions expose pending, success and failure states.
- Failed submissions retain user input and provide a retry path.
- Dialogs trap focus while open, close on Escape where appropriate and restore focus to the trigger.
- Reduced-motion preferences suppress nonessential transforms and transitions.

## Resource previews

- External HTML must run in an isolated iframe or equivalent sandbox.
- Provide a clear source label and license information near code or asset previews.
- Preview errors must not hide the original resource file or download action.
- Never treat a static screenshot as proof that an interactive example works.
