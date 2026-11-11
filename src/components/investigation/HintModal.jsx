import React from 'react';
import { 
  Lightbulb, 
  X, 
  HelpCircle, 
  ChevronRight, 
  Lock, 
  Sparkles,
  ShieldAlert
} from 'lucide-react';
import { ArchivalStamp, WaxSeal } from '../common/IndianMotif';

export const HintModal = ({ 
  hints = [], 
  unlockedHintLevel = 1, 
  onUnlockNextHint, 
  isOpen = false, 
  onClose 
}) => {
  if (!isOpen) return null;

  const totalHints = hints.length;
  const canUnlockMore = unlockedHintLevel < totalHints;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-sepia-dark/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      
      {/* Modal Dialog */}
      <div className="bg-white rounded-3xl max-w-lg w-full border-2 border-warm-300 shadow-soft-xl overflow-hidden relative animate-in zoom-in-95 duration-200">
        
        {/* Top Header */}
        <div className="bg-gradient-to-r from-cream-100 via-warm-100 to-cream-100 p-5 sm:p-6 border-b border-warm-300 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-gold-100 border border-gold-300 text-gold-800 shadow-sm">
              <Lightbulb className="w-5 h-5 text-gold-700" />
            </div>
            <div>
              <span className="text-[10px] font-mono-archive font-bold text-gold-700 uppercase tracking-widest block">
                CID CONSULTING SLEUTH ADVICE
              </span>
              <h3 className="font-serif font-bold text-lg text-burgundy-950">
                Investigation Hints ({unlockedHintLevel} of {totalHints} Unlocked)
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-sepia-muted hover:text-burgundy-900 hover:bg-warm-200/80 transition-colors"
            aria-label="Close hints"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
          <p className="text-xs text-sepia-muted">
            Hints provide progressive deductive nudges without directly spoiling the final answer.
          </p>

          <div className="space-y-3">
            {hints.map((hint, idx) => {
              const isUnlocked = idx + 1 <= unlockedHintLevel;

              return (
                <div 
                  key={idx}
                  className={`p-4 rounded-2xl border transition-all duration-200 ${
                    isUnlocked
                      ? 'bg-warm-50 border-gold-400/60 shadow-soft'
                      : 'bg-warm-100/50 border-warm-200 opacity-60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono-archive font-bold uppercase tracking-wider text-burgundy-900 flex items-center gap-1.5">
                      <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${isUnlocked ? 'bg-burgundy-800 text-gold-200' : 'bg-warm-300 text-sepia-muted'}`}>
                        {idx + 1}
                      </span>
                      <span>Level {idx + 1}: {hint.title}</span>
                    </span>

                    {isUnlocked ? (
                      <span className="text-[10px] font-mono-archive font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Unlocked
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono-archive font-semibold text-sepia-muted flex items-center gap-1">
                        <Lock className="w-3 h-3" /> Sealed
                      </span>
                    )}
                  </div>

                  {isUnlocked ? (
                    <p className="text-xs text-sepia-body leading-relaxed font-serif">
                      "{hint.text}"
                    </p>
                  ) : (
                    <p className="text-xs text-sepia-muted italic font-mono-archive">
                      [Progressive hint sealed. Request the next hint below to view.]
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="bg-warm-100/70 p-4 sm:p-5 border-t border-warm-300 flex items-center justify-between gap-3">
          {canUnlockMore ? (
            <button
              onClick={onUnlockNextHint}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-burgundy-950 font-display uppercase tracking-wider text-xs font-bold transition-colors shadow-sm"
            >
              <Lightbulb className="w-3.5 h-3.5" />
              <span>Unlock Hint {unlockedHintLevel + 1}</span>
            </button>
          ) : (
            <span className="text-xs text-sepia-muted font-mono-archive">
              All 3 hints unlocked.
            </span>
          )}

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-burgundy-800 hover:bg-burgundy-900 text-gold-100 text-xs font-display uppercase tracking-wider font-bold transition-colors shadow-sm"
          >
            Return to Case
          </button>
        </div>

      </div>

    </div>
  );
};
