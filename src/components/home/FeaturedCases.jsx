import React from 'react';
import { Link } from 'react-router-dom';
import { CASES_DATA } from '../../data/casesData';
import { CaseCard } from '../cases/CaseCard';
import { HeritageDivider, ArchivalStamp } from '../common/IndianMotif';
import { Compass, ArrowRight, Sparkles } from 'lucide-react';

export const FeaturedCases = ({ bookmarkedIds = [], onToggleBookmark, completedCases = {} }) => {
  const featuredCases = CASES_DATA.filter(c => c.isFeatured);

  return (
    <section className="py-20 bg-warm-50 relative overflow-hidden">
      
      {/* Background radial accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-gold-400/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <ArchivalStamp text="PRIORITY INVESTIGATIONS" variant="burgundy" />
              <span className="text-xs font-mono-archive text-gold-700 font-semibold uppercase tracking-wider">
                DE-CLASSIFIED 2025
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-burgundy-950">
              Featured Case Dossiers
            </h2>
            
            <p className="text-sm text-sepia-body max-w-xl">
              From colonial jewel vaults in Bengal to poisoned royal courtyards in Rajasthan, each case presents authentic historical settings and forensic intrigue.
            </p>
          </div>

          <Link
            to="/cases"
            className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-burgundy-800 hover:text-burgundy-950 group"
          >
            <span>Browse Complete Archives ({CASES_DATA.length})</span>
            <ArrowRight className="w-4 h-4 text-gold-600 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Featured Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCases.map((caseItem) => (
            <CaseCard
              key={caseItem.id}
              caseItem={caseItem}
              isBookmarked={bookmarkedIds.includes(caseItem.id)}
              onToggleBookmark={onToggleBookmark}
              isCompleted={Boolean(completedCases[caseItem.id])}
              completedScore={completedCases[caseItem.id]?.score}
            />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 bg-gradient-to-r from-cream-100 via-beige-100 to-cream-100 rounded-2xl p-6 sm:p-8 border border-warm-300 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif font-bold text-lg text-burgundy-900">
              Looking for a specific era or Indian region?
            </h3>
            <p className="text-xs text-sepia-body">
              Filter through 1920s Calcutta, Cold War espionage, temple antiquities, and contemporary financial heists.
            </p>
          </div>
          <Link
            to="/cases"
            className="px-5 py-2.5 rounded-xl bg-burgundy-800 hover:bg-burgundy-900 text-gold-100 text-xs font-display uppercase tracking-wider font-bold shadow-sm transition-colors whitespace-nowrap"
          >
            Filter by Domain & Region
          </Link>
        </div>

      </div>
    </section>
  );
};
