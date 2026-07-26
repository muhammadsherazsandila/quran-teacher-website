import { generatePageMetadata } from '@/app/lib/metadata';
import BookingForm from './BookingForm';
import SectionHeading from '@/app/components/ui/SectionHeading';
import Link from 'next/link';
import { Calendar, Target, BookOpen, UserCheck, ShieldCheck, MessageCircle } from 'lucide-react';

export const metadata = generatePageMetadata(
  'Book a Free Trial', 
  'Schedule a free 30-minute evaluation class with our expert Quran tutors. No obligation, start your learning journey today.', 
  '/book-trial'
);

export default function BookTrialPage() {
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
        name: 'Book Trial',
        item: 'https://qurantutor.example.com/book-trial',
      },
    ],
  };

  const benefits = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: 'Assessment of Current Level',
      description: 'Our expert tutor will evaluate your current recitation and knowledge level.'
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: 'Personalized Learning Plan',
      description: 'Receive a customized curriculum tailored to your specific goals and pace.'
    },
    {
      icon: <UserCheck className="w-8 h-8 text-primary" />,
      title: 'Experience Teaching Style',
      description: 'Get a feel for our interactive 1-on-1 teaching methodology before committing.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: 'No Obligation',
      description: 'The trial is completely free with zero pressure to enroll afterwards.'
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-primary to-teal-800 text-white py-16 md:py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/islamic-pattern.svg')] bg-repeat opacity-5"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Free Trial Class</h1>
          <div className="flex items-center justify-center space-x-2 text-teal-100 text-sm font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-accent">Book Trial</span>
          </div>
          <p className="mt-6 text-lg max-w-2xl mx-auto text-teal-50">
            Take the first step towards mastering the Quran. Schedule your free evaluation session with one of our certified tutors today.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Information & Cal.com */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-text mb-6">What to Expect</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="font-semibold text-text mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cal.com Embed Section Placeholder */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-text">Schedule Your Class</h3>
              </div>
              
              <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
                <Calendar className="w-12 h-12 text-gray-400 mb-4" />
                <h4 className="text-lg font-medium text-gray-700 mb-2">Interactive Calendar Coming Soon</h4>
                <p className="text-gray-500 text-sm max-w-sm">
                  This section will feature an embedded Cal.com or Calendly widget for direct time slot selection once your account is connected.
                </p>
              </div>
            </div>
            
            {/* WhatsApp CTA */}
            <div className="bg-green-50 p-8 rounded-2xl border border-green-200 text-center">
              <h3 className="text-xl font-bold text-green-900 mb-2">Prefer to book via WhatsApp?</h3>
              <p className="text-green-700 mb-6 text-sm">Our support team is online and ready to help you schedule.</p>
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5" />
                Message on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-text mb-2">Request a Callback</h2>
                <p className="text-gray-600">Fill out the form below and our academic coordinator will contact you to confirm your trial slot.</p>
              </div>
              <BookingForm />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
