const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    'md-icon': './md-icon.js',
    'md-icon-outlined': './md-icon-outlined.js',
    'md-icon-round': './md-icon-round.js',
    'md-icon-sharp': './md-icon-sharp.js',
    'md-icon-two-tone': './md-icon-two-tone.js',
    'offline': './test/offline.js',
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'test'),
  },
  watchOptions: {
    ignored: /node_modules/,
  },
};
