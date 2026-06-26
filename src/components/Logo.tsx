import React from "react";
import LogoSvg from "../assets/logosvg.svg?react";

interface LogoProps {
  className?: string;
  variant?: "horizontal" | "full";
  size?: number;
}

export default function Logo({ className = "", variant = "horizontal", size = 48 }: LogoProps) {
  // Orange: #FF6B00, Blue: #004AAD (Brand colors extracted from card)
  // Let's also support Purple (#6F2DBD) as the primary theme if needed, but keeping brand colors in logo is perfect!
  
  const iconMarkup = (
  <LogoSvg
    width={size}
    height={size}
    className="inline-block shrink-0"
  />
  );

  if (variant === "full") {
    return (
      <div className={`flex flex-col items-center text-center ${className}`} id="logo-full">
        <div className="relative">
          {/* Subtle outer glowing circles */}
          <div className="absolute inset-0 bg-blue-100/50 rounded-full blur-3xl -z-10 animate-pulse"></div>
          {iconMarkup}
        </div>
        <div className="mt-4">
          <h1 className="text-3xl font-extrabold tracking-wider text-[#004AAD] uppercase">
            TEC W
          </h1>
          <div className="flex items-center justify-center gap-2 mt-1 text-sm font-semibold tracking-widest uppercase">
            <span className="text-[#FF6B00]">Serviços</span>
            <span className="text-[#004AAD]">Gerais</span>
          </div>
        </div>
      </div>
    );
  }

  // Horizontal variant (default)
  return (
    <div className={`flex items-center gap-3 ${className}`} id="logo-horizontal">
      {iconMarkup}
      <div className="flex flex-col">
        <span className="text-xl font-extrabold tracking-wide text-[#004AAD] leading-none uppercase">
          TEC W
        </span>
        <span className="text-[9px] font-bold tracking-widest text-[#FF6B00] uppercase leading-tight">
          Serviços Gerais
        </span>
      </div>
    </div>
  );
}
