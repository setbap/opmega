/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "OptimismDash",
  titleTemplate: "%s | Business Intelligence Dashboard for optimism.io",
  defaultTitle:
    "OptimismDash | Business Intelligence Dashboard for optimism.io ",
  description:
    "Best Business Intelligence Dashboard for optimism.io by Flipside Crypto and Setbap ",
  canonical: "https://OptimismDash.vercel.app/",
  openGraph: {
    url: "https://OptimismDash.vercel.app/",
    title: "OptimismDash",
    description:
      "Best Business Intelligence Dashboard for optimism.io by Flipside Crypto and Setbap ",
    images: [
      {
        url: "https://og-image.sznm.dev/**OptimismDash**.vercel.app.png?theme=dark&md=1&fontSize=125px",
        alt: "OptimismDash by Flipside Crypto and Setbap",
      },
    ],
    site_name: "OptimismDash",
  },
  twitter: {
    handle: "@flipsidecrypto",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
