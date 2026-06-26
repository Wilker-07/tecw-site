import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Globe, MessageSquare } from "lucide-react";
import Logo from "./Logo";
import { translations, WHATSAPP_LINK, isServiceActive } from "../data";

interface HeaderProps {
  lang: "pt" | "en";
  setLang: (lang: "pt" | "en") => void;
}

export default function Header({ lang, setLang }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = translations[lang].nav;
  const active = isServiceActive();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: t.services, href: "#services" },
    { label: t.whyUs, href: "#why-us" },
    { label: t.contact, href: "#contact" },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-white/80 backdrop-blur-sm py-4 border-b border-gray-100/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#" className="focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg">
            <Logo size={40} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Desktop Navigation">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-purple-700 font-semibold transition-colors text-sm uppercase tracking-wider"
              >
                {item.label}
              </a>
            ))}
            {active ? (
              <div className="flex items-center text-green-600 text-xs font-bold uppercase tracking-wider bg-green-50/80 px-2.5 py-1 rounded-full border border-green-100/80">
                <span className="status-dot mr-1.5 animate-pulse"></span>
                <span>{lang === "pt" ? "Atendimento Ativo" : "Active Support"}</span>
              </div>
            ) : (
              <div className="flex items-center text-amber-600 text-xs font-bold uppercase tracking-wider bg-amber-50/80 px-2.5 py-1 rounded-full border border-amber-100/80">
                <span className="w-2 h-2 rounded-full bg-amber-500 mr-1.5 inline-block"></span>
                <span>{lang === "pt" ? "Suporte via Mensagem" : "Message Support"}</span>
              </div>
            )}
          </nav>

          {/* Controls: Language + WhatsApp CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <button
              onClick={() => setLang(lang === "pt" ? "en" : "pt")}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gray-700 hover:text-purple-700 bg-gray-100 hover:bg-gray-200/80 rounded-full transition-all border border-gray-200"
              title={lang === "pt" ? "Mudar para Inglês" : "Switch to Portuguese"}
              id="desktop-lang-toggle"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === "pt" ? "EN" : "PT"}</span>
            </button>

            {/* Sticky Header CTA */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold text-xs px-4 py-2 rounded-full shadow-sm hover:shadow transition-all group duration-300 transform hover:-translate-y-0.5"
              id="header-whatsapp-cta"
            >
              <MessageSquare className="w-4 h-4 text-white fill-white group-hover:scale-110 transition-transform" />
              <span>{t.ctaButton}</span>
            </a>
          </div>

          {/* Mobile actions buttons (Lang + Hamburger) */}
          <div className="flex items-center md:hidden gap-3">
            {/* Language Toggle on Mobile Header */}
            <button
              onClick={() => setLang(lang === "pt" ? "en" : "pt")}
              className="flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold text-gray-700 bg-gray-100 rounded-full border border-gray-200"
              id="mobile-lang-toggle"
            >
              <Globe className="w-3 h-3" />
              <span>{lang === "pt" ? "EN" : "PT"}</span>
            </button>

            {/* Hamburger icon */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-lg text-gray-600 hover:text-purple-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label="Toggle Menu"
              id="mobile-menu-hamburger"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        id="mobile-drawer"
        className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 ease-in-out transform origin-top ${
          isOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:text-purple-700 font-medium text-base py-1.5 px-3 rounded-lg hover:bg-purple-50 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
            {/* Mobile Status Badge */}
            <div className="flex justify-center py-1">
              {active ? (
                <div className="flex items-center justify-center text-green-600 text-[11px] font-extrabold uppercase tracking-widest bg-green-50/80 px-3 py-1.5 rounded-full border border-green-100/80 w-full">
                  <span className="status-dot mr-2 animate-pulse"></span>
                  <span>{lang === "pt" ? "Atendimento Ativo" : "Active Support"}</span>
                </div>
              ) : (
                <div className="flex items-center justify-center text-amber-600 text-[11px] font-extrabold uppercase tracking-widest bg-amber-50/80 px-3 py-1.5 rounded-full border border-amber-100/80 w-full">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mr-2 inline-block"></span>
                  <span>{lang === "pt" ? "Suporte via Mensagem" : "Message Support"}</span>
                </div>
              )}
            </div>

            {/* Mobile Big CTA */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all active:scale-[0.98]"
              id="mobile-whatsapp-cta"
            >
              <MessageSquare className="w-5 h-5 fill-white text-white" />
              <span>{t.ctaButton}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
