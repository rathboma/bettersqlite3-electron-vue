const ThreadsPlugin = require('threads-plugin');

module.exports = {
  pluginOptions: {
    electronBuilder: {
      externals: ['better-sqlite3'],
      nodeIntegration: true,
    },
  },
  configureWebpack: {
    externals: {
      'better-sqlite3': 'commonjs better-sqlite3'
    },
    plugins: [
      new ThreadsPlugin({ globalObject: 'self', target: 'electron-node-worker' })
    ]
  }

}