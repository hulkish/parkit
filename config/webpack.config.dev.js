var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var findCacheDir = require('find-cache-dir');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
var InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
var WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
var getClientEnvironment = require('./env');
var paths = require('./paths');
var publicPath = '/';
var publicUrl = '';
var env = getClientEnvironment(publicUrl);

module.exports = {
  devtool: 'eval',
  entry: [
    require.resolve('react-dev-utils/webpackHotDevClient'),
    require.resolve('./polyfills'),
    require.resolve('../src/reactoron'),
    paths.appIndexJs
  ],
  output: {
    path: paths.appBuild,
    pathinfo: true,
    filename: 'static/js/bundle.js',
    publicPath: publicPath
  },
  resolve: {
    root: paths.nodePaths.concat(paths.appSrc),
    extensions: ['', '.js', '.json', '.jsx'],
    alias: {
      'react-native': 'react-native-web'
    }
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint',
        include: paths.appSrc,
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        include: paths.appSrc,
        loader: 'babel',
        query: {
          cacheDirectory: findCacheDir({
            name: 'react-scripts'
          })
        }
      },
      {
        test: /\.scss$/,
        include: [].concat([
          paths.appSrc,
          paths.sassPaths
        ]),
        loaders: [
          'style',
          'css?localIdentName=[name]__[local]__[hash:base64:8]&camelCase&modules&sourceMap&importLoaders=2',
          'postcss?sourceMap',
          // 'resolve-url?sourceMap',
          'sass?sourceMap'
        ]
      },
      {
        test: /\.css$/,
        loader: 'style!css?sourceMap&importLoaders=1!postcss?sourceMap'
        // loader: 'style!css?sourceMap&importLoaders=1!postcss?sourceMap!resolve-url?sourceMap'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file',
        query: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }
    ]
  },

  postcss: function() {
    return [
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
        ]
      }),
    ];
  },
  plugins: [
    new InterpolateHtmlPlugin({
      PUBLIC_URL: publicUrl
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
    new webpack.DefinePlugin(env),
    new webpack.HotModuleReplacementPlugin(),
    new CaseSensitivePathsPlugin(),
    new WatchMissingNodeModulesPlugin(paths.appNodeModules)
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
