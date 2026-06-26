import React, { useState, useEffect } from "react";
import { MessageSquare, X } from "lucide-react";
import { WHATSAPP_LINK } from "../data";

interface FloatingWhatsAppProps {
  lang: "pt" | "en";
}

export default function FloatingWhatsApp({ lang }: FloatingWhatsAppProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show a high-converting message bubble after 3 seconds of page load
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const message =
    lang === "pt"
      ? "Olá! Precisa de ajuda ou orçamento técnico? Fale comigo agora! 🛠️"
      : "Hello! Need some help or a service quote? Chat with me now! 🛠️";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none" id="floating-whatsapp-widget">
      {/* High Converting Chat Bubble Notification */}
      {showTooltip && (
        <div className="mb-3 max-w-xs bg-white text-gray-900 px-4 py-3 rounded-2xl shadow-2xl border border-gray-150 relative pointer-events-auto animate-float flex items-start gap-2">
          {/* Close Button */}
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1 right-1 p-1 text-gray-400 hover:text-gray-700 rounded-full transition-colors"
            title="Dismiss"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <div className="text-xs font-medium pr-3.5 text-left">
            <span className="font-bold text-purple-700 block mb-0.5">TEC W Suporte</span>
            {message}
          </div>
          
          {/* Decorative speech bubble notch */}
          <div className="absolute bottom-[-6px] right-5 w-3 h-3 bg-white border-r border-b border-gray-150 rotate-45"></div>
        </div>
      )}

      {/* Pulsing Core Action Button */}
      <div className="relative pointer-events-auto">
        {/* Pulsing Outer Rings */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-pulse-ring -z-10"></div>
        
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
          aria-label="Contact TEC W on WhatsApp"
          title="Falar no WhatsApp"
          id="floating-whatsapp-action-button"
        >
          <MessageSquare className="w-8 h-8 fill-white text-white group-hover:rotate-12 transition-transform duration-300" />
        </a>
      </div>
    </div>
  );
}
