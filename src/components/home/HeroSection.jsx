import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Compass, 
  ShieldAlert, 
  MapPin, 
  FileCheck, 
  ArrowRight, 
  Sparkles,
  Scroll,
  Lock,
  ChevronRight
} from 'lucide-react';
import { HeritageDivider, WaxSeal, ArchivalStamp, CornerOrnament } from '../common/IndianMotif';

export const HeroSection = () => {
  return (
    <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden bg-gradient-to-b from-warm-50 via-cream-100 to-warm-100 border-b border-warm-200/80">
      
      {/* Decorative Indian archival background watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-gold-500/5 via-burgundy-900/5 to-transparent blur-3xl pointer-events-none" />
      
      {/* Corner Heritage Accents */}
      <div className="absolute top-6 left-6 hidden lg:block opacity-60">
        <CornerOrnament className="text-gold-600/40" />
      </div>
      <div className="absolute top-6 right-6 hidden lg:block opacity-60 transform rotate-90">
        <CornerOrnament className="text-gold-600/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Archival Classification Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burgundy-50 border border-burgundy-200/80 text-burgundy-900 text-xs font-mono-archive tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-burgundy-700 animate-pulse"></span>
              <span className="font-bold">CENTRAL CID ARCHIVE DOSSIER #1928-2025</span>
              <span className="text-gold-600">✦</span>
              <span className="hidden sm:inline text-sepia-muted">UNSOLVED FILES</span>
            </div>

            {/* Tagline */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-gold-600 font-display text-sm tracking-widest uppercase font-semibold">
              <span className="w-6 h-[1px] bg-gold-500 hidden sm:inline-block"></span>
              <span>Every clue has a story. Every story has a mystery.</span>
              <span className="w-6 h-[1px] bg-gold-500 hidden sm:inline-block"></span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-burgundy-950 leading-[1.15] tracking-tight">
              Your Next Mystery <br className="hidden sm:inline" />
              <span className="relative inline-block text-burgundy-800">
                Awaits.
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-gold-500/40" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                  <path d="M0 6 Q 50 0, 100 6 T 200 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Platform Description */}
            <p className="text-base sm:text-lg text-sepia-body leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Step into the shoes of an Indian consulting sleuth. Delve through locked chambers, decipher ancient copperplate cyphers, interrogate cunning suspects, and piece together forensic dossiers from Calcutta to Shimla, Thanjavur to the ghats of Varanasi.
            </p>

            {/* Feature Highlights Pills */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-sepia-muted font-medium">
              <span className="inline-flex items-center gap-1.5 bg-white/90 px-3 py-1.5 rounded-full border border-warm-200 shadow-soft">
                <FileCheck className="w-3.5 h-3.5 text-gold-600" /> Authentic Indian Lore
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/90 px-3 py-1.5 rounded-full border border-warm-200 shadow-soft">
                <Lock className="w-3.5 h-3.5 text-burgundy-700" /> Interactive Dossier Engine
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/90 px-3 py-1.5 rounded-full border border-warm-200 shadow-soft">
                <Scroll className="w-3.5 h-3.5 text-amber-700" /> No Cypher Left Behind
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/case/case-01"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-burgundy-800 hover:bg-burgundy-900 text-gold-100 font-display text-sm tracking-wider uppercase font-bold shadow-dossier hover:shadow-soft-xl hover:-translate-y-0.5 transition-all duration-200 border border-gold-400/50"
              >
                <span>Start Investigating</span>
                <ArrowRight className="w-4 h-4 text-gold-400" />
              </Link>

              <Link
                to="/cases"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-cream-50 hover:bg-white text-sepia-dark font-sans text-sm font-semibold shadow-soft hover:shadow-md border border-warm-300 hover:border-gold-500/60 transition-all duration-200"
              >
                <Compass className="w-4 h-4 text-burgundy-800" />
                <span>Explore All Cases</span>
              </Link>
            </div>

            {/* Live Case Count Banner */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3 text-xs text-sepia-muted">
              <div className="flex -space-x-2">
                <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Detective" />
                <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Detective" />
                <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Detective" />
              </div>
              <span className="font-mono-archive text-[11px]">
                <strong className="text-burgundy-900 font-bold">14,200+</strong> sleuths on active duty today
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Dossier Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              
              {/* Backing File Folder Effect */}
              <div className="absolute -top-3 -left-3 right-3 bottom-3 bg-beige-200 rounded-2xl border border-warm-300/80 rotate-[-2deg] pointer-events-none" />
              <div className="absolute -top-1.5 -left-1.5 right-1.5 bottom-1.5 bg-cream-200 rounded-2xl border border-warm-300 rotate-[-1deg] pointer-events-none" />

              {/* Main Dossier Card */}
              <div className="relative bg-white rounded-2xl p-6 sm:p-7 shadow-soft-xl border border-warm-300 overflow-hidden">
                
                {/* Vintage Folder Tab Header */}
                <div className="flex items-center justify-between border-b border-warm-200 pb-4 mb-5">
                  <div className="flex items-center gap-2.5">
                    <WaxSeal size="sm" text="CID" />
                    <div>
                      <span className="text-[10px] font-mono-archive uppercase tracking-widest text-gold-700 font-bold block">
                        PRIORITY CASE DOSSIER
                      </span>
                      <h4 className="font-display font-bold text-sm text-burgundy-950">
                        MARBLE PALACE ARCHIVES
                      </h4>
                    </div>
                  </div>
                  <ArchivalStamp text="CONFIDENTIAL" variant="burgundy" />
                </div>

                {/* Case Snapshot Hero Image with Sepia Tint */}
                <div className="relative rounded-xl overflow-hidden aspect-[16/10] mb-5 border border-warm-200 shadow-inner group">
                  <img
                    src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80"
                    alt="The Tagore Diamond Case"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/85 via-burgundy-950/30 to-transparent" />
                  
                  {/* Location badge on photo */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="inline-flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/20">
                      <MapPin className="w-3 h-3 text-gold-400" /> Calcutta, 1928
                    </span>
                    <span className="font-mono-archive text-[11px] bg-burgundy-800/90 text-gold-200 px-2 py-0.5 rounded border border-gold-400/40">
                      74-Carat Diamond Heist
                    </span>
                  </div>
                </div>

                {/* Case Info & Evidence Preview */}
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-sepia-muted font-mono-archive">FILE NO: CID-WB-1928-09</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200 text-[11px]">
                      Active Inquiry
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-burgundy-900 leading-snug">
                    The Vanishing of the Tagore Diamond
                  </h3>

                  <p className="text-xs text-sepia-body line-clamp-2">
                    A locked-room theft in the private gallery of Raja Rajendra Mullick. No broken glass, five guards outside, and a single Sealdah train ticket left behind.
                  </p>

                  {/* Evidence Pills */}
                  <div className="bg-warm-50 p-3 rounded-xl border border-warm-200/90 space-y-2">
                    <div className="text-[10px] font-mono-archive uppercase tracking-wider text-sepia-muted font-bold flex items-center justify-between">
                      <span>Forensic Exhibits Collected</span>
                      <span className="text-burgundy-700">3 of 7 Revealed</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5 text-[11px] font-medium text-center">
                      <div className="bg-white p-1.5 rounded border border-warm-200 text-sepia-dark">
                        Wax Key Cast
                      </div>
                      <div className="bg-white p-1.5 rounded border border-warm-200 text-sepia-dark">
                        Burnt Ticket
                      </div>
                      <div className="bg-white p-1.5 rounded border border-warm-200 text-sepia-dark">
                        Butler Log
                      </div>
                    </div>
                  </div>

                  {/* Direct Action */}
                  <Link
                    to="/case/case-01"
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-burgundy-50 hover:bg-burgundy-100 text-burgundy-900 border border-burgundy-200 text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <span>Examine Evidence Locker</span>
                    <ChevronRight className="w-3.5 h-3.5 text-burgundy-700" />
                  </Link>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
