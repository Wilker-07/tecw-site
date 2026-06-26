/**
 * TEC W Serviços Gerais - Main JavaScript
 * 100% Native Vanilla JS (ES6+)
 */

// Global Configuration & Links
const CONFIG = {
  whatsappLink: "https://wa.me/5511992660572?text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20estou%20precisando%20de%20seus%20servi%C3%A7os!",
  instagramLink: "https://instagram.com/atecwservicos",
  googleMapsReviewLink: "https://maps.app.goo.gl/w3ebQY66QvsQFR72A",
  phoneDisplay: "(11) 99266-0572",
  emailDisplay: "contatotecw@gmail.com"
};

// All Copy Translations (Ported directly from data.ts)
const TRANSLATIONS = {
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
      trustPilotText: "Mais de 15 clientes atendidos com nota máxima de 5.0 estrelas"
    },
    services: {
      tag: "Especialidades",
      title: "Nossos Serviços Profissionais",
      subtitle: "Oferecemos soluções completas com técnicos treinados, ferramentas modernas e garantia em cada atendimento.",
      requestButton: "Solicitar Orçamento Grátis"
    },
    whyUs: {
      tag: "Diferenciais",
      title: "Por que escolher a TEC W?",
      subtitle: "Nos destacamos pelo profissionalismo, velocidade de atendimento e compromisso com o melhor resultado para você.",
      compromiseTitle: "Compromisso Total com Você",
      compromiseDesc: "Experiência técnica e excelência em cada detalhe do atendimento.",
      badgeFast: "Atendimento Rápido",
      badgeFastSub: "Suporte Imediato",
      badgeCert: "Profissionais Certificados",
      badgeCertSub: "Técnicos NR10",
      badgePrice: "Preço Transparente",
      badgePriceSub: "Sem Taxas Surpresa",
      ratingTitle: "NOTA DOS CLIENTES",
      viewReviews: "Ver Avaliações",
      viewOnGoogle: "Ver no Google Maps ➔"
    },
    contact: {
      badge: "Disponibilidade Rápida",
      title: "Precisa de Assistência Técnica?",
      subtitle: "Estamos prontos para atender você agora! Orçamentos transparentes por WhatsApp em poucos minutos.",
      description: "Fale diretamente com um de nossos técnicos qualificados. Evite intermediários e tenha um diagnóstico rápido e profissional para seu problema residencial, comercial ou industrial.",
      button: "Iniciar Conversa com Técnico",
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
    },
    floating: {
      title: "TEC W Suporte",
      message: "Olá! Precisa de ajuda ou orçamento técnico? Fale comigo agora! 🛠️"
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
      trustPilotText: "Over 15 satisfied customers with a top rating of 5.0 stars"
    },
    services: {
      tag: "Specialities",
      title: "Our Professional Services",
      subtitle: "We offer complete solutions with trained technicians, advanced tools, and a solid service warranty.",
      requestButton: "Request Service Quote"
    },
    whyUs: {
      tag: "Core Values",
      title: "Why Choose TEC W?",
      subtitle: "We stand out for our professionalism, fast response time, and ultimate commitment to delivering success.",
      compromiseTitle: "Total Commitment to You",
      compromiseDesc: "Experience technical excellence in every detail.",
      badgeFast: "Fast Response",
      badgeFastSub: "Immediate Support",
      badgeCert: "Certified Professionals",
      badgeCertSub: "NR10 Technicians",
      badgePrice: "Transparent Pricing",
      badgePriceSub: "No Surprise Fees",
      ratingTitle: "CUSTOMER RATING",
      viewReviews: "View Reviews",
      viewOnGoogle: "View on Google Maps ➔"
    },
    contact: {
      badge: "Fast Availability",
      title: "Need Technical Assistance?",
      subtitle: "We are ready to assist you right now! Get clear quotes on WhatsApp within minutes.",
      description: "Talk directly with one of our certified technicians. Skip the queue and receive a prompt, professional analysis of your residential, commercial, or industrial technical needs.",
      button: "Start Technical Chat Now",
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
    },
    floating: {
      title: "TEC W Support",
      message: "Hello! Need some help or a service quote? Chat with me now! 🛠️"
    }
  }
};

