import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";
import createMDX from "@next/mdx";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});
const nextConfig: NextConfig = bundleAnalyzer({
  /* config options here */
  eslint: {
    dirs: ["src"],
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
});

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);
