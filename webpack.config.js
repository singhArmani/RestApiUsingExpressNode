module.exports = {
  entry: './app.ts',
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  target: 'node',
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
};