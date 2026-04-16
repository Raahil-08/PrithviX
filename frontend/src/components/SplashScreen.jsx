import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function SplashScreen({ onEnter }) {
  const { copy } = useLanguage();
  const [isExiting, setIsExiting] = useState(false);
  const [logoLoaded] = useState(false);
  const [phase, setPhase] = useState("loader");

  const showIntroContent = phase === "intro";
  const isMorphing = phase === "expanding";

  const particles = useMemo(
    () =>
      Array.from({ length: 16 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2,
      })),
    [],
  );

  const handleEnter = () => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(() => onEnter(), 800);
  };

  const handleLoaderEnd = () => {
    if (phase !== "loader") return;
    setPhase("expanding");
    setTimeout(() => setPhase("intro"), 700);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          data-testid="splash-screen"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background: showIntroContent
              ? "radial-gradient(120% 100% at 50% 30%, rgba(23, 51, 37, 0.45) 0%, rgba(11, 24, 18, 0.94) 70%, rgba(8, 18, 13, 1) 100%)"
              : "var(--loader-matte)",
          }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {!showIntroContent && <div className="loader-bg-grain" />}

          {/* Loader video morph */}
          <motion.div
            className="absolute overflow-hidden splash-video-layer"
            initial={false}
            animate={{
              top: showIntroContent ? 0 : "50%",
              left: showIntroContent ? 0 : "50%",
              width: showIntroContent ? "100%" : "clamp(280px, 34vw, 520px)",
              height: showIntroContent ? "100%" : "auto",
              aspectRatio: showIntroContent ? "auto" : "1920 / 986",
              x: showIntroContent ? "0%" : "-50%",
              y: showIntroContent ? "0%" : "-50%",
              borderRadius: showIntroContent ? "0px" : "20px",
            }}
            transition={{
              duration: isMorphing ? 0.72 : 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            aria-hidden="true"
          >
            <video
              className={`splash-video ${showIntroContent ? "" : "splash-video-loader"}`}
              autoPlay
              muted
              playsInline
              preload="auto"
              poster="/prithvix-logo.jpg"
              onEnded={handleLoaderEnd}
              onError={() => setPhase("intro")}
            >
              <source src="/prithvix-loader.mp4" type="video/mp4" />
              <source src="/loader.mp4" type="video/mp4" />
              <source src="/prithvix-loader.webm" type="video/webm" />
            </video>
            {showIntroContent && (
              <div className="absolute inset-0 splash-video-fade" />
            )}
          </motion.div>

          {showIntroContent && (
            <>
              {/* Grain overlay */}
              <div className="absolute inset-0 grain-overlay-dark" />

              {/* Floating particles */}
              <div className="absolute inset-0">
                {particles.map((particle, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full"
                    style={{
                      backgroundColor: "rgba(212, 168, 83, 0.3)",
                      left: particle.left,
                      top: particle.top,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                      duration: particle.duration,
                      repeat: Infinity,
                      delay: particle.delay,
                    }}
                  />
                ))}
              </div>

              {/* Logo */}
              <motion.div
                className="relative z-10 text-center px-6"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Overline */}
                <motion.p
                  className="font-mono text-xs tracking-[0.3em] uppercase mb-6"
                  style={{ color: "rgba(212, 168, 83, 0.6)" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05, duration: 0.6 }}
                >
                  {copy.splash.overline}
                </motion.p>

                {/* Logo image */}
                <motion.div
                  className="splash-logo-shell"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.12,
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <h1
                    className="font-heading text-6xl sm:text-7xl lg:text-8xl font-semibold tracking-tight"
                    style={{ color: "#F5F0E8" }}
                  >
                    Prithvi
                    <span style={{ color: "#D4A853" }}>x</span>
                  </h1>
                </motion.div>

                {/* Underline */}
                <motion.div
                  className="mx-auto mt-4 h-px"
                  style={{ backgroundColor: "rgba(212, 168, 83, 0.4)" }}
                  initial={{ width: 0 }}
                  animate={{ width: 120 }}
                  transition={{
                    delay: 0.2,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />

                {/* Tagline */}
                <motion.p
                  className="font-body text-base mt-6 max-w-md mx-auto"
                  style={{ color: "rgba(245, 240, 232, 0.5)" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.28, duration: 0.6 }}
                >
                  {copy.splash.tagline}
                </motion.p>
              </motion.div>

              {/* Enter button */}
              <motion.button
                data-testid="splash-enter-btn"
                className="relative z-10 mt-10 px-7 py-2.5 rounded-full font-body text-sm font-medium tracking-wide border transition-all duration-300"
                style={{
                  color: "#D4A853",
                  borderColor: "rgba(212, 168, 83, 0.3)",
                  backgroundColor: "rgba(212, 168, 83, 0.05)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.34, duration: 0.5 }}
                onClick={handleEnter}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(212, 168, 83, 0.15)";
                  e.target.style.borderColor = "rgba(212, 168, 83, 0.6)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "rgba(212, 168, 83, 0.05)";
                  e.target.style.borderColor = "rgba(212, 168, 83, 0.3)";
                }}
              >
                {copy.splash.enter}
              </motion.button>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
