import React from "react";
import { MessageSquare, Phone, Mail, Clock, ShieldCheck, MapPin } from "lucide-react";
import { translations, WHATSAPP_LINK, PHONE_DISPLAY, EMAIL_DISPLAY } from "../data";

interface ContactProps {
  lang: "pt" | "en";
}

export default function Contact({ lang }: ContactProps) {
  const t = translations[lang].contact;

  return (
    <section id="contact" className="py-20 bg-gray-50/50 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 rounded-3xl overflow-hidden relative shadow-2xl border border-gray-800">
          {/* Subtle Decorative Background Gradients */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-700/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-700/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 -z-10"></div>

          <div className="grid lg:grid-cols-12 gap-12 p-8 sm:p-12 lg:p-16 items-center">
            {/* Left Column: Copywriting and WhatsApp CTA */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-block bg-purple-900/60 border border-purple-800 text-purple-200 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
                {t.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {t.title}
              </h2>
              <p className="text-purple-100/90 text-base sm:text-lg leading-relaxed max-w-xl">
                {t.subtitle}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                {t.description}
              </p>

              {/* Massive Green Pulse WhatsApp Button */}
              <div className="pt-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3.5 bg-[#25D366] hover:bg-[#128C7E] text-white font-extrabold text-lg px-8 py-4.5 rounded-2xl shadow-xl hover:shadow-[#25D366]/20 transition-all hover:-translate-y-1 active:scale-[0.98] duration-300 w-full sm:w-auto"
                  id="contact-whatsapp-primary"
                >
                  <MessageSquare className="w-6 h-6 fill-white text-white animate-bounce" />
                  <span>{t.button}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Contact Cards */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 space-y-6">
                {/* 1. Phone Card */}
                <div className="flex gap-4 items-start text-left">
                  <div className="p-3 bg-purple-950 text-purple-400 rounded-xl border border-purple-800/50">
                    <Phone className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      {t.cardPhone}
                    </h4>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-bold text-white hover:text-purple-400 transition-colors"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>

                {/* 2. Email Card */}
                <div className="flex gap-4 items-start text-left">
                  <div className="p-3 bg-purple-950 text-purple-400 rounded-xl border border-purple-800/50">
                    <Mail className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      {t.cardEmail}
                    </h4>
                    <a
                      href={`mailto:${EMAIL_DISPLAY}`}
                      className="text-lg font-bold text-white hover:text-purple-400 transition-colors"
                    >
                      {EMAIL_DISPLAY}
                    </a>
                  </div>
                </div>

                {/* 3. Hours Card */}
                <div className="flex gap-4 items-start text-left">
                  <div className="p-3 bg-purple-950 text-purple-400 rounded-xl border border-purple-800/50">
                    <Clock className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                      {t.cardHours}
                    </h4>
                    <p className="text-sm font-semibold text-gray-200">
                      {t.cardHoursVal}
                    </p>
                  </div>
                </div>

                {/* 4. Safety indicator */}
                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-green-400 text-xs font-semibold">
                  <ShieldCheck className="w-5 h-5 shrink-0" />
                  <span>Atendimento em São Paulo e Grande ABC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
