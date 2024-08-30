const nextConfig = {
  reactStrictMode: false,
  // Defines custom URL rewrites
  rewrites: async () => [
    {
      // Match any path, including optional trailing slash
      source: '/:path*{/}?',
      has: [
        {
          // Check if the request matches a specific host
          type: 'host',
          value: '(?<siteHost>.*)', // Captur the host value as 'siteHost' (f.ex: <siteHost>.shopy.ws)
        },
      ],
      // Rewrites the URL to include the host and the original path
      destination: '/site/:siteHost/:path*',
    },
  ],
};

// Exports the Next.js configuration
module.exports = nextConfig;
