import { ServiceItem, FeatureItem, TranslationContent } from "./types";

export const WHATSAPP_LINK = "https://wa.me/5511992660572?text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20estou%20precisando%20de%20seus%20servi%C3%A7os!";
export const INSTAGRAM_LINK = "https://instagram.com/atecwservicos";
export const GOOGLE_MAPS_REVIEW_LINK = "https://maps.app.goo.gl/w3ebQY66QvsQFR72A";
export const PHONE_DISPLAY = "(11) 99266-0572";
export const EMAIL_DISPLAY = "contatotecw@gmail.com";

export function isServiceActive(): boolean {
  const now = new Date();
  try {
    // Attempt to convert to São Paulo (Brazil) local time for accurate status
    const spTimeStr = now.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" });
    const spDate = new Date(spTimeStr);
    const day = spDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const hours = spDate.getHours();
    
    // Monday to Saturday: 1 to 6
    // From 8:00 AM up to 7:59 PM (hours 8 to 19 inclusive)
    return day >= 1 && day <= 6 && hours >= 8 && hours < 20;
  } catch (e) {
    // Fallback to user's local browser time if timezone parameter fails
    const day = now.getDay();
    const hours = now.getHours();
    return day >= 1 && day <= 6 && hours >= 8 && hours < 20;
  }
}

export const servicesData: Record<"pt" | "en", ServiceItem[]> = {
  pt: [
    {
      id: "electrical",
      title: "Instalações e Reparos Elétricos",
      description: "Serviços elétricos residenciais, comerciais e industriais de alta qualidade com foco em segurança e normas técnicas.",
      iconName: "Zap",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
      points: [
        "Instalações elétricas completas",
        "Manutenção preventiva e corretiva",
        "Substituição de disjuntores e fiação",
        "Projetos de iluminação em LED",
        "Identificação e correção de curto-circuitos",
        "Laudos de instalações e conformidade técnica"
      ]
    },
    {
      id: "appliances",
      title: "Conserto de Eletrodomésticos",
      description: "Assistência técnica especializada para consertar e manter seus aparelhos domésticos funcionando com máxima eficiência.",
      iconName: "Tv",
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80",
      points: [
        "Máquinas de lavar roupa e lava-louças",
        "Geladeiras, refrigeradores e freezers",
        "Fornos micro-ondas e fornos elétricos",
        "Diagnósticos rápidos e precisos",
        "Troca de peças com garantia e originalidade",
        "Atendimento no local para sua comodidade"
      ]
    },
    {
      id: "refrigeration",
      title: "Sistemas de Refrigeração e HVAC",
      description: "Soluções completas de refrigeração comercial e sistemas de ar condicionado residencial ou industrial.",
      iconName: "Snowflake",
      image: "https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=800&q=80",
      points: [
        "Instalação e higienização de ar condicionado",
        "Manutenção de câmaras frigoríficas e balcões",
        "Sistemas de climatização HVAC",
        "Recarga de gás refrigerante ecológica",
        "Contratos de manutenção preventiva (PMOC)",
        "Reparos emergenciais e preventivos"
      ]
    },
    {
      id: "gates",
      title: "Instalação e Conserto de Portões",
      description: "Segurança e praticidade com automatização de portões eletrônicos deslizantes, pivotantes e basculantes.",
      iconName: "KeyRound",
      image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=800&q=80",
      points: [
        "Instalação de motores de alta velocidade",
        "Manutenção mecânica e elétrica do portão",
        "Troca de placas centrais, cabos e engrenagens",
        "Configuração e codificação de controles",
        "Soluções de automação e segurança"
      ]
    },
    {
      id: "cctv",
      title: "Câmeras de Segurança e CFTV",
      description: "Proteja sua casa ou empresa com os mais modernos sistemas de monitoramento e câmeras inteligentes.",
      iconName: "ShieldAlert",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
      points: [
        "Instalação de câmeras IP de alta definição",
        "Configuração de DVR, NVR e armazenamento",
        "Acesso remoto das câmeras em tempo real pelo celular",
        "Sistemas de segurança perimetral",
        "Manutenção e reposicionamento de câmeras",
        "Projetos de segurança residencial e comercial"
      ]
    },
    {
      id: "automation",
      title: "Automação Industrial e CLP",
      description: "Otimização de processos e programação de controladores para máxima produtividade industrial.",
      iconName: "Cpu",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      points: [
        "Programação de CLP (Controlador Lógico Programável)",
        "Desenvolvimento e atualização de sistemas industriais",
        "Montagem e manutenção de painéis elétricos",
        "Diagnóstico de falhas de hardware e software",
        "Modernização de máquinas (Retrofitting)",
        "Otimização de linhas de produção"
      ]
    }
  ],
  en: [
    {
      id: "electrical",
      title: "Electrical Services",
      description: "High-quality residential, commercial, and industrial electrical services focusing on safety and technical standards.",
      iconName: "Zap",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
      points: [
        "Complete electrical installations",
        "Preventive and corrective maintenance",
        "Replacement of circuit breakers and wiring",
        "LED lighting design and retrofitting",
        "Short circuit diagnostics and repair",
        "Compliance certificates and technical analysis"
      ]
    },
    {
      id: "appliances",
      title: "Home Appliances Repair",
      description: "Specialized technical assistance to repair and maintain your household appliances running at peak performance.",
      iconName: "Tv",
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80",
      points: [
        "Washing machines and dishwashers",
        "Refrigerators, freezers, and cold storages",
        "Microwaves and electrical ovens",
        "Quick and precise diagnosis",
        "Genuine spare parts replacement with warranty",
        "On-site service for your total convenience"
      ]
    },
    {
      id: "refrigeration",
      title: "Refrigeration & HVAC Systems",
      description: "Complete solutions for commercial refrigeration and residential or industrial air conditioning systems.",
      iconName: "Snowflake",
      image: "https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=800&q=80",
      points: [
        "Air conditioner installation and sanitizing",
        "Cold rooms and display coolers maintenance",
        "Complete HVAC climate control systems",
        "Eco-friendly coolant gas recharge",
        "Preventive maintenance contracts",
        "Emergency repair assistance"
      ]
    },
    {
      id: "gates",
      title: "Automatic Gate Services",
      description: "Security and convenience with high-speed automated sliding, swinging, and overhead electronic gates.",
      iconName: "KeyRound",
      image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=800&q=80",
      points: [
        "High-speed motor installations",
        "Gate mechanical and electrical maintenance",
        "Replacement of control boards, cables, and gears",
        "Remote control programming and coding",
        "Automation and safety accessory integration"
      ]
    },
    {
      id: "cctv",
      title: "CCTV & Security Cameras",
      description: "Protect your property with state-of-the-art security monitoring systems and smart security cameras.",
      iconName: "ShieldAlert",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
      points: [
        "HD IP security cameras installation",
        "DVR/NVR configuration and storage setup",
        "Real-time mobile remote view configuration",
        "Perimeter security systems integration",
        "Camera maintenance and camera alignment",
        "Residential and business security planning"
      ]
    },
    {
      id: "automation",
      title: "PLC & Industrial Automation",
      description: "Process optimization and controller programming for maximum industrial productivity and reliability.",
      iconName: "Cpu",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      points: [
        "PLC (Programmable Logic Controller) programming",
        "Industrial system development and upgrades",
        "Control panels assembly and maintenance",
        "Hardware and software troubleshooting",
        "Machine modernization (Retrofitting)",
        "Production line optimization"
      ]
    }
  ]
};

