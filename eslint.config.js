// Flat config for ESLint v9 with Angular 20 (no type-aware yet).
// Safe starter: runs on TS + templates, avoids project-based parser errors.

const tseslint = require('typescript-eslint');
const angular = require('@angular-eslint/eslint-plugin');
const angularTemplate = require('@angular-eslint/eslint-plugin-template');
const templateParser = require('@angular-eslint/template-parser');

const IGNORES = ['dist/**', 'node_modules/**', '.angular/**', 'coverage/**', '**/*.min.js'];

module.exports = [
  // Ignore build artifacts
  { ignores: IGNORES },

  // ---------- TypeScript rules (no type-aware) ----------
  ...tseslint.configs.recommended.map((cfg) => ({
    ...cfg,
    files: ['**/*.ts'],
    languageOptions: {
      ...cfg.languageOptions,
      ecmaVersion: 'latest',
      sourceType: 'module',
      // no parserOptions.project here ⇒ no type-aware mode
    },
    plugins: {
      ...cfg.plugins,
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      ...cfg.rules,
      // Practical TS rules that don't require type info
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'no-console': 'off',
    },
  })),

  // Angular TS best practices
  {
    files: ['**/*.ts'],
    plugins: { '@angular-eslint': angular },
    rules: {
      '@angular-eslint/directive-selector': ['error', { type: 'attribute', prefix: 'arc', style: 'camelCase' }],
      '@angular-eslint/component-selector': ['error', { type: 'element', prefix: 'arc', style: 'kebab-case' }],
      '@angular-eslint/component-class-suffix': 'error',
      '@angular-eslint/contextual-decorator': 'warn',
      '@angular-eslint/prefer-on-push-component-change-detection': 'warn',
      '@angular-eslint/no-empty-lifecycle-method': 'warn',
    },
  },

  // ---------- Angular templates (.html) ----------
  {
    files: ['**/*.html'],
    languageOptions: { parser: templateParser },
    plugins: { '@angular-eslint/template': angularTemplate },
    rules: {
      '@angular-eslint/template/banana-in-box': 'error',
      '@angular-eslint/template/eqeqeq': 'error',
      '@angular-eslint/template/no-negated-async': 'warn',
      '@angular-eslint/template/use-track-by-function': 'warn',
      '@angular-eslint/template/button-has-type': 'warn',
    },
  },

  // ---------- Tests ----------
  {
    files: ['**/*.spec.ts'],
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
];
