require('./pretty-errors')
const webpack = require('webpack')
const FriendlyErrorPlugin = require('friendly-errors-webpack-plugin')
const DevServer = require('webpack-dev-server')
const configs = require('./webpack.config')
const spawnedServer = configs.spawnedServer
const compiler = webpack(configs)
compiler.apply(new FriendlyErrorPlugin())
new DevServer(compiler, {
  quiet: true,
  inline: true,
  overlay: true,
  contentBase: false,
  stats: 'errors-only',
  clientLogLevel: 'error',
  watchOptions: { ignored: [/node_modules/] },
  proxy: {
    '**': {
      logLevel: 'silent',
      target: 'http://localhost:8081',
      onError: (e, req, res) => {
        // Automatically retry when server is restarting.
        if (spawnedServer.listening) return
        res.writeHead(302, { location: req.url })
        spawnedServer.once('listening', () => res.end())
      }
    }
  }
}).listen(8080, () => process.stdout.write('server: Started at `http://localhost:8080`.'))
spawnedServer.once('listening', () => process.stdout.write('\n'))
