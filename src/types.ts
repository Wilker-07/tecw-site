export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  points: string[];
  image: string;
  iconName: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TranslationContent {
  nav: {
    services: string;
    whyUs: string;
    contact: string;
    ctaButton: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
    secondaryCta: string;
    trustPilotText: string;
  };
  services: {
    title: string;
    subtitle: string;
    requestButton: string;
  };
  whyUs: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    description: string;
    button: string;
    badge: string;
    cardPhone: string;
    cardEmail: string;
    cardHours: string;
    cardHoursVal: string;
  };
  footer: {
    tagline: string;
    rights: string;
    privacy: string;
    terms: string;
  };
}
