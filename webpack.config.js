const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')

const paths = {
  src: path.join(__dirname, 'src'),
  dev: path.join(__dirname, 'dev'),
  build: path.join(__dirname, 'build'),
}

const common = {
  context: paths.src,
  entry: './js',
  output: {
    filename: 'app.js',
    publicPath: '/'
  },
  resolve: {
    extensions: [ '.js' ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: paths.src,
        use: [
          { loader: 'babel-loader', options: { cacheDirectory: true } }
        ]
      }
    ]
  }
}

if (process.env.npm_lifecycle_event === 'bundle:dev') {
  module.exports = merge(common, {
    devtool: 'cheap-module-source-map',
    devServer: {
      historyApiFallback: true,
      publicPath: '/',
      contentBase: paths.dev,
      port: 3000,
      hot: true,
      disableHostCheck: true,
      host: '0.0.0.0',
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      })
    ],
    module: {
      rules: [
        { test: /\.jsx?$/, include: paths.src, enforce: 'pre', use: [{ loader: 'eslint-loader', options: { emitWarning: true } }] },
      ]
    }
  })
}

if (process.env.npm_lifecycle_event === 'bundle:build') {
  module.exports = merge(common, {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        mangle: true,
        compress: {
          warnings: false,
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          screw_ie8: true
        },
        output: {
          comments: false,
        },
        exclude: [/\.min\.js$/gi]
      }),
      new webpack.LoaderOptionsPlugin({ minimize: true }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
      })
    ],
    output: { path: paths.build },
    module: {
      rules: [
        { test: /\.jsx?$/, include: paths.src, enforce: 'pre', use: [{ loader: 'eslint-loader', options: { emitWarning: true } }] }
      ]
    }
  })
}
