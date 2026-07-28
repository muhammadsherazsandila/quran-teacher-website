import { generatePageMetadata } from '@/app/lib/metadata';
import SectionHeading from '@/app/components/ui/SectionHeading';
import CTABanner from '@/app/components/ui/CTABanner';
import Link from 'next/link';
import { generatePersonSchema, generateBreadcrumbSchema } from '@/app/lib/structured-data';
import { Heart, Target, Mic, CheckCircle, Globe, ArrowRight } from 'lucide-react';

export const metadata = generatePageMetadata(
  'About Us - Al Jameel Online Quran Academy',
  'Learn about Al Jameel Online Quran Academy - providing quality online Quran education to students worldwide with our certified female Quran teacher.',
  '/about'
);

export default function AboutPage() {
  const personSchema = generatePersonSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">About Us</h1>
            <div className="flex items-center text-sm md:text-base opacity-90">
              <Link href="/" className="hover:underline">Home</Link>
              <span className="mx-2">&gt;</span>
              <span>About</span>
            </div>
          </div>
        </section>

        {/* Biography / Our Story */}
        <section className="py-20 bg-white">
          <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl bg-[#002874] p-8 text-white min-h-[400px] flex flex-col justify-end shadow-xl overflow-hidden">
              <div className="absolute inset-0 opacity-20 islamic-pattern"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 text-9xl font-bold font-poppins">
                AJ
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-200 mb-2 font-poppins">Al Jameel Academy</h3>
                <p className="text-lg">Online Quran Education</p>
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
              <SectionHeading title="Our Story" centered={false} subtitle="A dedication to the Holy Quran" />
              <div className="space-y-4 text-slate-700 mt-6 leading-relaxed">
                <p>
                  Al Jameel Online Quran Academy was founded with a clear vision: to provide high-quality, accessible, and authentic Quranic education to students across the globe. 
                </p>
                <p>
                  We believe that learning the Quran should not be limited by geographical boundaries. Our institution brings traditional Islamic scholarship into the digital age, offering an unbroken chain of transmission (Ijazah) to our students.
                </p>
                <p>
                  Over the years, we have dedicated ourselves to teaching the Quran to individuals of all ages. Our goal is to impart not just the ability to read the Quran accurately, but also to foster a deep understanding and love for the words of Allah.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-slate-50 text-center">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-poppins">Our Mission</h2>
            <p className="text-xl md:text-2xl text-[#002874] italic leading-relaxed">
              "Our mission is to make quality Quran education accessible to every Muslim around the world, regardless of their location, age, or background, fostering a deep spiritual connection with the Holy Quran."
            </p>
          </div>
        </section>

        {/* Teaching Philosophy */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <SectionHeading title="Teaching Philosophy" subtitle="How we approach Quran education" />
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-8 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-7 h-7 text-[#002874]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-poppins">Patience &amp; Understanding</h3>
                <p className="text-slate-600">
                  Every student learns at their own pace. We foster a supportive and patient environment where students feel comfortable asking questions and making mistakes.
                </p>
              </div>
              <div className="p-8 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-[#002874]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-poppins">Personalized Approach</h3>
                <p className="text-slate-600">
                  We tailor our teaching methods to each individual's learning style, ensuring maximum engagement, comprehension, and retention.
                </p>
              </div>
              <div className="p-8 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <Mic className="w-7 h-7 text-[#002874]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-poppins">Excellence in Tajweed</h3>
                <p className="text-slate-600">
                  We emphasize correct pronunciation (Makharij) and Tajweed rules from day one, laying a strong foundation for beautiful and accurate recitation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Qualifications */}
        <section className="py-20 bg-slate-50">
          <div className="container-custom">
            <SectionHeading title="Our Standards &amp; Credentials" subtitle="Academic background and institutional standards" />
            <div className="max-w-3xl mx-auto mt-12 bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-slate-100">
              <ul className="space-y-6">
                {[
                  "Instruction by Hafizah of the Quran",
                  "Ijazah in Quran Recitation (Hafs 'an 'Asim)",
                  "Degrees in Islamic Studies & Arabic Language",
                  "8+ Years of Professional Teaching Experience",
                  "Certified Online Curriculum for Non-Arabic Speakers"
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

        {/* Experience Timeline */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <SectionHeading title="Our Journey" subtitle="Milestones in our academy's history" />
            <div className="max-w-4xl mx-auto mt-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              {[
                { year: "2020", title: "Academy Founded", desc: "Al Jameel Online Quran Academy was established with a vision for global education." },
                { year: "2021", title: "First International Students", desc: "Began welcoming our first students from the UK and North America." },
                { year: "2022", title: "100+ Students Milestone", desc: "Reached over 100 active students learning Quran online with us." },
                { year: "2023", title: "Expanded to 10+ Countries", desc: "Expanded our reach globally to students in Europe, Australia, and beyond." },
                { year: "2024", title: "500+ Students from 15+ Countries", desc: "Continuing the mission of spreading Quranic knowledge to a diverse global community." }
              ].map((item, index) => (
                <div key={index} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-10 last:mb-0`}>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#002874] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-slate-900 text-lg font-poppins">{item.title}</h4>
                      <span className="px-3 py-1 bg-gray-100 text-[#002874] rounded-full text-sm font-semibold">{item.year}</span>
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
            <SectionHeading title="Languages We Teach In" subtitle="Communicating effectively with students worldwide" />
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              {[
                { lang: "English", level: "Fluent" },
                { lang: "Urdu", level: "Native" },
                { lang: "Arabic", level: "Proficient" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 bg-white px-8 py-5 rounded-xl shadow-sm border border-slate-100">
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

        {/* Meet Our Teacher Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#000a57] to-[#002874] rounded-2xl p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4 font-poppins">Meet Our Teacher</h2>
                <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                  Al Jameel Academy is proud to feature a highly dedicated, certified female Quran teacher with an Ijazah in Quran recitation. She brings years of expertise and a nurturing approach to every class.
                </p>
                <Link href="/teacher" className="inline-flex items-center gap-2 bg-white text-[#002874] px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
                  View Profile <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Journey / Message */}
        <section className="py-20 bg-slate-50">
          <div className="container-custom max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-poppins">A Message from Al Jameel Academy</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Teaching the Quran is not just a profession for us; it is a lifelong passion and a religious duty. There is no greater joy than witnessing a student, whether a young child or an adult, successfully recite a verse of the Quran with correct pronunciation for the first time. 
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              We are committed to providing an enriching, supportive, and spiritually uplifting learning experience. Let us embark on this beautiful journey of learning the words of Allah together.
            </p>
          </div>
        </section>

        {/* CTA */}
        <CTABanner />
      </main>
    </>
  );
}
