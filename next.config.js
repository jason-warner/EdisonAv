module.exports = {
    webpack(config, options) {
      const { isServer } = options;
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        exclude: config.exclude,
        use: [
          {
            loader: require.resolve('file-loader')
          },
        ],
      });
  
      return config;
    },
  };