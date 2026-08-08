import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isGithubActions ? "/Arch" : "",
  env: { NEXT_PUBLIC_BASE_PATH: isGithubActions ? "/Arch" : "" },
  turbopack: {}
};

export default withPWA(nextConfig);