// All Services Data (Direct translation values, structured for bento rendering)
const SERVICES_DATA = {
  pt: [
    {
      id: "electrical",
      title: "Instalações e Reparos Elétricos",
      description: "Serviços elétricos residenciais, comerciais e industriais de alta qualidade com foco em segurança e normas técnicas.",
      class: "icon-electrical",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
      icon: "zap",
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
      class: "icon-appliances",
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80",
      icon: "tv",
      points: [
        "Máquinas de lavar roupa e lava-louças",
        "Geladeiras, refrigeradores e freezers",
        "Fornos micro-ondas e fornos elétricos",
        "Troca de peças com garantia e originalidade",
        "Atendimento no local para sua comodidade"
      ]
    },
    {
      id: "refrigeration",
      title: "Sistemas de Refrigeração e HVAC",
      description: "Soluções completas de refrigeração comercial e sistemas de ar condicionado residencial ou industrial.",
      class: "icon-refrigeration",
      image: "https://www.produttivo.com.br/blog/wp-content/uploads/2022/08/sistema-hvac.jpg",
      icon: "snowflake",
      points: [
        "Instalação e higienização de ar condicionado",
        "Manutenção de câmaras frigoríficas e balcões",
        "Sistemas de climatização HVAC",
        "Recarga de gás refrigerante ecológica",
        "Contratos de manutenção preventiva (PMOC)"
      ]
    },
    {
      id: "gates",
      title: "Instalação e Conserto de Portões",
      description: "Segurança e praticidade com automatização de portões eletrônicos deslizantes, pivotantes e basculantes.",
      class: "icon-gates",
      image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=800&q=80",
      icon: "key",
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
      class: "icon-cctv",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
      icon: "shield",
      points: [
        "Instalação de câmeras IP de alta definição",
        "Configuração de DVR, NVR e armazenamento",
        "Acesso remoto das câmeras em tempo real pelo celular",
        "Sistemas de segurança perimetral",
        "Manutenção e reposicionamento de câmeras"
      ]
    },
    {
      id: "automation",
      title: "Automação Industrial e CLP",
      description: "Otimização de processos e programação de controladores para máxima produtividade industrial.",
      class: "icon-automation",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      icon: "cpu",
      points: [
        "Programação de CLP (Controlador Lógico Programável)",
        "Desenvolvimento e atualização de sistemas industriais",
        "Montagem e manutenção de painéis elétricos",
        "Diagnóstico de falhas de hardware e software",
        "Modernização de máquinas (Retrofitting)"
      ]
    }
  ],
  en: [
    {
      id: "electrical",
      title: "Electrical Services",
      description: "High-quality residential, commercial, and industrial electrical services focusing on safety and technical standards.",
      class: "icon-electrical",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
      icon: "zap",
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
      class: "icon-appliances",
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80",
      icon: "tv",
      points: [
        "Washing machines and dishwashers",
        "Refrigerators, freezers, and cold storages",
        "Microwaves and electrical ovens",
        "Genuine spare parts replacement with warranty",
        "On-site service for your total convenience"
      ]
    },
    {
      id: "refrigeration",
      title: "Refrigeration & HVAC Systems",
      description: "Complete solutions for commercial refrigeration and residential or industrial air conditioning systems.",
      class: "icon-refrigeration",
      image: "https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=800&q=80",
      icon: "snowflake",
      points: [
        "Air conditioner installation and sanitizing",
        "Cold rooms and display coolers maintenance",
        "Complete HVAC climate control systems",
        "Eco-friendly coolant gas recharge",
        "Preventive maintenance contracts"
      ]
    },
    {
      id: "gates",
      title: "Automatic Gate Services",
      description: "Security and convenience with high-speed automated sliding, swinging, and overhead electronic gates.",
      class: "icon-gates",
      image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=800&q=80",
      icon: "key",
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
      class: "icon-cctv",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
      icon: "shield",
      points: [
        "HD IP security cameras installation",
        "DVR/NVR configuration and storage setup",
        "Real-time mobile remote view configuration",
        "Perimeter security systems integration",
        "Camera maintenance and camera alignment"
      ]
    },
    {
      id: "automation",
      title: "PLC & Industrial Automation",
      description: "Process optimization and controller programming for maximum industrial productivity and reliability.",
      class: "icon-automation",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      icon: "cpu",
      points: [
        "PLC (Programmable Logic Controller) programming",
        "Industrial system development and upgrades",
        "Control panels assembly and maintenance",
        "Hardware and software troubleshooting",
        "Machine modernization (Retrofitting)"
      ]
    }
  ]
};

