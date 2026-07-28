import { generatePageMetadata } from '@/app/lib/metadata';
import ContactForm from './ContactForm';
import { MessageCircle, Mail, Clock, MapPin, ChevronRight, Globe } from 'lucide-react';
import Link from 'next/link';

export const metadata = generatePageMetadata(
  'Contact Us',
  'Get in touch with Al Jameel Online Quran Academy for online classes. We are available for students worldwide.',
  '/contact'
);

export default function ContactPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://aljameelacademy.com/" },
      { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://aljameelacademy.com/contact" }
    ]
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[#000a57] to-[#002874] pt-16 pb-32 md:pt-20 md:pb-36 text-white relative">
        <div className="absolute inset-0 bg-[url('/islamic-pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <div className="flex items-center justify-center text-sm font-medium mb-6 opacity-80 text-white/80">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span>Contact</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:--font-poppins]">Get in Touch</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90">
            Have questions about our online Quran classes? We're here to help you start your journey.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="container mx-auto px-4 max-w-7xl -mt-20 relative z-20 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 bg-[#002874]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#002874] transition-colors duration-300">
              <MessageCircle className="w-8 h-8 text-[#002874] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-[#000a57] mb-2 font-[family-name:--font-poppins]">WhatsApp</h3>
            <p className="text-gray-600 mb-4">Quick responses within 1 hour</p>
            <a href="https://wa.me/923026188597" target="_blank" rel="noopener noreferrer" className="text-[#002874] font-bold text-lg hover:text-[#000a57] transition-colors">
              +92 302 6188597
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 bg-[#002874]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#002874] transition-colors duration-300">
              <Mail className="w-8 h-8 text-[#002874] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-[#000a57] mb-2 font-[family-name:--font-poppins]">Email Us</h3>
            <p className="text-gray-600 mb-4">For detailed inquiries and support</p>
            <a href="mailto:info@aljameelacademy.com" className="text-[#002874] font-bold text-lg hover:text-[#000a57] transition-colors">
              info@aljameelacademy.com
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 bg-[#002874]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#002874] transition-colors duration-300">
              <Clock className="w-8 h-8 text-[#002874] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-[#000a57] mb-2 font-[family-name:--font-poppins]">Business Hours</h3>
            <p className="text-gray-600 mb-4">Available for global students</p>
            <span className="text-[#000a57] font-bold text-lg">
              Mon - Sun, Flexible
            </span>
          </div>
        </div>
      </section>

      {/* Main Content (Form + Info + Map) */}
      <section className="container mx-auto px-4 max-w-7xl pb-24">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Form Section */}
            <div className="p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-gray-100">
              <h2 className="text-3xl font-bold text-[#000a57] mb-2 font-[family-name:--font-poppins]">Send a Message</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
              
              <ContactForm />
            </div>

            {/* Info & Map Section */}
            <div className="bg-[#F8FAFC] flex flex-col h-full">
              <div className="p-8 md:p-12 lg:p-16 flex-grow">
                <h2 className="text-3xl font-bold text-[#000a57] mb-6 font-[family-name:--font-poppins]">Why Reach Out?</h2>
                
                <div className="space-y-6 mb-12">
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-[#002874]/10 flex items-center justify-center">
                        <MessageCircle className="w-4 h-4 text-[#002874]" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-[#000a57]">Fast Response</h4>
                      <p className="text-gray-600 text-sm mt-1">We aim to answer all inquiries, especially via WhatsApp, as swiftly as possible.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-[#002874]/10 flex items-center justify-center">
                        <Globe className="w-4 h-4 text-[#002874]" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-[#000a57]">Global Availability</h4>
                      <p className="text-gray-600 text-sm mt-1">Located in Pakistan, serving students across USA, UK, Canada, Australia, and worldwide.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#000a57] mb-2 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-[#002874]" /> Based In
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Pakistan - Offering high-quality online Quran and Tajweed classes to students globally via Zoom and Skype.
                  </p>
                </div>
              </div>
              
              {/* Google Map Embed */}
              <div className="w-full h-64 lg:h-72 mt-auto">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13778556.762886737!2d60.36015111166705!3d30.12648589088523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
