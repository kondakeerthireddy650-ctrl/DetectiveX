import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { FeaturedCases } from '../components/home/FeaturedCases';
import { HowItWorks } from '../components/home/HowItWorks';
import { StatisticsSection } from '../components/home/StatisticsSection';
import { Link } from 'react-router-dom';
import { Search, Compass, ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';
import { ArchivalStamp, WaxSeal } from '../components/common/IndianMotif';

export const HomePage = ({ bookmarkedIds = [], onToggleBookmark, completedCases = {} }) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Cases Section */}
      <FeaturedCases 
        bookmarkedIds={bookmarkedIds} 
        onToggleBookmark={onToggleBookmark} 
        completedCases={completedCases}
      />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Statistics Section */}
      <StatisticsSection />

      {/* Bottom Final Call to Action */}
      <section className="py-20 bg-gradient-to-b from-warm-100 to-warm-200/80 border-t border-warm-300 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <div className="flex justify-center">
            <WaxSeal size="md" text="READY" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-burgundy-950">
            The Evidence Locker is Open.
          </h2>

          <p className="text-sm sm:text-base text-sepia-body max-w-xl mx-auto">
            Will you unravel the phantom of Jal Mahal, recover the Tagore Diamond, or expose the shadow network behind the Kalka-Shimla Express?
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/cases"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-burgundy-800 hover:bg-burgundy-900 text-gold-100 font-display text-sm tracking-wider uppercase font-bold shadow-dossier hover:-translate-y-0.5 transition-all"
            >
              <span>Examine All Case Files</span>
              <ArrowRight className="w-4 h-4 text-gold-400" />
            </Link>

            <Link
              to="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-cream-50 text-sepia-dark font-sans text-sm font-semibold border border-warm-300 shadow-soft transition-colors"
            >
              <span>Learn Platform Philosophy</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
