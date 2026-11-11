import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CASES_DATA } from '../data/casesData';
import { INVESTIGATION_DATA } from '../data/investigationData';
import { ClueDetailModal } from '../components/investigation/ClueDetailModal';
import { EvidenceNotebook } from '../components/investigation/EvidenceNotebook';
import { HintModal } from '../components/investigation/HintModal';
import { SubmitDeductionModal } from '../components/investigation/SubmitDeductionModal';
import { CaseCompletionModal } from '../components/investigation/CaseCompletionModal';
import { InteractiveScene } from '../components/investigation/InteractiveScene';
import { InteractiveQuestions } from '../components/investigation/InteractiveQuestions';
import { ArchivalStamp, WaxSeal, CornerOrnament, HeritageDivider } from '../components/common/IndianMotif';
import { DifficultyBadge } from '../components/common/Badge';
import { 
  ArrowLeft, 
  ArrowRight,
  Search, 
  Lightbulb, 
  BookOpen, 
  Bookmark, 
  CheckCircle2, 
  Target, 
  Award, 
  Clock, 
  MapPin, 
  Eye, 
  Sparkles,
  Send,
  Trophy
} from 'lucide-react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { calculateCaseScore, formatTimeSeconds, evaluateAchievements } from '../utils/progressManager';

