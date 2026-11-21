# Frontend Design Studio

AI-assisted frontend design and implementation workspace, powered by Codex Skills and Playwright Visual QA.

## Current release

**V1.2.0 — M3: Playwright Visual QA**

This repository is initialized with the M3 release package. The complete source project is provided as a compressed archive under `releases/`.

### Included capabilities

- Integrated frontend design workflow for Codex
- Built-in Skills: design brief, implementation, visual QA
- Local Skill import, update, installation and project binding
- AGENTS.md managed section generation with backup
- Playwright-based local page inspection
- Responsive viewport checks and screenshots
- Visual baseline and screenshot comparison
- QA findings, reports and Codex repair task generation

## Download the release

- `releases/Frontend-Design-Studio-V1.2.0-M3-Playwright-Visual-QA.tar.xz`

Extract the archive with 7-Zip on Windows. The archive contains the full project directory.

## Run locally

From the extracted project folder, open PowerShell:

```powershell
npm install
npx playwright install chromium
npm run check
npm run test:qa
npm run build
npm run dev
```

Then open http://127.0.0.1:5173.

## Documentation

The project archive includes:
- `README.md` — setup and product overview
- `AGENTS.md` — Codex project guidance
- `docs/architecture.md` — architecture
- `docs/m3-visual-qa-guide.md` — Visual QA workflow
- `docs/api-reference-m3.md` — M3 API reference
- `docs/qa-report-v1.2.0.md` — validation report

## Validation status

Static checks and the QA utility unit tests were run during artifact preparation. A full dependency-backed build and real Chromium/Windows integration run remain to be verified on the target machine.

## Versioning

- V1.0.x — M0/M1 prototype
- V1.1.0 — M2 Codex Skills and workflow integration
- V1.2.0 — M3 Playwright Visual QA Engine
