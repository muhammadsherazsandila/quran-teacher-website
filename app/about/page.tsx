import { generatePageMetadata } from '@/app/lib/metadata';
import SectionHeading from '@/app/components/ui/SectionHeading';
import CTABanner from '@/app/components/ui/CTABanner';
import Link from 'next/link';
import { generatePersonSchema, generateBreadcrumbSchema } from '@/app/lib/structured-data';
import { Heart, Target, Mic, CheckCircle, Globe } from 'lucide-react';


export const metadata = generatePageMetadata(
  'About Me',
  'Learn about Hafiz Muhammad - a certified online Quran teacher with 8+ years of experience teaching students from 15+ countries.',
  '/about'
);

export default function AboutPage() {
  const personSchema = generatePersonSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' }
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
        <section className="bg-gradient-to-r from-teal-900 to-teal-700 text-white py-20 islamic-pattern">
          <div className="container-custom relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">About Me</h1>
            <div className="flex items-center text-sm md:text-base opacity-90">
              <Link href="/" className="hover:underline">Home</Link>
              <span className="mx-2">&gt;</span>
              <span>About</span>
            </div>
          </div>
        </section>

        {/* Biography */}
        <section className="py-20 bg-white">
          <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl bg-teal-800 p-8 text-white min-h-[400px] flex flex-col justify-end shadow-xl overflow-hidden">
              <div className="absolute inset-0 opacity-20 islamic-pattern"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-[#D4AF37] mb-2 font-poppins">Hafiz Muhammad</h3>
                <p className="text-lg">Certified Online Quran Tutor</p>
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
              <SectionHeading title="My Journey" centered={false} subtitle="A lifelong dedication to the Holy Quran" />
              <div className="space-y-4 text-slate-700 mt-6 leading-relaxed">
                <p>
                  My journey of learning the Quran began at the early age of 7. Guided by dedicated teachers and the blessings of Allah, I completed my Hifz (memorization) by age 14. This early achievement instilled in me a profound love and respect for the words of Allah.
                </p>
                <p>
                  Following my Hifz, I pursued extensive studies in Islamic sciences, obtaining an Ijazah in Quran Recitation. This formal certification allows me to teach the Quran with an unbroken chain of transmission back to the Prophet Muhammad (PBUH).
                </p>
                <p>
                  Over the past 8+ years, I have dedicated my life to teaching the Quran to students of all ages across the globe. My goal is to impart not just the ability to read the Quran, but also the understanding and love for it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-slate-50 text-center">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-poppins">My Mission</h2>
            <p className="text-xl md:text-2xl text-teal-800 italic leading-relaxed">
              "My mission is to make quality Quran education accessible to every Muslim around the world, regardless of their location, age, or background."
            </p>
          </div>
        </section>

        {/* Teaching Philosophy */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <SectionHeading title="Teaching Philosophy" subtitle="How I approach Quran education" />
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-8 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-poppins">Patience &amp; Understanding</h3>
                <p className="text-slate-600">
                  Every student learns at their own pace. I foster a supportive and patient environment where students feel comfortable asking questions and making mistakes.
                </p>
              </div>
              <div className="p-8 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-poppins">Personalized Approach</h3>
                <p className="text-slate-600">
                  I tailor my teaching methods to each individual's learning style, ensuring maximum engagement, comprehension, and retention.
                </p>
              </div>
              <div className="p-8 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mb-6">
                  <Mic className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-poppins">Excellence in Tajweed</h3>
                <p className="text-slate-600">
                  I emphasize correct pronunciation (Makharij) and Tajweed rules from day one, laying a strong foundation for beautiful and accurate recitation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Qualifications */}
        <section className="py-20 bg-slate-50">
          <div className="container-custom">
            <SectionHeading title="Qualifications &amp; Certifications" subtitle="Academic background and credentials" />
            <div className="max-w-3xl mx-auto mt-12 bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-slate-100">
              <ul className="space-y-6">
                {[
                  "Hafiz-ul-Quran (Memorization of the entire Quran)",
                  "Ijazah in Quran Recitation (Hafs 'an 'Asim)",
                  "Degree in Islamic Studies & Arabic Language",
                  "8+ Years of Professional Teaching Experience",
                  "Certified Online Quran Tutor for Non-Arabic Speakers"
                ].map((qual, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                    <span className="text-lg text-slate-700 font-medium">{qual}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <SectionHeading title="My Experience" subtitle="Milestones in my teaching journey" />
            <div className="max-w-4xl mx-auto mt-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              {[
                { year: "2016", title: "Started Teaching", desc: "Began teaching local students in traditional classroom settings." },
                { year: "2018", title: "First International Student", desc: "Transitioned to online teaching, welcoming my first student from the UK." },
                { year: "2020", title: "100+ Students Milestone", desc: "Reached over 100 active students learning Quran online." },
                { year: "2022", title: "300+ Students from 10 Countries", desc: "Expanded reach to North America, Europe, and Australia." },
                { year: "2024", title: "500+ Students from 15+ Countries", desc: "Continuing the mission of spreading Quranic knowledge globally." }
              ].map((item, index) => (
                <div key={index} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-10 last:mb-0`}>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-teal-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-slate-900 text-lg font-poppins">{item.title}</h4>
                      <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-semibold">{item.year}</span>
                    </div>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Languages */}
        <section className="py-20 bg-slate-50">
          <div className="container-custom">
            <SectionHeading title="Languages Spoken" subtitle="Communicating effectively with students worldwide" />
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              {[
                { lang: "English", level: "Fluent" },
                { lang: "Urdu", level: "Native" },
                { lang: "Arabic", level: "Proficient" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 bg-white px-8 py-5 rounded-xl shadow-sm border border-slate-100">
                  <Globe className="w-8 h-8 text-teal-600" />
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 font-poppins">{item.lang}</h4>
                    <p className="text-slate-500 text-sm">{item.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Personal Journey */}
        <section className="py-20 bg-white">
          <div className="container-custom max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-poppins">A Message to You</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Teaching the Quran is not just a profession for me; it is a lifelong passion and a religious duty. There is no greater joy than witnessing a student, whether a young child or an adult, successfully recite a verse of the Quran with correct pronunciation for the first time. 
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              I am committed to providing an enriching, supportive, and spiritually uplifting learning experience. Let us embark on this beautiful journey of learning the words of Allah together.
            </p>
          </div>
        </section>

        {/* CTA */}
        <CTABanner />
      </main>
    </>
  );
}
