import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '999',
    period: '/mo',
    description: 'Perfect for small dealers getting started with digital operations.',
    features: [
      'Up to 500 farmer registrations',
      'QR ID card generation',
      'Basic credit ledger',
      'Inventory tracking (50 products)',
      'Field visit logging',
      'Email support',
    ],
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    name: 'Premium',
    price: '2,499',
    period: '/mo',
    description: 'For established dealers who need AI-powered insights and unlimited scale.',
    features: [
      'Unlimited farmer registrations',
      'QR ID cards with NFC support',
      'Advanced credit ledger & reminders',
      'Unlimited inventory tracking',
      'AI product recommendations',
      'Multilingual AI agronomist chat',
      'Sales analytics & geographic maps',
      'Priority phone support',
      'Offline-first sync',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
];

export default function PricingSection({ onDemoClick }) {
  return (
    <section
      data-testid="pricing-section"
      id="pricing"
      className="relative py-24 sm:py-32 overflow-hidden grain-overlay-dark"
      style={{ backgroundColor: '#0E1A14' }}
    >
      <div className="relative z-[2] max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-xs tracking-[0.25em] uppercase mb-4" style={{ color: '#D4A853' }}>
            Pricing
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight" style={{ color: '#F5F0E8' }}>
            Simple, transparent pricing
          </h2>
          <p className="font-body text-base sm:text-lg mt-4 max-w-xl mx-auto" style={{ color: '#9CAEA4' }}>
            Start with a 14-day free trial. No credit card required.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-3xl p-8 sm:p-10 border transition-all duration-300 ${
                plan.highlighted ? 'gold-glow-strong' : ''
              }`}
              style={{
                backgroundColor: plan.highlighted ? '#16271F' : 'rgba(22, 39, 31, 0.5)',
                borderColor: plan.highlighted ? 'rgba(212, 168, 83, 0.4)' : 'rgba(245, 240, 232, 0.06)',
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              data-testid={`pricing-${plan.name.toLowerCase()}-card`}
            >
              {/* Recommended badge */}
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full font-mono text-xs font-medium"
                    style={{ backgroundColor: '#D4A853', color: '#0E1A14' }}
                  >
                    <Sparkles size={12} />
                    Recommended
                  </span>
                </div>
              )}

              {/* Plan name */}
              <h3 className="font-heading text-2xl font-medium mb-2" style={{ color: '#F5F0E8' }}>
                {plan.name}
              </h3>
              <p className="font-body text-sm mb-6" style={{ color: '#9CAEA4' }}>
                {plan.description}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-mono text-sm" style={{ color: '#9CAEA4' }}>INR</span>
                <span className="font-heading text-5xl font-semibold" style={{ color: plan.highlighted ? '#D4A853' : '#F5F0E8' }}>
                  {plan.price}
                </span>
                <span className="font-body text-sm" style={{ color: '#9CAEA4' }}>{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-10">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check size={16} className="mt-0.5 flex-shrink-0" style={{ color: plan.highlighted ? '#D4A853' : '#2D6B4A' }} />
                    <span className="font-body text-sm" style={{ color: '#9CAEA4' }}>
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
                  backgroundColor: plan.highlighted ? '#D4A853' : 'transparent',
                  color: plan.highlighted ? '#0E1A14' : '#F5F0E8',
                  border: plan.highlighted ? 'none' : '1px solid rgba(245,240,232,0.15)',
                }}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
