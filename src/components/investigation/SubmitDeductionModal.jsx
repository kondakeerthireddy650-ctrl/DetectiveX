import React, { useState } from 'react';
import { 
  Award, 
  CheckCircle2, 
  AlertCircle, 
  X, 
  HelpCircle, 
  ArrowRight, 
  ShieldCheck, 
  RotateCcw,
  Sparkles,
  Trophy,
  BookOpen,
  Lightbulb
} from 'lucide-react';
import { ArchivalStamp, WaxSeal } from '../common/IndianMotif';

export const SubmitDeductionModal = ({ 
  caseItem, 
  investigationData, 
  examinedCount = 0, 
  totalClues = 5, 
  hintsUsed = 0,
  onUseHint,
  timeTakenSeconds = 120,
  isOpen = false, 
  onClose,
  onSubmitDeductionSuccess
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [validationResults, setValidationResults] = useState(null); // { allCorrect, incorrectIndices }
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [revealedHintQIds, setRevealedHintQIds] = useState([]);

  if (!isOpen) return null;

  const minRequiredClues = 1;
  const hasExaminedEnough = examinedCount >= minRequiredClues;
  const questions = investigationData?.questions || [];

  const handleSelectOption = (questionId, optionIndex) => {
    // If previously submitted with error, clear validation on answer change
    if (submitted && !validationResults?.allCorrect) {
      setSubmitted(false);
      setValidationResults(null);
      setFeedbackMessage('');
    }

    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const handleToggleQuestionHint = (questionId) => {
    if (!revealedHintQIds.includes(questionId)) {
      setRevealedHintQIds(prev => [...prev, questionId]);
      onUseHint && onUseHint();
    } else {
      setRevealedHintQIds(prev => prev.filter(id => id !== questionId));
    }
  };

  const handleSubmitDeduction = (e) => {
    e.preventDefault();
    
    // Check that all questions are answered
    const allAnswered = questions.every(q => selectedAnswers[q.id] !== undefined);
    if (!allAnswered) {
      setFeedbackMessage('Please select an answer for all three investigative questions.');
      return;
    }

    // Verify each answer
    const incorrectIndices = [];
    questions.forEach((q, idx) => {
      if (selectedAnswers[q.id] !== q.correctIndex) {
        incorrectIndices.push(idx);
      }
    });

    const allCorrect = incorrectIndices.length === 0;

    setSubmitted(true);
    setValidationResults({ allCorrect, incorrectIndices });

    if (allCorrect) {
      setFeedbackMessage("Amazing! You're a great detective!");
      // Short delay so player can celebrate the message before completion modal opens
      setTimeout(() => {
        onSubmitDeductionSuccess && onSubmitDeductionSuccess({
          questionsCount: questions.length,
          correctCount: questions.length,
          hintsUsed: Math.max(hintsUsed, revealedHintQIds.length),
          allCluesExamined: examinedCount >= totalClues,
          timeTakenSeconds
        });
      }, 700);
    } else {
      setFeedbackMessage("Good try! Let's look at the clues again.");
    }
  };

  const handleRetry = () => {
    setSubmitted(false);
    setValidationResults(null);
    setFeedbackMessage('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-sepia-dark/70 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      
      {/* Modal Dialog Box */}
      <div className="bg-white rounded-3xl max-w-2xl w-full border-2 border-warm-300 shadow-soft-xl overflow-hidden relative animate-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-burgundy-900 via-burgundy-800 to-burgundy-900 text-gold-100 p-5 sm:p-6 border-b border-gold-400/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <WaxSeal size="sm" text="CID" />
            <div>
              <span className="text-[10px] font-mono-archive font-bold text-gold-300 uppercase tracking-widest block">
                OFFICIAL CASE CONCLUSION
              </span>
              <h3 className="font-serif font-bold text-lg text-white">
                Submit Investigation Questions
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gold-200 hover:text-white hover:bg-burgundy-700/60 transition-colors"
            aria-label="Close deduction submission"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
          
          {/* Check 1: Has user examined at least 1 clue? */}
          {!hasExaminedEnough ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-amber-50 border-2 border-amber-300 flex items-center justify-center text-amber-700 mx-auto shadow-sm">
                <AlertCircle className="w-8 h-8" />
              </div>
              <h4 className="font-serif font-bold text-xl text-burgundy-950">
                Examine Clues First
              </h4>
              <p className="text-xs sm:text-sm text-sepia-body max-w-md mx-auto leading-relaxed">
                Take a quick look at the clues before answering the questions. You haven't inspected any clues yet!
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-burgundy-800 text-gold-100 font-display text-xs font-bold uppercase tracking-wider hover:bg-burgundy-900 transition-colors"
              >
                Return to Examine Clues
              </button>
            </div>
          ) : (
            /* QUESTIONS DEDUCTION FORM */
            <form onSubmit={handleSubmitDeduction} className="space-y-6">
              
              <div className="bg-cream-50 p-4 rounded-2xl border border-warm-200 text-xs text-sepia-body flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span>Answer the 3 easy multiple-choice questions based on your clues:</span>
                <span className="font-mono-archive font-bold text-gold-800 text-[11px] bg-gold-100 px-2 py-0.5 rounded border border-gold-300 shrink-0">
                  10 PTS Each · -2 PTS per hint
                </span>
              </div>

              {/* Feedback Alert Box */}
              {feedbackMessage && (
                <div className={`p-4 rounded-xl text-xs space-y-2 animate-in fade-in duration-300 ${
                  validationResults?.allCorrect 
                    ? 'bg-emerald-50 border border-emerald-300 text-emerald-950'
                    : 'bg-rose-50 border border-rose-300 text-rose-950'
                }`}>
                  <div className="flex items-center gap-2 font-bold font-serif text-sm">
                    {validationResults?.allCorrect ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                        <span className="text-emerald-900">Amazing! You're a great detective!</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-4 h-4 text-rose-700 shrink-0" />
                        <span className="text-rose-900">Good try! Let's look at the clues again.</span>
                      </>
                    )}
                  </div>
                  <p>{feedbackMessage}</p>
                  {!validationResults?.allCorrect && (
                    <button
                      type="button"
                      onClick={handleRetry}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-800 text-white font-semibold text-xs hover:bg-rose-900 transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Adjust Answers & Retry</span>
                    </button>
                  )}
                </div>
              )}

              {/* Questions List (Exactly 3 Options Each) */}
              <div className="space-y-6">
                {questions.map((q, qIndex) => {
                  const isAnswered = selectedAnswers[q.id] !== undefined;
                  const isIncorrect = submitted && validationResults?.incorrectIndices?.includes(qIndex);
                  const isCorrect = submitted && !isIncorrect && isAnswered;
                  const isHintRevealed = revealedHintQIds.includes(q.id);

                  return (
                    <div 
                      key={q.id}
                      className={`p-5 rounded-2xl border transition-all duration-200 space-y-3 ${
                        isIncorrect
                          ? 'bg-rose-50/70 border-rose-300 ring-1 ring-rose-400'
                          : isCorrect
                          ? 'bg-emerald-50/60 border-emerald-300'
                          : 'bg-warm-50/70 border-warm-300'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2.5">
                        <div className="flex items-start gap-2.5">
                          <span className={`w-5 h-5 rounded-full text-gold-100 font-display font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 ${
                            isIncorrect ? 'bg-rose-700' : isCorrect ? 'bg-emerald-700' : 'bg-burgundy-800'
                          }`}>
                            {qIndex + 1}
                          </span>
                          <h4 className="font-serif font-bold text-sm text-burgundy-950">
                            {q.prompt}
                          </h4>
                        </div>

                        {isIncorrect && (
                          <span className="text-[10px] font-mono-archive font-bold text-rose-700 uppercase bg-rose-100 px-2 py-0.5 rounded border border-rose-300 shrink-0">
                            Check Clues Again
                          </span>
                        )}
                        {isCorrect && (
                          <span className="text-[10px] font-mono-archive font-bold text-emerald-800 uppercase bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300 shrink-0">
                            ✓ Correct!
                          </span>
                        )}
                      </div>

                      {/* 3 Multiple Choice Options */}
                      <div className="space-y-2 pl-7">
                        {q.options.map((opt, optIndex) => {
                          const isSelected = selectedAnswers[q.id] === optIndex;
                          return (
                            <label
                              key={optIndex}
                              onClick={() => handleSelectOption(q.id, optIndex)}
                              className={`flex items-start gap-3 p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                                isSelected
                                  ? 'bg-burgundy-50 border-burgundy-700 text-burgundy-950 shadow-sm font-medium'
                                  : 'bg-white border-warm-200 text-sepia-dark hover:bg-warm-100/60'
                              }`}
                            >
                              <input
                                type="radio"
                                name={q.id}
                                checked={isSelected}
                                onChange={() => handleSelectOption(q.id, optIndex)}
                                className="mt-0.5 text-burgundy-800 focus:ring-burgundy-700"
                              />
                              <span className="leading-snug">{opt}</span>
                            </label>
                          );
                        })}
                      </div>

                      {/* Per-Question Simple Hint */}
                      <div className="pt-1 pl-7">
                        <button
                          type="button"
                          onClick={() => handleToggleQuestionHint(q.id)}
                          className="inline-flex items-center gap-1.5 text-[11px] font-mono-archive text-gold-800 hover:text-gold-950 font-semibold"
                        >
                          <Lightbulb className="w-3.5 h-3.5 text-gold-600" />
                          <span>{isHintRevealed ? "Hide Hint" : "Need a hint for this question? (-2 pts)"}</span>
                        </button>

                        {isHintRevealed && (
                          <div className="mt-2 p-3 bg-gold-50/90 border border-gold-300 rounded-xl text-xs text-gold-950 font-serif leading-relaxed animate-in fade-in duration-200">
                            💡 <strong>Simple Hint:</strong> {q.hint || investigationData?.hints?.[qIndex]?.text || "Check the evidence description carefully."}
                          </div>
                        )}
                      </div>

                    </div>
                  );
                })}
              </div>

              {/* Submit Buttons */}
              <div className="pt-3 flex items-center justify-between border-t border-warm-200">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-xs text-sepia-muted hover:text-sepia-dark font-medium"
                >
                  Return to Clue Collection
                </button>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-burgundy-800 hover:bg-burgundy-900 text-gold-100 font-display uppercase tracking-wider text-xs font-bold shadow-dossier transition-all"
                >
                  Submit Answers
                </button>
              </div>

            </form>
          )}

        </div>

      </div>

    </div>
  );
};
