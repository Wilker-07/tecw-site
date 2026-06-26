import React from "react";
import * as Icons from "lucide-react";
import { servicesData, translations, WHATSAPP_LINK } from "../data";

interface ServicesProps {
  lang: "pt" | "en";
}

export default function Services({ lang }: ServicesProps) {
  const services = servicesData[lang];
  const t = translations[lang].services;

  return (
    <section id="services" className="py-20 bg-[#FFFFFF] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Bento Aesthetic */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block bg-purple-100 text-[#6F2DBD] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
            {lang === "pt" ? "Especialidades" : "Specialities"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
            {t.title}
          </h2>
          <div className="h-1 w-12 bg-[#6F2DBD] mx-auto rounded-full"></div>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Bento Grid Services Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = (Icons as any)[service.iconName] || Icons.Wrench;

            // Generate category colors to make bento cards look extremely premium and playful yet professional
            const bgClasses: Record<string, string> = {
              electrical: "bg-purple-100 text-[#6F2DBD]",
              appliances: "bg-blue-100 text-blue-600",
              refrigeration: "bg-cyan-100 text-cyan-600",
              gates: "bg-orange-100 text-orange-600",
              cctv: "bg-red-100 text-red-600",
              automation: "bg-green-100 text-green-600"
            };

            const iconStyle = bgClasses[service.id] || "bg-purple-100 text-[#6F2DBD]";

            return (
              <div
                key={service.id}
                className="bento-card rounded-3xl p-6 flex flex-col justify-between overflow-hidden"
                id={`service-card-${service.id}`}
              >
                {/* Upper Section */}
                <div className="space-y-5 text-left">
                  {/* Service Visual Preview */}
                  <div className="relative h-44 rounded-2xl overflow-hidden bg-gray-50 border border-gray-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Icon & Title Info Header */}
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 ${iconStyle} rounded-xl flex items-center justify-center shrink-0`}>
                      <IconComponent className="w-5 h-5 stroke-[2.5]" />
                    </div>
                    <h3 className="font-extrabold text-base text-gray-900 leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  {/* Service Core Description */}
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet Points with checkmarks */}
                  <ul className="space-y-1.5 pt-2" aria-label={`Subserviços de ${service.title}`}>
                    {service.points.slice(0, 5).map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-[11px] text-gray-600">
                        <Icons.Check className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5 stroke-[3]" />
                        <span className="font-medium leading-tight">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Lower Action CTA */}
                <div className="pt-6 mt-6 border-t border-gray-100/60 flex items-center justify-between">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6F2DBD] hover:text-purple-950 font-bold text-xs flex items-center gap-1 group/btn"
                    id={`request-service-${service.id}`}
                  >
                    <span>{t.requestButton}</span>
                    <Icons.ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                  
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    TEC W
                  </span>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
