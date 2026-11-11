import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  MapPin, 
  FileText, 
  Mail, 
  Sparkles, 
  Lock, 
  BookmarkCheck, 
  Compass
} from 'lucide-react';
import { HeritageDivider, WaxSeal, ArchivalStamp } from './IndianMotif';

export const Footer = () => {
  return (
    <footer className="bg-warm-100 border-t border-warm-300/80 pt-16 pb-12 text-sepia-dark relative overflow-hidden">
      {/* Background Indian watermark rosette */}
      <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full border-[18px] border-gold-500/10 pointer-events-none" />
      <div className="absolute -left-20 top-0 w-64 h-64 rounded-full border-[14px] border-burgundy-900/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <WaxSeal size="sm" text="CID" />
              <div>
                <h3 className="font-display font-extrabold text-2xl tracking-wider text-burgundy-900">
                  DETECTIVE<span className="text-gold-600">X</span>
                </h3>
                <p className="text-xs font-serif italic text-sepia-muted">The Indian Files</p>
              </div>
            </div>

            <p className="text-sm font-serif italic text-burgundy-800 font-medium">
              "Every clue has a story. Every story has a mystery."
            </p>

            <p className="text-xs text-sepia-body leading-relaxed max-w-sm">
              India's premier interactive detective platform. Step through the locked doors of royal palaces, forgotten railway lines, ancient temple vaults, and modern financial corridors to crack India's greatest unsolved files.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <ArchivalStamp text="CONFIDENTIAL RECORD" variant="burgundy" />
              <span className="text-[11px] font-mono-archive text-sepia-muted">REG: DX-BHARAT-1920</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display text-xs uppercase tracking-wider text-burgundy-900 font-bold border-b border-gold-400/30 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-sepia-body hover:text-burgundy-700 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-600 text-xs">›</span> Home Archives
                </Link>
              </li>
              <li>
                <Link to="/cases" className="text-sepia-body hover:text-burgundy-700 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-600 text-xs">›</span> Explore Case Files
                </Link>
              </li>
              <li>
                <Link to="/investigations" className="text-sepia-body hover:text-burgundy-700 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-600 text-xs">›</span> My Active Inquiries
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-sepia-body hover:text-burgundy-700 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-600 text-xs">›</span> Detective Dossier
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sepia-body hover:text-burgundy-700 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-600 text-xs">›</span> About DetectiveX
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Mystery Domains */}
          <div className="space-y-3">
            <h4 className="font-display text-xs uppercase tracking-wider text-burgundy-900 font-bold border-b border-gold-400/30 pb-2">
              Case Domains
            </h4>
            <ul className="space-y-2 text-xs text-sepia-body">
              <li className="flex items-center gap-2 hover:text-burgundy-800 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
                <span>Heritage & Antiquities Heists</span>
              </li>
              <li className="flex items-center gap-2 hover:text-burgundy-800 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
                <span>Royal Palace Whodunits</span>
              </li>
              <li className="flex items-center gap-2 hover:text-burgundy-800 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
                <span>Classic Noir & Hill Espionage</span>
              </li>
              <li className="flex items-center gap-2 hover:text-burgundy-800 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
                <span>Modern Cyber & Financial Crime</span>
              </li>
              <li className="flex items-center gap-2 hover:text-burgundy-800 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
                <span>Ancient Manuscript Enigmas</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Sleuth Dispatch */}
          <div className="space-y-3">
            <h4 className="font-display text-xs uppercase tracking-wider text-burgundy-900 font-bold border-b border-gold-400/30 pb-2">
              Daily CID Dispatch
            </h4>
            <p className="text-xs text-sepia-body">
              Receive newly declassified Indian mystery briefings, cryptic cyphers, and investigator challenges directly.
            </p>
            <div className="space-y-2">
              <div className="flex rounded-lg overflow-hidden border border-warm-300 focus-within:border-gold-500 bg-white">
                <input
                  type="email"
                  placeholder="investigator@domain.in"
                  className="w-full px-3 py-2 text-xs text-sepia-dark bg-transparent outline-none"
                  readOnly
                  value="detective@detectivex.in"
                />
                <button
                  type="button"
                  className="bg-burgundy-800 text-gold-200 px-3 text-xs font-semibold hover:bg-burgundy-900 transition-colors"
                  title="Subscribe to dispatches"
                >
                  Join
                </button>
              </div>
              <span className="text-[10px] text-sepia-muted block">
                🔒 Strictly no spam. Only encrypted case briefings.
              </span>
            </div>
          </div>

        </div>

        {/* Heritage Quote Banner */}
        <div className="bg-white/80 border border-warm-200 rounded-xl p-4 sm:p-5 text-center my-8 shadow-soft">
          <p className="font-serif italic text-sm sm:text-base text-sepia-body max-w-2xl mx-auto">
            "The truth is never hidden beneath darkness, my friend. It lies concealed only under the dust of negligence and our refusal to observe."
          </p>
          <span className="text-[11px] font-mono-archive text-gold-700 font-semibold block mt-1 tracking-wider">
            — TRIBUTE TO THE LEGACY OF BYOMKESH, FELUDA & THE CID ARCHIVES
          </span>
        </div>

        <HeritageDivider className="opacity-40 my-6" />

        {/* Bottom copyright bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-sepia-muted gap-4">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} DetectiveX – The Indian Files. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-medium">
            <span className="hover:text-burgundy-700 cursor-pointer">Archive Protocols</span>
            <span>•</span>
            <span className="hover:text-burgundy-700 cursor-pointer">Evidence Guidelines</span>
            <span>•</span>
            <span className="hover:text-burgundy-700 cursor-pointer">Code of the Sleuth</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
