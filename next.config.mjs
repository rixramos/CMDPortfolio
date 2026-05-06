
/** @type {import('next').NextConfig} */

const repo = "YOUR-REPOSITORY-NAME";

const nextConfig = {
  output: "export",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
};

export default nextConfig;
