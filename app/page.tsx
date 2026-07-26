import Link from 'next/link';
import Image from 'next/image';
import { Award, Users, Clock, Globe, Mic, Gift, ClipboardCheck, FileText, Video, BarChart3, ArrowRight } from 'lucide-react';

import SectionHeading from '@/app/components/ui/SectionHeading';
import CTABanner from '@/app/components/ui/CTABanner';
import TestimonialCard from '@/app/components/ui/TestimonialCard';
import CourseCard from '@/app/components/ui/CourseCard';
import CountryFlags from '@/app/components/ui/CountryFlags';
import FAQAccordion from '@/app/components/ui/FAQAccordion';
import AnimatedCounter from '@/app/components/ui/AnimatedCounter';

import { courses } from '@/app/data/courses';
import { testimonials } from '@/app/data/testimonials';
import { homeFAQ } from '@/app/data/faq';
import { countries, stats } from '@/app/data/countries';

import {
  generatePersonSchema,
  generateOrganizationSchema,
  generateFAQSchema,
} from '@/app/lib/structured-data';

export const metadata = {
  title: 'Learn Quran Online | Personal Quran Teacher',
  description: 'Learn Quran online with a certified personal teacher. 1-on-1 personalized Quran classes with Tajweed.',
};

const features = [
  { icon: Award, title: 'Certified Teacher', description: 'Ijazah holder with proven teaching credentials.' },
  { icon: Users, title: 'One-on-One Classes', description: 'Personalized attention for faster learning.' },
  { icon: Clock, title: 'Flexible Schedule', description: 'Choose timings that fit your daily routine.' },
  { icon: Globe, title: 'Global Students', description: 'Teaching students from across the world.' },
  { icon: Mic, title: 'Tajweed Expert', description: 'Master pronunciation and reading rules.' },
  { icon: Gift, title: 'Free Trial', description: 'Experience a class before you commit.' },
];

const teachingSteps = [
  { icon: ClipboardCheck, title: 'Assessment', description: 'We evaluate your current level' },
  { icon: FileText, title: 'Personalized Plan', description: 'Custom curriculum designed for you' },
  { icon: Video, title: 'Regular Classes', description: 'Consistent 1-on-1 online sessions' },
  { icon: BarChart3, title: 'Progress Reports', description: 'Regular updates on your journey' },
];

