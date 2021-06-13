module.exports = {
  experimental: {
    reactMode: "legacy",
  },
  middleware: [
    (req, res, next) => {
      res.blitzCtx.req = req
      res.blitzCtx.res = res
      return next()
    },
  ],
  async redirects() {
    return [
      { source: "/pebble-tracker", destination: "/pebble" },
      { source: "/discord", destination: "https://discord.gg/KTHUKBBW87" },
      { source: "/devdiscord", destination: "https://discord.gg/q5eYde2CU7" },
      {
        source: "/white-paper",
        destination: "http://files.iotex.io/publications/IoTeX_Whitepaper_1.5_EN.pdf",
      },
      {
        source: "/reference-architecture",
        destination: "https://iotex.b-cdn.net/docs/reference-architecture.pdf",
      },
      {
        source: "/images/:match*",
        destination:
          "https://github.iotex.io/iotexproject/iotex-website/main/public/images/:match*",
      },
      {
        source: "/exchanges",
        destination: "https://ecosystem.iotex.io/exchanges-wallets",
      },
    ]
  },
  /*
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config
    return config
  },
  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config
  },
  */
}
