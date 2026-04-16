export const languageOptions = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिंदी' },
  { code: 'gu', label: 'ગુજરાતી' },
];

export const defaultLanguage = 'en';

export const translations = {
  en: {
    header: {
      nav: ['Features', 'How It Works', 'Pricing', 'Testimonials'],
      demoCta: 'Request a Demo',
      languageLabel: 'Language',
    },
    hero: {
      overline: 'Dealer Management Platform',
      title: [
        'Run your agri dealership',
        'with the clarity of',
        'modern software.',
      ],
      subtitle:
        'The AI-powered management platform built for agricultural input dealers across rural India. From farmer registration to credit ledgers, manage everything in one place.',
      primaryCta: 'Request a Demo',
      secondaryCta: 'Watch How It Works',
    },
    splash: {
      overline: 'Agricultural Intelligence',
      tagline: 'Powering the future of rural agricultural commerce',
      enter: 'Enter Experience',
    },
    features: {
      overline: 'Platform Capabilities',
      title: ['Everything a dealer needs.', "Nothing they don't."],
      items: [
        {
          overline: 'Onboarding',
          title: 'Farmer Registration & QR ID Cards',
          description:
            'Register farmers in seconds with Aadhaar-linked profiles. Generate unique QR-coded ID cards that work offline, letting every farmer in your network be instantly identifiable at any touchpoint.',
          mockup: {
            type: 'card',
            headerLabel: 'New Farmer',
            idLabel: 'ID: PRX-2847',
            rows: ['Rajesh Kumar', 'Village: Bhopal Khurd', 'Crop: Wheat, Soybean'],
            status: 'QR ID Generated',
          },
        },
        {
          overline: 'Operations',
          title: 'Field Visit Logging & AI Recommendations',
          description:
            'Log every field visit with GPS coordinates, crop photos, and soil observations. Our AI engine instantly analyzes the data and recommends the right products from your inventory.',
          mockup: {
            type: 'map',
            recommendation: 'AI Recommendation',
            recommendationText: 'Based on soil analysis: Apply DAP fertilizer at 50kg/acre',
          },
        },
        {
          overline: 'Finance',
          title: 'Udhaar & Credit Ledger',
          description:
            'Digitize your khata book. Track every credit transaction, set payment reminders, and get real-time visibility into outstanding balances across all farmer accounts.',
          mockup: {
            type: 'ledger',
            title: 'Credit Ledger',
            pending: '3 Pending',
            entries: [
              { name: 'Suresh Patel', amount: '12,500', status: 'pending' },
              { name: 'Amit Sharma', amount: '8,200', status: 'paid' },
              { name: 'Ravi Singh', amount: '15,000', status: 'pending' },
            ],
          },
        },
        {
          overline: 'Stock',
          title: 'Inventory & Stock Alerts',
          description:
            'Real-time inventory tracking with automatic low-stock alerts. Know exactly what is moving, what is sitting, and when to reorder, before you run out.',
          mockup: {
            type: 'inventory',
            items: [
              { name: 'DAP Fertilizer', stock: 85, unit: '120 bags' },
              { name: 'Urea', stock: 15, unit: '18 bags' },
              { name: 'Pesticide A', stock: 60, unit: '45 ltrs' },
            ],
            alert: 'Low Stock Alert',
          },
        },
        {
          overline: 'Intelligence',
          title: 'Sales Analytics & Geographic Map',
          description:
            'Visualize your sales data on geographic maps. Understand regional demand, track dealer performance across territories, and make data-driven stocking decisions.',
          mockup: {
            type: 'chart',
            range: 'Jan - Jul 2025',
            growth: '+32% Growth',
          },
        },
        {
          overline: 'AI Assistant',
          title: 'Multilingual AI Agronomist Chat',
          description:
            'An AI agronomist available 24/7 in English, Hindi, Marathi, Gujarati, and Rajasthani. Farmers and dealers get instant crop advice, pest identification, and product recommendations.',
          mockup: {
            type: 'chat',
            userLabel: 'User',
            aiLabel: 'AI Agronomist',
            userMessage: 'Mere gehu mein peeli patti aa rahi hai',
            aiMessage:
              'Yeh nitrogen ki kami ho sakti hai. Urea 25kg/acre apply karein aur zinc spray bhi karein.',
            languages: ['EN', 'HI', 'MR', 'GU', 'RJ'],
          },
        },
      ],
    },
    stats: {
      items: [
        { label: 'Farmers Registered' },
        { label: 'Supported Languages' },
        { label: 'Faster Field Operations' },
        { label: 'Dealer Visibility on Credit & Stock' },
      ],
    },
    howItWorks: {
      overline: 'Getting Started',
      title: 'How It Works',
      steps: [
        {
          title: 'Register Your Dealership',
          description:
            'Sign up in minutes with your business details. Set up your product catalog and pricing structure.',
        },
        {
          title: 'Onboard Your Farmers',
          description:
            'Register farmers with instant QR ID card generation. Build your farmer network digitally.',
        },
        {
          title: 'Log Visits & Sales',
          description:
            'Record field visits, credit transactions, and sales. Everything syncs even in low-connectivity areas.',
        },
        {
          title: 'Track Everything',
          description:
            'Access real-time dashboards for inventory, credit, analytics, and AI-powered recommendations.',
        },
      ],
    },
    pricing: {
      overline: 'Pricing',
      title: 'Simple, transparent pricing',
      subtitle: 'Start with a 14-day free trial. No credit card required.',
      plans: [
        {
          name: 'Basic',
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
        },
        {
          name: 'Premium',
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
      ],
      recommended: 'Recommended',
    },
    testimonials: {
      overline: 'Testimonials',
      title: ['Trusted by dealers', 'across rural India'],
      items: [
        {
          quote:
            'Prithvix transformed how we manage our 800+ farmer network. The credit ledger alone saved us hours of manual bookkeeping every week.',
          name: 'Ramesh Patel',
          role: 'Agri Input Dealer',
          location: 'Anand, Gujarat',
        },
        {
          quote:
            'The AI agronomist chat in Hindi is a game-changer. My farmers ask questions directly and get proper recommendations. It builds trust like nothing else.',
          name: 'Sunita Devi',
          role: 'Seed & Fertilizer Dealer',
          location: 'Varanasi, Uttar Pradesh',
        },
        {
          quote:
            'We went from tracking stock on paper to getting real-time alerts before we run out. My reorder accuracy improved dramatically in just two months.',
          name: 'Vikram Singh',
          role: 'Agricultural Retailer',
          location: 'Kota, Rajasthan',
        },
        {
          quote:
            'The QR farmer ID cards make every interaction faster. Farmers feel recognized, and we can pull up their complete history in seconds.',
          name: 'Priya Sharma',
          role: 'Multi-brand Agri Dealer',
          location: 'Nagpur, Maharashtra',
        },
      ],
      badges: ['Made in India', 'Offline-First', 'Built for Agri Retailers'],
    },
    footer: {
      description:
        'The AI-powered dealer management platform built for agricultural input distributors across rural India.',
      titles: ['Product', 'Company', 'Support', 'Legal'],
      links: {
        Product: ['Features', 'Pricing', 'How It Works', 'Integrations'],
        Company: ['About', 'Blog', 'Careers', 'Contact'],
        Support: ['Help Center', 'Documentation', 'Community', 'Status'],
        Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
      },
      social: ['Twitter', 'LinkedIn', 'YouTube'],
      bottomLeft: '2025 Prithvix Technologies Pvt. Ltd. All rights reserved.',
      bottomRight: 'Built with care for rural India',
    },
    demoModal: {
      getStarted: 'Get Started',
      title: 'Request a Demo',
      description:
        'Fill in your details and our team will reach out to schedule a personalized demo.',
      successTitle: 'Request Received',
      successDescription: "We'll get back to you within 24 hours.",
      labels: {
        name: 'Full Name',
        phone: 'Phone Number',
        email: 'Email',
        message: 'Message (Optional)',
      },
      placeholders: {
        name: 'Enter your full name',
        phone: '+91 98765 43210',
        email: 'dealer@example.com',
        message: 'Tell us about your dealership...',
      },
      submit: 'Submit Request',
    },
    whatsapp: {
      title: 'Chat with us on WhatsApp',
      description: 'Get a quick demo or ask any questions about Prithvix.',
      cta: 'Start Chat',
      message:
        'Hi, I am interested in Prithvix for my agri dealership. Can you share more details?',
    },
  },
  hi: {
    header: {
      nav: ['फीचर्स', 'यह कैसे काम करता है', 'मूल्य', 'प्रशंसापत्र'],
      demoCta: 'डेमो अनुरोध करें',
      languageLabel: 'भाषा',
    },
    hero: {
      overline: 'डीलर प्रबंधन प्लेटफ़ॉर्म',
      title: [
        'अपनी कृषि डीलरशिप को चलाइए',
        'आधुनिक सॉफ़्टवेयर की स्पष्टता के साथ',
        'बेहतर नियंत्रण के साथ.',
      ],
      subtitle:
        'रूरल इंडिया के एग्री इनपुट डीलरों के लिए बनाया गया AI-संचालित प्रबंधन प्लेटफ़ॉर्म। किसान पंजीकरण से लेकर क्रेडिट लेजर तक, सब कुछ एक ही जगह संभालिए।',
      primaryCta: 'डेमो अनुरोध करें',
      secondaryCta: 'कैसे काम करता है देखें',
    },
    splash: {
      overline: 'कृषि इंटेलिजेंस',
      tagline: 'ग्रामीण कृषि व्यापार के भविष्य को आगे बढ़ा रहा है',
      enter: 'अनुभव शुरू करें',
    },
    features: {
      overline: 'प्लेटफ़ॉर्म क्षमताएँ',
      title: ['डीलर को जो कुछ चाहिए.', 'और जो नहीं चाहिए वो कुछ नहीं.'],
      items: [
        {
          overline: 'ऑनबोर्डिंग',
          title: 'किसान पंजीकरण और QR ID कार्ड',
          description:
            'आधार-लिंक्ड प्रोफ़ाइल के साथ कुछ ही सेकंड में किसान पंजीकरण करें। ऑफ़लाइन भी काम करने वाले यूनिक QR ID कार्ड बनाइए, ताकि आपके नेटवर्क का हर किसान हर जगह तुरंत पहचान में आ सके।',
          mockup: {
            type: 'card',
            headerLabel: 'नया किसान',
            idLabel: 'ID: PRX-2847',
            rows: ['राजेश कुमार', 'गाँव: भोपाल खुर्द', 'फ़सल: गेहूँ, सोयाबीन'],
            status: 'QR ID तैयार',
          },
        },
        {
          overline: 'ऑपरेशन्स',
          title: 'फील्ड विज़िट लॉगिंग और AI सुझाव',
          description:
            'GPS लोकेशन, फसल की फोटो और मिट्टी के निरीक्षण के साथ हर विज़िट लॉग करें। हमारा AI तुरंत डेटा का विश्लेषण करके आपके स्टॉक में से सही उत्पाद सुझाता है।',
          mockup: {
            type: 'map',
            recommendation: 'AI सुझाव',
            recommendationText: 'मिट्टी के विश्लेषण के आधार पर: DAP उर्वरक 50kg/acre लगाइए',
          },
        },
        {
          overline: 'वित्त',
          title: 'उधार और क्रेडिट लेजर',
          description:
            'अपनी खाता बुक को डिजिटल बनाइए। हर क्रेडिट ट्रांज़ैक्शन ट्रैक कीजिए, भुगतान रिमाइंडर सेट कीजिए, और सभी किसान खातों के बकाया का रीयल-टाइम दृश्य पाएं।',
          mockup: {
            type: 'ledger',
            title: 'क्रेडिट लेजर',
            pending: '3 बकाया',
            entries: [
              { name: 'सुरेश पटेल', amount: '12,500', status: 'pending' },
              { name: 'अमित शर्मा', amount: '8,200', status: 'paid' },
              { name: 'रवि सिंह', amount: '15,000', status: 'pending' },
            ],
          },
        },
        {
          overline: 'स्टॉक',
          title: 'इन्वेंटरी और स्टॉक अलर्ट',
          description:
            'ऑटोमैटिक लो-स्टॉक अलर्ट के साथ रीयल-टाइम इन्वेंटरी ट्रैकिंग। क्या बिक रहा है, क्या पड़ा है, और कब री-ऑर्डर करना है, सब कुछ पहले से जानिए।',
          mockup: {
            type: 'inventory',
            items: [
              { name: 'DAP उर्वरक', stock: 85, unit: '120 बैग' },
              { name: 'यूरिया', stock: 15, unit: '18 बैग' },
              { name: 'कीटनाशक A', stock: 60, unit: '45 लीटर' },
            ],
            alert: 'कम स्टॉक अलर्ट',
          },
        },
        {
          overline: 'इंटेलिजेंस',
          title: 'सेल्स एनालिटिक्स और जियोग्राफिक मैप',
          description:
            'जियोग्राफिक मैप पर अपने सेल्स डेटा को विज़ुअलाइज़ करें। क्षेत्रीय मांग समझिए, टेरिटरी के हिसाब से डीलर परफॉर्मेंस ट्रैक कीजिए, और डेटा-आधारित स्टॉकिंग निर्णय लीजिए।',
          mockup: {
            type: 'chart',
            range: 'जनवरी - जुलाई 2025',
            growth: '+32% वृद्धि',
          },
        },
        {
          overline: 'AI असिस्टेंट',
          title: 'बहुभाषी AI कृषिविज्ञानी चैट',
          description:
            '24/7 उपलब्ध AI कृषिविज्ञानी English, Hindi, Marathi, Gujarati और Rajasthani में मदद करता है। किसान और डीलर तुरंत फसल सलाह, कीट पहचान और उत्पाद सुझाव पा सकते हैं।',
          mockup: {
            type: 'chat',
            userLabel: 'उपयोगकर्ता',
            aiLabel: 'AI कृषिविज्ञानी',
            userMessage: 'मेरी गेहूँ में पीली पत्ती आ रही है',
            aiMessage:
              'यह नाइट्रोजन की कमी हो सकती है। 25kg/acre यूरिया लगाइए और ज़िंक स्प्रे भी कीजिए।',
            languages: ['EN', 'HI', 'MR', 'GU', 'RJ'],
          },
        },
      ],
    },
    stats: {
      items: [
        { label: 'पंजीकृत किसान' },
        { label: 'समर्थित भाषाएँ' },
        { label: 'तेज़ फील्ड ऑपरेशन्स' },
        { label: 'क्रेडिट और स्टॉक पर डीलर दृश्यता' },
      ],
    },
    howItWorks: {
      overline: 'शुरुआत कैसे करें',
      title: 'यह कैसे काम करता है',
      steps: [
        { title: 'अपनी डीलरशिप रजिस्टर करें', description: 'अपने बिज़नेस विवरण के साथ कुछ ही मिनटों में साइन अप करें। अपना प्रोडक्ट कैटलॉग और प्राइसिंग सेट करें।' },
        { title: 'अपने किसानों को ऑनबोर्ड करें', description: 'तुरंत QR ID कार्ड जेनरेशन के साथ किसानों को रजिस्टर करें। अपना किसान नेटवर्क डिजिटल रूप से बनाइए।' },
        { title: 'विज़िट और बिक्री लॉग करें', description: 'फील्ड विज़िट, क्रेडिट ट्रांज़ैक्शन और बिक्री रिकॉर्ड करें। कम कनेक्टिविटी वाले क्षेत्रों में भी सब कुछ सिंक होता है।' },
        { title: 'सब कुछ ट्रैक करें', description: 'इन्वेंटरी, क्रेडिट, एनालिटिक्स और AI सुझावों के लिए रीयल-टाइम डैशबोर्ड एक्सेस करें।' },
      ],
    },
    pricing: {
      overline: 'मूल्य',
      title: 'सादा, पारदर्शी मूल्य निर्धारण',
      subtitle: '14 दिन का फ्री ट्रायल शुरू करें। क्रेडिट कार्ड की ज़रूरत नहीं।',
      plans: [
        {
          name: 'बेसिक',
          description: 'डिजिटल ऑपरेशन्स शुरू करने वाले छोटे डीलरों के लिए बिल्कुल सही।',
          features: [
            '500 तक किसान पंजीकरण',
            'QR ID कार्ड जेनरेशन',
            'बेसिक क्रेडिट लेजर',
            'इन्वेंटरी ट्रैकिंग (50 उत्पाद)',
            'फील्ड विज़िट लॉगिंग',
            'ईमेल सपोर्ट',
          ],
          cta: 'फ्री ट्रायल शुरू करें',
        },
        {
          name: 'प्रीमियम',
          description: 'स्थापित डीलरों के लिए जिन्हें AI आधारित इनसाइट्स और अनलिमिटेड स्केल चाहिए।',
          features: [
            'अनलिमिटेड किसान पंजीकरण',
            'NFC सपोर्ट के साथ QR ID कार्ड',
            'एडवांस्ड क्रेडिट लेजर और रिमाइंडर',
            'अनलिमिटेड इन्वेंटरी ट्रैकिंग',
            'AI उत्पाद सुझाव',
            'बहुभाषी AI कृषिविज्ञानी चैट',
            'सेल्स एनालिटिक्स और जियोग्राफिक मैप',
            'प्राथमिकता फोन सपोर्ट',
            'ऑफ़लाइन-फर्स्ट सिंक',
          ],
          cta: 'फ्री ट्रायल शुरू करें',
          highlighted: true,
        },
      ],
      recommended: 'सुझाया गया',
    },
    testimonials: {
      overline: 'प्रशंसापत्र',
      title: ['रूरल इंडिया भर के', 'डीलरों द्वारा विश्वसनीय'],
      items: [
        {
          quote:
            'Prithvix ने हमारे 800+ किसान नेटवर्क को मैनेज करने का तरीका बदल दिया। सिर्फ क्रेडिट लेजर ने हर हफ्ते घंटों की मैनुअल बुककीपिंग बचाई।',
          name: 'रमेश पटेल',
          role: 'एग्री इनपुट डीलर',
          location: 'आणंद, गुजरात',
        },
        {
          quote:
            'हिंदी में AI कृषिविज्ञानी चैट गेम-चेंजर है। मेरे किसान सीधे सवाल पूछते हैं और सही सुझाव पाते हैं। इससे भरोसा बनता है।',
          name: 'सुनिता देवी',
          role: 'बीज और उर्वरक डीलर',
          location: 'वाराणसी, उत्तर प्रदेश',
        },
        {
          quote:
            'हम पेपर स्टॉक से रीयल-टाइम अलर्ट तक आ गए। दो महीनों में मेरी री-ऑर्डर सटीकता बहुत बेहतर हुई।',
          name: 'विक्रम सिंह',
          role: 'कृषि रिटेलर',
          location: 'कोटा, राजस्थान',
        },
        {
          quote:
            'QR किसान ID कार्ड हर बातचीत को तेज बनाते हैं। किसान खुद को पहचान मिलती हुई महसूस करते हैं, और हम उनका पूरा इतिहास सेकंडों में देख सकते हैं।',
          name: 'प्रिया शर्मा',
          role: 'मल्टी-ब्रांड एग्री डीलर',
          location: 'नागपुर, महाराष्ट्र',
        },
      ],
      badges: ['भारत में बना', 'ऑफ़लाइन-फर्स्ट', 'एग्री रिटेलर्स के लिए बनाया गया'],
    },
    footer: {
      description:
        'रूरल इंडिया के कृषि इनपुट डिस्ट्रीब्यूटर्स के लिए बनाया गया AI-संचालित डीलर प्रबंधन प्लेटफ़ॉर्म।',
      titles: ['प्रोडक्ट', 'कंपनी', 'सपोर्ट', 'कानूनी'],
      links: {
        Product: ['फ़ीचर्स', 'मूल्य', 'यह कैसे काम करता है', 'इंटीग्रेशन्स'],
        Company: ['हमारे बारे में', 'ब्लॉग', 'करियर', 'संपर्क'],
        Support: ['हेल्प सेंटर', 'डॉक्यूमेंटेशन', 'कम्युनिटी', 'स्टेटस'],
        Legal: ['प्राइवेसी पॉलिसी', 'टर्म्स ऑफ़ सर्विस', 'कुकी पॉलिसी'],
      },
      social: ['ट्विटर', 'लिंक्डइन', 'यूट्यूब'],
      bottomLeft: '2025 Prithvix Technologies Pvt. Ltd. सभी अधिकार सुरक्षित।',
      bottomRight: 'ग्रामीण भारत के लिए care के साथ बनाया गया',
    },
    demoModal: {
      getStarted: 'शुरुआत करें',
      title: 'डेमो अनुरोध करें',
      description:
        'अपनी जानकारी भरिए और हमारी टीम आपसे व्यक्तिगत डेमो शेड्यूल करने के लिए संपर्क करेगी।',
      successTitle: 'अनुरोध प्राप्त हुआ',
      successDescription: 'हम 24 घंटे के भीतर आपसे संपर्क करेंगे।',
      labels: {
        name: 'पूरा नाम',
        phone: 'फ़ोन नंबर',
        email: 'ईमेल',
        message: 'संदेश (वैकल्पिक)',
      },
      placeholders: {
        name: 'अपना पूरा नाम दर्ज करें',
        phone: '+91 98765 43210',
        email: 'dealer@example.com',
        message: 'अपने डीलरशिप के बारे में बताइए...',
      },
      submit: 'अनुरोध भेजें',
    },
    whatsapp: {
      title: 'WhatsApp पर चैट करें',
      description: 'Prithvix के बारे में तेज़ डेमो लें या कोई भी सवाल पूछें।',
      cta: 'चैट शुरू करें',
      message:
        'नमस्ते, मुझे अपनी एग्री डीलरशिप के लिए Prithvix में रुचि है। कृपया और जानकारी साझा करें।',
    },
  },
  gu: {
    header: {
      nav: ['ફીચર્સ', 'કેવી રીતે કાર્ય કરે છે', 'કિંમત', 'પ્રશંસાપત્રો'],
      demoCta: 'ડેમો માંગો',
      languageLabel: 'ભાષા',
    },
    hero: {
      overline: 'ડિલર મેનેજમેન્ટ પ્લેટફોર્મ',
      title: ['તમારી કૃષિ ડીલરશિપ ચલાવો', 'આધુનિક સોફ્ટવેરની સ્પષ્ટતા સાથે', 'વધુ નિયંત્રણ સાથે.'],
      subtitle:
        'ગ્રામિણ ભારતના કૃષિ ઇનપુટ ડીલરો માટે બનાવેલું AI-સંચાલિત મેનેજમેન્ટ પ્લેટફોર્મ. ખેડૂત નોંધણીથી લઈને ક્રેડિટ લેજર સુધી, બધું એક જગ્યાએ મેનેજ કરો.',
      primaryCta: 'ડેમો માંગો',
      secondaryCta: 'કેવી રીતે કાર્ય કરે છે જુઓ',
    },
    splash: {
      overline: 'કૃષિ ઇન્ટેલિજન્સ',
      tagline: 'ગ્રામિણ કૃષિ વેપારના ભવિષ્યને શક્તિ આપી રહ્યું છે',
      enter: 'અનુભવ શરૂ કરો',
    },
    features: {
      overline: 'પ્લેટફોર્મ ક્ષમતાઓ',
      title: ['ડિલરને જે જોઈએ તે બધું.', 'અને જે ન જોઈએ તે કંઈ નહીં.'],
      items: [
        {
          overline: 'ઓનબોર્ડિંગ',
          title: 'ખેડૂત નોંધણી અને QR ID કાર્ડ્સ',
          description:
            'આધાર-લિંક્ડ પ્રોફાઇલ સાથે સેકંડોમાં ખેડૂત નોંધણી કરો. ઑફલાઇન પણ કામ કરતાં અનન્ય QR ID કાર્ડ્સ બનાવો, જેથી તમારા નેટવર્કનો દરેક ખેડૂત દરેક સ્થળે તરત ઓળખી શકાય.',
          mockup: {
            type: 'card',
            headerLabel: 'નવો ખેડૂત',
            idLabel: 'ID: PRX-2847',
            rows: ['રાજેશ કુમાર', 'ગામ: ભોપાલ ખુર્દ', 'પાક: ઘઉં, સોયાબીન'],
            status: 'QR ID બનાવાયું',
          },
        },
        {
          overline: 'ઓપરેશન્સ',
          title: 'ફીલ્ડ વિઝિટ લોગિંગ અને AI ભલામણો',
          description:
            'GPS કોઓર્ડિનેટ્સ, પાકની ફોટા અને માટીના અવલોકનો સાથે દરેક મુલાકાત નોંધો. અમારી AI એન્જિન તરત ડેટાનું વિશ્લેષણ કરી તમારા ઇન્વેન્ટરીમાંથી યોગ્ય પ્રોડક્ટ્સ ભલામણ કરે છે.',
          mockup: {
            type: 'map',
            recommendation: 'AI ભલામણ',
            recommendationText: 'માટીના વિશ્લેષણના આધારે: DAP ખાતર 50kg/acre આપો',
          },
        },
        {
          overline: 'ફાઇનાન્સ',
          title: 'ઉધાર અને ક્રેડિટ લેજર',
          description:
            'તમારી ખાતા બુકને ડિજિટલ બનાવો. દરેક ક્રેડિટ ટ્રાન્ઝેક્શન ટ્રૅક કરો, પેમેન્ટ રીમાઇન્ડર સેટ કરો અને બધા ખેડૂત ખાતાઓના બાકીનું રીઅલ-ટાઇમ દૃશ્ય મેળવો.',
          mockup: {
            type: 'ledger',
            title: 'ક્રેડિટ લેજર',
            pending: '3 બાકી',
            entries: [
              { name: 'સુરેશ પટેલ', amount: '12,500', status: 'pending' },
              { name: 'અમિત શર્મા', amount: '8,200', status: 'paid' },
              { name: 'રવિ સિંહ', amount: '15,000', status: 'pending' },
            ],
          },
        },
        {
          overline: 'સ્ટોક',
          title: 'ઇન્વેન્ટરી અને સ્ટોક અલર્ટ્સ',
          description:
            'ઓટોમેટિક લો-સ્ટોક અલર્ટ્સ સાથે રીઅલ-ટાઇમ ઇન્વેન્ટરી ટ્રેકિંગ. શું વેચાઈ રહ્યું છે, શું પડ્યું છે અને ક્યારે ફરી ઓર્ડર કરવો, બધું પહેલેથી જાણો.',
          mockup: {
            type: 'inventory',
            items: [
              { name: 'DAP ખાતર', stock: 85, unit: '120 બેગ' },
              { name: 'યુરિયા', stock: 15, unit: '18 બેગ' },
              { name: 'કીટનાશક A', stock: 60, unit: '45 લિટર' },
            ],
            alert: 'લો સ્ટોક અલર્ટ',
          },
        },
        {
          overline: 'ઇન્ટેલિજન્સ',
          title: 'સેલ્સ એનાલિટિક્સ અને જીઓગ્રાફિક મેપ',
          description:
            'જીઓગ્રાફિક મેપ પર તમારા સેલ્સ ડેટાને વિઝ્યુઅલાઇઝ કરો. પ્રાદેશિક માંગ સમજો, ટેરિટરી મુજબ ડિલર પરફોર્મન્સ ટ્રૅક કરો અને ડેટા આધારિત સ્ટોકિંગ નિર્ણયો લો.',
          mockup: {
            type: 'chart',
            range: 'જાન્યુઆરી - જુલાઈ 2025',
            growth: '+32% વૃદ્ધિ',
          },
        },
        {
          overline: 'AI સહાયક',
          title: 'બહુભાષી AI કૃષિવિજ્ઞાની ચેટ',
          description:
            '24/7 ઉપલબ્ધ AI કૃષિવિજ્ઞાની English, Hindi, Marathi, Gujarati અને Rajasthani માં મદદ કરે છે. ખેડૂત અને ડીલર તાત્કાલિક પાક સલાહ, જીવાત ઓળખ અને પ્રોડક્ટ ભલામણો મેળવી શકે છે.',
          mockup: {
            type: 'chat',
            userLabel: 'વપરાશકર્તા',
            aiLabel: 'AI કૃષિવિજ્ઞાની',
            userMessage: 'મારા ઘઉંમાં પીળી પત્તી આવી રહી છે',
            aiMessage:
              'આ નાઈટ્રોજનની કમી હોઈ શકે છે. 25kg/acre યુરિયા આપો અને ઝીંક સ્પ્રે પણ કરો.',
            languages: ['EN', 'HI', 'MR', 'GU', 'RJ'],
          },
        },
      ],
    },
    stats: {
      items: [
        { label: 'નોંધાયેલ ખેડૂત' },
        { label: 'સમર્થિત ભાષાઓ' },
        { label: 'ઝડપી ફીલ્ડ ઓપરેશન્સ' },
        { label: 'ક્રેડિટ અને સ્ટોક પર ડિલર દૃશ્યતા' },
      ],
    },
    howItWorks: {
      overline: 'શરૂઆત કેવી રીતે કરવી',
      title: 'કેવી રીતે કાર્ય કરે છે',
      steps: [
        { title: 'તમારી ડીલરશિપ રજીસ્ટર કરો', description: 'તમારા બિઝનેસ વિગતો સાથે મિનિટોમાં સાઇન અપ કરો. પ્રોડક્ટ કેટલોગ અને પ્રાઇસિંગ સ્ટ્રક્ચર સેટ કરો.' },
        { title: 'તમારા ખેડૂતોને ઓનબોર્ડ કરો', description: 'તુરંત QR ID કાર્ડ જનરેશન સાથે ખેડૂતોને રજીસ્ટર કરો. તમારું ખેડૂત નેટવર્ક ડિજિટલી બનાવો.' },
        { title: 'વિઝિટ અને વેચાણ લોગ કરો', description: 'ફીલ્ડ વિઝિટ, ક્રેડિટ ટ્રાન્ઝેક્શન અને વેચાણ નોંધો. ઓછા કનેક્ટિવિટી વિસ્તારોમાં પણ બધું સિંક થાય છે.' },
        { title: 'બધું ટ્રૅક કરો', description: 'ઇન્વેન્ટરી, ક્રેડિટ, એનાલિટિક્સ અને AI ભલામણો માટે રીઅલ-ટાઇમ ડેશબોર્ડ મેળવો.' },
      ],
    },
    pricing: {
      overline: 'કિંમત',
      title: 'સરળ, પારદર્શક કિંમતો',
      subtitle: '14 દિવસનું મફત ટ્રાયલ શરૂ કરો. ક્રેડિટ કાર્ડની જરૂર નથી.',
      plans: [
        {
          name: 'બેસિક',
          description: 'ડિજિટલ ઓપરેશન્સ શરૂ કરતા નાના ડિલરો માટે સંપૂર્ણ.',
          features: [
            '500 સુધી ખેડૂત નોંધણી',
            'QR ID કાર્ડ જનરેશન',
            'બેઝિક ક્રેડિટ લેજર',
            'ઇન્વેન્ટરી ટ્રેકિંગ (50 પ્રોડક્ટ્સ)',
            'ફીલ્ડ વિઝિટ લોગિંગ',
            'ઇમેઇલ સપોર્ટ',
          ],
          cta: 'મફત ટ્રાયલ શરૂ કરો',
        },
        {
          name: 'પ્રીમિયમ',
          description: 'સ્થાપિત ડિલરો માટે જેમને AI આધારિત ઇનસાઇટ્સ અને અનલિમિટેડ સ્કેલ જોઈએ.',
          features: [
            'અનલિમિટેડ ખેડૂત નોંધણી',
            'NFC સપોર્ટ સાથે QR ID કાર્ડ્સ',
            'એડવાન્સ્ડ ક્રેડિટ લેજર અને રીમાઇન્ડર્સ',
            'અનલિમિટેડ ઇન્વેન્ટરી ટ્રેકિંગ',
            'AI પ્રોડક્ટ ભલામણો',
            'બહુભાષી AI કૃષિવિજ્ઞાની ચેટ',
            'સેલ્સ એનાલિટિક્સ અને જીઓગ્રાફિક મેપ',
            'પ્રાથમિકતા ફોન સપોર્ટ',
            'ઓફલાઇન-ફર્સ્ટ સિંક',
          ],
          cta: 'મફત ટ્રાયલ શરૂ કરો',
          highlighted: true,
        },
      ],
      recommended: 'ભલામણ કરેલું',
    },
    testimonials: {
      overline: 'પ્રશંસાપત્રો',
      title: ['ગ્રામિણ ભારતના', 'ડિલરો દ્વારા વિશ્વાસપાત્ર'],
      items: [
        { quote: 'Prithvix એ અમારા 800+ ખેડૂત નેટવર્કને મેનેજ કરવાની રીત બદલી દીધી. માત્ર ક્રેડિટ લેજરે દર અઠવાડિયે કલાકોની મેન્યુઅલ બુકકીપિંગ બચાવી.', name: 'રમેશ પટેલ', role: 'એગ્રી ઇનપુટ ડિલર', location: 'આણંદ, ગુજરાત' },
        { quote: 'હિન્દીમાં AI કૃષિવિજ્ઞાની ચેટ ગેમ-ચેન્જર છે. મારા ખેડૂતો સીધા પ્રશ્નો પૂછે છે અને યોગ્ય ભલામણો મેળવે છે. વિશ્વાસ ઊભો થાય છે.', name: 'સુનિતા દેવી', role: 'બીજ અને ખાતર ડિલર', location: 'વારાણસી, ઉત્તર પ્રદેશ' },
        { quote: 'અમે પેપર સ્ટોકથી રીઅલ-ટાઇમ અલર્ટ સુધી આવી ગયા. બે મહિનામાં મારી રીઓર્ડર સચોટતા બહુ સુધરી.', name: 'વિક્રમ સિંહ', role: 'કૃષિ રિટેલર', location: 'કોટા, રાજસ્થાન' },
        { quote: 'QR ખેડૂત ID કાર્ડ દરેક ક્રિયાપ્રતિક્રિયાને ઝડપી બનાવે છે. ખેડૂતોને ઓળખ મળતી લાગે છે, અને અમે તેમનો સંપૂર્ણ ઇતિહાસ સેકંડોમાં જોઈ શકીએ છીએ.', name: 'પ્રિયા શર્મા', role: 'મલ્ટી-બ્રાન્ડ એગ્રી ડિલર', location: 'નાગપુર, મહારાષ્ટ્ર' },
      ],
      badges: ['ભારતમાં બનાવેલ', 'ઓફલાઇન-ફર્સ્ટ', 'એગ્રી રિટેલર્સ માટે બનાવેલું'],
    },
    footer: {
      description:
        'ગ્રામિણ ભારતના કૃષિ ઇનપુટ ડિસ્ટ્રિબ્યુટર્સ માટે બનાવેલું AI-સંચાલિત ડિલર મેનેજમેન્ટ પ્લેટફોર્મ.',
      titles: ['પ્રોડક્ટ', 'કંપની', 'સપોર્ટ', 'કાનૂની'],
      links: {
        Product: ['ફીચર્સ', 'કિંમત', 'કેવી રીતે કાર્ય કરે છે', 'ઇન્ટિગ્રેશન્સ'],
        Company: ['અમારા વિશે', 'બ્લોગ', 'કેરિયર્સ', 'સંપર્ક'],
        Support: ['હેલ્પ સેન્ટર', 'ડોક્યુમેન્ટેશન', 'કમ્યુનિટી', 'સ્ટેટસ'],
        Legal: ['પ્રાઇવસી પોલિસી', 'ટર્મ્સ ઓફ સર્વિસ', 'કુકી પોલિસી'],
      },
      social: ['ટ્વિટર', 'લિંકડઇન', 'યૂટ્યુબ'],
      bottomLeft: '2025 Prithvix Technologies Pvt. Ltd. સર્વ અધિકાર સુરક્ષિત.',
      bottomRight: 'ગ્રામિણ ભારત માટે care સાથે બનાવેલું',
    },
    demoModal: {
      getStarted: 'શરૂઆત કરો',
      title: 'ડેમો માંગો',
      description:
        'તમારી વિગતો ભરો અને અમારી ટીમ વ્યક્તિગત ડેમો શેડ્યૂલ કરવા માટે સંપર્ક કરશે.',
      successTitle: 'વિનંતી મળી ગઈ',
      successDescription: 'અમે 24 કલાકમાં તમારી સાથે સંપર્ક કરીશું.',
      labels: {
        name: 'પૂરું નામ',
        phone: 'ફોન નંબર',
        email: 'ઇમેઇલ',
        message: 'સંદેશ (વૈકલ્પિક)',
      },
      placeholders: {
        name: 'તમારું પૂરું નામ દાખલ કરો',
        phone: '+91 98765 43210',
        email: 'dealer@example.com',
        message: 'તમારી ડીલરશિપ વિશે અમને કહો...',
      },
      submit: 'વિનંતી મોકલો',
    },
    whatsapp: {
      title: 'WhatsApp પર અમારી સાથે ચેટ કરો',
      description: 'Prithvix વિશે ઝડપી ડેમો લો અથવા કોઈ પણ પ્રશ્ન પૂછો.',
      cta: 'ચેટ શરૂ કરો',
      message:
        'હાય, મને મારી એગ્રી ડીલરશિપ માટે Prithvix માં રસ છે. કૃપા કરીને વધુ વિગતો શેર કરો.',
    },
  },
};
