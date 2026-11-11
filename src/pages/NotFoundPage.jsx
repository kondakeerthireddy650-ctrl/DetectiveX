import React from 'react';
import { Link } from 'react-router-dom';
import { ArchivalStamp, WaxSeal } from '../components/common/IndianMotif';
import { FileQuestion, ArrowLeft } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 bg-warm-50 text-center">
      <div className="max-w-md mx-auto space-y-5 bg-white p-8 rounded-3xl border border-warm-300 shadow-soft">
        <div className="flex justify-center">
          <WaxSeal size="md" text="MISSING" />
        </div>
        
        <ArchivalStamp text="CASE FILE NOT FOUND · 404" variant="burgundy" />

        <h1 className="font-serif font-bold text-2xl text-burgundy-950">
          The Trail Has Gone Cold.
        </h1>

        <p className="text-xs text-sepia-body leading-relaxed">
          The requested dossier or archival document does not exist or has been moved under high-level national classification protocols.
        </p>

        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-burgundy-800 text-gold-100 font-display text-xs uppercase tracking-wider font-bold hover:bg-burgundy-900 transition-colors shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Headquarters</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
