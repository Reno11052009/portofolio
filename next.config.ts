import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    optimizePackageImports: ["@tabler/icons-react", "react-icons"],
  },
};

export default nextConfig;
