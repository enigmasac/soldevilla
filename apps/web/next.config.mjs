/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  transpilePackages: ["@soldevilla/shared"],
};

export default nextConfig;
