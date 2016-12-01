/* jshint node: true */
'use strict';
var postcssNested = require('postcss-nested');
module.exports = {
  name: 'css-assets',
  options: {
    cssModules: {
      plugins: {
        before: [
          postcssNested
        ],
        after: []
      }
    }
  }
};
