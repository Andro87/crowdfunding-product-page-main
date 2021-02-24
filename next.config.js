const config = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
module.exports = {
  ...config,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
