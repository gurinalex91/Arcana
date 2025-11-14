// Minimal SCSS setup for a Angular app
module.exports = {
  extends: ['stylelint-config-standard-scss'],
  plugins: [],
  rules: {
    'color-hex-length': 'short',
    'alpha-value-notation': 'number',
    'selector-class-pattern': null, // Angular component-scoped classes can be free-form
    'scss/load-partial-extension': 'never',
    'scss/no-duplicate-dollar-variables': true,
  },
};
