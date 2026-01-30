import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev','192.168.0.103','192.168.0.107','localhost'],
};

export default nextConfig;
