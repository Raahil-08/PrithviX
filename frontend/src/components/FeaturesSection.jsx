import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  UserPlus, QrCode, MapPin, Brain, 
  BookOpen, Package, BarChart3, Globe,
  MessageCircle, Languages
} from 'lucide-react';

const features = [
  {
    id: 'farmer-registration',
    overline: 'Onboarding',
    title: 'Farmer Registration & QR ID Cards',
    description: 'Register farmers in seconds with Aadhaar-linked profiles. Generate unique QR-coded ID cards that work offline, letting every farmer in your network be instantly identifiable at any touchpoint.',
    icon: UserPlus,
    secondaryIcon: QrCode,
    color: '#D4A853',
    mockupType: 'card',
  },
  {
    id: 'field-visit',
    overline: 'Operations',
    title: 'Field Visit Logging & AI Recommendations',
    description: 'Log every field visit with GPS coordinates, crop photos, and soil observations. Our AI engine instantly analyzes the data and recommends the right products from your inventory.',
    icon: MapPin,
    secondaryIcon: Brain,
    color: '#2D6B4A',
    mockupType: 'map',
  },
  {
    id: 'credit-ledger',
    overline: 'Finance',
    title: 'Udhaar & Credit Ledger',
    description: 'Digitize your khata book. Track every credit transaction, set payment reminders, and get real-time visibility into outstanding balances across all farmer accounts.',
    icon: BookOpen,
    secondaryIcon: null,
    color: '#D4A853',
    mockupType: 'ledger',
  },
  {
    id: 'inventory',
    overline: 'Stock',
    title: 'Inventory & Stock Alerts',
    description: 'Real-time inventory tracking with automatic low-stock alerts. Know exactly what is moving, what is sitting, and when to reorder, before you run out.',
    icon: Package,
    secondaryIcon: null,
    color: '#2D6B4A',
    mockupType: 'inventory',
  },
  {
    id: 'analytics',
    overline: 'Intelligence',
    title: 'Sales Analytics & Geographic Map',
    description: 'Visualize your sales data on geographic maps. Understand regional demand, track dealer performance across territories, and make data-driven stocking decisions.',
    icon: BarChart3,
    secondaryIcon: Globe,
    color: '#D4A853',
    mockupType: 'chart',
  },
  {
    id: 'ai-chat',
    overline: 'AI Assistant',
    title: 'Multilingual AI Agronomist Chat',
    description: 'An AI agronomist available 24/7 in English, Hindi, Marathi, Gujarati, and Rajasthani. Farmers and dealers get instant crop advice, pest identification, and product recommendations.',
    icon: MessageCircle,
    secondaryIcon: Languages,
    color: '#2D6B4A',
    mockupType: 'chat',
  },
];

