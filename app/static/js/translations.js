(() => {
  const translations = {
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.businesses': 'Businesses',
      'nav.contact': 'Contact',
      'footer.copy': 'A diversified Saudi holding group creating long-term value through focused businesses, partnerships and responsible growth.',
      'footer.navigate': 'Navigate',
      'footer.contact': 'Contact',
      'footer.jeddah': 'Jeddah, Saudi Arabia',
      'footer.rights': '© 2026 Huzaifa Holding. All rights reserved.',
      'footer.tagline': 'Charting new paths forward.',

      'home.eyebrow': 'Huzaifa Holding',
      'home.title': 'Charting new <span>paths</span> forward.',
      'home.subtitle': 'A diversified Saudi holding group building enduring businesses across strategic industries.',
      'home.portfolio': 'Explore Our Businesses',
      'home.about': 'About the Group',
      'home.introEyebrow': 'One Group. Multiple Capabilities.',
      'home.introTitle': 'Focused businesses, connected by a long-term outlook.',
      'home.introCopy': 'Huzaifa Holding brings together complementary businesses under a shared commitment to quality, reliability and sustainable growth.',
      'home.viewBusinesses': 'View business portfolio →',
      'home.brandsEyebrow': 'Our Brands',
      'home.brandsTitle': 'The companies within Huzaifa Holding.',
      'home.brandsCopy': 'A growing portfolio of operating brands serving customers across Saudi Arabia and the region.',
      'home.ctaEyebrow': 'Partnerships & Enquiries',
      'home.ctaTitle': 'Build the next opportunity with us.',
      'home.ctaButton': 'Contact Huzaifa Holding',

      'about.eyebrow': 'About Huzaifa Holding',
      'about.title': 'Diversified strength.<br><span>Shared direction.</span>',
      'about.subtitle': 'A forward-thinking Saudi holding group focused on enduring value, disciplined growth and operational excellence.',
      'about.storyEyebrow': 'Our Story',
      'about.storyTitle': 'Built to create value across changing markets.',
      'about.storyCopy': 'Huzaifa Holding brings together strategic investments and operating businesses across real estate, transportation, construction, manufacturing, chemicals, trading, hospitality, luxury goods, manpower and catering. Our role is to provide each business with clear direction, disciplined stewardship and the platform to grow responsibly.',
      'about.stat': 'Business sectors within one holding group',
      'about.missionLabel': 'Mission',
      'about.missionTitle': 'Create lasting value through focused execution.',
      'about.missionCopy': 'To drive sustainable growth by developing strong businesses, pursuing disciplined opportunities and maintaining high standards of quality, integrity and operational performance.',
      'about.visionLabel': 'Vision',
      'about.visionTitle': 'A trusted group with businesses that lead in their fields.',
      'about.visionCopy': 'To build a resilient portfolio of respected companies that contribute to customers, communities and the long-term development of the markets we serve.',
      'about.ctaTitle': 'See where we operate.',
      'about.ctaButton': 'Explore Businesses',

      'businesses.eyebrow': 'Business Portfolio',
      'businesses.title': 'Ten sectors.<br><span>One long-term strategy.</span>',
      'businesses.subtitle': 'Our portfolio spans essential services, industrial capabilities and consumer-focused businesses, each managed with a clear focus on quality and sustainable growth.',
      'businesses.ctaEyebrow': 'Business Enquiries',
      'businesses.ctaTitle': 'Interested in working with one of our businesses?',
      'businesses.ctaButton': 'Get in Touch',

      'contact.eyebrow': 'Contact',
      'contact.title': 'Start a conversation<br><span>with Huzaifa Holding.</span>',
      'contact.subtitle': 'For business, partnership and portfolio enquiries, connect with our headquarters in Jeddah.',
      'contact.hqLabel': 'Headquarters',
      'contact.hqTitle': 'Jeddah, Saudi Arabia',
      'contact.address': '7080 Alqamah Alhadrami<br>Az Zahraa, Jeddah 23522, Saudi Arabia',

      'division.real-estate.title': 'Real Estate',
      'division.real-estate.description': 'Residential, commercial and industrial properties defined by cost-effectiveness, innovative design and sustainability.',
      'division.transportation.title': 'Transportation',
      'division.transportation.description': 'Logistics and heavy transport services, including flatbed logistics, dumper operations, heavy equipment rental and tanker transport across Saudi Arabia and the GCC.',
      'division.construction.title': 'Construction',
      'division.construction.description': 'Engineering, procurement and construction across civil infrastructure, electromechanical works and site facilities for industrial and commercial sectors.',
      'division.manufacturing.title': 'Manufacturing',
      'division.manufacturing.description': 'High-quality products for diverse markets, built on precision, reliability and continuous improvement.',
      'division.chemicals.title': 'Chemicals',
      'division.chemicals.description': 'Distribution of specialty chemicals and ingredients for coatings, adhesives, sealants and construction industries across the MENA region.',
      'division.trading.title': 'Trading',
      'division.trading.description': 'Connecting markets and facilitating the movement of goods through dependable networks and market knowledge.',
      'division.fine-dining.title': 'Fine Dining',
      'division.fine-dining.description': 'Distinctive culinary experiences centered on quality ingredients, attentive service and memorable hospitality.',
      'division.ultra-luxury-goods.title': 'Ultra Luxury Goods',
      'division.ultra-luxury-goods.description': 'Acquisition, trading and management of gems, gold and watches with a focus on authenticity, quality and enduring value.',
      'division.manpower.title': 'Manpower',
      'division.manpower.description': 'Professional manpower solutions for cleaning, maintenance and construction requirements across residential, commercial and industrial projects.',
      'division.catering.title': 'Catering',
      'division.catering.description': 'Corporate catering for businesses, offices, events and gatherings, delivered with consistent standards of quality, hygiene and service.'
    },
    ar: {
      'nav.home': 'الرئيسية',
      'nav.about': 'من نحن',
      'nav.businesses': 'أعمالنا',
      'nav.contact': 'اتصل بنا',
      'footer.copy': 'مجموعة سعودية قابضة متنوعة، نعمل على بناء قيمة مستدامة من خلال أعمال متخصصة وشراكات فاعلة ونمو مسؤول.',
      'footer.navigate': 'روابط سريعة',
      'footer.contact': 'التواصل',
      'footer.jeddah': 'جدة، المملكة العربية السعودية',
      'footer.rights': '© 2026 حذيفة القابضة. جميع الحقوق محفوظة.',
      'footer.tagline': 'نرسم مسارات جديدة نحو المستقبل.',

      'home.eyebrow': 'حذيفة القابضة',
      'home.title': 'نرسم <span>مسارات جديدة</span> نحو المستقبل.',
      'home.subtitle': 'مجموعة سعودية قابضة متنوعة، تبني أعمالاً راسخة في قطاعات استراتيجية.',
      'home.portfolio': 'استكشف أعمالنا',
      'home.about': 'تعرّف على المجموعة',
      'home.introEyebrow': 'مجموعة واحدة، قدرات متعددة',
      'home.introTitle': 'أعمال متخصصة تجمعها رؤية طويلة المدى.',
      'home.introCopy': 'تجمع حذيفة القابضة مجموعة من الأعمال المتكاملة تحت التزام مشترك بالجودة والموثوقية والنمو المستدام.',
      'home.viewBusinesses': 'استعرض محفظة الأعمال ←',
      'home.brandsEyebrow': 'علاماتنا وشركاتنا',
      'home.brandsTitle': 'الشركات العاملة ضمن حذيفة القابضة.',
      'home.brandsCopy': 'محفظة متنامية من الشركات والعلامات التي تخدم العملاء في المملكة العربية السعودية والمنطقة.',
      'home.ctaEyebrow': 'الشراكات والاستفسارات',
      'home.ctaTitle': 'نبني معكم الفرصة القادمة.',
      'home.ctaButton': 'تواصل مع حذيفة القابضة',

      'about.eyebrow': 'عن حذيفة القابضة',
      'about.title': 'قوة التنوع.<br><span>ورؤية موحّدة.</span>',
      'about.subtitle': 'مجموعة سعودية قابضة ذات رؤية مستقبلية، تركز على القيمة المستدامة والنمو المنضبط والتميز التشغيلي.',
      'about.storyEyebrow': 'قصتنا',
      'about.storyTitle': 'نبني القيمة في أسواق متجددة.',
      'about.storyCopy': 'تجمع حذيفة القابضة استثمارات استراتيجية وشركات تشغيلية في العقارات والنقل والإنشاءات والتصنيع والمواد الكيميائية والتجارة والضيافة والسلع الفاخرة والقوى العاملة وخدمات التموين. ويتمثل دورنا في توفير التوجيه الواضح والإدارة المنضبطة والمنصة المناسبة لكل نشاط لينمو بمسؤولية.',
      'about.stat': 'قطاعات أعمال تحت مظلة مجموعة قابضة واحدة',
      'about.missionLabel': 'رسالتنا',
      'about.missionTitle': 'صناعة قيمة مستدامة من خلال تنفيذ منضبط.',
      'about.missionCopy': 'تحقيق نمو مستدام عبر تطوير أعمال قوية، واغتنام الفرص المدروسة، والمحافظة على معايير عالية في الجودة والنزاهة والكفاءة التشغيلية.',
      'about.visionLabel': 'رؤيتنا',
      'about.visionTitle': 'مجموعة موثوقة تقود شركاتها مجالاتها باقتدار.',
      'about.visionCopy': 'بناء محفظة مرنة من الشركات المرموقة التي تسهم إيجابياً في خدمة العملاء والمجتمعات والتنمية طويلة المدى للأسواق التي نعمل فيها.',
      'about.ctaTitle': 'تعرّف على مجالات عملنا.',
      'about.ctaButton': 'استكشف أعمالنا',

      'businesses.eyebrow': 'محفظة الأعمال',
      'businesses.title': 'عشرة قطاعات.<br><span>واستراتيجية واحدة طويلة المدى.</span>',
      'businesses.subtitle': 'تغطي محفظتنا خدمات أساسية وقدرات صناعية وأعمالاً موجهة للمستهلك، وتُدار جميعها بتركيز واضح على الجودة والنمو المستدام.',
      'businesses.ctaEyebrow': 'استفسارات الأعمال',
      'businesses.ctaTitle': 'هل ترغب في التعاون مع إحدى شركاتنا؟',
      'businesses.ctaButton': 'تواصل معنا',

      'contact.eyebrow': 'اتصل بنا',
      'contact.title': 'ابدأ الحوار<br><span>مع حذيفة القابضة.</span>',
      'contact.subtitle': 'للاستفسارات المتعلقة بالأعمال والشراكات ومحفظة المجموعة، تواصل مع مقرنا الرئيسي في جدة.',
      'contact.hqLabel': 'المقر الرئيسي',
      'contact.hqTitle': 'جدة، المملكة العربية السعودية',
      'contact.address': '7080 شارع علقمة الحضرمي<br>حي الزهراء، جدة 23522، المملكة العربية السعودية',

      'division.real-estate.title': 'العقارات',
      'division.real-estate.description': 'مشروعات عقارية سكنية وتجارية وصناعية تجمع بين الكفاءة الاقتصادية والتصميم المبتكر والاستدامة.',
      'division.transportation.title': 'النقل',
      'division.transportation.description': 'خدمات لوجستية ونقل ثقيل تشمل النقل بالسطحات والشاحنات القلابة وتأجير المعدات الثقيلة ونقل الصهاريج داخل المملكة ودول مجلس التعاون الخليجي.',
      'division.construction.title': 'الإنشاءات',
      'division.construction.description': 'خدمات الهندسة والتوريد والإنشاء في البنية التحتية المدنية والأعمال الكهروميكانيكية ومرافق المواقع للقطاعات الصناعية والتجارية.',
      'division.manufacturing.title': 'التصنيع',
      'division.manufacturing.description': 'منتجات عالية الجودة لأسواق متنوعة، تقوم على الدقة والموثوقية والتحسين المستمر.',
      'division.chemicals.title': 'المواد الكيميائية',
      'division.chemicals.description': 'توزيع المواد الكيميائية المتخصصة والمكونات المستخدمة في الطلاء والمواد اللاصقة ومواد الإحكام وقطاعات الإنشاء في منطقة الشرق الأوسط وشمال أفريقيا.',
      'division.trading.title': 'التجارة',
      'division.trading.description': 'ربط الأسواق وتيسير حركة السلع من خلال شبكات موثوقة ومعرفة دقيقة بالأسواق.',
      'division.fine-dining.title': 'المطاعم الراقية',
      'division.fine-dining.description': 'تجارب ضيافة ومأكولات مميزة تقوم على جودة المكونات والعناية بالخدمة وصناعة لحظات لا تُنسى.',
      'division.ultra-luxury-goods.title': 'السلع فائقة الفخامة',
      'division.ultra-luxury-goods.description': 'اقتناء وتجارة وإدارة الأحجار الكريمة والذهب والساعات مع التركيز على الأصالة والجودة والقيمة المستدامة.',
      'division.manpower.title': 'القوى العاملة',
      'division.manpower.description': 'حلول احترافية للقوى العاملة في أعمال النظافة والصيانة والإنشاءات للمشروعات السكنية والتجارية والصناعية.',
      'division.catering.title': 'خدمات التموين',
      'division.catering.description': 'حلول تموين للشركات والمكاتب والفعاليات والتجمعات، تُقدَّم وفق معايير ثابتة من الجودة والنظافة والموثوقية في الخدمة.'
    }
  };

  const html = document.documentElement;
  const toggle = document.querySelector('[data-language-toggle]');

  const pageTitles = {
    '/': { en: 'Huzaifa Holding | Charting New Paths', ar: 'حذيفة القابضة | نرسم مسارات جديدة' },
    '/about': { en: 'About | Huzaifa Holding', ar: 'من نحن | حذيفة القابضة' },
    '/businesses': { en: 'Businesses | Huzaifa Holding', ar: 'أعمالنا | حذيفة القابضة' },
    '/contact': { en: 'Contact | Huzaifa Holding', ar: 'اتصل بنا | حذيفة القابضة' }
  };

  function applyLanguage(lang) {
    if (!translations[lang]) lang = 'en';
    html.lang = lang === 'ar' ? 'ar' : 'en';
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    html.dataset.language = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (translations[lang][key] !== undefined) el.textContent = translations[lang][key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.dataset.i18nHtml;
      if (translations[lang][key] !== undefined) el.innerHTML = translations[lang][key];
    });

    if (toggle) {
      toggle.textContent = lang === 'ar' ? 'English' : 'العربية';
      toggle.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    }

    const path = window.location.pathname.replace(/\/$/, '') || '/';
    if (pageTitles[path]) document.title = pageTitles[path][lang];
    localStorage.setItem('hh-language', lang);
    window.dispatchEvent(new CustomEvent('hh:languagechange', { detail: { lang } }));
  }

  const saved = localStorage.getItem('hh-language');
  applyLanguage(saved === 'ar' ? 'ar' : 'en');

  if (toggle) {
    toggle.addEventListener('click', () => {
      applyLanguage(html.dataset.language === 'ar' ? 'en' : 'ar');
    });
  }

  window.HHTranslations = { applyLanguage, translations };
})();
