import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  // Question shards are fetched only after a learner starts a session. Keeping
  // them out of the precache avoids downloading the entire bank on first visit.
  publicExcludes: ["!practice-data/shards/**/*.json"],
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
