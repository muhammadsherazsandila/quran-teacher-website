export interface Course {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  features: string[];
  suitableFor: string[];
  duration: string;
  level: string;
}

export const courses: Course[] = [
  {
    id: "noorani-qaida",
    title: "Noorani Qaida",
    description:
      "Master the Arabic alphabet and basic pronunciation rules. Perfect for absolute beginners starting their Quran learning journey.",
    longDescription:
      "Noorani Qaida is the foundational course designed for absolute beginners. This course covers the Arabic alphabet, letter recognition, proper pronunciation (Makharij), basic joining rules, and introductory Tajweed concepts. Students will build a strong foundation that prepares them for fluent Quran reading.",
    icon: "BookOpen",
    features: [
      "Arabic alphabet recognition & pronunciation",
      "Letter joining rules (Huroof Muraqqabaat)",
      "Basic Harakat (Fatha, Kasra, Damma)",
      "Tanween & Sukoon rules",
      "Introduction to Madd (elongation)",
      "Practice exercises with audio feedback",
    ],
    suitableFor: ["Complete beginners", "Children (age 4+)", "Adults new to Arabic", "Revert Muslims"],
    duration: "2-4 months",
    level: "Beginner",
  },
  {
    id: "quran-reading",
    title: "Quran Reading",
    description:
      "Learn to read the Holy Quran fluently with proper pronunciation. Build confidence in reading any Surah independently.",
    longDescription:
      "This course focuses on developing fluent Quran reading skills. After completing Noorani Qaida, students transition to reading directly from the Mushaf (Quran). The course emphasizes accuracy, fluency, and building the confidence to read independently.",
    icon: "BookOpenCheck",
    features: [
      "Fluent reading from the Mushaf",
      "Surah-by-surah progression",
      "Pronunciation correction in real-time",
      "Reading speed development",
      "Recognition of common Quranic words",
      "Independent reading skills",
    ],
    suitableFor: ["Students who completed Noorani Qaida", "Those who can read but need improvement", "All age groups"],
    duration: "6-12 months",
    level: "Elementary",
  },
  {
    id: "quran-tajweed",
    title: "Quran with Tajweed",
    description:
      "Perfect your Quran recitation with comprehensive Tajweed rules. Learn to recite beautifully as it was revealed.",
    longDescription:
      "Tajweed is the science of reciting the Quran correctly. This course covers all essential Tajweed rules including Noon Sakinah, Meem Sakinah, Qalqalah, Madd rules, and more. Students will learn to recite the Quran with the beauty and precision that it deserves.",
    icon: "Mic",
    features: [
      "Complete Tajweed rules & application",
      "Noon Sakinah & Tanween rules",
      "Meem Sakinah rules",
      "Types of Madd (elongation)",
      "Qalqalah & emphasis letters",
      "Beautiful recitation techniques",
    ],
    suitableFor: ["Intermediate readers", "Those wanting to perfect recitation", "Students preparing for Ijazah"],
    duration: "6-18 months",
    level: "Intermediate",
  },
  {
    id: "quran-memorization",
    title: "Quran Memorization",
    description:
      "Memorize the Holy Quran with a structured Hifz program. Personalized memorization plans with regular revision.",
    longDescription:
      "Our Hifz program offers a structured and personalized approach to Quran memorization. Using proven memorization techniques, students will memorize new portions daily while maintaining previously memorized sections through regular revision (Muraja'ah).",
    icon: "Brain",
    features: [
      "Personalized memorization schedule",
      "Daily new memorization (Sabaq)",
      "Regular revision (Muraja'ah)",
      "Memorization techniques & tips",
      "Progress tracking & milestones",
      "Flexibility for full or partial Hifz",
    ],
    suitableFor: ["Students with fluent reading", "Dedicated learners of all ages", "Those seeking partial or full Hifz"],
    duration: "2-5 years (full Quran)",
    level: "Advanced",
  },
  {
    id: "islamic-studies",
    title: "Islamic Studies",
    description:
      "Comprehensive Islamic education covering core beliefs, Fiqh, Seerah, and daily Duas. Build a strong Islamic foundation.",
    longDescription:
      "This course provides a well-rounded Islamic education covering the fundamentals of Islam. Students will learn about the pillars of Islam, pillars of Iman, Prophet's Seerah, basic Fiqh, daily Duas, and Islamic etiquettes (Aadaab). The course is designed to nurture a love for Islam.",
    icon: "GraduationCap",
    features: [
      "Pillars of Islam & Iman",
      "Prophet Muhammad's (PBUH) Seerah",
      "Basic Fiqh (Islamic jurisprudence)",
      "Daily Duas & Adhkar",
      "Islamic etiquettes & manners",
      "Stories of the Prophets",
    ],
    suitableFor: ["Children & young learners", "New Muslims / Reverts", "Adults seeking foundational knowledge"],
    duration: "Ongoing",
    level: "All Levels",
  },
];
