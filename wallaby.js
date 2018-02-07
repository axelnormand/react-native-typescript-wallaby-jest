//
// Wallaby config reads tsconfig.json and jest.config.js out of the box
//

module.exports = function(wallaby) {
  return {
    files: [
      'src/**/*.ts?(x)',
      'src/**/*.js?(x)',
      'src/**/*.json',
      '!src/**/*.test.ts?(x)',
      'package.json',
      'tsconfig.json',
      'jest.config.js',
    ],
    tests: ['src/**/*.test.ts?(x)'],
    env: { type: 'node', runner: 'node' },
    testFramework: 'jest',
    // like ts-jest need to hoist jest.mock() so use babel after ts to js
    // https://github.com/wallabyjs/public/issues/1375
    preprocessors: {
      '**/*.js?(x)': file =>
        require('babel-core').transform(file.content, {
          sourceMap: true,
          filename: file.path,
          compact: false,
          babelrc: true,
        }),
    },
    debug: true,
    reportConsoleErrorAsError: true,
    lowCoverageThreshold: 80,
  };
};
