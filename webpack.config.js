module.exports = {
  resolve: {
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      buffer: require.resolve('buffer'),
      stream: require.resolve('stream-browserify'),
      assert: require.resolve('assert'),
      os: require.resolve('os-browserify'),
    },
  },
};