// All Core Values/Features Data (direct translation values, structured for feature rendering)
const FEATURES_DATA = {
  pt: [
    {
      id: "professionals",
      title: "Profissionais Experientes",
      description: "Equipe técnica qualificada e altamente experiente em constantes treinamentos.",
      icon: "user-check"
    },
    {
      id: "response",
      title: "Atendimento Rápido",
      description: "Entendemos a urgência da sua necessidade. Atendimento ágil e focado em resolver rápido.",
      icon: "zap"
    },
    {
      id: "quality",
      title: "Serviço de Qualidade",
      description: "Trabalhamos apenas com peças originais e as melhores práticas para garantir durabilidade.",
      icon: "award"
    },
    {
      id: "support",
      title: "Suporte de Confiança",
      description: "Oferecemos garantia em todos os serviços executados e suporte técnico contínuo pós-atendimento.",
      icon: "clock"
    },
    {
      id: "pricing",
      title: "Preço Justo",
      description: "Orçamentos transparentes, honestos e competitivos sem taxas surpresa.",
      icon: "dollar-sign"
    },
    {
      id: "satisfaction",
      title: "Satisfação Garantida",
      description: "Nosso objetivo final é sua total satisfação, resolvendo seu problema com perfeição.",
      icon: "thumbs-up"
    }
  ],
  en: [
    {
      id: "professionals",
      title: "Experienced Professionals",
      description: "Highly trained and qualified technical team with years of experience on the field.",
      icon: "user-check"
    },
    {
      id: "response",
      title: "Fast Response",
      description: "We understand your urgency. Quick response time focused on solving your technical issues immediately.",
      icon: "zap"
    },
    {
      id: "quality",
      title: "Quality Service",
      description: "We work only with premium genuine parts and best technical practices to ensure durability.",
      icon: "award"
    },
    {
      id: "support",
      title: "Reliable Support",
      description: "We provide solid warranty on all services and continuous friendly after-sales support.",
      icon: "clock"
    },
    {
      id: "pricing",
      title: "Fair Pricing",
      description: "Transparent, upfront, and competitive quotes with absolutely no hidden fees.",
      icon: "dollar-sign"
    },
    {
      id: "satisfaction",
      title: "Customer Satisfaction",
      description: "Our main metric is your ultimate happiness, delivering pristine services every single time.",
      icon: "thumbs-up"
    }
  ]
};

// Icons Registry (Pure SVG markup)
const ICONS = {
  zap: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  tv: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="15" x="2" y="7" rx="2" ry="2"/><path d="m17 2-5 5-5-5"/></svg>`,
  snowflake: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="2" x2="22" y1="12" y2="12"/><line x1="12" x2="12" y1="2" y2="22"/><path d="m20 16-4-4 4-4"/><path d="m4 8 4 4-4 4"/><path d="m16 4-4 4-4-4"/><path d="m8 20 4-4 4 4"/><line x1="5.64" x2="18.36" y1="5.64" y2="18.36"/><line x1="18.36" x2="5.64" y1="5.64" y2="18.36"/></svg>`,
  key: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3m-1.5-4.5 3 3"/></svg>`,
  shield: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 9.7a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 .76-.97l8.24-2a1 1 0 0 1 .48 0l8.24 2A1 1 0 0 1 20 6Z"/></svg>`,
  cpu: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M9 1v3"/><path d="M15 1v3"/><path d="M9 20v3"/><path d="M15 20v3"/><path d="M20 9h3"/><path d="M20 15h3"/><path d="M1 9h3"/><path d="M1 15h3"/></svg>`,
  "user-check": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>`,
  award: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
  clock: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  "dollar-sign": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  "thumbs-up": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>`,
  globe: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  phone: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  mail: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
};

