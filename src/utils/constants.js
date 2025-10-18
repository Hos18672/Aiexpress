export const APP_COLORS = {
  background: '#0a0f24',
  primary: '#4f9cff',
  secondary: '#9d6cff',
  accent: '#00f0ff',
  text: '#ffffff',
  textSecondary: '#a0aec0'
};

export const ANIMATION_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  },
  staggerItem: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }
};

export const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'de', name: 'Deutsch' }
];

export const SERVICE_CATEGORIES = [
  { id: 'all', name: 'All Services' },
  { id: 'coaching', name: 'AI Coaching' },
  { id: 'workshops', name: 'Workshops' },
  { id: 'automation', name: 'Automation' },
  { id: 'analytics', name: 'Data Analytics' },
  { id: 'custom', name: 'Custom AI Solutions' },
  { id: 'strategy', name: 'AI Strategy' }
];