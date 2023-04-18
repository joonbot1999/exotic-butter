/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/', // This is the default value, you can ignore it
          outputPath: 'static/',
          name: '[name].[ext]',
          esModule: false,
        },
      },
    });
    return config;
  },
};
