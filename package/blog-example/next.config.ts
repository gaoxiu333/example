import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const nextConfig = (phase: string) => {
  switch (phase) {
    case PHASE_DEVELOPMENT_SERVER:
      console.log("正在运行开发环境");
      break;
    default:
      console.log("phase", phase);
  }
  const nextConfigOptions: NextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    experimental: {
      typedRoutes: true,
    },
  };
  return nextConfigOptions;
};

export default nextConfig;
