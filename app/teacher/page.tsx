import { generatePageMetadata } from '@/app/lib/metadata';
import SectionHeading from '@/app/components/ui/SectionHeading';
import CTABanner from '@/app/components/ui/CTABanner';
import Link from 'next/link';
import { generatePersonSchema, generateBreadcrumbSchema } from '@/app/lib/structured-data';
import { Heart, Target, Mic, CheckCircle, Globe, Star } from 'lucide-react';

export const metadata = generatePageMetadata(
  'Our Teacher - Al Jameel Online Quran Academy',
  'Meet our dedicated, certified female Quran teacher with an Ijazah, passionate about helping students of all ages learn the Quran.',
  '/teacher'
);

export default function TeacherPage() {
  const personSchema = generatePersonSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Our Teacher', url: '/teacher' }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen">
        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-[#000a57] to-[#002874] text-white py-16 md:py-20 islamic-pattern">
          <div className="container-custom relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">Our Teacher</h1>
            <div className="flex items-center text-sm md:text-base opacity-90">
              <Link href="/" className="hover:underline">Home</Link>
              <span className="mx-2">&gt;</span>
              <span>Our Teacher</span>
            </div>
          </div>
        </section>

        {/* Teacher Profile */}
        <section className="py-20 bg-white">
          <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl bg-[#002874] p-8 text-white min-h-[400px] flex flex-col justify-end shadow-xl overflow-hidden">
              <div className="absolute inset-0 opacity-20 islamic-pattern"></div>
              {/* Decorative element for female teacher */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
                <Star className="w-64 h-64" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-200 mb-2 font-poppins">Certified Quran Teacher</h3>
                <p className="text-lg">Dedicated Female Instructor</p>
                <div className="mt-4 flex gap-4">
                  <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                    <p className="text-2xl font-bold">8+</p>
                    <p className="text-xs">Years Exp.</p>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                    <p className="text-2xl font-bold">500+</p>
                    <p className="text-xs">Students</p>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                    <p className="text-2xl font-bold">15+</p>
                    <p className="text-xs">Countries</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <SectionHeading title="Meet Our Teacher" centered={false} subtitle="A passionate educator dedicated to your success" />
              <div className="space-y-4 text-slate-700 mt-6 leading-relaxed">
                <p>
                  Our academy is proud to be led by a dedicated, certified female Quran teacher who is deeply passionate about helping students of all ages connect with the Holy Quran. With years of experience and formal Islamic education, she brings a wealth of knowledge to every session.
                </p>
                <p>
                  She holds an Ijazah in Quran Recitation, meaning her teaching chain traces back directly to the Prophet Muhammad (PBUH). Her extensive background in Islamic Studies and Arabic Language ensures that her students receive a comprehensive and authentic educational experience.
                </p>
                <p>
                  Fluent in English, Urdu, and proficient in Arabic, she creates a welcoming and inclusive environment for students from diverse backgrounds around the world. Her gentle approach and unwavering patience make her an exceptional guide on your Quranic journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Teaching Approach */}
        <section className="py-20 bg-slate-50">
          <div className="container-custom">
            <SectionHeading title="Teaching Approach" subtitle="How she nurtures her students" />
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-8 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-7 h-7 text-[#002874]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-poppins">Patience &amp; Care</h3>
                <p className="text-slate-600">
                  She creates a warm, nurturing environment where students feel comfortable. Her immense patience is especially beneficial for beginners and children.
                </p>
              </div>
              <div className="p-8 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-[#002874]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-poppins">Personalized Learning</h3>
                <p className="text-slate-600">
                  Understanding that every student is unique, she adapts her teaching pace and style to match individual learning capabilities and goals.
                </p>
              </div>
              <div className="p-8 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <Mic className="w-7 h-7 text-[#002874]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-poppins">Tajweed Excellence</h3>
                <p className="text-slate-600">
                  With her expert knowledge, she places a strong emphasis on correct pronunciation and Tajweed from the very first lesson.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Qualifications */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <SectionHeading title="Qualifications" subtitle="Her academic credentials" />
            <div className="max-w-3xl mx-auto mt-12 bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-slate-100">
              <ul className="space-y-6">
                {[
                  "Hafizah of the Quran",
                  "Ijazah in Quran Recitation (Hafs 'an 'Asim)",
                  "Degree in Islamic Studies & Arabic Language",
                  "8+ Years of Professional Teaching Experience",
                  "Certified Online Tutor for Non-Arabic Speakers"
                ].map((qual, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#002874] flex-shrink-0 mt-1" />
                    <span className="text-lg text-slate-700 font-medium">{qual}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Why Learn With Her */}
        <section className="py-20 bg-slate-50">
          <div className="container-custom">
            <SectionHeading title="Why Learn With Her?" subtitle="The benefits of her instruction" />
            <div className="max-w-4xl mx-auto mt-12 grid sm:grid-cols-2 gap-6">
              {[
                { title: "Comfortable for Sisters", desc: "A safe, modest, and completely comfortable learning environment for female students of all ages." },
                { title: "Great with Children", desc: "Her gentle demeanor and engaging methods make her highly effective at teaching young learners." },
                { title: "Patient Approach", desc: "She never rushes her students, ensuring they fully grasp each concept before moving forward." },
                { title: "Clear Communication", desc: "Her fluency in multiple languages guarantees clear explanations and seamless interaction." }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-lg text-slate-900 mb-2 font-poppins">{benefit.title}</h4>
                  <p className="text-slate-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Languages */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <SectionHeading title="Languages Spoken" subtitle="Communicating effectively with students" />
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              {[
                { lang: "English", level: "Fluent" },
                { lang: "Urdu", level: "Native" },
                { lang: "Arabic", level: "Proficient" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 bg-slate-50 px-8 py-5 rounded-xl shadow-sm border border-slate-100">
                  <Globe className="w-8 h-8 text-[#002874]" />
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 font-poppins">{item.lang}</h4>
                    <p className="text-slate-500 text-sm">{item.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner />
      </main>
    </>
  );
}
