const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = (env = {}) => {
  const mode = env.production ? 'production' : 'development';
  // const apiUrl = env.production
  //   ? 'https://xxx.cloudfunctions.net'
  //   : 'http://localhost:5001/xxx/us-central1';

  return {
    mode,
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: ""
    },
    plugins: [
      new InjectManifest({
        swSrc: "./src/src-sw.js",
        swDest: "sw.js"
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index1.html'),
        filename: 'index.html',
      }),
      new CopyWebpackPlugin({
        patterns: [
            { from: 'public' }
        ]
      }),
      new WebpackPwaManifest({
        start_url: "/",
        name: 'Just Another Text Editor',
        short_name: 'J.A.T.E',
        description: 'Takes notes with JavaScript syntax highlighting!',
        background_color: '#225ca3',
        theme_color: '#225ca3',
        display: "standalone",
        // crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
        icons: [
          // {
          //   src: path.resolve('public/favicon.ico'),
          //   sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
          // },
          {
            src: path.resolve('favicon.ico'),
            size: '48x48' // you can also use the specifications pattern
          },
          {
            src: path.resolve('public/icon_96x96.png'),
            size: '96x96' // you can also use the specifications pattern
          },
          {
            src: path.resolve('public/icon_192x192.png'),
            size: '192x192' // you can also use the specifications pattern
          },
        ],
      }) 
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          use: ['babel-loader']
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
      ],
    },
  };
};

