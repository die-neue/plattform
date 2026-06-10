import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Das Preview-Scaffold hat eine ESLint-Flat-Config erzeugt, die nicht zu Next 15.3
  // passt. Damit blockiert Linting den Build nicht.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