export const InvestigationPage = ({ 
  userProfile, 
  onUpdateProfile,
  onAddGlobalNote,
  completedCases = {},
  onSaveCompletedCase,
  unlockedAchievements = {},
  onUpdateAchievements
}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find case metadata and investigation dataset
  const caseItem = CASES_DATA.find(c => c.id === id) || (id ? null : CASES_DATA[0]);
  const caseId = caseItem?.id;
  const investigation = caseId ? (INVESTIGATION_DATA[caseId] || null) : null;

  // Find next case for "Play Another Case"
  const currentCaseIndex = caseId ? CASES_DATA.findIndex(c => c.id === caseId) : -1;
  const nextCase = CASES_DATA[(currentCaseIndex + 1) % CASES_DATA.length] || CASES_DATA[0];

  // LocalStorage state for this specific investigation session
  const [sessionProgress, setSessionProgress] = useLocalStorage(
    caseId ? `detectivex_session_${caseId}` : 'detectivex_session_fallback',
    {
      examinedClueIds: [],
      collectedClueIds: [],
      unlockedHintLevel: 0,
      elapsedSeconds: 0,
      fieldNotes: []
    }
  );

  // Active elapsed timer
  const [elapsedTime, setElapsedTime] = useState(sessionProgress?.elapsedSeconds || 0);

  // Modal active states
  const [selectedClue, setSelectedClue] = useState(null);
  const [isClueModalOpen, setIsClueModalOpen] = useState(false);
  const [isNotebookOpen, setIsNotebookOpen] = useState(false);
  const [isHintModalOpen, setIsHintModalOpen] = useState(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isCompletionModalOpen, setIsCompletionModalOpen] = useState(false);

  // Completion results state
  const [latestScoreDetails, setLatestScoreDetails] = useState(null);
  const [newlyUnlockedAchievements, setNewlyUnlockedAchievements] = useState([]);

  // Active filter within clue collection area (All / Physical / Document / Forensic)
  const [clueFilter, setClueFilter] = useState('All');
  const [clueViewMode, setClueViewMode] = useState('one_by_one'); // 'one_by_one' | 'grid'
  const [activeClueIndex, setActiveClueIndex] = useState(0);

  // Defensive array extractions from sessionProgress
  const examinedClueIds = Array.isArray(sessionProgress?.examinedClueIds) ? sessionProgress.examinedClueIds : [];
  const collectedClueIds = Array.isArray(sessionProgress?.collectedClueIds) ? sessionProgress.collectedClueIds : [];
  const unlockedHintLevel = typeof sessionProgress?.unlockedHintLevel === 'number' ? sessionProgress.unlockedHintLevel : 0;
  const fieldNotes = Array.isArray(sessionProgress?.fieldNotes) ? sessionProgress.fieldNotes : [];

  const isAlreadySolved = Boolean(caseId && completedCases[caseId]);
  const totalClues = investigation?.clues?.length || 0;
  const examinedCount = examinedClueIds.length;
  const progressPercent = totalClues > 0 ? Math.round((examinedCount / totalClues) * 100) : 0;

  // Auto-mark active clue as examined when viewed in one-by-one mode
  useEffect(() => {
    if (!investigation?.clues) return;
    const currentClue = investigation.clues[activeClueIndex];
    if (currentClue && !examinedClueIds.includes(currentClue.id)) {
      setSessionProgress(prev => ({
        ...prev,
        examinedClueIds: [...(Array.isArray(prev?.examinedClueIds) ? prev.examinedClueIds : []), currentClue.id]
      }));
    }
  }, [activeClueIndex, investigation?.clues]);

  // Live timer tick every second while mystery is in progress
  useEffect(() => {
    if (!caseId || (isAlreadySolved && !isCompletionModalOpen)) return;

    const timer = setInterval(() => {
      setElapsedTime(prev => {
        const next = prev + 1;
        // Periodic sync to sessionProgress every 5s
        if (next % 5 === 0) {
          setSessionProgress(s => ({ ...(s || {}), elapsedSeconds: next }));
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [caseId, isAlreadySolved, isCompletionModalOpen]);

  // Handlers for clue interactions
  const handleOpenClue = (clue) => {
    if (!clue) return;
    setSelectedClue(clue);
    setIsClueModalOpen(true);
    // Auto-mark as examined upon reading in detail
    if (!examinedClueIds.includes(clue.id)) {
      setSessionProgress(prev => ({
        ...prev,
        examinedClueIds: [...(Array.isArray(prev?.examinedClueIds) ? prev.examinedClueIds : []), clue.id]
      }));
    }
  };

  const handleMarkExamined = (clueId) => {
    if (!examinedClueIds.includes(clueId)) {
      setSessionProgress(prev => ({
        ...prev,
        examinedClueIds: [...(Array.isArray(prev?.examinedClueIds) ? prev.examinedClueIds : []), clueId]
      }));
    }
  };

  const handleToggleCollect = (clueId) => {
    setSessionProgress(prev => {
      const currentList = Array.isArray(prev?.collectedClueIds) ? prev.collectedClueIds : [];
      const isAlready = currentList.includes(clueId);
      return {
        ...prev,
        collectedClueIds: isAlready
          ? currentList.filter(id => id !== clueId)
          : [...currentList, clueId]
      };
    });
  };

  const handleUnlockNextHint = () => {
    const hintsCount = investigation?.hints?.length || 0;
    if (unlockedHintLevel < hintsCount) {
      setSessionProgress(prev => ({
        ...prev,
        unlockedHintLevel: (prev?.unlockedHintLevel || 0) + 1
      }));
    }
  };

  const handleAddNote = (newNote) => {
    setSessionProgress(prev => ({
      ...prev,
      fieldNotes: [newNote, ...(Array.isArray(prev?.fieldNotes) ? prev.fieldNotes : [])]
    }));
    onAddGlobalNote && onAddGlobalNote(newNote);
  };

  const handleDeleteNote = (noteId) => {
    setSessionProgress(prev => ({
      ...prev,
      fieldNotes: (Array.isArray(prev?.fieldNotes) ? prev.fieldNotes : []).filter(n => n.id !== noteId)
    }));
  };

  const handleInspectClueFromScene = (clue) => {
    handleOpenClue(clue);
  };

  const handleCollectClueFromScene = (clueId) => {
    setSessionProgress(prev => {
      const currentCollected = Array.isArray(prev?.collectedClueIds) ? prev.collectedClueIds : [];
      const currentExamined = Array.isArray(prev?.examinedClueIds) ? prev.examinedClueIds : [];
      return {
        ...prev,
        collectedClueIds: currentCollected.includes(clueId)
          ? currentCollected
          : [...currentCollected, clueId],
        examinedClueIds: currentExamined.includes(clueId)
          ? currentExamined
          : [...currentExamined, clueId]
      };
    });
  };

  const handleScrollToQuestions = () => {
    const el = document.getElementById('deduction-questions-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Fallback if case dossier cannot be found
  if (!caseItem || !investigation) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="bg-cream-50 border-2 border-warm-300 rounded-3xl p-8 sm:p-12 shadow-soft-xl relative overflow-hidden">
          <div className="absolute top-4 right-4 opacity-70">
            <ArchivalStamp text="NOT FOUND" rotate={-10} />
          </div>
          <div className="w-16 h-16 mx-auto rounded-2xl bg-burgundy-100/70 border border-burgundy-300 flex items-center justify-center text-burgundy-800 shadow-inner mb-4">
            <Search className="w-8 h-8 text-burgundy-800" />
          </div>
          <span className="text-[11px] font-mono-archive font-bold tracking-widest text-gold-700 uppercase">
            CID ARCHIVAL RECORD
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-burgundy-950 mt-1 mb-3">
            Case File Unavailable
          </h2>
          <p className="text-sm text-sepia-body leading-relaxed max-w-lg mx-auto mb-6">
            The requested case investigation dossier (<code className="px-2 py-0.5 bg-warm-200/60 rounded text-burgundy-900 font-mono text-xs">{id || 'unknown'}</code>) could not be retrieved from the active police archives.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/cases"
              className="px-6 py-3 rounded-xl bg-burgundy-800 hover:bg-burgundy-900 text-gold-100 font-display text-xs font-bold uppercase tracking-wider shadow-dossier transition-all"
            >
              Browse Available Cases
            </Link>
            <Link
              to="/investigate/case-01"
              className="px-6 py-3 rounded-xl bg-warm-200 hover:bg-warm-300 text-burgundy-950 font-display text-xs font-bold uppercase tracking-wider border border-warm-400 transition-all"
            >
              Open Case #01
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Called when all 3 deduction questions are submitted and validated successfully
  const handleSubmitDeductionSuccess = ({ questionsCount, correctCount, hintsUsed, allCluesExamined, timeTakenSeconds }) => {
    setIsSubmitModalOpen(false);

    // Calculate score accurately
    const scoreResult = calculateCaseScore({
      questionsCount,
      correctCount,
      hintsUsed,
      allCluesExamined,
      timeTakenSeconds: elapsedTime
    });

    setLatestScoreDetails(scoreResult);

    const completedRecord = {
      caseId,
      caseNumber: caseItem.caseNumber,
      title: caseItem.title,
      domain: caseItem.domain,
      score: scoreResult.totalScore,
      scoreBreakdown: scoreResult,
      timeTakenSeconds: elapsedTime,
      timeTakenFormatted: formatTimeSeconds(elapsedTime),
      hintsUsed: unlockedHintLevel,
      cluesExaminedCount: examinedCount,
      totalClues,
      completedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      badgeAwarded: investigation.solution.badgeEarned
    };

    // Save completed case in global state / LocalStorage
    const updatedCompletedCases = {
      ...completedCases,
      [caseId]: completedRecord
    };

    onSaveCompletedCase && onSaveCompletedCase(completedRecord);

    // Evaluate Achievements
    const completedList = Object.values(updatedCompletedCases);
    const totalCluesExamined = completedList.reduce((acc, curr) => acc + (curr.cluesExaminedCount || 0), 0);

    const { newlyUnlocked, updatedMap } = evaluateAchievements(unlockedAchievements, completedList, totalCluesExamined);

    if (newlyUnlocked.length > 0) {
      setNewlyUnlockedAchievements(newlyUnlocked);
      onUpdateAchievements && onUpdateAchievements(updatedMap);
    }

    // Open Case Completion Modal
    setIsCompletionModalOpen(true);
  };

  // Filtered clues list
  const filteredClues = investigation.clues.filter(c => {
    if (clueFilter === 'All') return true;
    return c.category.toLowerCase().includes(clueFilter.toLowerCase());
  });

  return (
    <div className="py-8 bg-warm-50 min-h-screen text-sepia-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation & Case Identity Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-warm-200">
          <Link
            to={`/case/${caseId}`}
            className="inline-flex items-center gap-2 text-xs font-semibold text-burgundy-800 hover:text-burgundy-950 uppercase tracking-wider font-mono-archive group"
          >
            <ArrowLeft className="w-4 h-4 text-gold-600 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Case Dossier Overview</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono-archive text-sepia-muted hidden md:inline">
              LIVE INVESTIGATION ENGINE
            </span>
            <ArchivalStamp text={caseItem.caseNumber} variant="burgundy" />
            {isAlreadySolved && (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono-archive font-bold bg-emerald-100 text-emerald-900 border border-emerald-300">
                ✓ Solved ({completedCases[caseId]?.score || 30} PTS)
              </span>
            )}
          </div>
        </div>

        {/* 1. CASE TITLE AND NUMBER HERO WORKSTATION */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-300 shadow-soft relative overflow-hidden">
          <CornerOrnament className="absolute top-3 left-3 text-gold-500/20" />
          <CornerOrnament className="absolute top-3 right-3 text-gold-500/20 transform rotate-90" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            <div className="space-y-2 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md text-xs font-mono-archive font-bold bg-burgundy-900 text-gold-200 uppercase tracking-wider">
                  {caseItem.caseNumber}
                </span>
                <span className="px-2.5 py-0.5 rounded-md text-xs font-mono-archive font-bold bg-gold-100 text-gold-800 border border-gold-300 uppercase tracking-wider">
                  {caseItem.domain}
                </span>
                <DifficultyBadge difficulty={caseItem.difficulty} />
                <span className="text-xs font-mono-archive text-sepia-muted flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-gold-600" /> {caseItem.location}
                </span>
                <span className="text-xs font-mono-archive text-sepia-dark font-semibold bg-warm-100 px-2.5 py-0.5 rounded-full border border-warm-200 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-burgundy-700" />
                  <span>Time: {formatTimeSeconds(elapsedTime)}</span>
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-serif font-bold text-burgundy-950 leading-tight">
                {caseItem.title}
              </h1>

              <p className="font-serif italic text-sm sm:text-base text-burgundy-800">
                {caseItem.subtitle}
              </p>
            </div>

            {/* Quick Action Buttons (Hint, Notebook, Submit) */}
            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              
              {/* 7. HINT BUTTON */}
              <button
                onClick={() => setIsHintModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gold-50 hover:bg-gold-100 text-gold-900 border border-gold-300 text-xs font-semibold shadow-sm transition-all"
                title="Request investigative hints"
              >
                <Lightbulb className="w-4 h-4 text-gold-600" />
                <span>Hints ({unlockedHintLevel}/3)</span>
              </button>

              {/* 5. EVIDENCE NOTEBOOK BUTTON */}
              <button
                onClick={() => setIsNotebookOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-warm-100 hover:bg-warm-200 text-sepia-dark border border-warm-300 text-xs font-semibold shadow-sm transition-all"
                title="Open evidence notebook"
              >
                <BookOpen className="w-4 h-4 text-burgundy-700" />
                <span>Evidence Notebook ({collectedClueIds.length})</span>
              </button>

              {/* 8. SUBMIT INVESTIGATION BUTTON */}
              <button
                onClick={() => {
                  if (isAlreadySolved) {
                    setIsCompletionModalOpen(true);
                  } else {
                    setIsSubmitModalOpen(true);
                  }
                }}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-display uppercase tracking-wider font-bold shadow-dossier transition-all ${
                  isAlreadySolved
                    ? 'bg-emerald-800 hover:bg-emerald-900 text-gold-100 border border-emerald-600'
                    : 'bg-burgundy-800 hover:bg-burgundy-900 text-gold-100 border border-gold-400/50 hover:-translate-y-0.5'
                }`}
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isAlreadySolved ? 'Review Solved Results' : 'Submit Investigation'}</span>
              </button>

            </div>

          </div>

          {/* 6. INVESTIGATION PROGRESS INDICATOR BAR */}
          <div className="mt-6 pt-5 border-t border-warm-200 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-4 flex items-center justify-between text-xs font-mono-archive">
              <span className="text-sepia-muted">Forensic Evidence Examined:</span>
              <strong className="text-burgundy-900 font-bold">{examinedCount} of {totalClues} Clues ({progressPercent}%)</strong>
            </div>

            <div className="md:col-span-8 flex items-center gap-4">
              <div className="flex-1 h-3 rounded-full bg-warm-100 overflow-hidden border border-warm-300">
                <div 
                  className="h-full bg-gradient-to-r from-burgundy-800 via-gold-500 to-emerald-600 transition-all duration-500 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <span className="text-[11px] font-mono-archive font-bold text-gold-700 shrink-0">
                {progressPercent >= 60 ? "Ready to Deduce" : "Gathering Leads"}
              </span>
            </div>
          </div>

        </div>

        {/* 2. STORY INTRODUCTION & 3. INVESTIGATION OBJECTIVES ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Story Introduction Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 border border-warm-300 shadow-soft flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2 border-b border-warm-200 pb-2">
                <BookOpen className="w-4 h-4 text-burgundy-800" />
                <h2 className="font-display font-bold text-xs uppercase tracking-widest text-burgundy-900">
                  Incident Brief & Story Introduction
                </h2>
              </div>
              <p className="font-serif text-xs sm:text-sm text-sepia-body leading-relaxed">
                {investigation.introSummary}
              </p>
              <div className="bg-warm-50 p-3.5 rounded-xl border border-warm-200 text-xs text-sepia-muted font-mono-archive">
                Scene Jurisdiction: <strong className="text-sepia-dark">{investigation.sceneName}</strong>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-sepia-muted pt-2 border-t border-warm-100">
              <span>Investigation Status: <strong>{isAlreadySolved ? "Solved & Verified" : "In Progress"}</strong></span>
              <button
                onClick={() => setIsNotebookOpen(true)}
                className="text-burgundy-800 font-semibold hover:underline"
              >
                Open Field Notes ({fieldNotes.length}) →
              </button>
            </div>
          </div>

          {/* Investigation Objectives Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border border-warm-300 shadow-soft space-y-3">
            <div className="flex items-center justify-between border-b border-warm-200 pb-2">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-burgundy-800" />
                <h2 className="font-display font-bold text-xs uppercase tracking-widest text-burgundy-900">
                  Investigation Objectives
                </h2>
              </div>
              <span className="text-[10px] font-mono-archive font-bold text-gold-700">
                {examinedCount >= 4 ? "4/4 Active" : `${Math.min(examinedCount, 4)}/4 Leads`}
              </span>
            </div>

            <div className="space-y-2">
              {investigation.objectives.map((obj, idx) => {
                const isAccomplished = examinedCount >= (idx + 1);
                return (
                  <div 
                    key={idx}
                    className={`p-2.5 rounded-xl border text-xs flex items-start gap-2.5 transition-colors ${
                      isAccomplished
                        ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950 font-medium'
                        : 'bg-warm-50 border-warm-200 text-sepia-body'
                    }`}
                  >
                    <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[10px] ${
                      isAccomplished ? 'bg-emerald-600 text-white' : 'bg-warm-200 text-sepia-muted'
                    }`}>
                      {isAccomplished ? "✓" : idx + 1}
                    </span>
                    <span className="leading-snug">{obj}</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* 4. INTERACTIVE CRIME SCENE WITH CLICKABLE OBJECTS */}
        <InteractiveScene
          caseItem={caseItem}
          investigation={investigation}
          examinedClueIds={examinedClueIds}
          collectedClueIds={collectedClueIds}
          onInspectClue={handleInspectClueFromScene}
          onCollectClue={handleCollectClueFromScene}
          onOpenNotebook={() => setIsNotebookOpen(true)}
          onProceedToQuestions={handleScrollToQuestions}
        />

        {/* 5. INTERACTIVE DEDUCTION QUESTIONS WITH IMMEDIATE VALIDATION */}
        <InteractiveQuestions
          caseItem={caseItem}
          investigation={investigation}
          collectedCount={collectedClueIds.length}
          totalClues={totalClues}
          elapsedTime={elapsedTime}
          isAlreadySolved={isAlreadySolved}
          onCompleteCase={handleSubmitDeductionSuccess}
          nextCase={nextCase}
        />

      </div>

      {/* MODAL 1: Clue Detail Inspector */}
      <ClueDetailModal
        clue={selectedClue}
        isOpen={isClueModalOpen}
        onClose={() => setIsClueModalOpen(false)}
        isExamined={selectedClue ? examinedClueIds.includes(selectedClue.id) : false}
        onMarkExamined={handleMarkExamined}
        isCollected={selectedClue ? collectedClueIds.includes(selectedClue.id) : false}
        onCollectToNotebook={handleToggleCollect}
      />

      {/* MODAL 2: Evidence Notebook Drawer */}
      <EvidenceNotebook
        caseTitle={caseItem.title}
        caseNumber={caseItem.caseNumber}
        clues={investigation.clues}
        examinedClueIds={examinedClueIds}
        collectedClueIds={collectedClueIds}
        onOpenClueDetail={handleOpenClue}
        isOpen={isNotebookOpen}
        onClose={() => setIsNotebookOpen(false)}
        notes={fieldNotes}
        onAddNote={handleAddNote}
        onDeleteNote={handleDeleteNote}
      />

      {/* MODAL 3: Progressive Hint Drawer */}
      <HintModal
        hints={investigation.hints}
        unlockedHintLevel={unlockedHintLevel}
        onUnlockNextHint={handleUnlockNextHint}
        isOpen={isHintModalOpen}
        onClose={() => setIsHintModalOpen(false)}
      />

      {/* MODAL 4: Submit Deduction Challenge */}
      <SubmitDeductionModal
        caseItem={caseItem}
        investigationData={investigation}
        examinedCount={examinedCount}
        totalClues={totalClues}
        hintsUsed={unlockedHintLevel}
        onUseHint={handleUnlockNextHint}
        timeTakenSeconds={elapsedTime}
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        onSubmitDeductionSuccess={handleSubmitDeductionSuccess}
      />

      {/* MODAL 5: Case Completion & Scoring Screen */}
      <CaseCompletionModal
        isOpen={isCompletionModalOpen}
        onClose={() => setIsCompletionModalOpen(false)}
        caseItem={caseItem}
        investigationData={investigation}
        scoreDetails={latestScoreDetails || completedCases[caseId]?.scoreBreakdown}
        timeTakenFormatted={formatTimeSeconds(elapsedTime)}
        hintsUsed={unlockedHintLevel}
        newAchievements={newlyUnlockedAchievements}
        nextCaseId={nextCase?.id}
      />

    </div>
  );
};