export const featuresData: Record<"pt" | "en", FeatureItem[]> = {
  pt: [
    {
      id: "professionals",
      title: "Profissionais Experientes",
      description: "Equipe técnica qualificada e altamente experiente em constantes treinamentos.",
      iconName: "UserCheck"
    },
    {
      id: "response",
      title: "Atendimento Rápido",
      description: "Entendemos a urgência da sua necessidade. Atendimento ágil e focado em resolver rápido.",
      iconName: "Zap"
    },
    {
      id: "quality",
      title: "Serviço de Qualidade",
      description: "Trabalhamos apenas com peças originais e as melhores práticas para garantir durabilidade.",
      iconName: "Award"
    },
    {
      id: "support",
      title: "Suporte de Confiança",
      description: "Oferecemos garantia em todos os serviços executados e suporte técnico contínuo pós-atendimento.",
      iconName: "Clock"
    },
    {
      id: "pricing",
      title: "Preço Justo",
      description: "Orçamentos transparentes, honestos e competitivos sem taxas surpresa.",
      iconName: "DollarSign"
    },
    {
      id: "satisfaction",
      title: "Satisfação Garantida",
      description: "Nosso objetivo final é sua total satisfação, resolvendo seu problema com perfeição.",
      iconName: "ThumbsUp"
    }
  ],
  en: [
    {
      id: "professionals",
      title: "Experienced Professionals",
      description: "Highly trained and qualified technical team with years of experience on the field.",
      iconName: "UserCheck"
    },
    {
      id: "response",
      title: "Fast Response",
      description: "We understand your urgency. Quick response time focused on solving your technical issues immediately.",
      iconName: "Zap"
    },
    {
      id: "quality",
      title: "Quality Service",
      description: "We work only with premium genuine parts and best technical practices to ensure durability.",
      iconName: "Award"
    },
    {
      id: "support",
      title: "Reliable Support",
      description: "We provide solid warranty on all services and continuous friendly after-sales support.",
      iconName: "Clock"
    },
    {
      id: "pricing",
      title: "Fair Pricing",
      description: "Transparent, upfront, and competitive quotes with absolutely no hidden fees.",
      iconName: "DollarSign"
    },
    {
      id: "satisfaction",
      title: "Customer Satisfaction",
      description: "Our main metric is your ultimate happiness, delivering pristine services every single time.",
      iconName: "ThumbsUp"
    }
  ]
};

