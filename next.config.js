/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // distDir: "build",
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  trailingSlash: true,
  // output: "export",
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/7Jt3P2CxEH",
        permanent: true,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
