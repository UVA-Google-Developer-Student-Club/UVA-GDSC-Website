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
  output: "export",
};

module.exports = nextConfig;
