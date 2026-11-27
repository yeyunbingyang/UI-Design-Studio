# Yeyunby DesignForge — Product UI Design System

## Product character

DesignForge is a professional research workspace for discovering, comparing and managing UI design knowledge. The interface uses a focused dark workspace rather than a promotional landing-page aesthetic. Information hierarchy, resource previews and research context take priority over decoration.

## Theme

- Theme: dark.
- Background: deep navy (#0b1220) with restrained radial depth.
- Sidebar: near-black navy (#0a111e), separated by a subtle border.
- Main surfaces: layered navy panels (#0f1a2a and #19273b).
- Primary accent: soft mint/teal (#8bdcc3).
- Secondary accent: pale mint (#b8f1df).
- Main text: cool off-white (#e8edf5).
- Secondary text: blue-gray (#91a0b6).
- Muted text: slate (#718198).
- Borders: low-contrast cool gray with transparency.
- Avoid bright neon gradients, excessive glow and decorative glass on every surface.

## Typography

Use Inter where installed, with Noto Sans SC and system sans-serif fallbacks. Headings use medium or semibold weight and tight tracking. Body text uses readable line height. Small uppercase eyebrow labels may use increased letter spacing. Code and technical values use a monospace font stack.

## Layout

- Desktop workspace uses a fixed-width left navigation rail and a flexible main content region.
- Sidebar baseline width: 248px.
- Top bar baseline height: 66px.
- Main content max width: approximately 1180px.
- Main content desktop padding: 42px horizontally.
- Use a 4px spacing base; common gaps are 8px, 12px, 16px, 24px and 32px.
- Resource grids adapt to viewport width; avoid fixed card widths that overflow.
- At narrow widths, collapse the sidebar to an icon rail and reduce page padding.

## Surfaces

- Use subtle borders and restrained tonal separation.
- Cards use dark layered surfaces with 12–14px corner radii.
- Interactive cards may rise slightly on hover and strengthen their border.
- Keep reading content, source text and code previews on high-contrast surfaces.
- Avoid applying blur or translucency to every card.

## Interaction

- Navigation must expose active, hover and keyboard focus states.
- Hover transitions should be brief and restrained.
- Use visible loading, empty, error and success feedback for real data operations.
- Do not present placeholder modules as completed features.
- Respect prefers-reduced-motion by minimizing or removing nonessential transitions.

## Responsive behavior

- Wide desktop: full sidebar and four-column resource grid where content permits.
- Medium width: two-column resource grid.
- Narrow width: compact icon rail, single-column content cards and reduced page padding.
- Ensure text, navigation and preview controls remain accessible at 320px width.

## Product rules

- The platform is one unified application. Business modules share the same shell and navigation.
- Resource metadata must distinguish original source, translated copy and generated preview.
- Do not fabricate resource counts, live status or research results.
- External HTML and code examples must be isolated from the host application.
