const SITE_URL = "https://aljameelonlinequranacademy.com";
const TEACHER_NAME = "Al Jameel Online Quran Academy";

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Online Quran Teacher at Al Jameel Academy",
    jobTitle: "Quran Teacher",
    gender: "Female",
    description:
      "Experienced and certified online Quran teacher offering personalized 1-on-1 Quran classes for students of all ages worldwide. Specializing in Noorani Qaida, Quran Reading, Tajweed, Memorization, and Islamic Studies.",
    url: SITE_URL,
    knowsLanguage: ["English", "Urdu", "Arabic"],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Ijazah in Quran Recitation with Tajweed",
    },
    sameAs: [],
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Al Jameel Online Quran Academy",
    url: SITE_URL,
    description:
      "Al Jameel Online Quran Academy offers expert online Quran teaching services with 1-on-1 classes for students worldwide.",
    areaServed: [
      "United States",
      "United Kingdom",
      "Canada",
      "Australia",
      "UAE",
      "Pakistan",
    ],
    serviceType: "Online Quran Classes",
  };
}

export function generateCourseSchema(course: {
  title: string;
  description: string;
  level: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    provider: {
      "@type": "EducationalOrganization",
      name: "Al Jameel Online Quran Academy",
      url: SITE_URL,
    },
    educationalLevel: course.level,
    isAccessibleForFree: false,
    offers: {
      "@type": "Offer",
      category: "Online Quran Course",
      availability: "https://schema.org/InStock",
    },
    deliveryMode: "https://schema.org/OnlineEventAttendanceMode",
    inLanguage: "en",
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
