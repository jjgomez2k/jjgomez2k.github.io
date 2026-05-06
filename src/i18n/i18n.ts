// src/i18n/i18n.ts
// Internationalization module with lazy-loading and caching
interface TranslationMap {
  [key: string]: string | TranslationMap;
}

class i18n {
  private currentLang: string = 'en';
  private translations: Map<string, TranslationMap> = new Map();
  private initialized: boolean = false;

  // Default English translations (fallback)
  private defaultTranslations: TranslationMap = {
    brand: 'Juan Jose Gomez',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    hero: {
      label: 'Senior Full Stack Developer',
      desc: 'Passionate developer specializing in .NET, Python, Spring Boot, and cloud-native architecture.',
      cta_projects: 'View My Work',
      cta_contact: 'Get In Touch'
    },
    about: {
      title: 'About Me',
      p1: 'Software developer with 5+ years of professional experience, specializing in full-stack development, cloud architecture, and enterprise solutions.',
      p2: 'My expertise spans across multiple programming languages and frameworks, allowing me to build scalable and robust applications.',
      p3: 'I am passionate about clean code, system architecture, and continuous integration/deployment best practices.',
      stat_yr: 'Years of Experience',
      stat_proj: 'Projects Completed',
      stat_lang: 'Languages Spoken',
      stat_techs: 'Technologies'
    },
    exp: {
      title: 'Professional Experience',
      subtitle: 'My professional journey',
      j1: {
        role: 'Senior Full Stack Developer',
        company: 'TechCorp Solutions',
        date: '2020 - Present',
        li_1: 'Led development of microservices architecture serving 1M+ users',
        li_2: 'Implemented CI/CD pipelines reducing deployment time by 60%',
        li_3: 'Mentored a team of 5 junior developers',
        li_4: 'Optimized database queries improving performance by 40%'
      },
      j2: {
        role: 'Full Stack Developer',
        company: 'InnovateTech',
        date: '2018 - 2020',
        li_1: 'Built RESTful APIs with Spring Boot and .NET Core',
        li_2: 'Developed responsive web applications using Angular and React',
        li_3: 'Integrated third-party services including payment gateways',
        li_4: 'Participated in code reviews and agile development'
      },
      j3: {
        role: 'Junior Developer',
        company: 'StartupXYZ',
        date: '2017 - 2018',
        li_1: 'Developed and maintained web applications using .NET and Node.js',
        li_2: 'Created unit and integration tests',
        li_3: 'Collaborated with UI/UX designers',
        li_4: 'Assisted in migrating legacy systems to cloud'
      },
      j4: {
        role: 'Freelance Developer',
        company: 'Self-Employed',
        date: '2016 - 2017',
        li_1: 'Delivered custom web solutions for 15+ clients',
        li_2: 'Worked with diverse tech stacks and frameworks',
        li_3: 'Managed client relationships and project timelines',
        li_4: 'Built full-stack applications from scratch'
      }
    },
    skills: {
      title: 'Technical Skills',
      subtitle: 'My technical expertise',
      cat1: { name: 'Frontend Development' },
      cat1_s1: { name: 'React.js / Next.js' },
      cat1_s2: { name: 'Angular / Vue' },
      cat1_s3: { name: 'TypeScript' },
      cat1_s4: { name: 'HTML5 / CSS3' },
      cat2: { name: 'Backend Development' },
      cat2_s1: { name: '.NET Core' },
      cat2_s2: { name: 'Node.js / Express' },
      cat2_s3: { name: 'Spring Boot' },
      cat2_s4: { name: 'Python / Flask' },
      cat3: { name: 'DevOps & Cloud' },
      cat3_s1: { name: 'AWS / Azure' },
      cat3_s2: { name: 'Docker / Kubernetes' },
      cat3_s3: { name: 'CI/CD Pipelines' },
      cat3_s4: { name: 'Linux System Admin' }
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'A selection of my best work',
      proj1: { title: 'Enterprise Dashboard', desc: 'Comprehensive analytics dashboard for large-scale data visualization.' },
      proj1_tag1: 'React',
      proj1_tag2: 'Node.js',
      proj1_tag3: 'AWS',
      proj2: { title: 'E-Commerce Platform', desc: 'Full-featured online marketplace with real-time inventory.' },
      proj2_tag1: 'Angular',
      proj2_tag2: '.NET',
      proj2_tag3: 'PostgreSQL',
      proj3: { title: 'Task Management App', desc: 'Collaborative task management system with real-time updates.' },
      proj3_tag1: 'Vue.js',
      proj3_tag2: 'Django',
      proj3_tag3: 'Redis',
      proj4: { title: 'Portfolio Generator', desc: 'Automated portfolio website builder with CMS capabilities.' },
      proj4_tag1: 'Next.js',
      proj4_tag2: 'Tailwind',
      proj4_tag3: 'Firebase'
    },
    contact: {
      title: 'Get In Touch',
      subtitle: "I'd love to hear from you",
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub'
    },
    footer: { text: '© 2024 Juan Jose Gomez - Built with passion and code.' }
  };

