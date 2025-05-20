const site_url =
  process.env.NEXT_PUBLIC_APP_URL || "https://syed-k-portfolio.vercel.app/";

export const siteConfig = {
  name: "Syed Khizar | Next.js Developer",
  description:
    "Personal portfolio website showcasing my projects and skills as a Next.js developer",
  url: site_url,
  ogImage: `${site_url}/_static/og-image.png`,
  links: {
    twitter: "https://twitter.com/syed_khizar",
    github: "https://github.com/syed-khizar-k/portfolio",
  },
  mailSupport: "khizarsyed4294@gmail.com",
};
