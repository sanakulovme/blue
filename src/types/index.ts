export interface Translation {
  nav: {
    about: string;
    services: string;
    contact: string;
    blog: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    slides: {
      slide1: {
        title: string;
        subtitle: string;
      };
      slide2: {
        title: string;
        subtitle: string;
      };
      slide3: {
        title: string;
        subtitle: string;
      };
    };
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    stats: {
      projects: string;
      years: string;
      clients: string;
      instruments: string;
    };
  };
  services: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  blog: {
    title: string;
    subtitle: string;
    readMore: string;
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
    };
    info: {
      address: string;
      phone: string;
      phone2: string;
      email: string;
      hours: string;
    };
    days: {
      monday: string;
      tuesday: string;
      wednesday: string;
      thursday: string;
      friday: string;
      saturday: string;
      sunday: string;
      dayOff: string;
    };
  };
  footer: {
    rights: string;
    info: string;
    linksTitle: string;
    contact: string;
  };
}

export type Language = 'en' | 'ru' | 'uz';