const SITE_URL = "https://qurantutor.com";
const TEACHER_NAME = "Hafiz Muhammad";

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: TEACHER_NAME,
    jobTitle: "Online Quran Teacher",
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
    name: `${TEACHER_NAME} - Online Quran Teacher`,
    url: SITE_URL,
    description:
      "Personal online Quran teaching service offering 1-on-1 classes for students worldwide.",
    founder: {
      "@type": "Person",
      name: TEACHER_NAME,
    },
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
      "@type": "Person",
      name: TEACHER_NAME,
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
