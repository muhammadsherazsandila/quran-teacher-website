import type { Metadata } from "next";

const SITE_URL = "https://aljameelacademy.com";
const SITE_NAME = "Al Jameel Online Quran Academy";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Learn Quran Online | Al Jameel Online Quran Academy",
    template: "%s | Al Jameel Online Quran Academy",
  },
  description:
    "Learn Quran online with Al Jameel Online Quran Academy. Expert female teacher offering 1-on-1 classes for kids & adults. Noorani Qaida, Tajweed, Memorization & Islamic Studies. Book your free trial today!",
  keywords: [
    "al jameel quran academy",
    "al jameel online quran academy",
    "Online Quran Teacher",
    "Learn Quran Online",
    "Quran Tutor",
    "Online Quran Classes",
    "Tajweed Classes",
    "Noorani Qaida Online",
    "Quran Memorization",
    "Hifz Online",
    "Islamic Studies Online",
    "Quran Teacher for Kids",
    "Quran Teacher for Adults",
    "Best Online Quran Teacher",
    "One on One Quran Classes",
    "Quran Classes USA",
    "Quran Classes UK",
    "Quran Classes Canada",
    "Quran Classes Australia",
  ],
  authors: [{ name: "Al Jameel Online Quran Academy" }],
  creator: "Al Jameel Online Quran Academy",
  openGraph: {
    title: "Learn Quran Online | Al Jameel Online Quran Academy",
    description:
      "1-on-1 online Quran classes with our expert female teacher at Al Jameel Online Quran Academy. Noorani Qaida, Tajweed, Memorization & Islamic Studies. Book your free trial!",
    url: SITE_URL,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Al Jameel Online Quran Academy",
      },
    ],
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn Quran Online | Al Jameel Online Quran Academy",
    description:
      "1-on-1 online Quran classes with our expert female teacher. Book your free trial today!",
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
  alternates: {
    canonical: SITE_URL,
  },
};

export function generatePageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: `${SITE_URL}${path}`,
    },
    twitter: {
      title: `${title} | ${SITE_NAME}`,
      description,
    },
    alternates: {
      canonical: `${SITE_URL}${path}`,
    },
  };
}
