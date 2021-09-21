const path = require('path')

module.exports = {
  entry: {
    bundle: './src/index.jsx',
    // bundle: [babel/polyfills, './src/index.jsx'], // * should revise babel/polyfills as well
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset',
        generator: {
          filename: 'static/media/[hash][ext][query]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/fonts/[hash][ext][query]',
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },

  devtool: 'source-map',

  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      views: path.resolve(__dirname, 'src/views'),
      assets: path.resolve(__dirname, 'src/assets'),
      layout: path.resolve(__dirname, 'src/layout'),
    },
    extensions: ['.js', '.jsx'],
  },
}
