---
'@lxsmnsyc/oxlint-config': minor
---

Enable the oxc, promise, node, jsdoc, unicorn and vitest plugins and turn on more eslint, typescript and import rules. Relative imports must now drop their file extension (`import/extensions: never`). Vitest rules apply to `*.test.*`, `*.spec.*`, `__tests__/**`, `test/**` and `tests/**` files.

Add a `@lxsmnsyc/oxlint-config/node` entry for code that node runs directly. It requires file extensions on relative imports.
