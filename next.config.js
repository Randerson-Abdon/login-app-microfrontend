/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    home: "home@http://localhost:3000/_next/static/chunks/remoteEntry.js",
  };
};
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "login",
        filename: "static/chunks/remoteEntry.js",
        remotes: remotes(options.isServer),
        exposes: {
          "./login": "./src/components/login/index.tsx",
        },
        /* extraOptions: {
          exposePages: true,
          automaticAsyncBoundary: true,
        }, */
      })
    );
    return config;
  },
};

module.exports = nextConfig;