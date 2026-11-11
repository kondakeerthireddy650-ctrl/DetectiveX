import React from 'react';
import { 
  X, 
  Search, 
  MapPin, 
  Tag, 
  CheckCircle2, 
  Bookmark, 
  FileText, 
  ShieldCheck,
  Eye,
  Sparkles
} from 'lucide-react';
import { ArchivalStamp, WaxSeal } from '../common/IndianMotif';

export const ClueDetailModal = ({ 
  clue, 
  isOpen, 
  onClose, 
  isExamined = false, 
  onMarkExamined,
  isCollected = false,
  onCollectToNotebook
}) => {
  if (!isOpen || !clue) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-sepia-dark/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      
      {/* Modal Dialog */}
      <div className="bg-white rounded-3xl max-w-2xl w-full border-2 border-warm-300 shadow-soft-xl overflow-hidden relative animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        
        {/* Top Archival Header */}
        <div className="bg-gradient-to-r from-warm-100 via-cream-100 to-warm-100 p-5 sm:p-6 border-b border-warm-300 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-burgundy-50 border border-burgundy-200 text-burgundy-800 shadow-sm">
              <Search className="w-5 h-5 text-burgundy-700" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono-archive font-bold text-gold-700 uppercase tracking-widest">
                  FORENSIC EXHIBIT INSPECTION
                </span>
                <span className="text-warm-400">•</span>
                <span className="text-[10px] font-mono-archive font-bold text-burgundy-800 uppercase tracking-wider bg-burgundy-50 px-2 py-0.5 rounded border border-burgundy-200">
                  {clue.category}
                </span>
              </div>
              <h3 className="font-serif font-bold text-lg text-burgundy-950 mt-0.5">
                {clue.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-sepia-muted hover:text-burgundy-900 hover:bg-warm-200/80 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
          
          {/* Location Found Banner */}
          <div className="p-3.5 rounded-xl bg-warm-50 border border-warm-200 text-xs flex items-center justify-between text-sepia-dark">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-4 h-4 text-gold-600 shrink-0" />
              <span>Location Discovered: <strong className="text-burgundy-900">{clue.locationFound}</strong></span>
            </span>
            <span className="text-[10px] font-mono-archive text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              {isExamined ? "✓ Examined" : "New Evidence"}
            </span>
          </div>

          {/* Short Overview */}
          <div className="space-y-1">
            <span className="text-[11px] font-mono-archive uppercase tracking-wider text-gold-700 font-bold block">
              Initial Field Observation
            </span>
            <p className="text-sm text-sepia-body leading-relaxed font-serif">
              "{clue.shortDesc}"
            </p>
          </div>

          {/* Detailed Forensic Magnification Box */}
          <div className="bg-cream-50 p-5 rounded-2xl border border-warm-300 space-y-2 relative">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-burgundy-800" />
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-burgundy-900">
                Detailed Magnification & Analysis
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-sepia-body leading-relaxed font-mono-archive">
              {clue.detailedAnalysis}
            </p>
          </div>

          {/* Investigative Significance */}
          <div className="bg-burgundy-50/70 p-4 rounded-xl border border-burgundy-200/80 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h5 className="font-serif font-bold text-xs text-burgundy-950 uppercase tracking-wide">
                Deductive Significance
              </h5>
              <p className="text-xs text-sepia-body leading-relaxed">
                {clue.significance}
              </p>
            </div>
          </div>

        </div>

        {/* Modal Bottom Actions */}
        <div className="bg-warm-100/70 p-4 sm:p-6 border-t border-warm-300 flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-2">
            {!isExamined ? (
              <button
                onClick={() => {
                  onMarkExamined(clue.id);
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-warm-200 hover:bg-warm-300 text-burgundy-950 text-xs font-semibold transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Mark as Examined</span>
              </button>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-800 font-medium px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Evidence Examined</span>
              </span>
            )}

            <button
              onClick={() => {
                onCollectToNotebook(clue.id);
              }}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                isCollected
                  ? 'bg-gold-50 border-gold-300 text-gold-900 shadow-sm'
                  : 'bg-white border-warm-300 text-sepia-dark hover:bg-warm-50'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isCollected ? 'text-gold-600 fill-gold-500' : 'text-sepia-muted'}`} />
              <span>{isCollected ? 'Stored in Notebook' : 'Pin to Evidence Notebook'}</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-burgundy-800 hover:bg-burgundy-900 text-gold-100 text-xs font-display uppercase tracking-wider font-bold transition-colors shadow-sm"
          >
            Done Examining
          </button>

        </div>

      </div>

    </div>
  );
};
