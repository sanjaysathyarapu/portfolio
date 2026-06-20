/** @type {import('next').NextConfig} */
const nextConfig = {
  // OneDrive on Windows can lock files and hang the dev file watcher.
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

export default nextConfig;