// Application State
let currentLang = "pt";

/**
 * Checks if the service is active (based on São Paulo local time)
 * Monday to Saturday, 8:00 AM to 8:00 PM (hours 8 to 19 inclusive)
 */
function isServiceActive() {
  const now = new Date();
  try {
    const spTimeStr = now.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" });
    const spDate = new Date(spTimeStr);
    const day = spDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const hours = spDate.getHours();
    return day >= 1 && day <= 6 && hours >= 8 && hours < 20;
  } catch (e) {
    const day = now.getDay();
    const hours = now.getHours();
    return day >= 1 && day <= 6 && hours >= 8 && hours < 20;
  }
}

/**
 * Renders the Services grid dynamically based on the current language
 */
function renderServices() {
  const grid = document.getElementById("services-grid");
  if (!grid) return;

  const data = SERVICES_DATA[currentLang];
  const ctaText = TRANSLATIONS[currentLang].services.requestButton;

  grid.innerHTML = data.map(service => {
    const pointsMarkup = service.points.map(pt => `
      <li class="service-point-item">
        ${ICONS.check}
        <span>${pt}</span>
      </li>
    `).join("");

    return `
      <div class="bento-card" id="service-card-${service.id}">
        <div>
          <!-- Image -->
          <div class="service-card-image-box">
            <img src="${service.image}" alt="${service.title}" class="service-card-image" loading="lazy" referrerPolicy="no-referrer">
            <div class="service-card-image-overlay"></div>
          </div>

          <!-- Title Meta -->
          <div class="service-card-meta">
            <div class="service-icon-box ${service.class}">
              ${ICONS[service.icon]}
            </div>
            <h3 class="service-title">${service.title}</h3>
          </div>

          <!-- Desc -->
          <p class="service-desc">${service.description}</p>

          <!-- Bullet Points -->
          <ul class="service-points" aria-label="Points of ${service.title}">
            ${pointsMarkup}
          </ul>
        </div>

        <!-- Footer -->
        <div class="service-card-footer">
          <a href="${CONFIG.whatsappLink}" target="_blank" rel="noopener noreferrer" class="btn-card-action" id="request-service-${service.id}">
            <span>${ctaText}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <span class="service-footer-brand">TEC W</span>
        </div>
      </div>
    `;
  }).join("");
}

/**
 * Renders the Why Choose Us grid dynamically based on the current language
 */
function renderFeatures() {
  const grid = document.getElementById("features-grid");
  if (!grid) return;

  const data = FEATURES_DATA[currentLang];

  grid.innerHTML = data.map(feature => {
    return `
      <div class="feature-card" id="feature-card-${feature.id}">
        <div class="feature-top">
          <div class="feature-icon-frame">
            ${ICONS[feature.icon]}
          </div>
          <div>
            <h3 class="feature-title">${feature.title}</h3>
            <p class="feature-desc">${feature.description}</p>
          </div>
        </div>
        <div class="feature-footer">
          <span class="feature-footer-tag">TEC W Standard</span>
        </div>
      </div>
    `;
  }).join("");
}

/**
 * Toggles and updates all translations across the DOM
 */
