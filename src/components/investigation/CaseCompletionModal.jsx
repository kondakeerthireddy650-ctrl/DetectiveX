import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Trophy, 
  Clock, 
  Lightbulb, 
  Award, 
  ArrowRight, 
  RotateCcw, 
  CheckCircle2, 
  Sparkles,
  Compass,
  Star,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { ArchivalStamp, WaxSeal } from '../common/IndianMotif';

export const CaseCompletionModal = ({
  isOpen = false,
  onClose,
  caseItem,
  investigationData,
  scoreDetails,
  timeTakenFormatted,
  hintsUsed = 0,
  newAchievements = [],
  nextCaseId = null
}) => {
  const navigate = useNavigate();

  if (!isOpen || !caseItem || !investigationData) return null;

  const {
    questionsScore = 300,
    hintsPenalty = 0,
    hintFreeBonus = 0,
    objectivesBonus = 0,
    speedBonus = 0,
    totalScore = 350
  } = scoreDetails || {};

  const handlePlayNext = () => {
    if (nextCaseId) {
      navigate(`/case/${nextCaseId}`);
    } else {
      navigate('/cases');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-sepia-dark/75 backdrop-blur-md p-4 animate-in fade-in duration-300">
      
      {/* Modal Dialog Card */}
      <div className="bg-white rounded-3xl max-w-2xl w-full border-2 border-gold-400/60 shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col">
        
        {/* Top Gold Header */}
        <div className="bg-gradient-to-r from-burgundy-950 via-burgundy-900 to-burgundy-950 text-gold-100 p-6 border-b-2 border-gold-400/40 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-parchment-pattern opacity-10 pointer-events-none" />
          
          <div className="flex justify-center mb-3">
            <WaxSeal size="md" text="SOLVED" />
          </div>

          <span className="text-[10px] font-mono-archive font-bold text-gold-300 uppercase tracking-widest block mb-1">
            BHARAT CID SPECIAL COMMENDATION
          </span>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
            Congratulations, Inspector!
          </h2>

          <p className="text-xs sm:text-sm text-gold-200 font-serif italic mt-1">
            Mystery Successfully Cracked & Closed
          </p>

          <div className="mt-3 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burgundy-800/80 border border-gold-400/30 text-xs font-mono-archive text-gold-200">
            <span>{caseItem.caseNumber}:</span>
            <strong className="text-white">{caseItem.title}</strong>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
          
          {/* Key Metrics Dashboard: Score, Time, Hints */}
          <div className="grid grid-cols-3 gap-3 text-center">
            
            {/* 1. Final Score */}
            <div className="bg-gradient-to-b from-warm-50 to-cream-100 p-4 rounded-2xl border border-gold-300/80 shadow-soft">
              <span className="text-[10px] font-mono-archive font-bold uppercase tracking-wider text-gold-800 block">
                Final Score
              </span>
              <div className="text-2xl sm:text-3xl font-display font-black text-burgundy-900 mt-1">
                {totalScore}
              </div>
              <span className="text-[10px] font-mono-archive font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full inline-block mt-1">
                + Points Earned
              </span>
            </div>

            {/* 2. Time Taken */}
            <div className="bg-gradient-to-b from-warm-50 to-cream-100 p-4 rounded-2xl border border-warm-300 shadow-soft">
              <span className="text-[10px] font-mono-archive font-bold uppercase tracking-wider text-sepia-muted block">
                Time Taken
              </span>
              <div className="text-2xl sm:text-3xl font-display font-black text-sepia-dark mt-1 flex items-center justify-center gap-1">
                <Clock className="w-5 h-5 text-gold-600 hidden sm:inline" />
                <span>{timeTakenFormatted}</span>
              </div>
              <span className="text-[10px] font-mono-archive text-sepia-muted inline-block mt-1">
                Elapsed Time
              </span>
            </div>

            {/* 3. Hints Used */}
            <div className="bg-gradient-to-b from-warm-50 to-cream-100 p-4 rounded-2xl border border-warm-300 shadow-soft">
              <span className="text-[10px] font-mono-archive font-bold uppercase tracking-wider text-sepia-muted block">
                Hints Used
              </span>
              <div className="text-2xl sm:text-3xl font-display font-black text-burgundy-900 mt-1">
                {hintsUsed}/3
              </div>
              <span className={`text-[10px] font-mono-archive font-semibold px-2 py-0.5 rounded-full inline-block mt-1 ${
                hintsUsed === 0 
                  ? 'bg-gold-100 text-gold-900 border border-gold-300' 
                  : 'bg-warm-200 text-sepia-dark'
              }`}>
                {hintsUsed === 0 ? "★ Hint-Free!" : "Advisory Used"}
              </span>
            </div>

          </div>

          {/* Detailed Score Breakdown Card */}
          <div className="bg-warm-50 p-4 sm:p-5 rounded-2xl border border-warm-300 space-y-2 text-xs">
            <span className="text-[10px] font-mono-archive font-bold uppercase tracking-wider text-gold-700 block border-b border-warm-200 pb-1.5">
              Forensic Points Audit Breakdown
            </span>

            <div className="space-y-1.5 pt-1 text-sepia-body">
              <div className="flex justify-between items-center">
                <span>Correct Answers (10 PTS Each):</span>
                <strong className="text-emerald-800 font-mono-archive">+{questionsScore} PTS</strong>
              </div>

              {hintsPenalty > 0 && (
                <div className="flex justify-between items-center text-rose-800">
                  <span>Hints Advisory Deduction ({hintsUsed} × 2 PTS):</span>
                  <strong className="font-mono-archive">-{hintsPenalty} PTS</strong>
                </div>
              )}

              <div className="flex justify-between items-center text-gold-800">
                <span>Case Completion Badge:</span>
                <strong className="font-mono-archive text-emerald-800">★ Awarded</strong>
              </div>

              <div className="pt-2 border-t border-warm-300 flex justify-between items-center text-sm font-bold text-burgundy-950 font-serif">
                <span>Total Investigation Clearance Score:</span>
                <span className="font-mono-archive text-burgundy-800 text-base">{totalScore} PTS</span>
              </div>
            </div>
          </div>

          {/* Newly Unlocked Achievements Callout */}
          {newAchievements && newAchievements.length > 0 && (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-gold-100 via-amber-50 to-gold-100 border border-gold-300 space-y-2 animate-in slide-in-from-bottom-2 duration-300">
              <div className="flex items-center gap-2 text-gold-900 font-bold font-serif text-xs">
                <Sparkles className="w-4 h-4 text-gold-600" />
                <span>New Achievement Unlocked!</span>
              </div>
              <div className="space-y-1.5">
                {newAchievements.map((ach) => (
                  <div key={ach.id} className="flex items-center justify-between text-xs bg-white/80 p-2.5 rounded-xl border border-gold-200">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-gold-600" />
                      <div>
                        <strong className="text-burgundy-950 block">{ach.title}</strong>
                        <span className="text-[11px] text-sepia-muted">{ach.description}</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono-archive font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      +{ach.pointsBonus} Bonus
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Correct Solution Explanation */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-burgundy-800" />
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-burgundy-900">
                Official Case Solution & Verified Resolution
              </h4>
            </div>
            <div className="bg-cream-50 p-5 rounded-2xl border border-warm-300 text-xs sm:text-sm text-sepia-body leading-relaxed font-serif">
              <p>{investigationData.solution.summary}</p>
            </div>
          </div>

        </div>

        {/* Modal Bottom Action Buttons */}
        <div className="bg-warm-100/90 p-4 sm:p-6 border-t border-warm-300 flex flex-col sm:flex-row items-center justify-between gap-3">
          
          <Link
            to="/cases"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-warm-50 text-sepia-dark text-xs font-semibold border border-warm-300 transition-colors shadow-soft"
          >
            <Compass className="w-4 h-4 text-burgundy-800" />
            <span>Return to Case Explorer</span>
          </Link>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link
              to="/profile"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-warm-200 hover:bg-warm-300 text-burgundy-950 text-xs font-semibold transition-colors"
            >
              <span>View Profile</span>
            </Link>

            <button
              onClick={handlePlayNext}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-burgundy-800 hover:bg-burgundy-900 text-gold-100 text-xs font-display uppercase tracking-wider font-bold shadow-dossier transition-all"
            >
              <span>Play Another Case</span>
              <ArrowRight className="w-3.5 h-3.5 text-gold-300" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
