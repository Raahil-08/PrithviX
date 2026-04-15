import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen({ onEnter }) {
  const [isExiting, setIsExiting] = useState(false);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => onEnter(), 800);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          data-testid="splash-screen"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          style={{ backgroundColor: '#0E1A14' }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Grain overlay */}
          <div className="absolute inset-0 grain-overlay-dark" />
          
          {/* Animated gold lines */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px w-full"
                style={{ 
                  top: `${20 + i * 15}%`,
                  background: 'linear-gradient(90deg, transparent, rgba(212,168,83,0.1), transparent)',
                }}
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ 
                  duration: 4 + i * 0.5, 
                  repeat: Infinity, 
                  ease: 'linear',
                  delay: i * 0.3 
                }}
              />
            ))}
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  backgroundColor: 'rgba(212, 168, 83, 0.3)',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Logo */}
          <motion.div
            className="relative z-10 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Overline */}
            <motion.p
              className="font-mono text-xs tracking-[0.3em] uppercase mb-6"
              style={{ color: 'rgba(212, 168, 83, 0.6)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Agricultural Intelligence
            </motion.p>

            {/* Logo text */}
            <motion.h1
              className="font-heading text-6xl sm:text-7xl lg:text-8xl font-semibold tracking-tight"
              style={{ color: '#F5F0E8' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              Prithvi
              <span style={{ color: '#D4A853' }}>x</span>
            </motion.h1>

            {/* Underline */}
            <motion.div
              className="mx-auto mt-4 h-px"
              style={{ backgroundColor: 'rgba(212, 168, 83, 0.4)' }}
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Tagline */}
            <motion.p
              className="font-body text-base mt-6 max-w-md mx-auto"
              style={{ color: 'rgba(245, 240, 232, 0.5)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              Powering the future of rural agricultural commerce
            </motion.p>
          </motion.div>

          {/* Enter button */}
          <motion.button
            data-testid="splash-enter-btn"
            className="relative z-10 mt-12 px-8 py-3 rounded-full font-body text-sm font-medium tracking-wide border transition-all duration-300"
            style={{
              color: '#D4A853',
              borderColor: 'rgba(212, 168, 83, 0.3)',
              backgroundColor: 'rgba(212, 168, 83, 0.05)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            onClick={handleEnter}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(212, 168, 83, 0.15)';
              e.target.style.borderColor = 'rgba(212, 168, 83, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(212, 168, 83, 0.05)';
              e.target.style.borderColor = 'rgba(212, 168, 83, 0.3)';
            }}
          >
            Enter Experience
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
