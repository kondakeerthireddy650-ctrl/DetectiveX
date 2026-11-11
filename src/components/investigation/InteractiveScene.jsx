import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Eye, 
  Bookmark, 
  CheckCircle2, 
  Sparkles, 
  BookOpen, 
  ArrowRight,
  ShieldAlert,
  FileText,
  Lock,
  Layers,
  HelpCircle,
  Clock,
  Compass
} from 'lucide-react';
import { ArchivalStamp, WaxSeal } from '../common/IndianMotif';

// Domain-specific styling for the visual scene chamber
const DOMAIN_THEMES = {
  History: {
    bgGradient: "from-[#2b1710] via-[#3a2016] to-[#1c0d08]",
    accentBorder: "border-amber-700/50",
    badgeColor: "bg-amber-900/60 text-amber-200 border-amber-600/40",
    glowColor: "rgba(217, 119, 6, 0.4)",
    ambientTag: "🏛️ ARCHIVAL EXHIBITION CHAMBER"
  },
  Technology: {
    bgGradient: "from-[#0f1f2c] via-[#162a3b] to-[#0a1520]",
    accentBorder: "border-cyan-700/50",
    badgeColor: "bg-cyan-950/70 text-cyan-200 border-cyan-500/40",
    glowColor: "rgba(6, 182, 212, 0.4)",
    ambientTag: "💻 CYBER & LOGIC LAB"
  },
  Education: {
    bgGradient: "from-[#291b14] via-[#382319] to-[#1a100b]",
    accentBorder: "border-amber-800/50",
    badgeColor: "bg-amber-950/60 text-amber-200 border-amber-700/40",
    glowColor: "rgba(245, 158, 11, 0.4)",
    ambientTag: "📚 GRAND ARCHIVAL LIBRARY"
  },
  Environment: {
    bgGradient: "from-[#11261a] via-[#1a3826] to-[#0b1a11]",
    accentBorder: "border-emerald-700/50",
    badgeColor: "bg-emerald-950/70 text-emerald-200 border-emerald-500/40",
    glowColor: "rgba(16, 185, 129, 0.4)",
    ambientTag: "🌿 COMMUNITY BOTANICAL HAVEN"
  },
  Food: {
    bgGradient: "from-[#2e1910] via-[#402214] to-[#1d0e08]",
    accentBorder: "border-orange-700/50",
    badgeColor: "bg-orange-950/60 text-orange-200 border-orange-600/40",
    glowColor: "rgba(234, 88, 12, 0.4)",
    ambientTag: "🍲 HERITAGE ROYAL KITCHEN"
  },
  Travel: {
    bgGradient: "from-[#1f232b] via-[#2a303b] to-[#13161c]",
    accentBorder: "border-blue-700/50",
    badgeColor: "bg-slate-900/70 text-blue-200 border-blue-500/40",
    glowColor: "rgba(59, 130, 246, 0.4)",
    ambientTag: "🚂 POSTAL RAILWAY DEPOT"
  },
  Arts: {
    bgGradient: "from-[#261528] via-[#381c3b] to-[#180c1a]",
    accentBorder: "border-purple-700/50",
    badgeColor: "bg-purple-950/60 text-purple-200 border-purple-500/40",
    glowColor: "rgba(168, 85, 247, 0.4)",
    ambientTag: "🎨 FINE ARTS EXHIBITION SALON"
  },
  Sports: {
    bgGradient: "from-[#142328] via-[#1b333a] to-[#0c181c]",
    accentBorder: "border-teal-700/50",
    badgeColor: "bg-teal-950/70 text-teal-200 border-teal-500/40",
    glowColor: "rgba(20, 184, 166, 0.4)",
    ambientTag: "⏱️ STADIUM CONTROL ARENA"
  },
  "Indian Culture": {
    bgGradient: "from-[#331818] via-[#481f1f] to-[#200d0d]",
    accentBorder: "border-rose-700/50",
    badgeColor: "bg-rose-950/70 text-rose-200 border-rose-500/40",
    glowColor: "rgba(244, 63, 94, 0.4)",
    ambientTag: "🪔 HERITAGE HAVELI COURTYARD"
  }
};

