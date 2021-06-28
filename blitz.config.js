module.exports = {
  experimental: {
    reactMode: "legacy",
    isomorphicResolverImports: true,
  },
  middleware: [
    (req, res, next) => {
      res.blitzCtx.req = req
      res.blitzCtx.res = res
      return next()
    },
  ],
  async rewrites() {
    return [
      {
        source: "/blog/:match*",
        destination: "https://blog.iotex.io/:match*",
      },
    ]
  },
  async redirects() {
    return [
      { source: "/pebble-tracker", destination: "/pebble", permanent: false },
      { source: "/discord", destination: "https://discord.gg/KTHUKBBW87", permanent: false },
      { source: "/devdiscord", destination: "https://discord.gg/q5eYde2CU7", permanent: false },
      {
        source: "/white-paper",
        destination: "http://files.iotex.io/publications/IoTeX_Whitepaper_1.5_EN.pdf",
        permanent: false,
      },
      {
        source: "/reference-architecture",
        destination: "https://iotex.b-cdn.net/docs/reference-architecture.pdf",
        permanent: false,
      },
      {
        source: "/images/:match*",
        destination:
          "https://github.iotex.io/iotexproject/iotex-website/main/public/images/:match*",
        permanent: false,
      },
      {
        source: "/exchanges",
        destination: "https://ecosystem.iotex.io/exchanges-wallets",
        permanent: false,
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
