const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  appAssets: resolveApp('src/assets'), // For images and other assets
  appBuild: resolveApp('build'), // Prod built files end up here
  appConfig: resolveApp('config'), // App config files
  appHtml: resolveApp('src/index.html'),
  appIndexJs: resolveApp('src/index.jsx'), // Main entry point
  appSrc: resolveApp('src'), // App source
};