export const InteractiveScene = ({
  caseItem,
  investigation,
  examinedClueIds = [],
  collectedClueIds = [],
  onInspectClue,
  onCollectClue,
  onOpenNotebook,
  onProceedToQuestions
}) => {
  const [selectedClueId, setSelectedClueId] = useState(
    investigation?.clues?.[0]?.id || null
  );
  const [collectionNotice, setCollectionNotice] = useState('');

  if (!investigation || !investigation.clues) return null;

  const domainTheme = DOMAIN_THEMES[caseItem?.domain] || DOMAIN_THEMES.History;
  const clues = investigation.clues;
  const totalClues = clues.length;
  const collectedCount = collectedClueIds.length;
  const examinedCount = examinedClueIds.length;

  const activeClue = clues.find(c => c.id === selectedClueId) || clues[0];
  const isSelectedExamined = examinedClueIds.includes(activeClue?.id);
  const isSelectedCollected = collectedClueIds.includes(activeClue?.id);

  const handleSelectObject = (clue) => {
    setSelectedClueId(clue.id);
    onInspectClue && onInspectClue(clue);
  };

  const handleCollect = (clueId) => {
    onCollectClue && onCollectClue(clueId);
    setCollectionNotice('Evidence added to your Investigation Notebook!');
    setTimeout(() => {
      setCollectionNotice('');
    }, 2800);
  };

  return (
    <section className="bg-white rounded-3xl p-5 sm:p-7 border-2 border-warm-300 shadow-soft-xl space-y-6 relative overflow-hidden">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-warm-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-burgundy-100/70 border border-burgundy-200 text-burgundy-800">
              <Compass className="w-5 h-5 text-burgundy-800" />
            </span>
            <div>
              <span className="text-[10px] font-mono-archive font-bold text-gold-700 uppercase tracking-widest block">
                INTERACTIVE CRIME SCENE
              </span>
              <h2 className="font-serif font-bold text-lg sm:text-2xl text-burgundy-950">
                {investigation.sceneName}
              </h2>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenNotebook}
            className="px-3.5 py-2 rounded-xl bg-warm-100 hover:bg-warm-200 text-burgundy-950 text-xs font-semibold border border-warm-300 transition-all flex items-center gap-1.5 shadow-sm"
          >
            <BookOpen className="w-4 h-4 text-burgundy-800" />
            <span>Notebook</span>
            <span className="px-2 py-0.5 rounded-full bg-burgundy-800 text-gold-200 text-[10px] font-bold">
              {collectedCount}/{totalClues}
            </span>
          </button>

          <button
            onClick={onProceedToQuestions}
            className="px-4 py-2 rounded-xl bg-burgundy-800 hover:bg-burgundy-900 text-gold-100 text-xs font-display uppercase tracking-wider font-bold transition-all flex items-center gap-1.5 shadow-dossier"
          >
            <span>Deductions</span>
            <ArrowRight className="w-3.5 h-3.5 text-gold-300" />
          </button>
        </div>
      </div>

      {/* Helper Banner */}
      <div className="p-3 rounded-2xl bg-warm-50 border border-warm-200 flex flex-wrap items-center justify-between gap-2 text-xs">
        <span className="text-sepia-body flex items-center gap-1.5 font-medium">
          <Sparkles className="w-4 h-4 text-gold-600 shrink-0" />
          <span>Click any <strong>glowing object</strong> in the room to uncover hidden forensic clues.</span>
        </span>
        <span className="font-mono-archive font-bold text-burgundy-900 bg-warm-200/60 px-2.5 py-1 rounded-lg">
          {collectedCount} of {totalClues} Clues Collected
        </span>
      </div>

      {/* 1. VISUAL INTERACTIVE SCENE CANVAS */}
      <div className="relative rounded-2xl overflow-hidden border-2 border-warm-400/80 shadow-inner">
        
        {/* Visual Scene Stage Canvas */}
        <div 
          className={`relative min-h-[340px] sm:min-h-[420px] w-full bg-gradient-to-br ${domainTheme.bgGradient} p-4 sm:p-6 flex flex-col justify-between select-none`}
          style={{
            backgroundImage: `radial-gradient(ellipse at 50% 30%, ${domainTheme.glowColor} 0%, transparent 70%)`
          }}
        >
          {/* Subtle Archival Texture & Grid Overlay */}
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#e5d8c5_1px,transparent_1px)] [background-size:16px_16px]" />
          
          {/* Top Stage Badges */}
          <div className="relative z-10 flex items-center justify-between gap-2 pointer-events-none">
            <span className={`text-[11px] font-mono-archive font-bold px-3 py-1 rounded-full border backdrop-blur-md ${domainTheme.badgeColor}`}>
              {domainTheme.ambientTag}
            </span>

            <span className="text-[11px] font-mono-archive text-gold-200/80 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-gold-500/20">
              Interactive Examination View
            </span>
          </div>

          {/* Perspective Floor Line & Scene Elements */}
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/50 to-transparent pointer-events-none border-t border-white/10" />

          {/* HOTSPOT PINS (Clickable Objects across the Scene) */}
          <div className="absolute inset-0 p-4 sm:p-8">
            {clues.map((clue, idx) => {
              const isCollected = collectedClueIds.includes(clue.id);
              const isExamined = examinedClueIds.includes(clue.id);
              const isSelected = selectedClueId === clue.id;
              
              // Fallback responsive positioning coordinates if sceneCoords not set
              const defaultCoords = [
                { x: 22, y: 38 },
                { x: 40, y: 56 },
                { x: 62, y: 36 },
                { x: 80, y: 64 },
                { x: 18, y: 72 },
                { x: 50, y: 28 }
              ];
              const coords = clue.sceneCoords || defaultCoords[idx % defaultCoords.length];

              return (
                <div
                  key={clue.id}
                  style={{
                    left: `${coords.x}%`,
                    top: `${coords.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  className="absolute z-20 group"
                >
                  <button
                    onClick={() => handleSelectObject(clue)}
                    className={`relative flex items-center justify-center transition-all duration-300 focus:outline-none ${
                      isSelected
                        ? 'scale-125 z-30'
                        : 'hover:scale-110'
                    }`}
                    aria-label={`Inspect ${clue.objectName || clue.title}`}
                  >
                    {/* Pulsing ring if undiscovered */}
                    {!isCollected && (
                      <span className="absolute w-12 h-12 rounded-full bg-gold-400/30 animate-ping pointer-events-none" />
                    )}

                    {/* Outer Circle Halo */}
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transition-all shadow-lg border-2 ${
                      isSelected
                        ? 'bg-gold-500 text-burgundy-950 border-white ring-4 ring-gold-400/50 shadow-gold-500/50'
                        : isCollected
                        ? 'bg-emerald-700/90 text-white border-emerald-400 shadow-emerald-900/50'
                        : 'bg-burgundy-900/90 text-gold-300 border-gold-400 hover:bg-burgundy-800'
                    }`}>
                      {isCollected ? (
                        <CheckCircle2 className="w-5 h-5 text-gold-200" />
                      ) : (
                        <Search className="w-5 h-5" />
                      )}
                    </div>

                    {/* Hotspot Label Pill */}
                    <div className={`absolute top-full mt-1.5 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-0.5 rounded-lg text-[10px] font-mono-archive font-bold transition-all shadow-md pointer-events-none ${
                      isSelected
                        ? 'bg-gold-400 text-burgundy-950 scale-105'
                        : isCollected
                        ? 'bg-emerald-950/90 text-emerald-200 border border-emerald-500/40'
                        : 'bg-black/80 text-gold-200 border border-gold-500/30 group-hover:bg-burgundy-900'
                    }`}>
                      {clue.objectName || clue.title}
                      {isCollected && ' ✓'}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Bottom Ambient Prompt */}
          <div className="relative z-10 text-center pointer-events-none">
            <span className="text-[11px] font-mono-archive text-gold-200/90 bg-black/60 backdrop-blur-md px-3.5 py-1 rounded-full border border-gold-400/20 shadow">
              Active Investigation Chamber • Click any marker above to examine
            </span>
          </div>

        </div>

      </div>

      {/* 2. OBJECTS QUICK ROSTER (For mobile/touch & direct click convenience) */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-mono-archive text-sepia-muted">
          <span>Clickable Scene Objects:</span>
          <span>{examinedCount}/{totalClues} Examined</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {clues.map((clue, idx) => {
            const isCollected = collectedClueIds.includes(clue.id);
            const isSelected = selectedClueId === clue.id;

            return (
              <button
                key={clue.id}
                onClick={() => handleSelectObject(clue)}
                className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between gap-1.5 ${
                  isSelected
                    ? 'bg-burgundy-900 text-gold-100 border-gold-400 ring-2 ring-gold-400/50 shadow-md'
                    : isCollected
                    ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950 hover:bg-emerald-100/60'
                    : 'bg-warm-50 border-warm-300 text-sepia-dark hover:bg-warm-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono-archive font-bold opacity-80">
                    OBJ #{idx + 1}
                  </span>
                  {isCollected ? (
                    <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold">
                      ✓
                    </span>
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
                  )}
                </div>
                <span className="text-xs font-serif font-bold leading-tight line-clamp-1">
                  {clue.objectName || clue.title}
                </span>
                <span className="text-[9px] font-mono-archive opacity-70 truncate">
                  {isCollected ? "Stored in Notebook" : "Click to Inspect"}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. REVEALED CLUE CARD (Opens immediately upon clicking an object) */}
      {activeClue && (
        <div className="bg-gradient-to-br from-cream-50 via-warm-50 to-cream-100 rounded-2xl p-5 sm:p-6 border-2 border-gold-400/60 shadow-soft-lg space-y-4 animate-in fade-in zoom-in-95 duration-200">
          
          {/* Card Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-warm-300 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-burgundy-100 border border-burgundy-300 flex items-center justify-center text-burgundy-800 shadow-sm shrink-0">
                <Search className="w-5 h-5 text-burgundy-800" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono-archive font-bold text-gold-700 uppercase tracking-wider">
                    OBJECT INSPECTED: {activeClue.objectName || "EVIDENCE EXHIBIT"}
                  </span>
                  <span className="text-[10px] font-mono-archive font-bold bg-burgundy-100 text-burgundy-900 px-2 py-0.5 rounded border border-burgundy-200">
                    {activeClue.category}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-burgundy-950">
                  {activeClue.title}
                </h3>
              </div>
            </div>

            {/* Collection Status Pill */}
            {isSelectedCollected ? (
              <span className="px-3 py-1 rounded-xl bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                <span>Collected in Notebook</span>
              </span>
            ) : (
              <span className="px-3 py-1 rounded-xl bg-gold-100 text-gold-900 border border-gold-300 text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-gold-700" />
                <span>New Clue Uncovered</span>
              </span>
            )}
          </div>

          {/* Location & Overview */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 text-xs">
            <div className="md:col-span-5 bg-white/80 p-3 rounded-xl border border-warm-200 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold-600 shrink-0" />
              <span>Location: <strong className="text-burgundy-900">{activeClue.locationFound}</strong></span>
            </div>
            <div className="md:col-span-7 bg-white/80 p-3 rounded-xl border border-warm-200">
              <span className="text-sepia-muted">Observation: </span>
              <strong className="text-sepia-dark">"{activeClue.shortDesc}"</strong>
            </div>
          </div>

          {/* Forensic Details & Deductive Significance */}
          <div className="space-y-2.5">
            <div className="bg-white p-4 rounded-xl border border-warm-300 text-xs sm:text-sm text-sepia-body leading-relaxed space-y-1">
              <span className="text-[10px] font-mono-archive font-bold text-burgundy-800 uppercase tracking-widest block">
                Forensic Analysis
              </span>
              <p>{activeClue.detailedAnalysis}</p>
            </div>

            <div className="bg-amber-50/70 p-3.5 rounded-xl border border-amber-200 text-xs text-amber-950 flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>Deductive Lead: </strong>
                <span>{activeClue.significance}</span>
              </div>
            </div>
          </div>

          {/* Card Actions: Collect Clue into Notebook */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-warm-200">
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleCollect(activeClue.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all flex items-center gap-2 ${
                  isSelectedCollected
                    ? 'bg-emerald-700 hover:bg-emerald-800 text-white border-emerald-800 shadow-sm'
                    : 'bg-burgundy-800 hover:bg-burgundy-900 text-gold-100 border-gold-400/50 shadow-dossier'
                }`}
              >
                <Bookmark className={`w-3.5 h-3.5 ${isSelectedCollected ? 'fill-current' : ''}`} />
                <span>{isSelectedCollected ? '✓ Stored in Notebook' : 'Add to Evidence Notebook'}</span>
              </button>

              <button
                onClick={onOpenNotebook}
                className="px-3.5 py-2 rounded-xl bg-warm-100 hover:bg-warm-200 text-sepia-dark border border-warm-300 text-xs font-semibold transition-all flex items-center gap-1.5"
              >
                <BookOpen className="w-3.5 h-3.5 text-burgundy-800" />
                <span>Open Notebook ({collectedCount})</span>
              </button>
            </div>

            {collectionNotice && (
              <span className="text-xs font-mono-archive font-bold text-emerald-800 bg-emerald-100 px-3 py-1.5 rounded-xl border border-emerald-300 animate-in fade-in duration-200">
                ✓ {collectionNotice}
              </span>
            )}
          </div>

        </div>
      )}

    </section>
  );
};
