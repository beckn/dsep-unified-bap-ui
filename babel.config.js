const resolver = require('./tasks/resolve.js');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/transform-flow-strip-types',
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    ['@babel/plugin-proposal-class-properties', {loose: true}],
    ['@babel/plugin-transform-runtime', {}],
    ['module-resolver', resolver],
  ],
};
