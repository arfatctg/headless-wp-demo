import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "steelblue-vulture-864814.hostingersite.com",
            },
        ],
    },
    experimental: {
        browsersListForSwc: true,
    },
};

export default nextConfig;
