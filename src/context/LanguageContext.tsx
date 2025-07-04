import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Translation, Language } from '../types';

const translations: Record<Language, Translation> = {
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      contact: 'Contact',
      blog: 'Blog',
    },
    hero: {
      title: 'Building Dreams, Creating Reality',
      subtitle: 'Professional construction services with over 15 years of experience. We deliver quality projects on time and within budget.',
      cta: 'Get Free Quote',
      slides: {
        slide1: {
          title: 'Engineering and survey works',
          subtitle: 'Photo review of engineering survey works'
        },
        slide2: {
          title: 'Commercial Excellence',
          subtitle: 'Building the future of business with innovative commercial spaces'
        },
        slide3: {
          title: 'Industrial Solutions',
          subtitle: 'Robust infrastructure for manufacturing and industrial operations'
        }
      }
    },
    about: {
      title: 'Welcome',
      subtitle: 'About GEO - TEST GROUP',
      description: 'We are a leading construction company specializing in residential, commercial, and industrial projects. Our team of experienced professionals is committed to delivering exceptional results while maintaining the highest standards of safety and quality.',
      stats: {
        projects: 'Completed Projects',
        years: 'Services',
        clients: 'Happy Clients',
        instruments: 'Instruments'
      },
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive Construction Solutions',
      items: [
        {
          title: 'Topographical surveying',
          description: 'Preparing accurate topographic maps and drawings to determine the terrain and existing infrastructure of the site prior to design.',
        },
        {
          title: 'Engineering and geodetic surveys',
          description: 'Geodetic preparatory work for construction sites, precise location measurements and control geodesy services.',
        },
        {
          title: 'Industrial Projects',
          description: 'Warehouses, manufacturing facilities, and industrial infrastructure development.',
        },
        {
          title: 'Monitoring and deformation control',
          description: 'Modern monitoring services for continuous monitoring and detection of displacements in buildings, structures or ground layers.',
        },
      ],
    },
    blog: {
      title: 'Latest News & Projects',
      subtitle: 'Stay Updated with Our Recent Work',
      readMore: 'Read More',
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Ready to Start Your Project?',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        message: 'Project Details',
        submit: 'Send Message',
      },
      info: {
        address: 'Samarqand sh., Mirzatup MFY, 550.',
        phone: '95 877-15-15',
        phone2: '91 547-57-75',
        email: 'geotestg@mail.ru',
        hours: 'Mon - Fri: 8:00 AM - 6:00 PM',
      },  
      days: {
        monday: 'Monday',
        tuesday: 'Tuesday',
        wednesday: 'Wednesday',
        thursday: 'Thursday',
        friday: 'Friday',
        saturday: 'Saturday',
        sunday: 'Sunday',
        dayOff: 'Day off',
      },
    },
    footer: {
      contact: 'Contact',
      linksTitle: 'Quick Links',
      rights: '© 2025 «GEO - TEST GROUP». All rights reserved.',
      info: 'We are here to meet your needs for essential services for your dream building, whether it is a commercial, residential or industrial building.'
    },
  },
  ru: {
    nav: {
      about: 'О нас',
      services: 'Услуги',
      contact: 'Контакты',
      blog: 'Блог',
    },
    hero: {
      title: 'Строим мечты, создаем реальность',
      subtitle: 'Профессиональные строительные услуги с более чем 15-летним опытом. Мы выполняем качественные проекты в срок и в рамках бюджета.',
      cta: 'Посмотреть услуги',
      slides: {
        slide1: {
          title: 'Инженерно-изыскательские работы',
          subtitle: 'Фото обзор инженерно изыскательских работ'
        },
        slide2: {
          title: 'Коммерческое превосходство',
          subtitle: 'Строим будущее бизнеса с инновационными коммерческими пространствами'
        },
        slide3: {
          title: 'Промышленные решения',
          subtitle: 'Надежная инфраструктура для производства и промышленных операций'
        }
      }
    },
    about: {
      title: 'Добро пожаловать',
      subtitle: 'О компании GEO - TEST GROUP',
      description: 'Добытые образцы исследуют для определения различных свойств, по которым в дальнейшем судят о характеристиках геологических слоев, из которых состоит массив грунта. Для этого образцы отправляют на лабораторные исследования. Они проводятся с целью выявления физических и механических свойств. В ходе проведения исследований выявляют последовательность пластов, их мощность, наличие включений других пород и водоносность.',
      stats: {
        projects: 'Завершенных проектов',
        years: 'Услуги',
        clients: 'Довольных клиентов',
        instruments: 'Инструменты'
      },
    },
    services: {
      title: 'Наши услуги',
      subtitle: 'Комплексные строительные решения',
      items: [
        {
          title: 'Топографическая съёмка',
          description: 'Подготовка точных топографических карт и чертежей для определения рельефа и существующей инфраструктуры участка до проектирования.',
        },
        {
          title: 'Инженерно-геодезические изыскания',
          description: 'Геодезическая подготовка строительных площадок, точные измерения координат и услуги по контрольной геодезии.',
        },
        {
          title: 'Промышленные проекты',
          description: 'Склады, производственные объекты и развитие промышленной инфраструктуры.',
        },
        {
          title: 'Мониторинг и контроль деформаций',
          description: 'Современные услуги мониторинга для постоянного наблюдения и выявления смещений зданий, сооружений или слоёв грунта.',
        },
      ]
      
    },
    blog: {
      title: 'Последние новости и проекты',
      subtitle: 'Будьте в курсе наших последних работ',
      readMore: 'Читать далее',
    },
    contact: {
      title: 'Связаться с нами',
      subtitle: 'Готовы начать ваш проект?',
      form: {
        name: 'Полное имя',
        email: 'Email адрес',
        phone: 'Номер телефона',
        message: 'Детали проекта',
        submit: 'Отправить сообщение',
      },
      info: {
        address: 'Samarqand sh., Mirzatup MFY, 550.',
        phone: '95-877-15-15',
        phone2: '91 547-57-75',
        email: 'geotestg@mail.ru',
        hours: 'Пн - Пт: 8:00 - 18:00',
      },
      days: {
        monday: 'Понедельник',
        tuesday: 'Вторник',
        wednesday: 'Среда',
        thursday: 'Четверг',
        friday: 'Пятница',  
        saturday: 'Суббота',
        sunday: 'Воскресенье',
        dayOff: 'Выходной',
      },
    },
    footer: {
      contact: 'Контакт',
      linksTitle: 'Ссылки',
      rights: '© 2025 «GEO - TEST GROUP». Все права защищены.',
      info: "Мы здесь, чтобы удовлетворить ваши потребности в основных услугах для здания вашей мечты, будь то коммерческое, жилое или промышленное здание."
    },
  },
  uz: {
    nav: {
      about: 'Biz haqimizda',
      services: 'Xizmatlar',
      contact: 'Aloqa',
      blog: 'Blog',
    },
    hero: {
      title: 'Orzularni qurish, haqiqatni yaratish',
      subtitle: '15 yildan ortiq tajribaga ega professional qurilish xizmatlari. Biz sifatli loyihalarni vaqtida va byudjet doirasida amalga oshiramiz.',
      cta: 'Bepul taklif olish',
      slides: {
        slide1: {
          title: 'Muhandislik va qidiruv ishlari',
          subtitle: 'Muhandislik qidiruv ishlarining fotosurati'
        },
        slide2: {
          title: 'Tijorat mukammalligi',
          subtitle: 'Innovatsion tijorat maydonlari bilan biznesning kelajagini quramiz'
        },
        slide3: {
          title: 'Sanoat yechimlari',
          subtitle: 'Ishlab chiqarish va sanoat operatsiyalari uchun mustahkam infratuzilma'
        }
      }
    },
    about: {
      title: 'Xush kelibsiz',
      subtitle: 'GEO - TEST GROUP haqida',
      description: 'Biz turar joy, tijorat va sanoat loyihalariga ixtisoslashgan yetakchi qurilish kompaniyasimiz. Tajribali mutaxassislarimizdan iborat jamoamiz xavfsizlik va sifatning eng yuqori standartlarini saqlab, ajoyib natijalarga erishishga sodiqdir.',
      stats: {
        projects: 'Tugallangan loyihalar',
        years: 'Xizmatlar',
        clients: 'Mamnun mijozlar',
        instruments: 'Asboblar'
      },
    },
    services: {
      title: 'Bizning xizmatlarimiz',
      subtitle: 'Keng qamrovli qurilish yechimlari',
      items: [
        {
          title: 'Topografik suratga olish',
          description: 'Loyihalashdan oldin yer relyefi va mavjud infratuzilmani aniqlash uchun aniq topografik xaritalar va chizmalarni tayyorlash.',
        },
        {
          title: 'Injenerlik va geodezik tadqiqotlar',
          description: 'Qurilish maydonchalari uchun geodezik tayyorgarlik ishlari, aniqlik bilan joylashuv o‘lchovlari va nazorat geodeziyasi xizmatlari.',
        },
        {
          title: 'Sanoat loyihalari',
          description: 'Omborlar, ishlab chiqarish inshootlari va sanoat infratuzilmasini rivojlantirish.',
        },
        {
          title: 'Monitoring va deformatsiya nazorati',
          description: 'Binolar, inshootlar yoki yer qatlamlaridagi siljishlarni doimiy kuzatish va aniqlash uchun zamonaviy monitoring xizmatlari.',
        },
      ]
      
    },
    blog: {
      title: 'So\'nggi yangiliklar va loyihalar',
      subtitle: 'Bizning so\'nggi ishlarimizdan xabardor bo\'ling',
      readMore: 'Batafsil',
    },
    contact: {
      title: 'Biz bilan bog\'laning',
      subtitle: 'Loyihangizni boshlashga tayyormisiz?',
      form: {
        name: 'To\'liq ism',
        email: 'Email manzil',
        phone: 'Telefon raqami',
        message: 'Loyiha tafsilotlari',
        submit: 'Xabar yuborish',
      },
      days: {
        monday: 'Dushanba',
        tuesday: 'Seshanba',
        wednesday: 'Chorshanba',
        thursday: 'Payshanba',
        friday: 'Juma',
        saturday: 'Shanba',
        sunday: 'Yakshanba',
        dayOff: 'Dam olish',  
      },
      info: {
        address: 'Samarqand sh., Mirzatup MFY, 550.',
        phone: '95-877-15-15',
        phone2: '91 547-57-75',
        email: 'geotestg@mail.ru',
        hours: 'Dush - Jum: 8:00 - 18:00',
      },
    },
    footer: {
      contact: 'Aloqa',
      linksTitle: 'Havolalar',
      rights: '© 2025 «GEO - TEST GROUP». Barcha huquqlar himoyalangan.',
      info: "Biz sizning orzuingizdagi bino uchun muhim xizmatlarga bo'lgan ehtiyojlaringizni qondirish uchun shu yerdamiz, xoh u tijorat, turar joy yoki sanoat binosi bo'ladimi."
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};