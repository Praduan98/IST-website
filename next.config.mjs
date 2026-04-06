/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    const destination = "/services/ai-powered-gtm-strategy"
    const subPages = [
      "revenue-data-analytics",
      "dashboard-development",
      "attribution-modeling",
      "predictive-forecasting",
      "user-experience-analysis",
      "front-end-development",
    ]
    return [
      {
        source: "/services/data-analytics-reporting",
        destination,
        permanent: true,
      },
      ...subPages.map((slug) => ({
        source: `/services/data-analytics-reporting/${slug}`,
        destination,
        permanent: true,
      })),
    ]
  },
}

export default nextConfig
