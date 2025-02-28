# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
```

## To-Do

### Installers

- [x] github repo
- [x] pnpm (global install) + builtDependencies
- [x] vite | react | typescript
- [x] prettier
      [x] prettier-plugin-tailwindcss
- [x] eslint
      [x] typescript-eslint
      [x] eslint-plugin-react-hooks
      [x] eslint-plugin-react-refresh
      [x] eslint-plugin-check-file
      [x] eslint-config-prettier
- [x] vitest | @testing-library
      [x] @testing-library/jest-dom
      [x] @testing-library/user-event
      [x] @vitest/coverage-v8 | @vitest/ui
- [x] cypress
- [x] tailwindcss | shadcn/ui | radix-ui
- [x] react-router
- [x] react-hook-form | hookform/resolvers | zod
- [x] @tanstack/react-query
- [x] zustand

### Configs

- [x] settings.json (vscode)
- [x] .gitignore
- [x] .env
- [x] .editorconfig
- [x] .prettierrc.json
- [x] eslint.config.js
- [x] package.json
- [x] tsconfig.json | tsconfig.app.json
- [x] vite.config
- [x] cypress.config.js
- [x] components.json (shadcn/ui)

### Code

- [x] setup config folder: envs
- [x] setup app folder: router, provider, routes (home, not-found)
- [x] layout: navbar, footer
- [x] shadcn components
- [x] custom-ui
- [ ] unit tests
- [ ] add notification when singup register fails
- [ ] e2e tests
