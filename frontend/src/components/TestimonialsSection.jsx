import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Shield, Wifi, MapPin } from 'lucide-react';

const testimonials = [
  {
    quote: 'Prithvix transformed how we manage our 800+ farmer network. The credit ledger alone saved us hours of manual bookkeeping every week.',
    name: 'Ramesh Patel',
    role: 'Agri Input Dealer',
    location: 'Anand, Gujarat',
  },
  {
    quote: 'The AI agronomist chat in Hindi is a game-changer. My farmers ask questions directly and get proper recommendations. It builds trust like nothing else.',
    name: 'Sunita Devi',
    role: 'Seed & Fertilizer Dealer',
    location: 'Varanasi, Uttar Pradesh',
  },
  {
    quote: 'We went from tracking stock on paper to getting real-time alerts before we run out. My reorder accuracy improved dramatically in just two months.',
    name: 'Vikram Singh',
    role: 'Agricultural Retailer',
    location: 'Kota, Rajasthan',
  },
  {
    quote: 'The QR farmer ID cards make every interaction faster. Farmers feel recognized, and we can pull up their complete history in seconds.',
    name: 'Priya Sharma',
    role: 'Multi-brand Agri Dealer',
    location: 'Nagpur, Maharashtra',
  },
];

const trustBadges = [
  { icon: Shield, label: 'Made in India' },
  { icon: Wifi, label: 'Offline-First' },
  { icon: MapPin, label: 'Built for Agri Retailers' },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      data-testid="testimonials-section"
      id="testimonials"
      className="relative py-24 sm:py-32"
      style={{ backgroundColor: '#F5F0E8' }}
    >
      <div className="grain-overlay absolute inset-0" />

      <div className="relative z-[2] max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-xs tracking-[0.25em] uppercase mb-4" style={{ color: '#D4A853' }}>
            Testimonials
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight" style={{ color: '#1A3C2B' }}>
            Trusted by dealers
            <br />
            across rural India
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
              <Quote size={32} style={{ color: 'rgba(212, 168, 83, 0.3)' }} />
            </div>

            {/* Quote text */}
            <blockquote
              className="font-heading text-xl sm:text-2xl lg:text-3xl font-normal italic leading-relaxed mb-8"
              style={{ color: '#1A3C2B' }}
              data-testid={`testimonial-quote-${current}`}
            >
              "{testimonials[current].quote}"
            </blockquote>

            {/* Author */}
            <div>
              <p className="font-body text-base font-semibold" style={{ color: '#1A3C2B' }}>
                {testimonials[current].name}
              </p>
              <p className="font-body text-sm" style={{ color: '#4A5D53' }}>
                {testimonials[current].role}
              </p>
              <p className="font-mono text-xs mt-1" style={{ color: '#D4A853' }}>
                {testimonials[current].location}
              </p>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              data-testid="testimonial-prev"
              onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-200 hover:scale-105"
              style={{ borderColor: 'rgba(26, 60, 43, 0.15)', color: '#1A3C2B' }}
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
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
                      backgroundColor: i === current ? '#D4A853' : 'rgba(26, 60, 43, 0.15)',
                    }}
                  />
                </button>
              ))}
            </div>

            <button
              data-testid="testimonial-next"
              onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-200 hover:scale-105"
              style={{ borderColor: 'rgba(26, 60, 43, 0.15)', color: '#1A3C2B' }}
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
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {trustBadges.map((badge, i) => (
            <div
              key={badge.label}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border"
              style={{ borderColor: 'rgba(26, 60, 43, 0.1)' }}
              data-testid={`trust-badge-${i}`}
            >
              <badge.icon size={16} style={{ color: '#D4A853' }} />
              <span className="font-body text-sm font-medium" style={{ color: '#1A3C2B' }}>
                {badge.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
