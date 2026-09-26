## Git

- Do not rewrite published git history (no force push, rebase, amend or squash of pushed commits).

## Design system

- All visual styling comes from the "quality report" tokens in `src/styles.css` (deep ink surface, one signal-green `--pass` accent, `--rim` teal, Space Grotesk display / IBM Plex Sans body / JetBrains Mono metadata). Never hardcode color or font utilities in components — the site is dark-by-default and ad hoc styles break that single visual register.