export default async function HomePage() {
  const personSchema = generatePersonSchema();
  const orgSchema = generateOrganizationSchema();
  const faqSchema = generateFAQSchema(homeFAQ);

  return (
    <main className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#FFFFFF] to-[#F8FAFC] overflow-hidden pt-24 pb-16 islamic-pattern">
        <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F8FAFC] border border-[#D4AF37]/30 rounded-full text-sm font-medium text-[#1E293B]">
              <span className="text-xl">🌟</span> Trusted by 500+ Students Worldwide
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E293B] leading-tight font-poppins">
              Learn Quran Online with a <span className="text-[#0F766E]">Certified Personal Teacher</span>
            </h1>
            <p className="text-lg text-[#1E293B]/80 max-w-2xl mx-auto lg:mx-0">
              Master Tajweed and memorization with 1-on-1 personalized online classes designed for your pace. Begin your spiritual journey today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/trial"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8972E] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all text-center"
              >
                Book Free Trial
              </Link>
              <Link
                href="/courses"
                className="w-full sm:w-auto px-8 py-4 border-2 border-[#0F766E] text-[#0F766E] rounded-full font-semibold hover:bg-[#0F766E] hover:text-white transition-all text-center"
              >
                Explore Courses
              </Link>
            </div>
          </div>
          
          <div className="relative mx-auto w-full max-w-md aspect-square flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F766E] to-[#D4AF37] rounded-[40px] rotate-3 opacity-20 blur-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F766E] to-[#D4AF37] rounded-[40px] -rotate-3 p-1">
              <div className="w-full h-full bg-[#FFFFFF] rounded-[38px] flex items-center justify-center relative overflow-hidden">
                <div className="text-9xl font-bold text-[#0F766E]/20">HM</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Me Preview */}
      <section className="bg-[#FFFFFF] section-padding">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-[#0F766E] rounded-3xl p-12 text-white shadow-xl relative overflow-hidden flex flex-col justify-center items-center text-center h-full min-h-[400px]">
            <div className="absolute inset-0 opacity-10 bg-[url('/islamic-pattern.svg')] bg-repeat" />
            <Award className="w-20 h-20 text-[#D4AF37] mb-6 relative z-10" />
            <h3 className="text-3xl font-bold mb-4 relative z-10 font-poppins">Ijazah Certified</h3>
            <p className="text-white/80 text-lg relative z-10">Authorized to teach with a connected chain to the Prophet (PBUH).</p>
          </div>
          
          <div className="space-y-6">
            <SectionHeading title="About Your Teacher" subtitle="A dedicated guide for your Quranic journey" centered={false} />
            <p className="text-[#1E293B]/80 text-lg leading-relaxed">
              Assalamu Alaikum! I am a passionate and certified Quran teacher dedicated to helping students of all ages connect with the Book of Allah. With years of experience and specialized training in Tajweed and Qira'at, I tailor my teaching approach to suit each student's unique learning style.
            </p>
            <div className="flex flex-wrap gap-3 py-4">
              <span className="px-4 py-2 bg-[#F8FAFC] text-[#0F766E] rounded-full text-sm font-semibold border border-[#0F766E]/20">8+ Years Experience</span>
              <span className="px-4 py-2 bg-[#F8FAFC] text-[#0F766E] rounded-full text-sm font-semibold border border-[#0F766E]/20">500+ Students</span>
              <span className="px-4 py-2 bg-[#F8FAFC] text-[#0F766E] rounded-full text-sm font-semibold border border-[#0F766E]/20">15+ Countries</span>
            </div>
            <Link href="/about" className="inline-flex items-center gap-2 text-[#0F766E] font-semibold hover:text-[#0F766E]/80 transition-colors">
              Read More About Me <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Why Learn With Me */}
      <section className="bg-[#F8FAFC] section-padding">
        <div className="container-custom">
          <SectionHeading title="Why Learn With Me" subtitle="Experience premium Quran education tailored just for you" centered={true} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-[#FFFFFF] rounded-2xl p-8 shadow-premium card-hover border border-gray-100">
                <div className="w-14 h-14 bg-[#0F766E] rounded-full flex items-center justify-center mb-6 shadow-md">
                  <feature.icon className="w-7 h-7 text-[#FFFFFF]" />
                </div>
                <h3 className="text-xl font-bold text-[#1E293B] mb-3 font-poppins">{feature.title}</h3>
                <p className="text-[#1E293B]/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Courses Overview */}
      <section className="bg-[#FFFFFF] section-padding">
        <div className="container-custom">
          <SectionHeading title="Popular Courses" subtitle="Structured learning paths for every level" centered={true} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {courses.slice(0, 3).map((course, idx) => (
              <CourseCard key={idx} id={course.id} title={course.title} description={course.description} icon={course.icon} features={course.features} level={course.level} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/courses" className="inline-flex px-8 py-3 bg-[#0F766E] text-white rounded-full font-semibold hover:bg-[#0F766E]/90 transition-all">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Teaching Method */}
      <section className="bg-[#F8FAFC] section-padding">
        <div className="container-custom">
          <SectionHeading title="My Teaching Method" subtitle="A simple and effective learning journey" centered={true} />
          
          <div className="mt-16 relative">
            {/* Desktop connecting line */}
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-1 bg-gradient-to-r from-[#0F766E]/20 via-[#0F766E]/50 to-[#0F766E]/20" />
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative">
              {teachingSteps.map((step, idx) => (
                <div key={idx} className="relative flex flex-col items-center text-center group">
                  <div className="w-20 h-20 bg-[#FFFFFF] rounded-full flex items-center justify-center shadow-lg border-4 border-[#F8FAFC] relative z-10 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-[#0F766E]" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                      {idx + 1}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-[#1E293B] mb-3 font-poppins">{step.title}</h4>
                  <p className="text-[#1E293B]/70">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Student Statistics */}
      <section className="bg-gradient-to-r from-[#0F766E] to-[#0d665f] text-white section-padding relative overflow-hidden islamic-pattern">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <AnimatedCounter key={idx} value={stat.value} label={stat.label} suffix={stat.suffix} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Countries Served */}
      <section className="bg-[#FFFFFF] section-padding">
        <div className="container-custom">
          <SectionHeading title="Global Reach" subtitle="Teaching students from around the world" centered={true} />
          <div className="mt-12">
            <CountryFlags countries={countries} />
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="bg-[#F8FAFC] section-padding">
        <div className="container-custom">
          <SectionHeading title="Student Success Stories" subtitle="Read what my students have to say" centered={true} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {testimonials.slice(0, 6).map((testimonial, idx) => (
              <TestimonialCard key={idx} name={testimonial.name} country={testimonial.country} countryCode={testimonial.countryCode} rating={testimonial.rating} text={testimonial.text} type={testimonial.type} course={testimonial.course} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/testimonials" className="inline-flex items-center gap-2 text-[#0F766E] font-semibold hover:text-[#0F766E]/80 transition-colors">
              View All Testimonials <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="bg-[#FFFFFF] section-padding">
        <div className="container-custom">
          <SectionHeading title="Frequently Asked Questions" subtitle="Everything you need to know about learning with me" centered={true} />
          <div className="max-w-3xl mx-auto mt-12">
            <FAQAccordion items={homeFAQ} />
          </div>
        </div>
      </section>

      {/* 10. CTA Banner */}
      <CTABanner />
    </main>
  );
}
