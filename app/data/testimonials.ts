export interface Testimonial {
  id: string;
  name: string;
  country: string;
  countryCode: string;
  rating: number;
  text: string;
  type: "parent" | "student" | "adult";
  studentAge?: string;
  course?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Ahmed",
    country: "United States",
    countryCode: "US",
    rating: 5,
    text: "My children have been learning Quran for over a year now, and the progress has been remarkable. The teacher is incredibly patient and makes every lesson engaging. My kids actually look forward to their Quran classes!",
    type: "parent",
    studentAge: "8 & 10 years",
    course: "Quran Reading",
  },
  {
    id: "2",
    name: "Muhammad Ali",
    country: "United Kingdom",
    countryCode: "GB",
    rating: 5,
    text: "As an adult learner who reverted to Islam, I was nervous about starting Quran lessons. The teacher made me feel completely comfortable and tailored the lessons to my pace. I can now read the Quran with basic Tajweed!",
    type: "adult",
    course: "Noorani Qaida",
  },
  {
    id: "3",
    name: "Fatima Hassan",
    country: "Canada",
    countryCode: "CA",
    rating: 5,
    text: "The Tajweed course has transformed my recitation. The teacher explains complex rules in such a simple way. I now recite with much more confidence and beauty. Highly recommended for anyone serious about proper recitation.",
    type: "student",
    course: "Quran with Tajweed",
  },
  {
    id: "4",
    name: "Aisha Khan",
    country: "Australia",
    countryCode: "AU",
    rating: 5,
    text: "Finding a qualified Quran teacher online seemed difficult until we found this teacher. My daughter has memorized 5 Juz in just one year. The structured approach and regular revision schedule really works!",
    type: "parent",
    studentAge: "12 years",
    course: "Quran Memorization",
  },
  {
    id: "5",
    name: "Omar Yusuf",
    country: "UAE",
    countryCode: "AE",
    rating: 5,
    text: "I've tried several online Quran teachers before, but none compare to this experience. The personalized attention, flexible scheduling, and genuine care for student progress make this truly exceptional.",
    type: "adult",
    course: "Quran Reading",
  },
  {
    id: "6",
    name: "Maryam Abdullah",
    country: "United States",
    countryCode: "US",
    rating: 5,
    text: "Both my son and daughter take classes. The Islamic Studies course alongside Quran reading has given them a comprehensive understanding. The teacher connects beautifully with children of all ages.",
    type: "parent",
    studentAge: "6 & 9 years",
    course: "Islamic Studies",
  },
  {
    id: "7",
    name: "Ibrahim Malik",
    country: "United Kingdom",
    countryCode: "GB",
    rating: 5,
    text: "Started with Noorani Qaida and now reading the Quran fluently. The journey has been incredible. The teacher's dedication and expertise in Tajweed is outstanding. May Allah reward him abundantly.",
    type: "student",
    course: "Quran Reading",
  },
  {
    id: "8",
    name: "Zainab Hussain",
    country: "Pakistan",
    countryCode: "PK",
    rating: 5,
    text: "Even though we're in Pakistan, we chose online classes for the convenience and quality. The one-on-one attention my children receive is far better than any local Quran center. Absolutely worth it!",
    type: "parent",
    studentAge: "7 & 11 years",
    course: "Quran with Tajweed",
  },
];
