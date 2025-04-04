import { Metadata } from "next"

export const siteConfig = {
  name: "Audemation - Smart Property Management with Local Insights",
  description: "Transform your property management with our intelligent platform featuring local area knowledge, live weather updates, and 24/7 guest support. Try free for one property during beta - no credit card required.",
  url: "https://audemation.com",
  ogImage: "https://audemation.com/og-image.jpg",
  links: {
    twitter: "https://twitter.com/audemation",
    github: "https://github.com/audemation"
  }
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    "local area recommendations",
    "property area guide",
    "live weather updates",
    "local event information",
    "free property automation",
    "property management beta",
    "self-learning AI automation",
    "human-in-the-loop AI",
    "no-code property automation",
    "property management software",
    "UK property management",
    "automated guest messaging",
    "free trial automation",
    "beta testing program",
    "no credit card trial"
  ],
  authors: [{ name: "Audemation" }],
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
        alt: siteConfig.name
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@audemation"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    }
  }
} 