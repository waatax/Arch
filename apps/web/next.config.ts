import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isGithubActions ? "/Arch" : "",
  env: { NEXT_PUBLIC_BASE_PATH: isGithubActions ? "/Arch" : "" },
};

export default nextConfig;
