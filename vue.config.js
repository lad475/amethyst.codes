const path = require('path');
module.exports = {
  publicPath: '/',
  pluginOptions: {
    'style-resources-loader': {
      patterns: [
      	path.resolve(__dirname, 'src/assets/styles/*.scss'),
      ]
    }
  }
}