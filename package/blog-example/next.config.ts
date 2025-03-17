import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";
import createMdx from "@next/mdx";
import rehypeMDXImportMedia from "rehype-mdx-import-media";


const nextConfig = (phase: string) => {
  const withMDX = createMdx({
    extension: /\.mdx?$/,
    options: {
      // optional remark and rehype plugins
      remarkPlugins: [],
      rehypePlugins: [rehypeMDXImportMedia],
    },
  });

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
    pageExtensions: ["js", "jsx", "ts", "tsx", "mdx", "md"],
    eslint: {
      ignoreDuringBuilds: true,
    },
    images: {
      // file formats for next/image
      formats: ["image/avif", "image/webp"],
      deviceSizes: [384, 640, 750, 828, 1080, 1200, 1920, 2176, 3840],
    },
  };
  return withMDX(nextConfigOptions);
};

export default nextConfig;
