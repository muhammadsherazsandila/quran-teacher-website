import Link from 'next/link';
import { Home, BookOpen, Phone, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <section className="bg-gradient-to-br from-[#000a57] via-[#001a5e] to-[#002874] text-white min-h-[calc(100vh-120px)] flex items-center justify-center islamic-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#000a57]/40" />

        {/* Decorative floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-white/5 animate-pulse" />
        <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-white/5 animate-pulse delay-75" />
        <div className="absolute bottom-32 left-1/4 w-16 h-16 rounded-full bg-white/5 animate-pulse delay-150" />
        <div className="absolute bottom-20 right-1/3 w-24 h-24 rounded-full bg-white/5 animate-pulse delay-100" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
          {/* Large 404 */}
          <div className="relative mb-6">
            <h1 className="text-[10rem] md:text-[14rem] font-extrabold leading-none font-poppins bg-gradient-to-b from-white/30 to-white/5 bg-clip-text text-transparent select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <Search className="w-16 h-16 md:w-24 md:h-24 text-white/40" strokeWidth={1} />
            </div>
          </div>

          {/* Message */}
          <h2 className="text-2xl md:text-4xl font-bold mb-4 font-poppins">
            Page Not Found
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed max-w-xl mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or may have been moved. Let us guide you back to your Quran learning journey.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#000a57] rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5"
            >
              <BookOpen className="w-5 h-5" />
              View Courses
            </Link>
          </div>

          {/* Quick Links */}
          <div className="border-t border-white/10 pt-10">
            <p className="text-gray-400 text-sm mb-6 uppercase tracking-wider font-medium">Helpful Links</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { name: 'About Us', href: '/about', icon: ArrowLeft },
                { name: 'Our Teacher', href: '/teacher', icon: BookOpen },
                { name: 'Book a Trial', href: '/book-trial', icon: BookOpen },
                { name: 'Contact Us', href: '/contact', icon: Phone },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-white/15"
                >
                  <link.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
