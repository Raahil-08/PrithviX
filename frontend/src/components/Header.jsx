import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Header({ onDemoClick }) {
  const { copy, language, setLanguage, languageOptions } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoLoaded] = useState(false);

  const navLinks = [
    { label: copy.header.nav[0], href: "#features" },
    { label: copy.header.nav[1], href: "#how-it-works" },
    { label: copy.header.nav[2], href: "#pricing" },
    { label: copy.header.nav[3], href: "#testimonials" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      data-testid="main-header"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className={`transition-all duration-500 ${
          scrolled ? "glass-light border-b" : "bg-transparent"
        }`}
        style={{
          borderColor: scrolled ? "rgba(26, 60, 43, 0.08)" : "transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center"
              data-testid="header-logo"
              aria-label="PrithviX home"
            >
              <span
                className="font-heading text-xl sm:text-2xl font-semibold tracking-tight"
                style={{ color: "#1A3C2B" }}
              >
                Prithvi<span style={{ color: "#D4A853" }}>x</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <nav
              className="hidden md:flex items-center gap-8"
              data-testid="desktop-nav"
            >
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="font-body text-sm font-medium transition-colors duration-200 hover:opacity-100"
                  style={{ color: "#4A5D53" }}
                  onMouseEnter={(e) => (e.target.style.color = "#1A3C2B")}
                  onMouseLeave={(e) => (e.target.style.color = "#4A5D53")}
                  data-testid={`nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div
              className="hidden md:flex items-center gap-2 rounded-full border px-1 py-1 mr-4"
              style={{ borderColor: "rgba(26, 60, 43, 0.12)" }}
            >
              {languageOptions.map((option) => (
                <button
                  key={option.code}
                  type="button"
                  onClick={() => setLanguage(option.code)}
                  className="min-w-[3rem] rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] transition-all duration-200"
                  style={{
                    backgroundColor:
                      language === option.code ? "#1A3C2B" : "transparent",
                    color: language === option.code ? "#F5F0E8" : "#4A5D53",
                  }}
                  aria-pressed={language === option.code}
                >
                  {option.label}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <button
                data-testid="header-demo-btn"
                onClick={onDemoClick}
                className="px-5 py-2.5 rounded-full font-body text-sm font-medium transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "#1A3C2B",
                  color: "#F5F0E8",
                }}
              >
                {copy.header.demoCta}
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              data-testid="mobile-menu-toggle"
              className="md:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ color: "#1A3C2B" }}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            data-testid="mobile-menu"
            className="md:hidden glass-light border-b"
            style={{ borderColor: "rgba(26, 60, 43, 0.08)" }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="block w-full text-left font-body text-base font-medium py-2"
                  style={{ color: "#1A3C2B" }}
                  data-testid={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {link.label}
                </button>
              ))}
              <div className="flex items-center gap-2 pt-2">
                {languageOptions.map((option) => (
                  <button
                    key={option.code}
                    type="button"
                    onClick={() => setLanguage(option.code)}
                    className="flex-1 rounded-full border px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em]"
                    style={{
                      borderColor:
                        language === option.code
                          ? "#1A3C2B"
                          : "rgba(26, 60, 43, 0.12)",
                      backgroundColor:
                        language === option.code ? "#1A3C2B" : "transparent",
                      color: language === option.code ? "#F5F0E8" : "#4A5D53",
                    }}
                    aria-pressed={language === option.code}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              <button
                data-testid="mobile-demo-btn"
                onClick={() => {
                  setMobileOpen(false);
                  onDemoClick();
                }}
                className="w-full mt-2 px-5 py-3 rounded-full font-body text-sm font-medium"
                style={{ backgroundColor: "#1A3C2B", color: "#F5F0E8" }}
              >
                {copy.header.demoCta}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
