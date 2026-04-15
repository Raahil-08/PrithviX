import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Globe, Zap, Eye } from 'lucide-react';

const stats = [
  { icon: Users, value: 2000, suffix: '+', label: 'Farmers Registered', prefix: '' },
  { icon: Globe, value: 5, suffix: '', label: 'Supported Languages', prefix: '' },
  { icon: Zap, value: 30, suffix: '%', label: 'Faster Field Operations', prefix: '' },
  { icon: Eye, value: 100, suffix: '%', label: 'Dealer Visibility on Credit & Stock', prefix: '' },
];

function AnimatedCounter({ value, suffix, prefix, inView }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;
    let startTime = null;
    const duration = 2000;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * value));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };
    requestAnimationFrame(animate);
  }, [inView, value]);

  return (
    <span className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight" style={{ color: '#D4A853' }}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      data-testid="stats-section"
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden grain-overlay-dark"
      style={{ backgroundColor: '#0E1A14' }}
    >
      <div className="relative z-[2] max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              data-testid={`stat-${i}`}
            >
              <div className="flex justify-center mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(212, 168, 83, 0.1)' }}
                >
                  <stat.icon size={20} style={{ color: '#D4A853' }} />
                </div>
              </div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} inView={isInView} />
              <p className="font-body text-sm mt-2" style={{ color: '#9CAEA4' }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
