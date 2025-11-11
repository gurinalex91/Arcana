module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    browsers: ['ChromeHeadlessNoSandbox'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-dev-shm-usage'],
      },
    },
    reporters: ['progress', 'kjhtml', 'coverage'],
    coverageReporter: { dir: 'coverage', reporters: [{ type: 'lcov' }, { type: 'text-summary' }] },
  });
};
