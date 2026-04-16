import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import LightRays from "./LightRays";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection({ onDemoClick }) {
  const { copy } = useLanguage();
  const scrollToHowItWorks = () => {
    const el = document.getElementById("how-it-works");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      data-testid="hero-section"
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Base background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #11281c 0%, #0e1a14 55%, #09120e 100%)",
        }}
      />

      {/* Green accent rays */}
      <div className="absolute inset-x-0 top-0 z-[1] h-[68%] sm:h-[72%] opacity-85 pointer-events-none hero-light-rays">
        <LightRays
          raysOrigin="top-center"
          raysColor="#1f7a4d"
          raysSpeed={1.4}
          lightSpread={2.5}
          rayLength={3}
          fadeDistance={2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.05}
          distortion={0.03}
          pulsating={false}
          saturation={2}
        />
      </div>

      {/* Gradient overlay for text readability */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(14,26,20,0.18) 0%, rgba(14,26,20,0.55) 45%, rgba(14,26,20,0.96) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-[2] max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center pt-24 sm:pt-32">
        {/* Overline */}
        <motion.p
          className="font-mono text-xs sm:text-sm tracking-[0.25em] uppercase mb-6"
          style={{ color: "#D4A853" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {copy.hero.overline}
        </motion.p>

        {/* Headline */}
        <motion.h1
          data-testid="hero-headline"
          className="font-heading text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1]"
          style={{ color: "#F5F0E8" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {copy.hero.title.filter(Boolean).map((line, index) => (
            <span key={index}>
              {index > 0 && <br />}
              {index === copy.hero.title.filter(Boolean).length - 1 ? (
                <span style={{ color: "#D4A853" }}>{line}</span>
              ) : (
                line
              )}
            </span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          data-testid="hero-subtitle"
          className="font-body text-base sm:text-lg max-w-2xl mx-auto mt-8 leading-relaxed"
          style={{ color: "rgba(245, 240, 232, 0.65)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {copy.hero.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <button
            data-testid="hero-demo-cta"
            onClick={onDemoClick}
            className="group px-8 py-4 rounded-full font-body text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 flex items-center gap-2"
            style={{ backgroundColor: "#D4A853", color: "#0E1A14" }}
          >
            {copy.hero.primaryCta}
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

          <button
            data-testid="hero-how-it-works-cta"
            onClick={scrollToHowItWorks}
            className="px-8 py-4 rounded-full font-body text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105 border"
            style={{
              color: "#F5F0E8",
              borderColor: "rgba(245, 240, 232, 0.2)",
              backgroundColor: "rgba(245, 240, 232, 0.05)",
            }}
          >
            {copy.hero.secondaryCta}
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown
              size={24}
              style={{ color: "rgba(212, 168, 83, 0.5)" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