function FeatureMockup({ feature, index }) {
  const isGold = feature.color === '#D4A853';
  
  if (feature.mockupType === 'card') {
    return (
      <div className="relative w-full max-w-sm mx-auto">
        {/* Phone mockup */}
        <div className="rounded-3xl p-6 border" style={{ 
          backgroundColor: '#0E1A14',
          borderColor: 'rgba(212,168,83,0.15)',
        }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(212,168,83,0.15)' }}>
              <UserPlus size={20} style={{ color: '#D4A853' }} />
            </div>
            <div>
              <p className="font-body text-sm font-medium" style={{ color: '#F5F0E8' }}>New Farmer</p>
              <p className="font-mono text-xs" style={{ color: '#9CAEA4' }}>ID: PRX-2847</p>
            </div>
          </div>
          <div className="space-y-2">
            {['Rajesh Kumar', 'Village: Bhopal Khurd', 'Crop: Wheat, Soybean'].map((text, i) => (
              <motion.div 
                key={i}
                className="h-8 rounded-lg px-3 flex items-center"
                style={{ backgroundColor: 'rgba(26,60,43,0.4)' }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="font-body text-xs" style={{ color: '#9CAEA4' }}>{text}</span>
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="mt-4 p-3 rounded-xl flex items-center justify-center gap-2"
            style={{ backgroundColor: 'rgba(212,168,83,0.1)', border: '1px solid rgba(212,168,83,0.2)' }}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <QrCode size={24} style={{ color: '#D4A853' }} />
            <span className="font-mono text-xs" style={{ color: '#D4A853' }}>QR ID Generated</span>
          </motion.div>
        </div>
      </div>
    );
  }

  if (feature.mockupType === 'map') {
    return (
      <div className="relative w-full max-w-sm mx-auto">
        <div className="rounded-3xl p-6 border" style={{ 
          backgroundColor: '#0E1A14',
          borderColor: 'rgba(45,107,74,0.2)',
        }}>
          {/* Map dots */}
          <div className="relative h-40 rounded-xl mb-4" style={{ backgroundColor: 'rgba(26,60,43,0.3)' }}>
            {[
              { x: 20, y: 30 }, { x: 60, y: 20 }, { x: 40, y: 60 },
              { x: 75, y: 45 }, { x: 30, y: 80 }, { x: 85, y: 70 },
            ].map((pos, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full"
                style={{ 
                  left: `${pos.x}%`, top: `${pos.y}%`,
                  backgroundColor: i === 2 ? '#D4A853' : '#2D6B4A',
                  boxShadow: i === 2 ? '0 0 12px rgba(212,168,83,0.5)' : 'none',
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                viewport={{ once: true }}
              />
            ))}
          </div>
          <div className="p-3 rounded-xl" style={{ backgroundColor: 'rgba(45,107,74,0.15)' }}>
            <div className="flex items-center gap-2 mb-2">
              <Brain size={16} style={{ color: '#D4A853' }} />
              <span className="font-mono text-xs" style={{ color: '#D4A853' }}>AI Recommendation</span>
            </div>
            <p className="font-body text-xs" style={{ color: '#9CAEA4' }}>
              Based on soil analysis: Apply DAP fertilizer at 50kg/acre
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (feature.mockupType === 'ledger') {
    return (
      <div className="relative w-full max-w-sm mx-auto">
        <div className="rounded-3xl p-6 border" style={{ 
          backgroundColor: '#0E1A14',
          borderColor: 'rgba(212,168,83,0.15)',
        }}>
          <div className="flex items-center justify-between mb-4">
            <span className="font-body text-sm font-medium" style={{ color: '#F5F0E8' }}>Credit Ledger</span>
            <span className="font-mono text-xs px-2 py-1 rounded-full" style={{ backgroundColor: 'rgba(212,168,83,0.15)', color: '#D4A853' }}>3 Pending</span>
          </div>
          {[
            { name: 'Suresh Patel', amount: '12,500', status: 'pending' },
            { name: 'Amit Sharma', amount: '8,200', status: 'paid' },
            { name: 'Ravi Singh', amount: '15,000', status: 'pending' },
          ].map((entry, i) => (
            <motion.div
              key={i}
              className="flex items-center justify-between py-3 border-b"
              style={{ borderColor: 'rgba(245,240,232,0.05)' }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.15 }}
              viewport={{ once: true }}
            >
              <span className="font-body text-sm" style={{ color: '#9CAEA4' }}>{entry.name}</span>
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm" style={{ color: entry.status === 'paid' ? '#2D6B4A' : '#D4A853' }}>
                  {entry.amount}
                </span>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.status === 'paid' ? '#2D6B4A' : '#D4A853' }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (feature.mockupType === 'inventory') {
    return (
      <div className="relative w-full max-w-sm mx-auto">
        <div className="rounded-3xl p-6 border" style={{ 
          backgroundColor: '#0E1A14',
          borderColor: 'rgba(45,107,74,0.2)',
        }}>
          {[
            { name: 'DAP Fertilizer', stock: 85, unit: '120 bags' },
            { name: 'Urea', stock: 15, unit: '18 bags' },
            { name: 'Pesticide A', stock: 60, unit: '45 ltrs' },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="mb-4 last:mb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-body text-sm" style={{ color: '#F5F0E8' }}>{item.name}</span>
                <span className="font-mono text-xs" style={{ color: '#9CAEA4' }}>{item.unit}</span>
              </div>
              <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(26,60,43,0.4)' }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: item.stock < 20 ? '#D4A853' : '#2D6B4A' }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.stock}%` }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                />
              </div>
              {item.stock < 20 && (
                <p className="font-mono text-xs mt-1" style={{ color: '#D4A853' }}>Low Stock Alert</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (feature.mockupType === 'chart') {
    return (
      <div className="relative w-full max-w-sm mx-auto">
        <div className="rounded-3xl p-6 border" style={{ 
          backgroundColor: '#0E1A14',
          borderColor: 'rgba(212,168,83,0.15)',
        }}>
          <div className="flex items-end gap-2 h-32 mb-4">
            {[40, 65, 45, 80, 60, 90, 75].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-t-md"
                style={{ backgroundColor: i === 5 ? '#D4A853' : '#2D6B4A' }}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.6 }}
                viewport={{ once: true }}
              />
            ))}
          </div>
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs" style={{ color: '#9CAEA4' }}>Jan - Jul 2025</span>
            <span className="font-body text-sm font-medium" style={{ color: '#D4A853' }}>+32% Growth</span>
          </div>
        </div>
      </div>
    );
  }

  if (feature.mockupType === 'chat') {
    return (
      <div className="relative w-full max-w-sm mx-auto">
        <div className="rounded-3xl p-6 border" style={{ 
          backgroundColor: '#0E1A14',
          borderColor: 'rgba(45,107,74,0.2)',
        }}>
          <div className="space-y-3">
            {[
              { from: 'user', text: 'Mere gehu mein peeli patti aa rahi hai', lang: 'Hindi' },
              { from: 'ai', text: 'Yeh nitrogen ki kami ho sakti hai. Urea 25kg/acre apply karein aur zinc spray bhi karein.' },
            ].map((msg, i) => (
              <motion.div
                key={i}
                className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.3 }}
                viewport={{ once: true }}
              >
                <div
                  className="max-w-[85%] rounded-2xl px-4 py-3"
                  style={{
                    backgroundColor: msg.from === 'user' ? 'rgba(26,60,43,0.5)' : 'rgba(212,168,83,0.1)',
                    border: msg.from === 'ai' ? '1px solid rgba(212,168,83,0.2)' : 'none',
                  }}
                >
                  {msg.from === 'ai' && (
                    <div className="flex items-center gap-1.5 mb-1">
                      <Brain size={12} style={{ color: '#D4A853' }} />
                      <span className="font-mono text-[10px]" style={{ color: '#D4A853' }}>AI Agronomist</span>
                    </div>
                  )}
                  <p className="font-body text-sm" style={{ color: msg.from === 'user' ? '#F5F0E8' : '#9CAEA4' }}>
                    {msg.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex gap-2 mt-3">
            {['EN', 'HI', 'MR', 'GU', 'RJ'].map((lang, i) => (
              <span
                key={lang}
                className="font-mono text-[10px] px-2 py-1 rounded-full"
                style={{
                  backgroundColor: i === 1 ? 'rgba(212,168,83,0.2)' : 'rgba(26,60,43,0.3)',
                  color: i === 1 ? '#D4A853' : '#9CAEA4',
                }}
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
}

function FeatureCard({ feature, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16 sm:py-24 ${
        !isEven ? 'lg:[&>*:first-child]:order-2' : ''
      }`}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Text */}
      <div>
        <motion.p
          className="font-mono text-xs tracking-[0.2em] uppercase mb-4"
          style={{ color: '#D4A853' }}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {feature.overline}
        </motion.p>
        <motion.h3
          className="font-heading text-3xl sm:text-4xl font-medium tracking-tight mb-6"
          style={{ color: '#1A3C2B' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {feature.title}
        </motion.h3>
        <motion.p
          className="font-body text-base sm:text-lg leading-relaxed"
          style={{ color: '#4A5D53' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {feature.description}
        </motion.p>
      </div>

      {/* Mockup */}
      <div>
        <FeatureMockup feature={feature} index={index} />
      </div>
    </motion.div>
  );
}

export default function FeaturesSection() {
  return (
    <section
      data-testid="features-section"
      id="features"
      className="relative py-24 sm:py-32"
      style={{ backgroundColor: '#F5F0E8' }}
    >
      <div className="grain-overlay absolute inset-0" />
      
      <div className="relative z-[2] max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          className="text-center mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-xs tracking-[0.25em] uppercase mb-4" style={{ color: '#D4A853' }}>
            Platform Capabilities
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight" style={{ color: '#1A3C2B' }}>
            Everything a dealer needs.
            <br />
            <span style={{ color: '#4A5D53' }}>Nothing they don't.</span>
          </h2>
        </motion.div>

        {/* Feature cards */}
        <div className="divide-y" style={{ borderColor: 'rgba(26, 60, 43, 0.08)' }}>
          {features.map((feature, i) => (
            <FeatureCard key={feature.id} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
