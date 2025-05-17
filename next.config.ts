import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        // kamu bisa atur semua route API, atau hanya route tertentu
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin",      value: "*"        },
          { key: "Access-Control-Allow-Methods",     value: "GET,POST,PUT,DELETE,OPTIONS" },
          { key: "Access-Control-Allow-Headers",     value: "*"        },
          { key: "Access-Control-Allow-Credentials", value: "true"     },
        ],
      },
    ];
  },
};

export default nextConfig;
