import { Metadata } from "next"

export const siteConfig = {
  name: "Audemation - Smart Property Management with Local Insights",
  description: "Revolutionise property management with AI-powered automation. Get local area expertise and live weather updates. Try our premium features free for one property.",
  url: "https://audemation.com",
  ogImage: "https://audemation.com/og.jpg",
  links: {
    twitter: "https://twitter.com/audemation",
  },
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "property management",
    "AI chatbot",
    "automation",
    "local area guide",
    "property automation",
    "smart property management",
    "AI property assistant",
    "property management automation",
    "local insights",
    "weather updates",
    "property management software",
    "UK property management",
    "automated guest communication",
    "property management solution",
    "AI-powered property management"
  ],
  authors: [
    {
      name: "Audemation",
      url: siteConfig.url,
    },
  ],
  creator: "Audemation",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@audemation",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
} 