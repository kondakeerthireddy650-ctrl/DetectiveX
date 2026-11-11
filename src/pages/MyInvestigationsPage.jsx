import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CASES_DATA } from '../data/casesData';
import { ArchivalStamp, WaxSeal, CornerOrnament, HeritageDivider } from '../components/common/IndianMotif';
import { DifficultyBadge } from '../components/common/Badge';
import { 
  FolderLock, 
  CheckCircle2, 
  Clock, 
  PenTool, 
  Trash2, 
  Plus, 
  ArrowRight, 
  FileText, 
  AlertCircle,
  Play,
  Bookmark,
  Layers,
  Sparkles,
  Trophy,
  Compass,
  BarChart3
} from 'lucide-react';

export const MyInvestigationsPage = ({ 
  activeCaseIds = [], 
  bookmarkedIds = [], 
  onToggleBookmark,
  userNotes = [],
  onAddNote,
  onDeleteNote,
  completedCases = {}
}) => {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'completed' | 'in_progress' | 'not_started' | 'notes'
  const [newNoteCaseId, setNewNoteCaseId] = useState(CASES_DATA[0].id);
  const [newNoteText, setNewNoteText] = useState('');
  const [showNoteModal, setShowNoteModal] = useState(false);

  // Categorize all 9 cases
  const completedList = Object.values(completedCases);
  const completedCaseIds = Object.keys(completedCases);

  const completedCasesList = CASES_DATA.filter(c => completedCaseIds.includes(c.id));
  
  // In progress: in activeCaseIds or has progress, but NOT completed
  const inProgressCasesList = CASES_DATA.filter(c => 
    !completedCaseIds.includes(c.id) && (activeCaseIds.includes(c.id) || bookmarkedIds.includes(c.id))
  );

  // Not started: neither completed nor in progress
  const notStartedCasesList = CASES_DATA.filter(c => 
    !completedCaseIds.includes(c.id) && !activeCaseIds.includes(c.id) && !bookmarkedIds.includes(c.id)
  );

  const handleCreateNote = (e) => {
    e.preventDefault();
    if (!newNoteText.trim()) return;

    const matchedCase = CASES_DATA.find(c => c.id === newNoteCaseId);
    const newNote = {
      id: `note-${Date.now()}`,
      caseId: newNoteCaseId,
      caseTitle: matchedCase ? matchedCase.title : "General Investigation",
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      note: newNoteText.trim()
    };

    onAddNote && onAddNote(newNote);
    setNewNoteText('');
    setShowNoteModal(false);
  };

  return (
    <div className="py-12 bg-warm-50 min-h-screen text-sepia-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-warm-200">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <ArchivalStamp text="CONFIDENTIAL INVESTIGATION DESK" variant="burgundy" />
              <span className="text-xs font-mono-archive text-gold-700 font-bold uppercase tracking-wider">
                CENTRAL CID DOSSIERS
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-burgundy-950">
              My Investigations
            </h1>
            <p className="text-xs sm:text-sm text-sepia-body mt-1">
              Monitor your active inquiries, review completed case scores, and access your personal field notes.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowNoteModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-burgundy-800 text-gold-100 text-xs font-display uppercase tracking-wider font-bold hover:bg-burgundy-900 transition-colors shadow-sm"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Record Field Note</span>
            </button>
          </div>
        </div>

        {/* 4 Status Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div 
            onClick={() => setActiveTab('overview')}
            className={`p-4 rounded-2xl border cursor-pointer transition-all ${
              activeTab === 'overview' ? 'bg-burgundy-50/80 border-burgundy-600 shadow-sm' : 'bg-white border-warm-300 hover:border-gold-400'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-serif font-bold text-sepia-dark">All 9 Cases</span>
              <Layers className="w-4 h-4 text-burgundy-800" />
            </div>
            <div className="text-2xl font-display font-extrabold text-burgundy-900 mt-2">
              {CASES_DATA.length}
            </div>
            <span className="text-[10px] font-mono-archive text-sepia-muted">Individual Progress</span>
          </div>

          <div 
            onClick={() => setActiveTab('completed')}
            className={`p-4 rounded-2xl border cursor-pointer transition-all ${
              activeTab === 'completed' ? 'bg-emerald-50/80 border-emerald-600 shadow-sm' : 'bg-white border-warm-300 hover:border-gold-400'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-serif font-bold text-sepia-dark">Completed</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            </div>
            <div className="text-2xl font-display font-extrabold text-emerald-800 mt-2">
              {completedCasesList.length}
            </div>
            <span className="text-[10px] font-mono-archive text-sepia-muted">Solved & Certified</span>
          </div>

          <div 
            onClick={() => setActiveTab('in_progress')}
            className={`p-4 rounded-2xl border cursor-pointer transition-all ${
              activeTab === 'in_progress' ? 'bg-gold-50/80 border-gold-600 shadow-sm' : 'bg-white border-warm-300 hover:border-gold-400'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-serif font-bold text-sepia-dark">In Progress</span>
              <Clock className="w-4 h-4 text-gold-600" />
            </div>
            <div className="text-2xl font-display font-extrabold text-gold-800 mt-2">
              {inProgressCasesList.length}
            </div>
            <span className="text-[10px] font-mono-archive text-sepia-muted">Active Inquiries</span>
          </div>

          <div 
            onClick={() => setActiveTab('not_started')}
            className={`p-4 rounded-2xl border cursor-pointer transition-all ${
              activeTab === 'not_started' ? 'bg-warm-100 border-sepia-dark shadow-sm' : 'bg-white border-warm-300 hover:border-gold-400'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-serif font-bold text-sepia-dark">Not Started</span>
              <FolderLock className="w-4 h-4 text-sepia-muted" />
            </div>
            <div className="text-2xl font-display font-extrabold text-sepia-muted mt-2">
              {notStartedCasesList.length}
            </div>
            <span className="text-[10px] font-mono-archive text-sepia-muted">Fresh Files Awaiting</span>
          </div>

        </div>

        {/* Tab Selection Bar */}
        <div className="flex border-b border-warm-300 space-x-2 sm:space-x-4 overflow-x-auto pb-0.5">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 px-3 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border-b-2 flex items-center gap-1.5 ${
              activeTab === 'overview'
                ? 'border-burgundy-800 text-burgundy-900 font-bold'
                : 'border-transparent text-sepia-muted hover:text-sepia-dark'
            }`}
          >
            <BarChart3 className="w-4 h-4 text-burgundy-700" />
            <span>Individual Progress Matrix</span>
          </button>

          <button
            onClick={() => setActiveTab('completed')}
            className={`pb-3 px-3 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border-b-2 flex items-center gap-1.5 ${
              activeTab === 'completed'
                ? 'border-burgundy-800 text-burgundy-900 font-bold'
                : 'border-transparent text-sepia-muted hover:text-sepia-dark'
            }`}
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            <span>Completed Cases ({completedCasesList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('in_progress')}
            className={`pb-3 px-3 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border-b-2 flex items-center gap-1.5 ${
              activeTab === 'in_progress'
                ? 'border-burgundy-800 text-burgundy-900 font-bold'
                : 'border-transparent text-sepia-muted hover:text-sepia-dark'
            }`}
          >
            <Clock className="w-4 h-4 text-gold-600" />
            <span>In Progress ({inProgressCasesList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('not_started')}
            className={`pb-3 px-3 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border-b-2 flex items-center gap-1.5 ${
              activeTab === 'not_started'
                ? 'border-burgundy-800 text-burgundy-900 font-bold'
                : 'border-transparent text-sepia-muted hover:text-sepia-dark'
            }`}
          >
            <FolderLock className="w-4 h-4 text-sepia-muted" />
            <span>Not Started ({notStartedCasesList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('notes')}
            className={`pb-3 px-3 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border-b-2 flex items-center gap-1.5 ${
              activeTab === 'notes'
                ? 'border-burgundy-800 text-burgundy-900 font-bold'
                : 'border-transparent text-sepia-muted hover:text-sepia-dark'
            }`}
          >
            <PenTool className="w-4 h-4 text-sepia-body" />
            <span>Field Notes ({userNotes.length})</span>
          </button>
        </div>

        {/* VIEW 1: INDIVIDUAL PROGRESS MATRIX (All 9 cases) */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-warm-300 shadow-soft">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-warm-200">
                <div>
                  <h3 className="font-serif font-bold text-lg text-burgundy-950">
                    National Dossier Progress Matrix
                  </h3>
                  <p className="text-xs text-sepia-muted">
                    Track your individual clearance percentage and status across all nine domains.
                  </p>
                </div>
                <div className="font-mono-archive text-xs font-bold text-gold-700 bg-gold-50 px-3 py-1 rounded-full border border-gold-200">
                  {completedCasesList.length} of {CASES_DATA.length} Solved ({Math.round((completedCasesList.length / CASES_DATA.length) * 100)}%)
                </div>
              </div>

              {/* Individual Progress Rows */}
              <div className="space-y-4">
                {CASES_DATA.map((caseItem) => {
                  const isCompleted = completedCaseIds.includes(caseItem.id);
                  const completedData = completedCases[caseItem.id];
                  const isInProgress = inProgressCasesList.some(c => c.id === caseItem.id);

                  let statusText = "Not Started";
                  let statusColor = "bg-warm-100 text-sepia-muted border-warm-200";
                  let progressVal = 0;

                  if (isCompleted) {
                    statusText = "Completed";
                    statusColor = "bg-emerald-50 text-emerald-800 border-emerald-300";
                    progressVal = 100;
                  } else if (isInProgress) {
                    statusText = "In Progress";
                    statusColor = "bg-gold-50 text-gold-800 border-gold-300";
                    progressVal = 50;
                  }

                  return (
                    <div 
                      key={caseItem.id}
                      className="p-4 rounded-2xl bg-warm-50/60 border border-warm-200 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-gold-400 transition-colors"
                    >
                      <div className="space-y-1 md:w-5/12">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono-archive font-bold bg-burgundy-900 text-gold-200">
                            {caseItem.caseNumber}
                          </span>
                          <span className="text-[11px] font-mono-archive font-bold text-gold-700 uppercase">
                            {caseItem.domain}
                          </span>
                          <DifficultyBadge difficulty={caseItem.difficulty} />
                        </div>
                        <h4 className="font-serif font-bold text-sm text-burgundy-950">
                          {caseItem.title}
                        </h4>
                      </div>

                      {/* Progress Bar & Status */}
                      <div className="md:w-4/12 space-y-1.5">
                        <div className="flex justify-between text-[11px] font-mono-archive">
                          <span className={`px-2 py-0.5 rounded font-bold uppercase text-[10px] border ${statusColor}`}>
                            {statusText}
                          </span>
                          {isCompleted ? (
                            <strong className="text-emerald-800">Score: {completedData?.score} PTS</strong>
                          ) : (
                            <span className="text-sepia-muted">{progressVal}% Examined</span>
                          )}
                        </div>
                        <div className="w-full h-2 rounded-full bg-warm-200 overflow-hidden border border-warm-300">
                          <div 
                            className={`h-full rounded-full transition-all duration-500 ${
                              isCompleted ? 'bg-emerald-600' : isInProgress ? 'bg-gold-500' : 'bg-warm-300'
                            }`}
                            style={{ width: `${progressVal}%` }}
                          />
                        </div>
                      </div>

                      {/* Action Link */}
                      <div className="md:w-3/12 flex justify-end">
                        <Link
                          to={isCompleted ? `/investigate/${caseItem.id}` : `/case/${caseItem.id}`}
                          className={`w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-semibold text-center transition-all ${
                            isCompleted
                              ? 'bg-white border border-warm-300 text-burgundy-900 hover:bg-warm-100 shadow-sm'
                              : isInProgress
                              ? 'bg-burgundy-800 text-gold-100 hover:bg-burgundy-900 shadow-sm font-bold uppercase tracking-wider text-[11px]'
                              : 'bg-warm-100 hover:bg-warm-200 text-sepia-dark border border-warm-300'
                          }`}
                        >
                          {isCompleted ? "Review Case Details" : isInProgress ? "Resume Investigation →" : "Start Case"}
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: COMPLETED CASES */}
        {activeTab === 'completed' && (
          <div className="space-y-6">
            {completedCasesList.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {completedCasesList.map((caseItem) => {
                  const data = completedCases[caseItem.id];
                  return (
                    <div 
                      key={caseItem.id}
                      className="parchment-card rounded-2xl p-5 border border-emerald-300 shadow-soft flex flex-col justify-between space-y-4 bg-white"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-0.5 rounded text-[10px] font-mono-archive font-bold bg-burgundy-900 text-gold-200">
                            {caseItem.caseNumber}
                          </span>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono-archive font-bold bg-emerald-100 text-emerald-900 border border-emerald-300">
                            ✓ Solved
                          </span>
                        </div>

                        <h4 className="font-serif font-bold text-base text-burgundy-950">
                          {caseItem.title}
                        </h4>

                        <div className="bg-warm-50 p-3 rounded-xl border border-warm-200 space-y-1 text-xs">
                          <div className="flex justify-between font-mono-archive">
                            <span className="text-sepia-muted">Score Earned:</span>
                            <strong className="text-emerald-800 font-bold">+{data?.score || 350} PTS</strong>
                          </div>
                          <div className="flex justify-between font-mono-archive">
                            <span className="text-sepia-muted">Time Taken:</span>
                            <span className="text-sepia-dark">{data?.timeTakenFormatted || "2m 15s"}</span>
                          </div>
                          <div className="flex justify-between font-mono-archive">
                            <span className="text-sepia-muted">Hints Used:</span>
                            <span className="text-sepia-dark">{data?.hintsUsed || 0}/3</span>
                          </div>
                        </div>

                        {data?.badgeAwarded && (
                          <div className="text-[11px] font-serif text-gold-800 flex items-center gap-1.5 bg-gold-50 p-2 rounded-lg border border-gold-200">
                            <Trophy className="w-3.5 h-3.5 text-gold-600" />
                            <span>Award: <strong>{data.badgeAwarded}</strong></span>
                          </div>
                        )}
                      </div>

                      <Link
                        to={`/investigate/${caseItem.id}`}
                        className="w-full py-2.5 px-4 rounded-xl bg-warm-100 hover:bg-burgundy-800 text-burgundy-900 hover:text-gold-100 font-display text-xs font-bold uppercase tracking-wider text-center border border-warm-300 hover:border-burgundy-900 transition-colors"
                      >
                        Review Solution & Score
                      </Link>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-12 text-center border border-warm-300 max-w-lg mx-auto space-y-4 shadow-soft">
                <CheckCircle2 className="w-12 h-12 text-sepia-muted mx-auto" />
                <h3 className="font-serif font-bold text-xl text-burgundy-950">
                  No Cases Solved Yet
                </h3>
                <p className="text-xs text-sepia-body leading-relaxed">
                  Start an investigation, examine the clues, and submit your official verdict to clear cases and record your scores here.
                </p>
                <Link
                  to="/cases"
                  className="inline-block px-5 py-2.5 rounded-xl bg-burgundy-800 text-gold-100 text-xs font-semibold uppercase tracking-wider hover:bg-burgundy-900 shadow-sm"
                >
                  Explore All 9 Mysteries
                </Link>
              </div>
            )}
          </div>
        )}

        {/* VIEW 3: IN PROGRESS CASES */}
        {activeTab === 'in_progress' && (
          <div className="space-y-6">
            {inProgressCasesList.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {inProgressCasesList.map((caseItem) => (
                  <div 
                    key={caseItem.id}
                    className="parchment-card rounded-2xl p-5 border border-gold-400 shadow-soft flex flex-col justify-between space-y-4 bg-white"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-mono-archive font-bold bg-burgundy-900 text-gold-200">
                          {caseItem.caseNumber}
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono-archive font-bold bg-gold-100 text-gold-900 border border-gold-300 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-gold-600" /> In Progress
                        </span>
                      </div>

                      <h4 className="font-serif font-bold text-base text-burgundy-950">
                        {caseItem.title}
                      </h4>

                      <p className="text-xs text-sepia-body line-clamp-2">
                        {caseItem.shortDescription}
                      </p>

                      <div className="p-3 bg-warm-50 rounded-xl border border-warm-200 text-xs space-y-1">
                        <div className="flex justify-between font-mono-archive text-[11px]">
                          <span>Domain:</span>
                          <strong className="text-gold-700">{caseItem.domain}</strong>
                        </div>
                        <div className="flex justify-between font-mono-archive text-[11px]">
                          <span>Est. Duration:</span>
                          <span>{caseItem.duration}</span>
                        </div>
                      </div>
                    </div>

                    <Link
                      to={`/investigate/${caseItem.id}`}
                      className="w-full py-2.5 px-4 rounded-xl bg-burgundy-800 hover:bg-burgundy-900 text-gold-100 font-display text-xs font-bold uppercase tracking-wider text-center border border-gold-400 shadow-sm transition-colors"
                    >
                      Resume Investigation →
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-12 text-center border border-warm-300 max-w-lg mx-auto space-y-4 shadow-soft">
                <Clock className="w-12 h-12 text-sepia-muted mx-auto" />
                <h3 className="font-serif font-bold text-xl text-burgundy-950">
                  No Active Cases in Progress
                </h3>
                <p className="text-xs text-sepia-body leading-relaxed">
                  You are not currently investigating any open cases. Select any mystery from the Case Explorer to start questioning suspects and collecting evidence.
                </p>
                <Link
                  to="/cases"
                  className="inline-block px-5 py-2.5 rounded-xl bg-burgundy-800 text-gold-100 text-xs font-semibold uppercase tracking-wider hover:bg-burgundy-900 shadow-sm"
                >
                  Browse Case Explorer
                </Link>
              </div>
            )}
          </div>
        )}

        {/* VIEW 4: NOT STARTED CASES */}
        {activeTab === 'not_started' && (
          <div className="space-y-6">
            {notStartedCasesList.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {notStartedCasesList.map((caseItem) => (
                  <div 
                    key={caseItem.id}
                    className="parchment-card rounded-2xl p-5 border border-warm-300 shadow-soft flex flex-col justify-between space-y-4 bg-white"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-mono-archive font-bold bg-warm-200 text-sepia-dark">
                          {caseItem.caseNumber}
                        </span>
                        <DifficultyBadge difficulty={caseItem.difficulty} />
                      </div>

                      <h4 className="font-serif font-bold text-base text-burgundy-950">
                        {caseItem.title}
                      </h4>

                      <p className="text-xs text-sepia-body line-clamp-2">
                        {caseItem.shortDescription}
                      </p>

                      <div className="flex items-center justify-between text-xs text-sepia-muted pt-2 border-t border-warm-100">
                        <span>{caseItem.domain}</span>
                        <span>{caseItem.duration}</span>
                      </div>
                    </div>

                    <Link
                      to={`/case/${caseItem.id}`}
                      className="w-full py-2.5 px-4 rounded-xl bg-warm-100 hover:bg-burgundy-800 text-burgundy-900 hover:text-gold-100 font-display text-xs font-bold uppercase tracking-wider text-center border border-warm-300 hover:border-burgundy-900 transition-colors"
                    >
                      Open Case Brief
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-12 text-center border border-warm-300 max-w-lg mx-auto space-y-4 shadow-soft">
                <Trophy className="w-12 h-12 text-gold-600 mx-auto" />
                <h3 className="font-serif font-bold text-xl text-burgundy-950">
                  All 9 Cases Started or Completed!
                </h3>
                <p className="text-xs text-sepia-body leading-relaxed">
                  Incredible dedication! You have initiated or cracked all nine available mystery files in the DetectiveX archives.
                </p>
                <Link
                  to="/profile"
                  className="inline-block px-5 py-2.5 rounded-xl bg-burgundy-800 text-gold-100 text-xs font-semibold uppercase tracking-wider hover:bg-burgundy-900 shadow-sm"
                >
                  View Detective Profile
                </Link>
              </div>
            )}
          </div>
        )}

        {/* VIEW 5: FIELD NOTES LOG */}
        {activeTab === 'notes' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono-archive text-sepia-muted uppercase">
                {userNotes.length} Detective Observations on Record
              </span>
              <button
                onClick={() => setShowNoteModal(true)}
                className="text-xs font-semibold text-burgundy-800 hover:text-burgundy-950 flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Write New Note</span>
              </button>
            </div>

            {userNotes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {userNotes.map((noteItem) => (
                  <div
                    key={noteItem.id}
                    className="bg-white rounded-2xl p-5 border border-warm-300 shadow-soft space-y-3 relative group"
                  >
                    <div className="flex items-start justify-between gap-2 border-b border-warm-200 pb-2.5">
                      <div>
                        <span className="text-[10px] font-mono-archive text-gold-700 font-bold uppercase tracking-wider block">
                          CASE FILE REFERENCE
                        </span>
                        <h4 className="font-serif font-bold text-sm text-burgundy-950">
                          {noteItem.caseTitle}
                        </h4>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono-archive text-sepia-muted">
                          {noteItem.date}
                        </span>
                        {onDeleteNote && (
                          <button
                            onClick={() => onDeleteNote(noteItem.id)}
                            className="text-sepia-faint hover:text-rose-700 p-1"
                            title="Delete note"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>

                    <p className="text-xs text-sepia-body leading-relaxed font-mono-archive bg-warm-50/70 p-3 rounded-xl border border-warm-200/60">
                      "{noteItem.note}"
                    </p>

                    <div className="flex items-center justify-between text-[11px] text-sepia-muted pt-1">
                      <span className="text-gold-700 font-semibold">Inspector Kabir Sen</span>
                      <Link 
                        to={`/investigate/${noteItem.caseId}`}
                        className="text-burgundy-700 hover:text-burgundy-950 font-bold hover:underline"
                      >
                        Inspect Dossier →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-12 text-center border border-warm-300 max-w-lg mx-auto space-y-4">
                <PenTool className="w-12 h-12 text-sepia-muted mx-auto" />
                <h3 className="font-serif font-bold text-lg text-burgundy-950">No Field Notes Recorded</h3>
                <p className="text-xs text-sepia-body">
                  A good detective never relies solely on memory. Record observations, suspect inconsistencies, or timeline theories.
                </p>
                <button
                  onClick={() => setShowNoteModal(true)}
                  className="px-5 py-2.5 rounded-xl bg-burgundy-800 text-gold-100 text-xs font-semibold uppercase tracking-wider hover:bg-burgundy-900"
                >
                  Create First Note
                </button>
              </div>
            )}
          </div>
        )}

        {/* Field Note Modal */}
        {showNoteModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-sepia-dark/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 border border-warm-300 shadow-soft-xl space-y-4">
              <div className="flex items-center justify-between border-b border-warm-200 pb-3">
                <div className="flex items-center gap-2">
                  <WaxSeal size="sm" text="NOTE" />
                  <div>
                    <h3 className="font-serif font-bold text-lg text-burgundy-950">
                      Record Investigator Field Note
                    </h3>
                    <p className="text-xs text-sepia-muted">Saved to your personal investigative diary</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowNoteModal(false)}
                  className="text-sepia-muted hover:text-burgundy-800 text-sm font-bold p-1"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleCreateNote} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono-archive font-bold uppercase tracking-wider text-sepia-body mb-1">
                    Related Case Dossier
                  </label>
                  <select
                    value={newNoteCaseId}
                    onChange={(e) => setNewNoteCaseId(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-warm-300 bg-warm-50 text-sepia-dark focus:outline-none focus:ring-2 focus:ring-burgundy-700/40"
                  >
                    {CASES_DATA.map(c => (
                      <option key={c.id} value={c.id}>
                        {c.caseNumber} - {c.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono-archive font-bold uppercase tracking-wider text-sepia-body mb-1">
                    Deduction / Observation
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="E.g., The timeline between the carriage departure and the train whistle does not match the butler's statement..."
                    value={newNoteText}
                    onChange={(e) => setNewNoteText(e.target.value)}
                    className="w-full p-3 text-xs rounded-xl border border-warm-300 bg-warm-50 text-sepia-dark placeholder-sepia-faint focus:outline-none focus:ring-2 focus:ring-burgundy-700/40"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowNoteModal(false)}
                    className="px-4 py-2 text-xs font-medium text-sepia-muted hover:text-sepia-dark"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-burgundy-800 text-gold-100 text-xs font-display uppercase tracking-wider font-bold hover:bg-burgundy-900 transition-colors"
                  >
                    Save Field Note
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