export const translations: Record<"pt" | "en", TranslationContent> = {
  pt: {
    nav: {
      services: "Nossos Serviços",
      whyUs: "Por que nos Escolher",
      contact: "Contato",
      ctaButton: "Falar no WhatsApp"
    },
    hero: {
      badge: "⭐ Suporte Técnico Especializado em São Paulo",
      title: "Serviços Técnicos Profissionais que Você Pode Confiar",
      subtitle: "Eletricista, Assistência de Eletrodomésticos, Câmaras Frias, Ar Condicionado, Automatização de Portões, Câmeras de Segurança CFTV e Automação Industrial.",
      cta: "Entrar em Contato no WhatsApp",
      secondaryCta: "Conhecer Serviços",
      trustPilotText: "Mais de 1.200 clientes atendidos com nota máxima de 5.0 estrelas"
    },
    services: {
      title: "Nossos Serviços Profissionais",
      subtitle: "Oferecemos soluções completas com técnicos treinados, ferramentas modernas e garantia em cada atendimento.",
      requestButton: "Solicitar Orçamento Grátis"
    },
    whyUs: {
      title: "Por que escolher a TEC W?",
      subtitle: "Nos destacamos pelo profissionalismo, velocidade de atendimento e compromisso com o melhor resultado para você."
    },
    contact: {
      title: "Precisa de Assistência Técnica?",
      subtitle: "Estamos prontos para atender você agora! Orçamentos transparentes por WhatsApp em poucos minutos.",
      description: "Fale diretamente com um de nossos técnicos qualificados. Evite intermediários e tenha um diagnóstico rápido e profissional para seu problema residencial, comercial ou industrial.",
      button: "Iniciar Conversa com Técnico",
      badge: "Disponibilidade Rápida",
      cardPhone: "Telefone / WhatsApp",
      cardEmail: "E-mail de Contato",
      cardHours: "Horário de Atendimento",
      cardHoursVal: "Segunda a Sábado, das 8h às 20h"
    },
    footer: {
      tagline: "Assistência técnica profissional para residências, comércios e indústrias.",
      rights: "© 2026 TEC W Serviços Gerais. Todos os direitos reservados.",
      privacy: "Políticas de Privacidade",
      terms: "Termos de Uso"
    }
  },
  en: {
    nav: {
      services: "Our Services",
      whyUs: "Why Choose Us",
      contact: "Contact Us",
      ctaButton: "Chat on WhatsApp"
    },
    hero: {
      badge: "⭐ Specialized Technical Support in São Paulo",
      title: "Professional Technical Services You Can Trust",
      subtitle: "Electrical, Refrigeration, Home Appliances, Automation, Security Systems and Industrial Solutions.",
      cta: "Contact on WhatsApp",
      secondaryCta: "Explore Services",
      trustPilotText: "Over 1,200 satisfied customers with a top rating of 5.0 stars"
    },
    services: {
      title: "Our Professional Services",
      subtitle: "We offer complete solutions with trained technicians, advanced tools, and a solid service warranty.",
      requestButton: "Request Service Quote"
    },
    whyUs: {
      title: "Why Choose TEC W?",
      subtitle: "We stand out for our professionalism, fast response time, and ultimate commitment to delivering success."
    },
    contact: {
      title: "Need Technical Assistance?",
      subtitle: "We are ready to assist you right now! Get clear quotes on WhatsApp within minutes.",
      description: "Talk directly with one of our certified technicians. Skip the queue and receive a prompt, professional analysis of your residential, commercial, or industrial technical needs.",
      button: "Start Technical Chat Now",
      badge: "Fast Availability",
      cardPhone: "Phone / WhatsApp",
      cardEmail: "Contact Email",
      cardHours: "Business Hours",
      cardHoursVal: "Monday to Saturday, 8 AM to 8 PM"
    },
    footer: {
      tagline: "Professional technical assistance for homes, businesses, and industrial assets.",
      rights: "© 2026 TEC W Serviços Gerais. All rights reserved.",
      privacy: "Privacy Policies",
      terms: "Terms of Use"
    }
  }
};
