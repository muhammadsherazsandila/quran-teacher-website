import type { Metadata } from "next";

const SITE_URL = "https://qurantutor.com";
const SITE_NAME = "Hafiz Muhammad - Online Quran Teacher";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Learn Quran Online | Personal Quran Teacher - Hafiz Muhammad",
    template: "%s | Hafiz Muhammad - Online Quran Teacher",
  },
  description:
    "Learn Quran online with a certified personal Quran teacher. 1-on-1 classes for kids & adults. Noorani Qaida, Tajweed, Memorization & Islamic Studies. Book your free trial today!",
  keywords: [
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
  authors: [{ name: "Hafiz Muhammad" }],
  creator: "Hafiz Muhammad",
  openGraph: {
    title: "Learn Quran Online | Personal Quran Teacher - Hafiz Muhammad",
    description:
      "1-on-1 online Quran classes with a certified teacher. Noorani Qaida, Tajweed, Memorization & Islamic Studies. Students from 15+ countries. Book your free trial!",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn Quran Online | Personal Quran Teacher",
    description:
      "1-on-1 online Quran classes with a certified teacher. Book your free trial today!",
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
  path: string
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