function updateDOMTranslations() {
  const t = TRANSLATIONS[currentLang];

  // Language buttons text
  document.querySelectorAll(".btn-lang-text").forEach(el => {
    el.textContent = currentLang === "pt" ? "EN" : "PT";
  });
  document.querySelectorAll(".btn-lang").forEach(el => {
    el.setAttribute("title", currentLang === "pt" ? "Switch to English" : "Mudar para Português");
  });

  // Navigation Link items
  document.querySelectorAll("[data-nav-services]").forEach(el => el.textContent = t.nav.services);
  document.querySelectorAll("[data-nav-why-us]").forEach(el => el.textContent = t.nav.whyUs);
  document.querySelectorAll("[data-nav-contact]").forEach(el => el.textContent = t.nav.contact);
  document.querySelectorAll("[data-nav-cta]").forEach(el => el.textContent = t.nav.ctaButton);

  // Hero Section
  document.querySelector("[data-hero-badge]").textContent = t.hero.badge;
  document.querySelector("[data-hero-title]").textContent = t.hero.title;
  document.querySelector("[data-hero-subtitle]").textContent = t.hero.subtitle;
  document.querySelector("[data-hero-cta]").textContent = t.hero.cta;
  document.querySelector("[data-hero-secondary-cta]").textContent = t.hero.secondaryCta;
  document.querySelector("[data-hero-reviews]").textContent = t.hero.trustPilotText;
  document.querySelector("[data-hero-cert]").textContent = currentLang === "pt" ? "Técnicos certificados NR10 e NR35" : "Certified technicians";

  // Services Header
  document.querySelector("[data-services-tag]").textContent = t.services.tag;
  document.querySelector("[data-services-title]").textContent = t.services.title;
  document.querySelector("[data-services-subtitle]").textContent = t.services.subtitle;

  // Why Choose Us Header & Bottom Strip
  document.querySelector("[data-why-tag]").textContent = t.whyUs.tag;
  document.querySelector("[data-why-title]").textContent = t.whyUs.title;
  document.querySelector("[data-why-subtitle]").textContent = t.whyUs.subtitle;

  document.querySelector("[data-strip-title]").textContent = t.whyUs.compromiseTitle;
  document.querySelector("[data-strip-desc]").textContent = t.whyUs.compromiseDesc;
  document.querySelector("[data-badge-fast]").textContent = t.whyUs.badgeFast;
  document.querySelector("[data-badge-fast-sub]").textContent = t.whyUs.badgeFastSub;
  document.querySelector("[data-badge-cert]").textContent = t.whyUs.badgeCert;
  document.querySelector("[data-badge-cert-sub]").textContent = t.whyUs.badgeCertSub;
  document.querySelector("[data-badge-price]").textContent = t.whyUs.badgePrice;
  document.querySelector("[data-badge-price-sub]").textContent = t.whyUs.badgePriceSub;
  document.querySelector("[data-rating-title]").textContent = t.whyUs.ratingTitle;
  document.querySelector("[data-view-reviews-mob]").textContent = t.whyUs.viewReviews;
  document.querySelector("[data-view-reviews-desk]").textContent = t.whyUs.viewOnGoogle;

  // Contact section
  document.querySelector("[data-contact-badge]").textContent = t.contact.badge;
  document.querySelector("[data-contact-title]").textContent = t.contact.title;
  document.querySelector("[data-contact-subtitle]").textContent = t.contact.subtitle;
  document.querySelector("[data-contact-desc]").textContent = t.contact.description;
  document.querySelector("[data-contact-btn]").textContent = t.contact.button;

  document.querySelector("[data-card-phone-label]").textContent = t.contact.cardPhone;
  document.querySelector("[data-card-email-label]").textContent = t.contact.cardEmail;
  document.querySelector("[data-card-hours-label]").textContent = t.contact.cardHours;
  document.querySelector("[data-card-hours-val]").textContent = t.contact.cardHoursVal;

  // Footer Section
  document.querySelector("[data-footer-tagline]").textContent = t.footer.tagline;
  document.querySelector("[data-footer-why-us]").textContent = t.nav.whyUs;
  document.querySelector("[data-footer-services]").textContent = t.nav.services;
  document.querySelector("[data-footer-rights]").textContent = t.footer.rights;
  document.querySelector("[data-footer-privacy]").textContent = t.footer.privacy;
  document.querySelector("[data-footer-terms]").textContent = t.footer.terms;

  // Floating WhatsApp widget
  document.querySelector("[data-floating-title]").textContent = t.floating.title;
  document.querySelector("[data-floating-msg]").textContent = t.floating.message;

  // Re-render loops
  renderServices();
  renderFeatures();
}

