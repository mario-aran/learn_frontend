import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import checkFile from 'eslint-plugin-check-file';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

// tseslint.config allows types in this file
export default tseslint.config(
  // Ignores
  {
    ignores: [
      'dist',
      'coverage', // Avoid "@vitest/coverage-v8" folder
      'src/components/shadcn-ui', // Avoid "shadcn" components
    ],
  },

  // Config
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: { ecmaVersion: 2020, globals: globals.browser },
    extends: [
      js.configs.recommended, // "eslint"
      ...tseslint.configs.strict, // "typescript-eslint"
      ...tseslint.configs.stylistic, // "typescript-eslint"
      eslintConfigPrettier, // "eslint-config-prettier": Needs to be at the end
    ],
    plugins: {
      'react-hooks': reactHooks, // "eslint-plugin-react-hooks"
      'react-refresh': reactRefresh, // "eslint-plugin-react-refresh"
      'check-file': checkFile, // "eslint-plugin-check-file"
    },
    rules: {
      // "eslint": Prevent imports
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['../**', 'src/*'],
              message: "Use '@/' instead",
            },
            {
              group: ['@radix-ui/*'],
              message: "Use '@/components/shadcn-ui' instead.",
            },
          ],
          paths: [
            {
              name: 'next-themes',
              message: "Use '@/lib/shadcn/theme-provider' instead.",
            },
            {
              name: 'sonner',
              importNames: ['Toaster'],
              message: "Use '@/components/shadcn-ui/sonner' instead.",
            },
          ],
        },
      ],

      // "eslint-plugin-react-hooks"
      ...reactHooks.configs.recommended.rules,

      // "eslint-plugin-react-refresh"
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // "eslint-plugin-check-file": Force naming conventions
      'check-file/folder-naming-convention': [
        'error',
        { 'src/**/!(__tests__)': 'KEBAB_CASE' },
      ],
      'check-file/filename-naming-convention': [
        'error',
        { '**/*.{ts,tsx}': 'KEBAB_CASE' },
        { ignoreMiddleExtensions: true },
      ],
    },
  },
);
