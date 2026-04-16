import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function PricingSection({ onDemoClick }) {
  const { copy } = useLanguage();
  const plans = [
    {
      name: copy.pricing.plans[0].name,
      price: "999",
      period: "/mo",
      description: copy.pricing.plans[0].description,
      features: copy.pricing.plans[0].features,
      cta: copy.pricing.plans[0].cta,
      highlighted: false,
    },
    {
      name: copy.pricing.plans[1].name,
      price: "2,499",
      period: "/mo",
      description: copy.pricing.plans[1].description,
      features: copy.pricing.plans[1].features,
      cta: copy.pricing.plans[1].cta,
      highlighted: true,
    },
  ];

  return (
    <section
      data-testid="pricing-section"
      id="pricing"
      className="relative py-24 sm:py-32 overflow-hidden grain-overlay-dark"
      style={{ backgroundColor: "#0E1A14" }}
    >
      <div className="relative z-[2] max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            className="font-mono text-xs tracking-[0.25em] uppercase mb-4"
            style={{ color: "#D4A853" }}
          >
            {copy.pricing.overline}
          </p>
          <h2
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight"
            style={{ color: "#F5F0E8" }}
          >
            {copy.pricing.title}
          </h2>
          <p
            className="font-body text-base sm:text-lg mt-4 max-w-xl mx-auto"
            style={{ color: "#9CAEA4" }}
          >
            {copy.pricing.subtitle}
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                delay: i * 0.15,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              data-testid={`pricing-${plan.name.toLowerCase()}-card`}
            >
              <div
                className={`relative rounded-3xl p-8 sm:p-10 border transition-transform duration-150 ease-out hover:-translate-y-1 ${
                  plan.highlighted ? "gold-glow-strong" : ""
                }`}
                style={{
                  backgroundColor: plan.highlighted
                    ? "#16271F"
                    : "rgba(22, 39, 31, 0.5)",
                  borderColor: plan.highlighted
                    ? "rgba(212, 168, 83, 0.4)"
                    : "rgba(245, 240, 232, 0.06)",
                }}
              >
                {/* Recommended badge */}
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full font-mono text-xs font-medium"
                      style={{ backgroundColor: "#D4A853", color: "#0E1A14" }}
                    >
                      <Sparkles size={12} />
                      {copy.pricing.recommended}
                    </span>
                  </div>
                )}

                {/* Plan name */}
                <h3
                  className="font-heading text-2xl font-medium mb-2"
                  style={{ color: "#F5F0E8" }}
                >
                  {plan.name}
                </h3>
                <p
                  className="font-body text-sm mb-6"
                  style={{ color: "#9CAEA4" }}
                >
                  {plan.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-8">
                  <span
                    className="font-mono text-sm"
                    style={{ color: "#9CAEA4" }}
                  >
                    INR
                  </span>
                  <span
                    className="font-heading text-5xl font-semibold"
                    style={{ color: plan.highlighted ? "#D4A853" : "#F5F0E8" }}
                  >
                    {plan.price}
                  </span>
                  <span
                    className="font-body text-sm"
                    style={{ color: "#9CAEA4" }}
                  >
                    {plan.period}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-10">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check
                        size={16}
                        className="mt-0.5 flex-shrink-0"
                        style={{
                          color: plan.highlighted ? "#D4A853" : "#2D6B4A",
                        }}
                      />
                      <span
                        className="font-body text-sm"
                        style={{ color: "#9CAEA4" }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  data-testid={`pricing-${plan.name.toLowerCase()}-btn`}
                  onClick={onDemoClick}
                  className="w-full py-4 rounded-full font-body text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    backgroundColor: plan.highlighted
                      ? "#D4A853"
                      : "transparent",
                    color: plan.highlighted ? "#0E1A14" : "#F5F0E8",
                    border: plan.highlighted
                      ? "none"
                      : "1px solid rgba(245,240,232,0.15)",
                  }}
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
