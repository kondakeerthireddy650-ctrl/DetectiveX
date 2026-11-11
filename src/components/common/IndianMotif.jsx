import React from 'react';

// Delicate Indian Jali / Mandala corner ornament
export const CornerOrnament = ({ className = "text-gold-500/40" }) => (
  <svg viewBox="0 0 40 40" className={`w-6 h-6 ${className}`} fill="currentColor">
    <path d="M0,0 L18,0 C12,4 6,10 6,18 L6,40 L0,40 Z" opacity="0.4" />
    <circle cx="12" cy="12" r="3" />
    <path d="M0,0 L40,0 L40,2 L2,2 L2,40 L0,40 Z" />
    <circle cx="22" cy="6" r="1.5" />
    <circle cx="6" cy="22" r="1.5" />
  </svg>
);

// Traditional ornamental divider line with Indian floral rosette
export const HeritageDivider = ({ className = "" }) => (
  <div className={`flex items-center justify-center gap-3 my-6 text-gold-500/60 ${className}`}>
    <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent via-gold-400 to-gold-500/60" />
    <svg className="w-5 h-5 text-gold-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" opacity="0.9" />
      <circle cx="12" cy="12" r="2.5" fill="#6E1A29" />
    </svg>
    <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent via-gold-400 to-gold-500/60" />
  </div>
);

// Wax Seal Emblem
export const WaxSeal = ({ size = "md", text = "SEALED", className = "" }) => {
  const sizeClasses = {
    sm: "w-10 h-10 text-[9px]",
    md: "w-14 h-14 text-[10px]",
    lg: "w-20 h-20 text-xs"
  }[size] || "w-14 h-14 text-[10px]";

  return (
    <div className={`relative inline-flex items-center justify-center rounded-full seal-badge text-gold-200 font-display border-2 border-gold-400/50 shadow-seal select-none ${sizeClasses} ${className}`}>
      <div className="absolute inset-1 rounded-full border border-dashed border-gold-400/40" />
      <div className="text-center font-bold tracking-widest uppercase z-10 scale-90">
        <span className="block text-[8px] tracking-tight opacity-75">CID</span>
        {text}
      </div>
    </div>
  );
};

// Official Archival Red/Burgundy Stamp
export const ArchivalStamp = ({ text = "CASE RECORD", variant = "burgundy", className = "" }) => {
  const isBurgundy = variant === "burgundy";
  const borderCol = isBurgundy ? "border-burgundy-700/80 text-burgundy-800" : "border-gold-600 text-gold-700";
  const bgCol = isBurgundy ? "bg-burgundy-50/50" : "bg-gold-50/50";

  return (
    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded border-2 border-dashed uppercase tracking-widest font-mono-archive font-bold text-xs transform -rotate-2 select-none shadow-sm ${borderCol} ${bgCol} ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70"></span>
      <span>{text}</span>
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70"></span>
    </div>
  );
};
