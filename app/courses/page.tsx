import { generatePageMetadata } from '@/app/lib/metadata';
import SectionHeading from '@/app/components/ui/SectionHeading';
import CTABanner from '@/app/components/ui/CTABanner';
import FAQAccordion from '@/app/components/ui/FAQAccordion';
import Link from 'next/link';
import { generateCourseSchema, generateBreadcrumbSchema } from '@/app/lib/structured-data';
import { courses } from '@/app/data/courses';
import { coursesFAQ } from '@/app/data/faq';
import { BookOpen, BookOpenCheck, Mic, Brain, GraduationCap, CheckCircle } from 'lucide-react';

export const metadata = generatePageMetadata(
  'Courses',
  'Explore our Quran courses: Noorani Qaida, Quran Reading, Tajweed, Memorization & Islamic Studies. Personalized 1-on-1 online classes.',
  '/courses'
);

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="w-12 h-12 text-[#002874]" />,
  BookOpenCheck: <BookOpenCheck className="w-12 h-12 text-[#002874]" />,
  Mic: <Mic className="w-12 h-12 text-[#002874]" />,
  Brain: <Brain className="w-12 h-12 text-[#002874]" />,
  GraduationCap: <GraduationCap className="w-12 h-12 text-[#002874]" />,
};

export default function CoursesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Courses', url: '/courses' }
  ]);

  const courseSchemas = courses.map(course => generateCourseSchema(course));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {courseSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <main className="min-h-screen">
        {/* Hero Banner */}
        <section className="bg-gradient-to-r from-[#000a57] to-[#002874] text-white py-16 md:py-20 islamic-pattern">
          <div className="container-custom relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">Our Courses</h1>
            <div className="flex items-center text-sm md:text-base opacity-90">
              <Link href="/" className="hover:underline">Home</Link>
              <span className="mx-2">&gt;</span>
              <span>Courses</span>
            </div>
          </div>
        </section>

        {/* Detailed Course Cards */}
        <div className="flex flex-col">
          {courses.map((course, index) => (
            <section key={course.id} id={course.id} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
              <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="mb-6">
                    {iconMap[course.icon] || <BookOpen className="w-12 h-12 text-[#002874]" />}
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4 font-poppins">{course.title}</h2>
                  <div className="flex gap-3 mb-6">
                    <span className="px-3 py-1 bg-gray-100 text-[#000a57] rounded-full text-sm font-semibold">
                      {course.level}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-[#002874] rounded-full text-sm font-semibold">
                      {course.duration}
                    </span>
                  </div>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    {course.description}
                  </p>
                  <Link href="/book-trial" className="inline-flex items-center justify-center px-6 py-3 bg-[#002874] text-white rounded-lg font-medium hover:bg-[#000a57] transition-colors">
                    Start Free Trial
                  </Link>
                </div>
                
                <div className={`bg-white p-8 rounded-2xl shadow-sm border border-slate-100 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-xl font-bold text-slate-900 mb-6 font-poppins">What you'll learn:</h3>
                  <ul className="space-y-4">
                    {course.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#002874] flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <h4 className="font-semibold text-slate-900 mb-3">Suitable for:</h4>
                    <p className="text-slate-600">{course.suitableFor}</p>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Who Can Join */}
        <section className="py-20 bg-[#000a57] text-white islamic-pattern relative">
          <div className="container-custom relative z-10">
            <SectionHeading title="Who Can Join?" subtitle="Classes adapted for all age groups" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                { age: "Children (4-7)", desc: "Engaging, playful methods using visuals and short sessions." },
                { age: "Kids (8-12)", desc: "Structured learning building strong foundations and daily habits." },
                { age: "Teenagers (13-17)", desc: "Interactive discussions connecting Quranic teachings to daily life." },
                { age: "Adults (18+)", desc: "Flexible scheduling and focused sessions respecting adult learning styles." }
              ].map((group, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl hover:bg-white/20 transition-colors">
                  <h3 className="text-xl font-bold text-gray-200 mb-3 font-poppins">{group.age}</h3>
                  <p className="text-slate-300">{group.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <SectionHeading title="Learning Outcomes" subtitle="What you will achieve with our courses" />
            <div className="max-w-4xl mx-auto mt-12 grid sm:grid-cols-2 gap-6">
              {[
                "Read the Quran fluently with confidence",
                "Apply proper Tajweed rules accurately",
                "Memorize Surahs with long-term retention",
                "Understand basic Quranic Arabic and meanings",
                "Develop a strong spiritual connection",
                "Establish a daily routine of Quran recitation"
              ].map((outcome, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-[#002874]" />
                  </div>
                  <span className="text-slate-700 font-medium">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-slate-50">
          <div className="container-custom">
            <SectionHeading title="Course FAQs" subtitle="Common questions about our classes" />
            <div className="max-w-3xl mx-auto mt-12">
              <FAQAccordion items={coursesFAQ} />
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner />
      </main>
    </>
  );
}
