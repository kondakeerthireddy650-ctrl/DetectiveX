import React from 'react';

export const Badge = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default: "bg-warm-100 text-sepia-body border-warm-300/80",
    burgundy: "bg-burgundy-50 text-burgundy-800 border-burgundy-200/80 font-medium",
    gold: "bg-gold-50 text-gold-700 border-gold-300 font-medium",
    green: "bg-emerald-50 text-emerald-800 border-emerald-200 font-medium",
    subtle: "bg-white/80 text-sepia-muted border-warm-200",
    classified: "bg-burgundy-800 text-gold-200 border-gold-400/40 uppercase tracking-wider font-mono-archive text-[11px]"
  };

  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs border ${variants[variant] || variants.default} ${className}`}>
      {children}
    </span>
  );
};

export const DifficultyBadge = ({ difficulty }) => {
  const config = {
    "Very Easy": { label: "Very Easy", variant: "green" },
    Beginner: { label: "Very Easy", variant: "green" },
    Intermediate: { label: "Easy", variant: "gold" },
    Expert: { label: "Standard", variant: "burgundy" }
  }[difficulty] || { label: "Very Easy", variant: "green" };

  return <Badge variant={config.variant}>{config.label}</Badge>;
};
