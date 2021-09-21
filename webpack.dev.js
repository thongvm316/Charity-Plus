const path = require('path')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')

const plugins = [
  new CleanWebpackPlugin(),
  new LodashModuleReplacementPlugin(),
  new MomentLocalesPlugin(),
  new HtmlWebpackPlugin({
    template: './src/index.html',
  }),
]

if (process.env.SERVE) {
  plugins.push(new ReactRefreshWebpackPlugin())
} // handle err when build-dev, cuz ReactRefreshWebpackPlugin not work when build-dev

module.exports = merge(common, {
  mode: 'development',
  target: 'web',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'static/js/[name].js',

    publicPath: '/',
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/]((react).*)[\\/]/,
          name: 'react',
          chunks: 'all',
        },
        commons: {
          test: /[\\/]node_modules[\\/]((?!react).*)/,
          name: 'common',
          chunks: 'all',
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },

  devServer: {
    contentBase: path.resolve(__dirname, './build'),
    hot: true,
    historyApiFallback: true,
    compress: true,
  },

  plugins: plugins,
})
