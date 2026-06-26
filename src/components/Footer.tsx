import React from "react";
import { MessageSquare, Instagram, Mail, Phone, ArrowUp } from "lucide-react";
import Logo from "./Logo";
import { translations, INSTAGRAM_LINK, PHONE_DISPLAY, EMAIL_DISPLAY } from "../data";

interface FooterProps {
  lang: "pt" | "en";
}

export default function Footer({ lang }: FooterProps) {
  const t = translations[lang].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="main-footer" className="bg-[#111111] text-gray-400 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-gray-800">
          
          {/* Column 1: Brand Logo & Tagline */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="bg-white/5 inline-block p-2 rounded-xl border border-white/5">
              <Logo size={36} />
            </div>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              {t.tagline}
            </p>
            {/* Social Media links */}
            <div className="flex space-x-3 pt-2">
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-purple-700 hover:text-white flex items-center justify-center transition-all border border-white/5"
                title="Siga no Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${EMAIL_DISPLAY}`}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-purple-700 hover:text-white flex items-center justify-center transition-all border border-white/5"
                title="Enviar E-mail"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 text-left space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              {lang === "pt" ? "Navegação" : "Navigation"}
            </h3>
            <ul className="space-y-2.5 text-sm" aria-label="Footer Navigation">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {lang === "pt" ? "Serviços Técnicos" : "Technical Services"}
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  {lang === "pt" ? "Por que Escolher a TEC W" : "Why Choose TEC W"}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  {lang === "pt" ? "Falar com Técnico" : "Contact Technical Support"}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Local Services */}
          <div className="md:col-span-4 text-left space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              {lang === "pt" ? "Canais de Atendimento" : "Service Channels"}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="font-semibold text-gray-200">{PHONE_DISPLAY}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <span>{EMAIL_DISPLAY}</span>
              </li>
              <li className="text-xs text-gray-500 leading-normal">
                {lang === "pt"
                  ? "Atendemos residências, condomínios, estabelecimentos comerciais e indústrias em toda São Paulo e Grande ABC."
                  : "Serving residences, residential complexes, retail shops, and industrial units across São Paulo & ABC region."}
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright and Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-gray-500">
            {t.rights}
          </p>
          
          <div className="flex gap-6 text-gray-500">
            <a href="#contact" className="hover:text-gray-300 transition-colors">
              {t.privacy}
            </a>
            <span>•</span>
            <a href="#contact" className="hover:text-gray-300 transition-colors">
              {t.terms}
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 bg-white/5 hover:bg-purple-700 hover:text-white border border-white/5 rounded-xl transition-all flex items-center justify-center group"
            title={lang === "pt" ? "Voltar ao topo" : "Back to top"}
            id="back-to-top-button"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
