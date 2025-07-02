module.exports = {
  plugins: [
    require('postcss-url')({
      url: (asset: { url: string }) => `node_modules/atomic-library/public/${asset.url}`,
    }),
  ],
};
