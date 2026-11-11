import React, { useState } from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  Bookmark, 
  FileText, 
  Eye, 
  PenTool, 
  Plus, 
  Trash2, 
  X,
  Target,
  Sparkles,
  Layers
} from 'lucide-react';
import { ArchivalStamp, WaxSeal } from '../common/IndianMotif';

export const EvidenceNotebook = ({ 
  caseTitle,
  caseNumber,
  clues = [],
  examinedClueIds = [],
  collectedClueIds = [],
  onOpenClueDetail,
  isOpen = false,
  onClose,
  notes = [],
  onAddNote,
  onDeleteNote
}) => {
  const [activeTab, setActiveTab] = useState('clues'); // 'clues' | 'observations' | 'notes'
  const [newNoteText, setNewNoteText] = useState('');

  if (!isOpen) return null;

  const totalClues = clues.length;
  const examinedCount = examinedClueIds.length;
  const progressPercent = Math.round((examinedCount / totalClues) * 100);

  const examinedClues = clues.filter(c => examinedClueIds.includes(c.id));
  const collectedClues = clues.filter(c => collectedClueIds.includes(c.id));

  const handleCreateNote = (e) => {
    e.preventDefault();
    if (!newNoteText.trim()) return;
    onAddNote && onAddNote({
      id: `note-${Date.now()}`,
      caseNumber,
      caseTitle,
      date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      note: newNoteText.trim()
    });
    setNewNoteText('');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-sepia-dark/50 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Drawer Container */}
      <div className="w-full max-w-xl bg-warm-50 h-full shadow-2xl border-l-2 border-warm-300 flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300">
        
        {/* Notebook Leather-Trim Header */}
        <div className="bg-gradient-to-r from-burgundy-900 via-burgundy-800 to-burgundy-900 text-gold-100 p-5 sm:p-6 border-b-2 border-gold-400/40 shadow-md">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <WaxSeal size="sm" text="NOTE" />
              <div>
                <span className="text-[10px] font-mono-archive uppercase tracking-widest text-gold-300 block">
                  INVESTIGATOR'S OFFICIAL FIELD NOTEBOOK
                </span>
                <h3 className="font-serif font-bold text-lg text-white">
                  {caseNumber}: {caseTitle}
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-gold-200 hover:text-white hover:bg-burgundy-700/60 transition-colors"
              aria-label="Close notebook"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Bar in Header */}
          <div className="space-y-1.5 pt-2">
            <div className="flex justify-between text-xs font-mono-archive text-gold-200">
              <span>Investigation Clues Examined</span>
              <strong>{examinedCount} of {totalClues} Clues ({progressPercent}%)</strong>
            </div>
            <div className="w-full h-2 rounded-full bg-burgundy-950 overflow-hidden border border-gold-400/30">
              <div 
                className="h-full bg-gradient-to-r from-gold-500 to-gold-300 transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Notebook Tab Selector */}
        <div className="bg-cream-100 px-6 border-b border-warm-300 flex items-center space-x-4">
          <button
            onClick={() => setActiveTab('clues')}
            className={`py-3 text-xs sm:text-sm font-semibold transition-all border-b-2 flex items-center gap-1.5 ${
              activeTab === 'clues'
                ? 'border-burgundy-800 text-burgundy-900 font-bold'
                : 'border-transparent text-sepia-muted hover:text-sepia-dark'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5 text-gold-600" />
            <span>Collected Evidence ({collectedClues.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('observations')}
            className={`py-3 text-xs sm:text-sm font-semibold transition-all border-b-2 flex items-center gap-1.5 ${
              activeTab === 'observations'
                ? 'border-burgundy-800 text-burgundy-900 font-bold'
                : 'border-transparent text-sepia-muted hover:text-sepia-dark'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-burgundy-700" />
            <span>Key Observations ({examinedClues.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('notes')}
            className={`py-3 text-xs sm:text-sm font-semibold transition-all border-b-2 flex items-center gap-1.5 ${
              activeTab === 'notes'
                ? 'border-burgundy-800 text-burgundy-900 font-bold'
                : 'border-transparent text-sepia-muted hover:text-sepia-dark'
            }`}
          >
            <PenTool className="w-3.5 h-3.5 text-sepia-dark" />
            <span>Field Notes ({notes.length})</span>
          </button>
        </div>

        {/* Notebook Tab Content */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          
          {/* TAB 1: Collected Clues */}
          {activeTab === 'clues' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-sepia-muted">
                <span>Pinned exhibits for immediate comparison:</span>
                <span className="font-mono-archive font-bold text-burgundy-900">
                  {collectedClues.length} Pinned
                </span>
              </div>

              {collectedClues.length > 0 ? (
                <div className="space-y-3">
                  {collectedClues.map((clue) => (
                    <div 
                      key={clue.id}
                      className="p-4 rounded-2xl bg-white border border-warm-300 shadow-soft space-y-2 hover:border-gold-500 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono-archive font-bold text-gold-700 uppercase bg-gold-50 px-2 py-0.5 rounded border border-gold-200">
                          {clue.category}
                        </span>
                        <span className="text-xs text-emerald-800 font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Examined
                        </span>
                      </div>

                      <h4 className="font-serif font-bold text-sm text-burgundy-950">
                        {clue.title}
                      </h4>

                      <p className="text-xs text-sepia-body leading-relaxed line-clamp-2">
                        {clue.detailedAnalysis}
                      </p>

                      <div className="pt-2 flex justify-end">
                        <button
                          onClick={() => onOpenClueDetail(clue)}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-burgundy-800 hover:text-burgundy-950"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Re-examine Full Forensic Details →</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 px-4 bg-white rounded-2xl border border-warm-200 space-y-3">
                  <Bookmark className="w-10 h-10 text-warm-400 mx-auto" />
                  <h4 className="font-serif font-bold text-base text-burgundy-950">
                    No Pinned Clues Yet
                  </h4>
                  <p className="text-xs text-sepia-muted max-w-xs mx-auto">
                    While examining clues in the investigation area, click <strong>"Pin to Evidence Notebook"</strong> to keep key exhibits easily accessible.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: Important Observations */}
          {activeTab === 'observations' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-cream-50 border border-warm-200 text-xs text-sepia-body leading-relaxed">
                As you examine clues in the investigation area, verified deductions and forensic insights are automatically recorded here.
              </div>

              {examinedClues.length > 0 ? (
                <div className="space-y-3">
                  {examinedClues.map((clue, idx) => (
                    <div 
                      key={clue.id}
                      className="p-4 rounded-xl bg-white border border-warm-300 space-y-2 shadow-sm"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-burgundy-800 text-gold-100 font-display font-bold text-[10px] flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <h4 className="font-serif font-bold text-xs text-burgundy-950">
                          {clue.title}
                        </h4>
                      </div>

                      <div className="bg-warm-50 p-2.5 rounded-lg border border-warm-200 text-xs text-sepia-dark font-mono-archive">
                        {clue.significance}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 px-4 bg-white rounded-2xl border border-warm-200 space-y-3">
                  <Eye className="w-10 h-10 text-warm-400 mx-auto" />
                  <h4 className="font-serif font-bold text-base text-burgundy-950">
                    No Observations Recorded
                  </h4>
                  <p className="text-xs text-sepia-muted max-w-xs mx-auto">
                    Click on clues in the investigation area to examine their forensic details and unlock automatic case deductions.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: Field Notes */}
          {activeTab === 'notes' && (
            <div className="space-y-4">
              {/* Note input box */}
              <form onSubmit={handleCreateNote} className="space-y-2">
                <textarea
                  rows={3}
                  placeholder="Record a theory or observe contradictions (e.g. The timing of the delivery doesn't match the alibi...)"
                  value={newNoteText}
                  onChange={(e) => setNewNoteText(e.target.value)}
                  className="w-full p-3 rounded-xl border border-warm-300 text-xs text-sepia-dark bg-white focus:outline-none focus:ring-2 focus:ring-burgundy-700/30"
                />
                <button
                  type="submit"
                  disabled={!newNoteText.trim()}
                  className="w-full py-2 rounded-xl bg-burgundy-800 text-gold-100 text-xs font-semibold uppercase tracking-wider hover:bg-burgundy-900 disabled:opacity-50 transition-colors"
                >
                  Save Field Note
                </button>
              </form>

              {/* Notes list */}
              {notes.length > 0 ? (
                <div className="space-y-3 pt-2">
                  {notes.map((n) => (
                    <div 
                      key={n.id}
                      className="p-3.5 rounded-xl bg-white border border-warm-300 space-y-1.5 shadow-sm relative group"
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono-archive text-sepia-muted border-b border-warm-100 pb-1">
                        <span>{n.date || "Just now"}</span>
                        {onDeleteNote && (
                          <button
                            onClick={() => onDeleteNote(n.id)}
                            className="text-sepia-faint hover:text-rose-700 p-0.5"
                            title="Delete note"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                      <p className="text-xs text-sepia-body font-mono-archive leading-relaxed">
                        "{n.note}"
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-xs text-sepia-muted">
                  No personal field notes written for this case yet.
                </div>
              )}
            </div>
          )}

        </div>

        {/* Notebook Bottom Bar */}
        <div className="bg-warm-100 p-4 border-t border-warm-300 flex items-center justify-between text-xs">
          <span className="font-mono-archive text-sepia-muted">
            Status: {progressPercent >= 80 ? "Deduction Ready" : "Gathering Leads"}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white border border-warm-300 text-burgundy-900 font-semibold hover:bg-warm-50 text-xs"
          >
            Close Notebook
          </button>
        </div>

      </div>

    </div>
  );
};
