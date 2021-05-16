const ThreadsPlugin = require('threads-plugin');

const webpackExternals = {
  'better-sqlite3': 'commonjs better-sqlite3',
  'tiny-worker': 'tiny-worker',
  'node-pre-gyp': 'commonjs2 node-pre-gyp'
}

module.exports = {
  pluginOptions: {
    electronBuilder: {
      externals: ['better-sqlite3', 'node-pre-gyp'],
      nodeIntegration: true,
    },
  },
  configureWebpack: {
    externals: webpackExternals,
    plugins: [
      new ThreadsPlugin({ globalObject: 'self', target: 'electron-node-worker', externals: webpackExternals })
    ]
  }

}
