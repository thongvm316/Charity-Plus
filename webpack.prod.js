const path = require('path')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')
const isAnalyze = typeof process.env.BUNDLE_ANALYZE !== 'undefined'

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')
const WebpackBundleAnalyzer =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const plugins = [
  new CleanWebpackPlugin(),
  new LodashModuleReplacementPlugin(),
  new MomentLocalesPlugin(),
  new MiniCssExtractPlugin({
    filename: ({ chunk }) =>
      `static/css/${
        chunk.name === 'bundle' ? 'style' : chunk.name
      }.[contenthash].css`,
  }),
  new HtmlWebpackPlugin({
    template: './src/index.html',
  }),
]

if (isAnalyze) {
  plugins.push(new WebpackBundleAnalyzer())
}

module.exports = merge(common, {
  mode: 'production',
  target: 'browserslist',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'static/js/[name].[contenthash].js',
    assetModuleFilename: 'static/media/[hash][ext][query]',
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
        styles: {
          name: 'common',
          test: /index\.(s[ac]|c)ss$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },

  plugins: plugins,
})
