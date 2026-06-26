import React from "react";

interface LogoProps {
  className?: string;
  variant?: "horizontal" | "full";
  size?: number;
}

export default function Logo({ className = "", variant = "horizontal", size = 48 }: LogoProps) {
  // Orange: #FF6B00, Blue: #004AAD (Brand colors extracted from card)
  // Let's also support Purple (#6F2DBD) as the primary theme if needed, but keeping brand colors in logo is perfect!
  
  const iconMarkup = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block shrink-0"
    >
      {/* Outer Circle of Orange Gear teeth */}
      <g className="origin-center" fill="#FF6B00">
        {/* Gear base ring open at top */}
        <path
          d="M 64 80 A 48 48 0 1 0 136 80"
          fill="none"
          stroke="#FF6B00"
          strokeWidth="12"
          strokeLinecap="round"
        />
        
        {/* Gear teeth around bottom and sides */}
        {[60, 90, 120, 150, 180, 210, 240, 270, 300].map((angle, i) => (
          <rect
            key={i}
            x="93"
            y="58"
            width="14"
            height="20"
            rx="3"
            transform={`rotate(${angle} 100 118)`}
          />
        ))}
      </g>

      {/* Two vertical orange columns rising from the gear */}
      <g stroke="#FF6B00" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M 76 80 L 76 45 L 64 45" />
        <path d="M 124 80 L 124 45 L 136 45" />
      </g>

      {/* House inside the gear */}
      {/* 1. Main Orange Roof line */}
      <path
        d="M 52 120 L 100 85 L 148 120"
        fill="none"
        stroke="#FF6B00"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* 2. Secondary Blue Roof line underneath */}
      <path
        d="M 64 121 L 100 97 L 136 121"
        fill="none"
        stroke="#004AAD"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 3. House Windows (Orange squares) */}
      <g fill="#FF6B00">
        <rect x="82" y="122" width="12" height="12" rx="1.5" />
        <rect x="106" y="122" width="12" height="12" rx="1.5" />
        <rect x="82" y="138" width="12" height="12" rx="1.5" />
        <rect x="106" y="138" width="12" height="12" rx="1.5" />
      </g>

      {/* Surrounding Blue Tools */}
      {/* 1. Washing Machine (Top Left) */}
      <g transform="translate(24, 30) scale(0.85)" stroke="#004AAD" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <rect x="6" y="6" width="28" height="34" rx="4" strokeWidth="8" />
        <line x1="12" y1="12" x2="18" y2="12" strokeWidth="5" />
        <circle cx="20" cy="25" r="8" strokeWidth="6" />
        <circle cx="28" cy="12" r="2" fill="#004AAD" stroke="none" />
      </g>

      {/* 2. Electric Plug (Middle Left) */}
      <g transform="translate(10, 95) scale(0.85)" stroke="#004AAD" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M12 8 L4 8" strokeWidth="8" />
        <path d="M12 24 L4 24" strokeWidth="8" />
        <rect x="12" y="4" width="18" height="24" rx="4" fill="#004AAD" stroke="none" />
        <path d="M30 16 L42 16" strokeWidth="8" />
      </g>

      {/* 3. Hammer (Bottom Left) */}
      <g transform="translate(14, 134) scale(0.7) rotate(-15)" stroke="#004AAD" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M15 45 L38 22" strokeWidth="10" />
        <path d="M34 14 L46 26" strokeWidth="16" />
        <path d="M30 18 C24 14, 16 14, 12 18" strokeWidth="8" />
      </g>

      {/* 4. Wrench (Top Right) */}
      <g transform="translate(140, 35) scale(0.8) rotate(45)" stroke="#004AAD" strokeWidth="8" strokeLinecap="round" fill="none">
        <path d="M5 25 L35 25" strokeWidth="10" />
        <path d="M5 25 C5 15, 12 10, 20 10 C28 10, 35 15, 35 25" strokeWidth="12" />
        <path d="M20 5 L20 15" strokeWidth="10" />
      </g>

      {/* 5. Adjustable Wrench (Middle Right) */}
      <g transform="translate(155, 95) scale(0.8) rotate(15)" stroke="#004AAD" strokeWidth="8" strokeLinecap="round" fill="none">
        <path d="M5 15 L25 15" strokeWidth="10" />
        <circle cx="30" cy="15" r="7" strokeWidth="8" />
        <path d="M28 8 L38 8" strokeWidth="6" />
        <path d="M28 22 L38 22" strokeWidth="6" />
      </g>

      {/* 6. Air Conditioner & Snowflake (Bottom Right) */}
      <g transform="translate(132, 138) scale(0.7) rotate(-15)" stroke="#004AAD" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <rect x="4" y="10" width="36" height="24" rx="4" strokeWidth="8" />
        <line x1="12" y1="18" x2="28" y2="18" strokeWidth="4" />
        <line x1="12" y1="26" x2="28" y2="26" strokeWidth="4" />
        <circle cx="48" cy="22" r="10" fill="#004AAD" stroke="none" />
        <path d="M48 16 L48 28 M43 22 L53 22 M44 18 L52 26 M44 26 L52 18" stroke="white" strokeWidth="2.5" />
      </g>
    </svg>
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
