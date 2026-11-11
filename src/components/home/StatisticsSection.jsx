import React from 'react';
import { PLATFORM_STATS } from '../../data/mockUserData';
import { HeritageDivider, WaxSeal, ArchivalStamp } from '../common/IndianMotif';
import { MapPin, Trophy, Shield, Sparkles } from 'lucide-react';

export const StatisticsSection = () => {
  const regions = [
    { name: "Bengal Presidency", cases: "12 Cases", era: "1890 - 1940" },
    { name: "Rajputana & Amber", cases: "10 Cases", era: "1920 - 1975" },
    { name: "Shimla Hill States", cases: "8 Cases", era: "1910 - 1960" },
    { name: "Deccan & Chola Lands", cases: "9 Cases", era: "1950 - 1990" },
    { name: "Bombay Financial Core", cases: "9 Cases", era: "1980 - Present" },
  ];

  return (
    <section className="py-20 bg-warm-100/70 border-b border-warm-200/80 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badging */}
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <ArchivalStamp text="CENTRAL DOSSIER AUDIT" variant="burgundy" />
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-burgundy-950">
            A Living Archive of Indian Intrigue
          </h2>
          <p className="text-xs sm:text-sm text-sepia-body">
            Thousands of detectives sharpen their observational instincts across our curated historical chronicles.
          </p>
        </div>

        {/* 4 Big Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {PLATFORM_STATS.map((stat, i) => (
            <div 
              key={i}
              className="bg-white rounded-2xl p-6 border border-warm-300 shadow-soft text-center space-y-2 relative group hover:border-gold-500/70 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-burgundy-900 group-hover:text-burgundy-700 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-mono-archive font-bold text-gold-700 uppercase tracking-wider">
                {stat.suffix}
              </div>
              <div className="font-serif font-bold text-sm text-sepia-dark">
                {stat.label}
              </div>
              <p className="text-[11px] text-sepia-muted leading-tight">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Regional Jurisdictions Bar */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-warm-300 shadow-soft">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-warm-200">
            <div>
              <span className="text-[11px] font-mono-archive uppercase tracking-widest text-gold-700 font-bold block">
                TERRITORIAL COVERAGE
              </span>
              <h3 className="font-serif font-bold text-xl text-burgundy-950">
                Active Investigative Circuits Across India
              </h3>
            </div>
            <span className="text-xs font-mono-archive bg-warm-100 text-sepia-dark px-3 py-1 rounded-full border border-warm-300 self-start md:self-auto">
              Pan-India Case Jurisdiction
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {regions.map((reg, idx) => (
              <div 
                key={idx}
                className="p-3.5 rounded-xl bg-warm-50/70 border border-warm-200 space-y-1 hover:bg-cream-100 transition-colors"
              >
                <div className="flex items-center gap-1.5 text-burgundy-800 text-xs font-bold font-serif">
                  <MapPin className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                  <span className="truncate">{reg.name}</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-sepia-muted font-mono-archive">
                  <span>{reg.cases}</span>
                  <span className="text-gold-700">{reg.era}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
