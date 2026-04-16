import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Store, UserPlus, ClipboardList, BarChart3 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const steps = [
  {
    icon: Store,
    number: "01",
    title: "Register Your Dealership",
    description:
      "Sign up in minutes with your business details. Set up your product catalog and pricing structure.",
  },
  {
    icon: UserPlus,
    number: "02",
    title: "Onboard Your Farmers",
    description:
      "Register farmers with instant QR ID card generation. Build your farmer network digitally.",
  },
  {
    icon: ClipboardList,
    number: "03",
    title: "Log Visits & Sales",
    description:
      "Record field visits, credit transactions, and sales. Everything syncs even in low-connectivity areas.",
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Track Everything",
    description:
      "Access real-time dashboards for inventory, credit, analytics, and AI-powered recommendations.",
  },
];

export default function HowItWorks() {
  const { copy } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      data-testid="how-it-works-section"
      id="how-it-works"
      ref={ref}
      className="relative py-24 sm:py-32"
      style={{ backgroundColor: "#F5F0E8" }}
    >
      <div className="grain-overlay absolute inset-0" />

      <div className="relative z-[2] max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          className="text-center mb-16 sm:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            className="font-mono text-xs tracking-[0.25em] uppercase mb-4"
            style={{ color: "#D4A853" }}
          >
            {copy.howItWorks.overline}
          </p>
          <h2
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight"
            style={{ color: "#1A3C2B" }}
          >
            {copy.howItWorks.title}
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connecting line */}
          <motion.div
            className="absolute left-6 sm:left-8 top-0 bottom-0 w-px"
            style={{
              transformOrigin: "top",
              backgroundColor: "rgba(26, 60, 43, 0.12)",
            }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Gold progress line */}
          <motion.div
            className="absolute left-6 sm:left-8 top-0 w-px"
            style={{
              backgroundColor: "#D4A853",
              transformOrigin: "top",
            }}
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          />

          <div className="space-y-16 sm:space-y-20">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="relative pl-20 sm:pl-24"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  delay: 0.3 + i * 0.2,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                data-testid={`step-${i + 1}`}
              >
                {/* Step icon */}
                <div
                  className="absolute left-0 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center border"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "rgba(26, 60, 43, 0.1)",
                    boxShadow: "0 4px 20px rgba(26, 60, 43, 0.08)",
                  }}
                >
                  <step.icon size={24} style={{ color: "#1A3C2B" }} />
                </div>

                {/* Step number */}
                <span
                  className="font-mono text-xs tracking-[0.2em] uppercase mb-2 block"
                  style={{ color: "#D4A853" }}
                >
                  Step {step.number}
                </span>

                <h3
                  className="font-heading text-2xl sm:text-3xl font-medium tracking-tight mb-3"
                  style={{ color: "#1A3C2B" }}
                >
                  {copy.howItWorks.steps[i].title}
                </h3>

                <p
                  className="font-body text-base leading-relaxed max-w-lg"
                  style={{ color: "#4A5D53" }}
                >
                  {copy.howItWorks.steps[i].description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