  // Map of supported language file names
  private langFiles: { [key: string]: string } = {
    en: 'en',
    es: 'es',
    pt: 'pt',
    jp: 'jp'
  };

  // Static singleton access
  public static instance: i18n = new i18n();

  private constructor() {
    // Load language from URL params or cookie or localStorage
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    const storedLang = localStorage.getItem('portfolio_lang');

    const detectedLang = langParam || storedLang || navigator.language.substring(0, 2) || 'en';
    this.currentLang = detectedLang;
  }

  public static t(key: string): string {
    return i18n.instance.translate(key);
  }

  public static t(key: string, params?: Record<string, string>): string {
    return i18n.instance.translate(key, params);
  }

  public translate(key: string, params?: Record<string, string>): string {
    const values = key.split('.');
    let target: any = this.translations.get(this.currentLang);

    // If translations not loaded for this language, try default
    if (!target) {
      target = this.defaultTranslations;
    }

    for (const val of values) {
      if (target && target[val] !== undefined) {
        target = target[val];
      } else {
        target = this.defaultTranslations;
        for (const v of values) {
          if (target && target[v] !== undefined) {
            target = target[v];
          } else {
            return key; // Ultimate fallback
          }
        }
      }
    }

    let result = target;

    // Handle dynamic parameters if provided
    if (params && typeof result === 'string') {
      for (const [paramKey, paramVal] of Object.entries(params)) {
        result = (result as string).replace(`{${paramKey}}`, paramVal);
      }
    }

    return result || key;
  }

  public get language(): string {
    return this.currentLang;
  }

  public async loadLang(lang: string): Promise<void> {
    if (!this.langFiles[lang]) {
      this.currentLang = 'en';
      return;
    }

    // Check cache
    if (this.translations.has(lang)) {
      this.currentLang = lang;
      return;
    }

    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = `./translations/${lang}.js`;
      script.onload = () => {
        // @ts-ignore - dynamic global assignment from translation files
        this.translations.set(lang, window[`translations_${lang}`] || {});
        this.currentLang = lang;
        // Trigger translation refresh on all elements
        document.querySelectorAll('[data-i18n]').forEach((el: Element) => {
          const key = el.getAttribute('data-i18n');
          if (key) {
            const val = this.translate(key);
            this.updateEl(el, val, key);
          }
        });
        resolve();
      };
      script.onerror = () => reject(new Error(`Failed to load translations for lang: ${lang}`));
      document.head.appendChild(script);
    });
  }

  private updateEl(el: Element, val: string, key: string): void {
    if (el instanceof HTMLInputElement) {
      (el as HTMLInputElement).placeholder = val;
    } else if (el.tagName === 'A' && el.href === '#') {
      (el as HTMLAnchorElement).textContent = val;
    } else {
      el.textContent = val;
    }
  }
}

export default i18n;
