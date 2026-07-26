import { generatePageMetadata } from '@/app/lib/metadata';
import { testimonials } from '@/app/data/testimonials';
import TestimonialCard from '@/app/components/ui/TestimonialCard';
import CTABanner from '@/app/components/ui/CTABanner';
import SectionHeading from '@/app/components/ui/SectionHeading';
import Link from 'next/link';
import { Play, Star, Quote } from 'lucide-react';

export const metadata = generatePageMetadata(
  'Testimonials', 
  'Read what our students and parents say about their Quran learning experience. Real reviews from families across 15+ countries.', 
  '/testimonials'
);

export default async function TestimonialsPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://qurantutor.example.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Testimonials',
        item: 'https://qurantutor.example.com/testimonials',
      },
    ],
  };

  const parentReviews = testimonials.filter((t) => t.type === 'parent');

  return (
    <main className="min-h-screen pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-primary to-teal-800 text-white py-16 md:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/islamic-pattern.svg')] bg-repeat opacity-5"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">What Our Students Say</h1>
          <div className="flex items-center justify-center space-x-2 text-teal-100 text-sm font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-accent">Testimonials</span>
          </div>
          <p className="mt-6 text-lg max-w-2xl mx-auto text-teal-50">
            Join thousands of satisfied students from over 15 countries who have transformed their Quran learning journey with us.
          </p>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
        <SectionHeading 
          title="Watch Their Stories" 
          subtitle="Real experiences from our global community of learners"
          centered
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-gray-100 rounded-2xl overflow-hidden aspect-video relative group flex flex-col items-center justify-center cursor-pointer border border-gray-200">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="text-primary w-6 h-6 ml-1" />
              </div>
              <p className="mt-4 font-semibold text-gray-500">Video Coming Soon</p>
            </div>
          ))}
        </div>
      </section>

      {/* Written Reviews */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="All Reviews" 
            subtitle="Discover how our personalized approach makes a difference"
            centered
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} name={testimonial.name} country={testimonial.country} countryCode={testimonial.countryCode} rating={testimonial.rating} text={testimonial.text} type={testimonial.type} course={testimonial.course} />
            ))}
          </div>
        </div>
      </section>

      {/* Parent Reviews Section */}
      <section className="py-16 md:py-24 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Trusted by Parents Worldwide</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">See what parents have to say about their children's progress and our dedicated tutors.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {parentReviews.slice(0, 4).map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6">
                <Quote className="text-accent/30 w-12 h-12 flex-shrink-0" />
                <div>
                  <div className="flex text-accent mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                  <div className="font-semibold text-text">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.type === 'parent' ? 'Parent' : testimonial.type === 'student' ? 'Student' : 'Adult Learner'}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
        <SectionHeading 
          title="Student Success Stories" 
          subtitle="Inspiring journeys of dedication and achievement"
          centered
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white rounded-3xl shadow-md overflow-hidden border border-gray-100">
            <div className="p-8 md:p-10">
              <div className="bg-primary/10 text-primary px-4 py-1.5 rounded-full inline-block text-sm font-semibold mb-6">Memorization Journey</div>
              <h3 className="text-2xl font-bold text-text mb-4">From Scratch to Hifz</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                "Starting with no prior knowledge of Arabic letters, our 8-year-old son began his journey with Quran Tutor. Thanks to the incredibly patient teachers and structured curriculum, he not only learned how to read fluently but has now memorized over 5 Juz. The personalized pace kept him motivated without feeling overwhelmed."
              </p>
              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">AM</div>
                <div>
                  <div className="font-semibold text-text">Ahmed's Family</div>
                  <div className="text-sm text-gray-500">UK</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl shadow-md overflow-hidden border border-gray-100">
            <div className="p-8 md:p-10">
              <div className="bg-accent/10 text-accent-dark px-4 py-1.5 rounded-full inline-block text-sm font-semibold mb-6 text-yellow-700">Tajweed Mastery</div>
              <h3 className="text-2xl font-bold text-text mb-4">Perfecting Pronunciation</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                "I struggled with proper Tajweed rules for years. Joining the advanced Tajweed course completely changed my recitation. The interactive feedback from my Egyptian tutor helped me identify and correct subtle mistakes I was making. It's truly a blessing to be able to recite the Quran the way it was revealed."
              </p>
              <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">FA</div>
                <div>
                  <div className="font-semibold text-text">Fatima A.</div>
                  <div className="text-sm text-gray-500">Canada</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
