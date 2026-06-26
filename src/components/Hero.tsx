import React from "react";
import { MessageSquare, ArrowRight, ShieldCheck, Zap, Award, Star, ThumbsUp } from "lucide-react";
import Logo from "./Logo";
import { translations, WHATSAPP_LINK, GOOGLE_MAPS_REVIEW_LINK, isServiceActive } from "../data";

interface HeroProps {
  lang: "pt" | "en";
}

export default function Hero({ lang }: HeroProps) {
  const t = translations[lang].hero;
  const active = isServiceActive();

  return (
    <section
      id="hero"
      className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 bg-[#FFFFFF] overflow-hidden"
    >
      {/* Subtle Grid Background Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Bento Card 1: Main Purple Gradient (Col: 7, Row: 1) */}
          <div className="lg:col-span-7 purple-gradient rounded-3xl p-8 sm:p-10 lg:p-12 flex flex-col justify-between text-white shadow-xl relative overflow-hidden group">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="space-y-6 relative">
              <span className="inline-block bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                {lang === "pt" ? "⭐ SUPORTE TÉCNICO ESPECIALIZADO" : "⭐ SPECIALIZED TECHNICAL SUPPORT"}
              </span>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                {t.title}
              </h1>
              
              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal max-w-2xl">
                {t.subtitle}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#6F2DBD] hover:bg-purple-50 px-8 py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-3 shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                id="bento-hero-whatsapp"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>{t.cta}</span>
              </a>
              
              <a
                href="#services"
                className="bg-purple-800/40 hover:bg-purple-800/60 border border-white/20 text-white px-6 py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all"
              >
                <span>{t.secondaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Bento Card 2: Hero Visual Media (Col: 5, Row: 1) */}
          <div className="lg:col-span-5 h-[340px] lg:h-auto rounded-3xl overflow-hidden shadow-md relative group border border-gray-100">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80"
              alt="TEC W Técnico Especialista"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            {/* Absolute bottom floating label */}
            <div className="absolute bottom-6 left-6 right-6 z-20 text-white text-left">
              {active ? (
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="status-dot animate-pulse"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-green-400">Atendimento Ativo</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500 inline-block"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Suporte via Mensagem</span>
                </div>
              )}
              <div className="bg-white p-3 rounded-2xl shadow-md border border-gray-100 flex items-center w-fit mb-2 mt-1.5 transition-all duration-300 transform group-hover:scale-105">
                <Logo size={36} />
              </div>
              <p className="text-xs text-white/80">{lang === "pt" ? "Técnicos certificados NR10 e NR35" : "Certified technicians"}</p>
            </div>
          </div>

          {/* Bento Row 2: Secondary items for conversion & trust */}
          
          {/* Bento Card 3: Trust Rating (Col: 4) */}
          <a
            href={GOOGLE_MAPS_REVIEW_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="lg:col-span-4 bg-gray-50 border border-gray-150 rounded-3xl p-6 flex flex-col justify-between text-left hover:border-purple-300 hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer group/rating relative overflow-hidden"
            id="bento-hero-google-reviews"
          >
            {/* Subtle background brand glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-xl translate-x-4 -translate-y-4 group-hover/rating:bg-purple-500/10 transition-colors"></div>
            
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1 text-amber-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-[10px] bg-purple-100 text-purple-700 font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Google Maps
                </span>
              </div>
              
              <div className="mt-2">
                <p className="text-3xl font-black text-gray-900 tracking-tight">5.0/5.0</p>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">
                  {lang === "pt" ? "Avaliação de Clientes" : "Overall Customer Rating"}
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-500 mt-4 border-t border-gray-200/60 pt-3 leading-relaxed">
                {t.trustPilotText}
              </p>
              <span className="text-xs font-bold text-[#6F2DBD] group-hover/rating:text-purple-900 transition-colors mt-3 inline-flex items-center gap-1.5">
                <span>{lang === "pt" ? "Ver avaliações no Google ➔" : "View google reviews ➔"}</span>
              </span>
            </div>
          </a>

          {/* Bento Card 4: Rapid support (Col: 4) */}
          <div className="lg:col-span-4 bg-gray-50 border border-gray-150 rounded-3xl p-6 flex flex-col justify-between text-left hover:border-purple-200 transition-all group">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mb-4 text-[#6F2DBD] group-hover:bg-[#6F2DBD] group-hover:text-white transition-all">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-gray-950 mb-1">
                {lang === "pt" ? "Atendimento Express" : "Express Care"}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {lang === "pt"
                  ? "Atendemos emergências elétricas e problemas críticos de refrigeração com máxima agilidade."
                  : "We respond to critical electrical and cooling breakdowns immediately."}
              </p>
            </div>
            <span className="text-xs font-bold text-[#6F2DBD] mt-4 inline-block">
              {lang === "pt" ? "Suporte Rápido ➔" : "Fast Support ➔"}
            </span>
          </div>

          {/* Bento Card 5: Guarantee (Col: 4) */}
          <div className="lg:col-span-4 bg-gray-50 border border-gray-150 rounded-3xl p-6 flex flex-col justify-between text-left hover:border-purple-200 transition-all group">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mb-4 text-green-700 group-hover:bg-green-700 group-hover:text-white transition-all">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-gray-950 mb-1">
                {lang === "pt" ? "Garantia por Escrito" : "Written Warranty"}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {lang === "pt"
                  ? "Todos os nossos serviços contam com garantia assegurada e emissão de nota fiscal de serviço."
                  : "All our repair work and installations feature an official guarantee and invoice."}
              </p>
            </div>
            <span className="text-xs font-bold text-green-700 mt-4 inline-block">
              {lang === "pt" ? "Sua Segurança Garantida ➔" : "Written Safety ➔"}
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
