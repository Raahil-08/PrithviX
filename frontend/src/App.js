import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import '@/App.css';
import SplashScreen from '@/components/SplashScreen';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import StatsBar from '@/components/StatsBar';
import HowItWorks from '@/components/HowItWorks';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import DemoModal from '@/components/DemoModal';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showDemo, setShowDemo] = useState(false);

  return (
    <div className="App" data-testid="app-root">
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen onEnter={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {!showSplash && (
        <>
          <Header onDemoClick={() => setShowDemo(true)} />
          <main>
            <HeroSection onDemoClick={() => setShowDemo(true)} />
            <FeaturesSection />
            <StatsBar />
            <HowItWorks />
            <PricingSection onDemoClick={() => setShowDemo(true)} />
            <TestimonialsSection />
          </main>
          <Footer />
          <DemoModal isOpen={showDemo} onClose={() => setShowDemo(false)} />
        </>
      )}
    </div>
  );
}

export default App;
