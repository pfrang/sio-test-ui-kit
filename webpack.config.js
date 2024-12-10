module.exports = {
  // Other configuration options...
  module: {
    rules: [
      // Other rules...
      {
        test: /\.d\.ts$/,
        use: 'ignore-loader'
      }
    ]
  }
};
