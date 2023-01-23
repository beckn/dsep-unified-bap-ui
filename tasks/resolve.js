const path = require('path');

const alias = {
  src: path.resolve(__dirname, '../src/'),
};

module.exports = {
  alias,
  root: [path.resolve(__dirname, '..')],
  extensions: ['.js', '.ios.js', '.ts', '.tsx', '.android.js'],
};
