# context_ai.md

# Arcana — AI Project Context

## Project Philosophy

- Incremental changes only
- Avoid massive rewrites
- Preserve working architecture
- Stability over abstraction
- Prefer minimal diffs
- Refactor only when necessary
- Do not rewrite unrelated code
- Keep changes reviewable and production-safe

---

## Repository Context

- This is an existing repository, not a greenfield scaffold task
- Preserve current project structure unless explicitly requested
- Do not regenerate starter templates
- Do not replace existing configuration without clear reason

---

## Project Stack

- Angular 21
- Angular SSR enabled
- SCSS
- npm
- Node.js 24
- TypeScript 5.9
- RxJS 7.8
- ESLint 9
- Prettier 3
- Stylelint 17
- Husky 9
- lint-staged 17

---

## Current Project State

- Project is in active early-stage development
- Foundation and architecture are evolving carefully
- Maintainability and stability are higher priority than abstraction
- Avoid premature optimization
- Avoid enterprise-style overengineering
- Prefer pragmatic and understandable solutions

---

## Architecture Rules

- Prefer simple and explicit solutions
- Reuse existing patterns before introducing new ones
- Keep folder structure consistent
- Avoid deep abstractions
- Avoid unnecessary services/helpers
- Avoid speculative architecture
- Keep components focused and predictable
- Prefer readability over cleverness

---

## SSR Rules

- Preserve SSR compatibility
- Avoid browser-only APIs without proper guards
- Any direct DOM access must be SSR-safe
- Avoid unsafe usage of window, document, localStorage, sessionStorage, navigator
- Prefer Angular-native SSR-compatible approaches

---

## Styling Rules

- Use SCSS only
- Follow existing naming conventions
- Keep styles modular and readable
- Avoid inline styles
- Avoid utility-framework patterns unless explicitly approved
- Avoid introducing CSS frameworks without approval

---

## Dependency Rules

- Do not add new libraries without explicit approval
- Prefer Angular-native/browser-native solutions first
- Avoid helper libraries for simple tasks
- Avoid large dependencies for small problems
- Keep bundle size under control
- Avoid unnecessary abstraction libraries

---

## Environment Rules

- Do not introduce environments/config abstraction until real runtime requirements exist
- Avoid generating unused environment files
- Keep configuration minimal until backend/runtime contracts are defined

---

## Refactoring Rules

Allowed:

- Small cleanup
- Local improvements
- Readability improvements
- Removing dead code
- Minor consistency fixes

Forbidden without approval:

- Large-scale rewrites
- Folder restructuring
- State management replacement
- Routing redesign
- Build system replacement
- CSS architecture rewrite
- Converting the project into monorepo/microfrontend structure
- Replacing existing working patterns “for modernity”

---

## Repository & CI/CD Rules

- GitHub is the primary repository platform
- Do not reference GitLab workflows unless explicitly requested
- Prefer GitHub-native workflows and tooling
- Keep CI simple and predictable
- Avoid enterprise-grade CI complexity unless truly needed
- Preserve existing workflow structure unless there is a clear reason to change it

---

## Git Workflow

- Keep commits focused and atomic
- One logical change per commit
- Avoid mixed-purpose commits
- Explain risky changes before implementation
- Prefer small reviewable diffs

---

## AI Workflow Rules

Before making changes:

1. Inspect existing implementation
2. Explain the plan briefly
3. Identify potential risks
4. Prefer the smallest safe solution

After changes:

1. Report changed files
2. Explain why changes were made
3. Run available checks if possible
4. Mention uncertainties instead of guessing

---

## Documentation Rules

- Preserve existing documentation structure
- Do not aggressively rewrite docs
- Keep Russian language where already used
- Make surgical edits instead of replacing pages
- Add TODO notes instead of hallucinating missing information
- Preserve existing formatting and section order whenever possible

---

## Important Constraints

- Do not generate fake architecture decisions
- Do not invent future requirements
- Do not replace working code “for modernity”
- Do not introduce patterns inconsistent with the existing project
- Respect current UX and project direction
- Avoid unnecessary “enterprise” solutions
- Avoid speculative scalability abstractions
- Do not generate GitLab-specific configuration unless explicitly requested

---

## Preferred Development Style

- Pragmatic
- Maintainable
- Predictable
- Incremental
- Production-oriented
- Low-risk
- Explicit over implicit
