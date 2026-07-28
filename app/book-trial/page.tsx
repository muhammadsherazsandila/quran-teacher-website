import { generatePageMetadata } from "@/app/lib/metadata";
import {
  BookOpen,
  MessageCircle,
  ShieldCheck,
  Target,
  UserCheck,
} from "lucide-react";
import Link from "next/link";
import CalComBookingForm from "../components/ui/CalComBookingForm";

export const metadata = generatePageMetadata(
  "Book a Free Trial",
  "Schedule a free 30-minute evaluation class with our expert Quran tutors. No obligation, start your learning journey today.",
  "/book-trial",
);

export default function BookTrialPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://aljameelacademy.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Book Trial",
        item: "https://aljameelacademy.com/book-trial",
      },
    ],
  };

  const benefits = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Assessment of Current Level",
      description:
        "Our expert tutor will evaluate your current recitation and knowledge level.",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Personalized Learning Plan",
      description:
        "Receive a customized curriculum tailored to your specific goals and pace.",
    },
    {
      icon: <UserCheck className="w-8 h-8 text-primary" />,
      title: "Experience Teaching Style",
      description:
        "Get a feel for our interactive 1-on-1 teaching methodology before committing.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "No Obligation",
      description:
        "The trial is completely free with zero pressure to enroll afterwards.",
    },
  ];

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[#000a57] to-[#002874] text-white py-16 md:py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/islamic-pattern.svg')] bg-repeat opacity-5"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Book Your Free Trial Class
          </h1>
          <div className="flex items-center justify-center space-x-2 text-gray-200 text-sm font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-accent">Book Trial</span>
          </div>
          <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-200">
            Take the first step towards mastering the Quran. Schedule your free
            evaluation session with one of our certified tutors today.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Information & WhatsApp CTA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl font-bold text-text mb-6">
                What to Expect
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex gap-4"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-text mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-green-50 p-6 rounded-2xl border border-green-200 text-center h-full flex flex-col justify-center">
              <h3 className="text-xl font-bold text-green-900 mb-2">
                Prefer WhatsApp?
              </h3>
              <p className="text-green-700 mb-6 text-sm">
                Our support team is online and ready to help you schedule your
                trial class directly via WhatsApp.
              </p>
              <a
                href="https://wa.me/923026188597"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-4 rounded-full font-bold hover:bg-green-600 transition shadow-lg hover:shadow-xl w-full"
              >
                <MessageCircle className="w-5 h-5" />
                Message on WhatsApp
              </a>
            </div>
          </div>

          {/* Cal.com Booking */}
          <div className="w-full">
            <div className="bg-white p-4 md:p-8 rounded-3xl shadow-xl border border-gray-100 min-h-[600px]">
              <div className="mb-6 px-2 md:px-4 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-text mb-2">
                  Select a Time
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Choose a convenient time from our calendar below to book your
                  free 30-minute evaluation class.
                </p>
              </div>
              <div className="h-[600px] w-full">
                <CalComBookingForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
