export default {
  title: "URL Shortener",
  titleTemplate: "%s | Slug",
  description: "A simple URL shortener.",
  defaultTitle: "slug",
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/img/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/img/apple-touch-icon-180x180.png",
      sizes: "180x180",
    },
    {
      rel: "apple-touch-icon",
      href: "/img/apple-touch-icon-152x152.png",
      sizes: "152x152",
    },
    {
      rel: "apple-touch-icon",
      href: "/img/apple-touch-icon-114x114.png",
      sizes: "114x114",
    },
    {
      rel: "manifest",
      href: "/manifest.json",
    },
    {
      rel: "preload",
      href: "/fonts/inter.woff2",
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
  ],
  openGraph: {
    site_name: "slug",
    url: "https://dlx.pw/",
    type: "website",
    locale: "en_IE",
    images: [
      {
        url: "/img/banner.jpg",
        width: 1920,
        height: 1080,
        type: "image/jpg",
      },
    ],
  },
};
