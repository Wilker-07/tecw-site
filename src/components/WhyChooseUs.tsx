import React from "react";
import * as Icons from "lucide-react";
import { featuresData, translations, GOOGLE_MAPS_REVIEW_LINK } from "../data";

interface WhyChooseUsProps {
  lang: "pt" | "en";
}

export default function WhyChooseUs({ lang }: WhyChooseUsProps) {
  const features = featuresData[lang];
  const t = translations[lang].whyUs;

  return (
    <section id="why-us" className="py-20 bg-[#FFFFFF] border-t border-gray-100 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block bg-purple-100 text-[#6F2DBD] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
            {lang === "pt" ? "Diferenciais" : "Core Values"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
            {t.title}
          </h2>
          <div className="h-1 w-12 bg-[#6F2DBD] mx-auto rounded-full"></div>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Bento Grid layout for individual values (3 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature) => {
            const IconComponent = (Icons as any)[feature.iconName] || Icons.CheckCircle;

            return (
              <div
                key={feature.id}
                className="bento-card rounded-3xl p-6 flex flex-col justify-between items-start text-left group"
                id={`feature-card-${feature.id}`}
              >
                <div className="space-y-4">
                  {/* Icon Frame */}
                  <div className="w-10 h-10 bg-purple-50 group-hover:bg-[#6F2DBD] rounded-xl flex items-center justify-center text-[#6F2DBD] group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-5 h-5 stroke-[2.5]" />
                  </div>

                  {/* Text */}
                  <div className="space-y-1">
                    <h3 className="text-base font-extrabold text-gray-900 group-hover:text-[#6F2DBD] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-50 w-full flex justify-end">
                  <span className="text-[10px] font-bold text-gray-300 group-hover:text-purple-300 uppercase tracking-widest transition-colors">
                    TEC W Standard
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Big Horizontal Bento Summary Strip (inspired by Design HTML) */}
        <div className="accent-bg rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 shadow-sm border border-gray-150">
          
          <div className="flex flex-col gap-1 text-left">
            <h3 className="text-xl font-extrabold text-gray-900">
              {lang === "pt" ? "Compromisso Total com Você" : "Total Commitment to You"}
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm">
              {lang === "pt" ? "Experiência técnica e excelência em cada detalhe do atendimento." : "Experience technical excellence in every detail."}
            </p>
          </div>
          
          {/* Middle badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 shrink-0 text-left">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm text-green-600 font-bold text-xs">
                ✔
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xs text-gray-900">Atendimento Rápido</span>
                <span className="text-[9px] text-gray-400 uppercase font-semibold">Suporte Imediato</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm text-green-600 font-bold text-xs">
                ✔
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xs text-gray-900">Profissionais Certificados</span>
                <span className="text-[9px] text-gray-400 uppercase font-semibold">Técnicos NR10</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm text-green-600 font-bold text-xs">
                ✔
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xs text-gray-900">Preço Transparente</span>
                <span className="text-[9px] text-gray-400 uppercase font-semibold">Sem Taxas Surpresa</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block h-12 w-[1px] bg-gray-200"></div>

          {/* Rating Badge - Clickable to Google Maps Review */}
          <a
            href={GOOGLE_MAPS_REVIEW_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row lg:flex-col items-center justify-between lg:justify-center bg-white hover:bg-purple-50/50 p-4 lg:p-3 rounded-2xl border border-gray-150 hover:border-purple-300 transition-all shrink-0 cursor-pointer group/bottom-rating text-left"
            id="bottom-bento-google-reviews"
          >
            <div className="flex flex-col items-start lg:items-center">
              <span className="text-3xl font-black text-[#6F2DBD] group-hover/bottom-rating:scale-105 transition-transform">5.0/5.0</span>
              <span className="text-[9px] text-purple-600 font-extrabold uppercase tracking-wider mt-0.5 block lg:hidden">
                ➔ {lang === "pt" ? "Ver Avaliações" : "View Reviews"}
              </span>
            </div>
            <div className="text-right lg:text-center lg:mt-2">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">
                {lang === "pt" ? "NOTA DOS CLIENTES" : "CUSTOMER RATING"}
              </span>
              <div className="flex items-center justify-end lg:justify-center gap-0.5 mt-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Icons.Star key={s} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                ))}
              </div>
              <span className="text-[9px] text-purple-600 font-extrabold uppercase tracking-wider mt-1 hidden lg:block">
                {lang === "pt" ? "Ver no Google Maps ➔" : "View on Google Maps ➔"}
              </span>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}
