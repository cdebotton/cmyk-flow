/* @flow */

import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const { PORT } = process.env;

if (!PORT) {
  throw new ReferenceError('process.env.PORT is undefined.');
}

const app = express();
const config = {
  devtool: 'cheap-eval-source-map',
  entry: [
    'react-hot-loader/patch',
    `webpack-hot-middleware/client?path=http://localhost:${PORT}/__webpack_hmr`,
    path.join(__dirname, '../libs/client/index.jsx'),
  ],
  output: {
    publicPath: `http://localhost:${PORT}/`,
    filename: 'bundle.js',
  },
  resolve: {
    modules: ['node_modules', 'libs'],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, '../libs'),
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              [
                'env',
                {
                  targets: {
                    browsers: ['last 2 versions'],
                  },
                  loose: true,
                  modules: false,
                },
              ],
              'stage-0',
              'react',
            ],
            plugins: ['react-hot-loader/babel', 'transform-flow-strip-types', 'transform-runtime'],
          },
        },
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()],
};

const compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    hot: true,
    historyApiFallback: true,
    publicPath: config.output.publicPath,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    stats: {
      colors: true,
      chunks: false,
    },
  }),
);

app.use(webpackHotMiddleware(compiler));

app.listen(PORT, (err) => {
  if (err) {
    process.stderr.write(err.toString());
    return;
  }

  process.stdout.write(`Listening on port ${PORT}.`);
});