/**
 * Toggles the language of the page (PT <-> EN)
 */
function toggleLanguage() {
  currentLang = currentLang === "pt" ? "en" : "pt";
  updateDOMTranslations();
}

/**
 * Initializes and updates the active service status badges
 */
function updateActiveStatus() {
  const active = isServiceActive();
  const textPT = active ? "Atendimento Ativo" : "Suporte via Mensagem";
  const textEN = active ? "Active Support" : "Message Support";

  document.querySelectorAll(".status-badge").forEach(el => {
    if (active) {
      el.className = "status-badge active";
      el.innerHTML = `<span class="status-dot pulse"></span><span>${currentLang === "pt" ? textPT : textEN}</span>`;
    } else {
      el.className = "status-badge inactive";
      el.innerHTML = `<span class="status-dot"></span><span>${currentLang === "pt" ? textPT : textEN}</span>`;
    }
  });
}

/**
 * Setup mobile drawers and navigation hamburger click handlers
 */
function setupNavigation() {
  const header = document.getElementById("main-header");
  const hamburger = document.getElementById("mobile-menu-hamburger");
  const drawer = document.getElementById("mobile-drawer");

  // Scroll event handler for header shrink
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Mobile menu click toggle
  if (hamburger && drawer) {
    hamburger.addEventListener("click", () => {
      const isOpen = drawer.classList.contains("open");
      if (isOpen) {
        drawer.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
        hamburger.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`;
      } else {
        drawer.classList.add("open");
        hamburger.setAttribute("aria-expanded", "true");
        hamburger.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>`;
      }
    });

    // Close mobile drawer when a link is clicked
    drawer.querySelectorAll(".mobile-nav-link").forEach(link => {
      link.addEventListener("click", () => {
        drawer.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
        hamburger.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`;
      });
    });
  }
}

/**
 * Setup Floating WhatsApp Widget delay and actions
 */
function setupFloatingWidget() {
  const tooltip = document.getElementById("widget-tooltip");
  const closeBtn = document.getElementById("widget-tooltip-close");

  // Show widget tooltip with a high-converting delay after 3 seconds
  setTimeout(() => {
    if (tooltip) {
      tooltip.classList.add("show");
    }
  }, 3000);

  // Close button click handler
  if (closeBtn && tooltip) {
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();
      tooltip.classList.remove("show");
    });
  }
}

// Document Load Entrypoint
document.addEventListener("DOMContentLoaded", () => {
  // Setup links
  document.querySelectorAll("[data-whatsapp-href]").forEach(el => {
    el.setAttribute("href", CONFIG.whatsappLink);
  });
  document.querySelectorAll("[data-instagram-href]").forEach(el => {
    el.setAttribute("href", CONFIG.instagramLink);
  });
  document.querySelectorAll("[data-review-href]").forEach(el => {
    el.setAttribute("href", CONFIG.googleMapsReviewLink);
  });
  document.querySelectorAll("[data-email-text]").forEach(el => {
    el.textContent = CONFIG.emailDisplay;
    if (el.tagName === "A") {
      el.setAttribute("href", `mailto:${CONFIG.emailDisplay}`);
    }
  });
  document.querySelectorAll("[data-phone-text]").forEach(el => {
    el.textContent = CONFIG.phoneDisplay;
    if (el.tagName === "A") {
      el.setAttribute("href", `tel:${CONFIG.phoneDisplay.replace(/\D/g, "")}`);
    }
  });

  // Setup Lang Switcher triggers
  document.querySelectorAll(".btn-lang").forEach(btn => {
    btn.addEventListener("click", toggleLanguage);
  });

  // Initialize UI navigation & actions
  setupNavigation();
  setupFloatingWidget();

  // Draw translations initially
  updateDOMTranslations();
  updateActiveStatus();

  // Regularly check & update the support dot status every 60 seconds
  setInterval(updateActiveStatus, 60000);
});
