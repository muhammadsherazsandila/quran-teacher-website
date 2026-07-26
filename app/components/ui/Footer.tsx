import Link from 'next/link';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { FaFacebookF, FaTiktok, FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0F2B29] text-[#F8FAFC] pt-16 pb-8 font-[family-name:var(--font-poppins)] relative border-t-4 border-[#D4AF37]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Brand Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              Hafiz Muhammad
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Dedicated to spreading the light of the Quran through interactive, personalized online classes for students of all ages worldwide.
            </p>
            <div className="flex gap-4">
              <Link href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] transition-colors">
                <FaFacebookF className="w-5 h-5 text-white" />
              </Link>
              <Link href="#" aria-label="TikTok" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] transition-colors">
                <FaTiktok className="w-5 h-5 text-white" />
              </Link>
              <Link href="#" aria-label="YouTube" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] transition-colors">
                <FaYoutube className="w-5 h-5 text-white" />
              </Link>
              <Link href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] transition-colors">
                <FaInstagram className="w-5 h-5 text-white" />
              </Link>
              <Link href="#" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] transition-colors">
                <FaWhatsapp className="w-5 h-5 text-white" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Courses', path: '/courses' },
                { name: 'Testimonials', path: '/testimonials' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="text-gray-300 hover:text-[#D4AF37] transition-colors flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-[#D4AF37] before:rounded-full">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Courses */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Courses</h4>
            <ul className="space-y-3">
              {[
                'Noorani Qaida',
                'Quran Reading',
                'Quran Memorization (Hifz)',
                'Tajweed Rules',
                'Islamic Studies',
              ].map((course) => (
                <li key={course}>
                  <Link href="/courses" className="text-gray-300 hover:text-[#D4AF37] transition-colors flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-[#D4AF37] before:rounded-full">
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Phone / WhatsApp</p>
                  <p className="text-gray-300">+92 300 1234567</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-300">info@qurantutor.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Business Hours</p>
                  <p className="text-gray-300">Mon - Sun: Flexible Timings</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-gray-300">Online Worldwide</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Hafiz Muhammad. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
