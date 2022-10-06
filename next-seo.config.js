/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "opmega",
  titleTemplate: "%s | Business Intelligence Dashboard for NFTs on optimism.io",
  defaultTitle:
    "opmega | Business Intelligence Dashboard for NFTs on optimism.io ",
  description:
    "Best Business Intelligence Dashboard for NFTs on optimism.io by Flipside Crypto and Setbap ",
  canonical: "https://opmega.vercel.app/",
  openGraph: {
    url: "https://opmega.vercel.app/",
    title: "opmega",
    description:
      "Best Business Intelligence Dashboard for NFTs on optimism.io by Flipside Crypto and Setbap ",
    images: [
      {
        url: "https://og-image.sznm.dev/**opmega**.vercel.app.png?theme=dark&md=1&fontSize=125px",
        alt: "opmega by Flipside Crypto and Setbap",
      },
    ],
    site_name: "opmega",
  },
  twitter: {
    handle: "@flipsidecrypto",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
