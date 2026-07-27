import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#000a57] to-[#002874] relative overflow-hidden font-[family-name:var(--font-poppins)]">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/islamic-pattern.png')] bg-repeat islamic-pattern" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to Start Your Quran Journey?
        </h2>
        <p className="text-lg md:text-xl text-[#f8fafc] max-w-2xl mx-auto mb-10 opacity-90">
          Join our global community of learners and enrich your life with the teachings of the Holy Quran. Start with a free 3-day trial.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/book-trial" 
            className="w-full sm:w-auto bg-white text-[#002874] px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-lg"
          >
            Book Free Trial
          </Link>
          <Link 
            href="https://wa.me/923001234567" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg transition-colors hover:bg-white/10"
          >
            Contact on WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
