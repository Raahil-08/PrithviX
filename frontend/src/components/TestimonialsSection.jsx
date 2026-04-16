import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Shield,
  Wifi,
  MapPin,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const trustBadgeIcons = [Shield, Wifi, MapPin];

export default function TestimonialsSection() {
  const { copy } = useLanguage();
  const [current, setCurrent] = useState(0);

  const next = () =>
    setCurrent((prev) => (prev + 1) % copy.testimonials.items.length);
  const prev = () =>
    setCurrent(
      (prev) =>
        (prev - 1 + copy.testimonials.items.length) %
        copy.testimonials.items.length,
    );

  // Auto-advance testimonials every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % copy.testimonials.items.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [copy.testimonials.items.length]);

  return (
    <section
      data-testid="testimonials-section"
      id="testimonials"
      className="relative py-24 sm:py-32"
      style={{ backgroundColor: "#F5F0E8" }}
    >
      <div className="grain-overlay absolute inset-0" />

      <div className="relative z-[2] max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            className="font-mono text-xs tracking-[0.25em] uppercase mb-4"
            style={{ color: "#D4A853" }}
          >
            {copy.testimonials.overline}
          </p>
          <h2
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight"
            style={{ color: "#1A3C2B" }}
          >
            {copy.testimonials.title.map((line, index) => (
              <span key={index}>
                {index > 0 && <br />}
                {line}
              </span>
            ))}
          </h2>
        </motion.div>

        {/* Testimonial carousel */}
        <div className="relative max-w-3xl mx-auto">
          <motion.div
            key={current}
            className="text-center py-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Quote icon */}
            <div className="flex justify-center mb-6">
              <Quote size={32} style={{ color: "rgba(212, 168, 83, 0.3)" }} />
            </div>

            {/* Quote text */}
            <blockquote
              className="font-heading text-xl sm:text-2xl lg:text-3xl font-normal italic leading-relaxed mb-8"
              style={{ color: "#1A3C2B" }}
              data-testid={`testimonial-quote-${current}`}
            >
              "{copy.testimonials.items[current].quote}"
            </blockquote>

            {/* Author */}
            <div>
              <p
                className="font-body text-base font-semibold"
                style={{ color: "#1A3C2B" }}
              >
                {copy.testimonials.items[current].name}
              </p>
              <p className="font-body text-sm" style={{ color: "#4A5D53" }}>
                {copy.testimonials.items[current].role}
              </p>
              <p
                className="font-mono text-xs mt-1"
                style={{ color: "#D4A853" }}
              >
                {copy.testimonials.items[current].location}
              </p>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              data-testid="testimonial-prev"
              onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-200 hover:scale-105"
              style={{
                borderColor: "rgba(26, 60, 43, 0.15)",
                color: "#1A3C2B",
              }}
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {copy.testimonials.items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="transition-all duration-300"
                  data-testid={`testimonial-dot-${i}`}
                >
                  <div
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === current ? 24 : 8,
                      height: 8,
                      backgroundColor:
                        i === current ? "#D4A853" : "rgba(26, 60, 43, 0.15)",
                    }}
                  />
                </button>
              ))}
            </div>

            <button
              data-testid="testimonial-next"
              onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-200 hover:scale-105"
              style={{
                borderColor: "rgba(26, 60, 43, 0.15)",
                color: "#1A3C2B",
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Trust badges */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-16 sm:mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {copy.testimonials.badges.map((badge, i) => (
            <div
              key={badge}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border"
              style={{ borderColor: "rgba(26, 60, 43, 0.1)" }}
              data-testid={`trust-badge-${i}`}
            >
              {(() => {
                const Icon = trustBadgeIcons[i] || Shield;
                return <Icon size={16} style={{ color: "#D4A853" }} />;
              })()}
              <span
                className="font-body text-sm font-medium"
                style={{ color: "#1A3C2B" }}
              >
                {badge}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
