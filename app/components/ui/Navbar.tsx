"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Courses", path: "/courses" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white shadow-md py-3 font-[family-name:var(--font-poppins)]`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <BookOpen
            className={`w-8 h-8 ${scrolled ? "text-[#002874]" : "text-[#002874]"}`}
          />
          <span
            className={`text-xl font-bold ${scrolled ? "text-[#000a57]" : "text-[#000a57]"}`}
          >
            Hafiz Muhammad
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`relative font-medium transition-colors hover:text-[#002874] ${
                  isActive ? "text-[#002874]" : "text-[#000a57]"
                } link-underline`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/book-trial"
            className="bg-gradient-to-r from-[#000a57] to-[#002874] text-white px-6 py-2 rounded-full font-medium transition-transform hover:scale-105 shadow-md"
          >
            Book Free Trial
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <X
              className={`w-6 h-6 ${mobileMenuOpen ? "text-[#000a57]" : scrolled ? "text-[#000a57]" : "text-white"}`}
            />
          ) : (
            <Menu
              className={`w-6 h-6 ${scrolled ? "text-[#000a57]" : "text-[#000a57] md:text-white"}`}
            />
          )}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6 text-lg">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-semibold ${isActive ? "text-[#002874]" : "text-[#000a57]"}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                href="/book-trial"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-gradient-to-r from-[#000a57] to-[#002874] text-white px-6 py-3 rounded-full font-medium text-center mt-4 shadow-md inline-block"
              >
                Book Free Trial
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
