import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

export default function DemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
      onClose();
    }, 2000);
  };

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            data-testid="demo-modal-backdrop"
            className="fixed inset-0 z-[60]"
            style={{ backgroundColor: 'rgba(14, 26, 20, 0.8)', backdropFilter: 'blur(8px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            data-testid="demo-modal"
            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-lg rounded-3xl border p-8 sm:p-10"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: 'rgba(26, 60, 43, 0.1)',
                boxShadow: '0 25px 100px rgba(14, 26, 20, 0.3)',
              }}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                data-testid="demo-modal-close"
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200"
                style={{ color: '#4A5D53' }}
              >
                <X size={18} />
              </button>

              {submitted ? (
                <motion.div
                  className="text-center py-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  data-testid="demo-success"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(26, 60, 43, 0.1)' }}>
                    <Send size={24} style={{ color: '#1A3C2B' }} />
                  </div>
                  <h3 className="font-heading text-2xl font-medium mb-2" style={{ color: '#1A3C2B' }}>
                    Request Received
                  </h3>
                  <p className="font-body text-sm" style={{ color: '#4A5D53' }}>
                    We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="mb-8">
                    <p className="font-mono text-xs tracking-[0.2em] uppercase mb-2" style={{ color: '#D4A853' }}>
                      Get Started
                    </p>
                    <h3 className="font-heading text-2xl sm:text-3xl font-medium" style={{ color: '#1A3C2B' }}>
                      Request a Demo
                    </h3>
                    <p className="font-body text-sm mt-2" style={{ color: '#4A5D53' }}>
                      Fill in your details and our team will reach out to schedule a personalized demo.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block font-body text-sm font-medium mb-1.5" style={{ color: '#1A3C2B' }}>
                        Full Name
                      </label>
                      <input
                        data-testid="demo-form-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange('name')}
                        className="w-full px-4 py-3 rounded-xl font-body text-sm border outline-none transition-all duration-200"
                        style={{
                          borderColor: 'rgba(26, 60, 43, 0.15)',
                          backgroundColor: '#F5F0E8',
                          color: '#0E1A14',
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#D4A853'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(26, 60, 43, 0.15)'}
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block font-body text-sm font-medium mb-1.5" style={{ color: '#1A3C2B' }}>
                        Phone Number
                      </label>
                      <input
                        data-testid="demo-form-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange('phone')}
                        className="w-full px-4 py-3 rounded-xl font-body text-sm border outline-none transition-all duration-200"
                        style={{
                          borderColor: 'rgba(26, 60, 43, 0.15)',
                          backgroundColor: '#F5F0E8',
                          color: '#0E1A14',
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#D4A853'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(26, 60, 43, 0.15)'}
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label className="block font-body text-sm font-medium mb-1.5" style={{ color: '#1A3C2B' }}>
                        Email
                      </label>
                      <input
                        data-testid="demo-form-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange('email')}
                        className="w-full px-4 py-3 rounded-xl font-body text-sm border outline-none transition-all duration-200"
                        style={{
                          borderColor: 'rgba(26, 60, 43, 0.15)',
                          backgroundColor: '#F5F0E8',
                          color: '#0E1A14',
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#D4A853'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(26, 60, 43, 0.15)'}
                        placeholder="dealer@example.com"
                      />
                    </div>

                    <div>
                      <label className="block font-body text-sm font-medium mb-1.5" style={{ color: '#1A3C2B' }}>
                        Message (Optional)
                      </label>
                      <textarea
                        data-testid="demo-form-message"
                        value={formData.message}
                        onChange={handleChange('message')}
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl font-body text-sm border outline-none transition-all duration-200 resize-none"
                        style={{
                          borderColor: 'rgba(26, 60, 43, 0.15)',
                          backgroundColor: '#F5F0E8',
                          color: '#0E1A14',
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#D4A853'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(26, 60, 43, 0.15)'}
                        placeholder="Tell us about your dealership..."
                      />
                    </div>

                    <button
                      data-testid="demo-form-submit"
                      type="submit"
                      className="w-full py-4 rounded-full font-body text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-[1.02] mt-2"
                      style={{ backgroundColor: '#1A3C2B', color: '#F5F0E8' }}
                    >
                      Submit Request
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
