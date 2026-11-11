import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  CheckCircle2, 
  AlertCircle, 
  Lightbulb, 
  RotateCcw, 
  Sparkles, 
  Trophy, 
  ArrowRight,
  ShieldCheck,
  Clock,
  Compass
} from 'lucide-react';
import { ArchivalStamp, WaxSeal } from '../common/IndianMotif';
import { calculateCaseScore } from '../../utils/progressManager';

export const InteractiveQuestions = ({
  caseItem,
  investigation,
  collectedCount = 0,
  totalClues = 6,
  elapsedTime = 120,
  isAlreadySolved = false,
  onCompleteCase,
  nextCase = null
}) => {
  const questions = investigation?.questions || [];
  
  // State for user answers: { [qId]: selectedOptionIndex }
  const [userAnswers, setUserAnswers] = useState({});
  // Question status: { [qId]: 'correct' | 'incorrect' }
  const [questionStatus, setQuestionStatus] = useState({});
  // Revealed hints: array of question IDs
  const [revealedHintQIds, setRevealedHintQIds] = useState([]);
  // Solved completed state
  const [isCaseSolved, setIsCaseSolved] = useState(isAlreadySolved);
  // Final score details
  const [finalScore, setFinalScore] = useState(null);

  if (!questions || questions.length === 0) return null;

  // Count correct answers
  const correctCount = Object.values(questionStatus).filter(s => s === 'correct').length;
  const allQuestionsSolved = questions.length > 0 && correctCount === questions.length;

  // Immediate selection handler
  const handleSelectOption = (question, optionIndex) => {
    // If already marked correct, no need to re-click
    if (questionStatus[question.id] === 'correct') return;

    const isCorrect = optionIndex === question.correctIndex;

    setUserAnswers(prev => ({
      ...prev,
      [question.id]: optionIndex
    }));

    setQuestionStatus(prev => {
      const nextStatus = {
        ...prev,
        [question.id]: isCorrect ? 'correct' : 'incorrect'
      };

      // Check if this makes all questions solved
      const nextCorrectCount = Object.values(nextStatus).filter(s => s === 'correct').length;
      if (nextCorrectCount === questions.length && !isCaseSolved) {
        setIsCaseSolved(true);

        const scoreObj = calculateCaseScore({
          questionsCount: questions.length,
          correctCount: questions.length,
          hintsUsed: revealedHintQIds.length,
          allCluesExamined: collectedCount >= totalClues,
          timeTakenSeconds: elapsedTime
        });

        setFinalScore(scoreObj);

        // Save to parent and LocalStorage
        onCompleteCase && onCompleteCase({
          caseId: caseItem.id,
          caseNumber: caseItem.caseNumber,
          title: caseItem.title,
          domain: caseItem.domain,
          score: scoreObj.totalScore,
          timeTakenSeconds: elapsedTime,
          hintsUsed: revealedHintQIds.length,
          allCluesExamined: collectedCount >= totalClues
        });
      }

      return nextStatus;
    });
  };

  const handleRetryQuestion = (questionId) => {
    setUserAnswers(prev => {
      const copy = { ...prev };
      delete copy[questionId];
      return copy;
    });
    setQuestionStatus(prev => {
      const copy = { ...prev };
      delete copy[questionId];
      return copy;
    });
  };

  const handleToggleHint = (questionId) => {
    if (!revealedHintQIds.includes(questionId)) {
      setRevealedHintQIds(prev => [...prev, questionId]);
    }
  };

  // Live score calculation
  const liveScore = Math.max(0, (correctCount * 10) - (revealedHintQIds.length * 2));

  return (
    <section id="deduction-questions-section" className="bg-white rounded-3xl p-5 sm:p-8 border-2 border-warm-300 shadow-soft-xl space-y-6">
      
      {/* Section Header with Live Score Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-warm-200 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-gold-100 border border-gold-300 text-gold-800">
              <Award className="w-5 h-5 text-gold-700" />
            </span>
            <div>
              <span className="text-[10px] font-mono-archive font-bold text-gold-700 uppercase tracking-widest block">
                DEDUCTION & VALIDATION PHASE
              </span>
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-burgundy-950">
                Investigation Questions
              </h2>
            </div>
          </div>
          <p className="text-xs text-sepia-muted mt-1">
            Answer the 3 simple questions using your collected clues. Answers are validated immediately!
          </p>
        </div>

        {/* Live Score Ticker */}
        <div className="flex items-center gap-3 bg-warm-50 p-2.5 rounded-2xl border border-warm-300 shrink-0">
          <div className="text-center px-2">
            <span className="text-[9px] font-mono-archive text-sepia-muted uppercase block">Solved</span>
            <strong className="text-sm font-mono-archive font-bold text-burgundy-900">
              {correctCount}/{questions.length}
            </strong>
          </div>
          <div className="w-px h-8 bg-warm-300" />
          <div className="text-center px-2">
            <span className="text-[9px] font-mono-archive text-sepia-muted uppercase block">Hints</span>
            <strong className="text-sm font-mono-archive font-bold text-gold-800">
              {revealedHintQIds.length} used
            </strong>
          </div>
          <div className="w-px h-8 bg-warm-300" />
          <div className="text-center px-2">
            <span className="text-[9px] font-mono-archive text-sepia-muted uppercase block">Live Score</span>
            <strong className="text-sm font-mono-archive font-bold text-emerald-800">
              {liveScore} pts
            </strong>
          </div>
        </div>
      </div>

      {/* QUESTIONS LIST */}
      <div className="space-y-6">
        {questions.map((question, qIdx) => {
          const selectedOption = userAnswers[question.id];
          const status = questionStatus[question.id]; // 'correct' | 'incorrect' | undefined
          const isCorrect = status === 'correct';
          const isIncorrect = status === 'incorrect';
          const isHintRevealed = revealedHintQIds.includes(question.id);

          return (
            <div
              key={question.id}
              className={`rounded-2xl p-5 sm:p-6 border-2 transition-all space-y-4 ${
                isCorrect
                  ? 'bg-emerald-50/40 border-emerald-300 shadow-sm'
                  : isIncorrect
                  ? 'bg-rose-50/40 border-rose-300 shadow-sm'
                  : 'bg-warm-50/70 border-warm-300 hover:border-warm-400'
              }`}
            >
              {/* Question Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono-archive font-bold px-2.5 py-0.5 rounded-full bg-burgundy-100 text-burgundy-900 border border-burgundy-200">
                      QUESTION {qIdx + 1} OF {questions.length}
                    </span>
                    <span className="text-[10px] font-mono-archive text-gold-700 font-bold">
                      (+10 Points)
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-burgundy-950">
                    {question.prompt}
                  </h3>
                </div>

                {/* Status Indicator */}
                {isCorrect && (
                  <span className="px-3 py-1 rounded-xl bg-emerald-100 text-emerald-900 text-xs font-bold font-mono-archive flex items-center gap-1.5 shrink-0 border border-emerald-300 shadow-sm animate-in zoom-in-90 duration-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>Correct!</span>
                  </span>
                )}
                {isIncorrect && (
                  <span className="px-3 py-1 rounded-xl bg-rose-100 text-rose-900 text-xs font-bold font-mono-archive flex items-center gap-1.5 shrink-0 border border-rose-300 shadow-sm animate-in zoom-in-90 duration-200">
                    <AlertCircle className="w-4 h-4 text-rose-700" />
                    <span>Try Again</span>
                  </span>
                )}
              </div>

              {/* Multiple Choice Options (3 options) */}
              <div className="grid grid-cols-1 gap-2.5">
                {question.options.map((option, optIdx) => {
                  const isSelected = selectedOption === optIdx;
                  const isThisCorrect = isCorrect && isSelected;
                  const isThisWrong = isIncorrect && isSelected;

                  return (
                    <button
                      key={optIdx}
                      disabled={isCorrect}
                      onClick={() => handleSelectOption(question, optIdx)}
                      className={`w-full p-3.5 sm:p-4 rounded-xl border-2 text-left text-xs sm:text-sm font-medium transition-all flex items-start gap-3 ${
                        isThisCorrect
                          ? 'bg-emerald-100 border-emerald-500 text-emerald-950 shadow-sm ring-2 ring-emerald-400/40 font-bold'
                          : isThisWrong
                          ? 'bg-rose-100 border-rose-400 text-rose-950 font-semibold'
                          : isCorrect
                          ? 'bg-white/60 border-warm-200 text-sepia-muted opacity-70 cursor-default'
                          : 'bg-white border-warm-300 text-sepia-dark hover:border-gold-500 hover:bg-gold-50/40 hover:shadow-sm'
                      }`}
                    >
                      <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-mono-archive font-bold shrink-0 mt-0.5 border ${
                        isThisCorrect
                          ? 'bg-emerald-600 text-white border-emerald-700'
                          : isThisWrong
                          ? 'bg-rose-600 text-white border-rose-700'
                          : 'bg-warm-100 text-sepia-muted border-warm-300'
                      }`}>
                        {String.fromCharCode(65 + optIdx)}
                      </span>

                      <span className="flex-1 leading-snug">
                        {option}
                      </span>

                      {isThisCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
                      )}
                      {isThisWrong && (
                        <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Immediate Feedback Box & Retry / Hint */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs">
                {isCorrect ? (
                  <div className="w-full bg-emerald-100/70 p-3 rounded-xl border border-emerald-300 text-emerald-950 flex items-start gap-2 animate-in fade-in duration-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <strong>Observation Confirmed: </strong>
                      <span>{question.explanation}</span>
                    </div>
                  </div>
                ) : isIncorrect ? (
                  <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-rose-100/70 p-3 rounded-xl border border-rose-300 text-rose-950 animate-in fade-in duration-200">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-rose-700 shrink-0" />
                      <span>Not quite right. Review the clues or try again!</span>
                    </div>
                    <button
                      onClick={() => handleRetryQuestion(question.id)}
                      className="px-3 py-1.5 rounded-lg bg-rose-700 hover:bg-rose-800 text-white font-semibold text-xs transition-colors flex items-center gap-1.5 shrink-0 self-start sm:self-auto"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Try Another Option</span>
                    </button>
                  </div>
                ) : (
                  <div className="text-sepia-muted text-[11px] font-mono-archive">
                    Select an option above to validate your deduction instantly.
                  </div>
                )}

                {/* Hint Button & Revealed Hint */}
                {!isCorrect && (
                  <div className="w-full pt-1">
                    {!isHintRevealed ? (
                      <button
                        onClick={() => handleToggleHint(question.id)}
                        className="text-xs font-semibold text-gold-800 hover:text-gold-900 flex items-center gap-1.5 underline decoration-gold-400"
                      >
                        <Lightbulb className="w-3.5 h-3.5 text-gold-600" />
                        <span>Need a hint for Question {qIdx + 1}? (-2 pts)</span>
                      </button>
                    ) : (
                      <div className="bg-gold-50 p-3 rounded-xl border border-gold-300 text-gold-950 flex items-start gap-2 animate-in fade-in duration-200">
                        <Lightbulb className="w-4 h-4 text-gold-700 shrink-0 mt-0.5" />
                        <div>
                          <strong>Investigative Hint: </strong>
                          <span>{question.hint}</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

            </div>
          );
        })}
      </div>

      {/* 4. FINAL MYSTERY EXPLANATION & VICTORY CARD (Unlocked upon completing all questions) */}
      {(allQuestionsSolved || isCaseSolved) && (
        <div className="bg-gradient-to-br from-cream-100 via-warm-100 to-amber-50 rounded-3xl p-6 sm:p-8 border-2 border-gold-500 shadow-soft-xl space-y-6 relative overflow-hidden animate-in zoom-in-95 duration-300">
          
          <div className="absolute top-4 right-4 opacity-75 pointer-events-none">
            <ArchivalStamp text="CASE SOLVED" rotate={-8} />
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-gold-100 flex items-center justify-center shadow-lg border border-gold-300">
              <Trophy className="w-6 h-6 text-gold-200" />
            </div>
            <div>
              <span className="text-[10px] font-mono-archive font-bold text-gold-700 uppercase tracking-widest block">
                OFFICIAL CID MYSTERY VERDICT
              </span>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-burgundy-950">
                {investigation.solution?.verdictTitle || "Case Successfully Solved!"}
              </h3>
            </div>
          </div>

          {/* Solution Explanation Narrative */}
          <div className="bg-white/90 p-5 sm:p-6 rounded-2xl border border-warm-300 space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold-600" />
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-burgundy-900">
                How The Clues Solved The Mystery
              </h4>
            </div>
            <p className="font-serif text-sm sm:text-base text-sepia-body leading-relaxed">
              {investigation.solution?.summary}
            </p>
          </div>

          {/* Score & Badge Breakdown */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="bg-white p-3 rounded-xl border border-warm-200">
              <span className="text-[10px] font-mono-archive text-sepia-muted uppercase block">Questions Score</span>
              <strong className="text-base font-mono-archive font-bold text-emerald-800">+30 pts</strong>
            </div>

            <div className="bg-white p-3 rounded-xl border border-warm-200">
              <span className="text-[10px] font-mono-archive text-sepia-muted uppercase block">Hints Penalty</span>
              <strong className="text-base font-mono-archive font-bold text-gold-800">
                -{revealedHintQIds.length * 2} pts
              </strong>
            </div>

            <div className="bg-white p-3 rounded-xl border border-warm-200">
              <span className="text-[10px] font-mono-archive text-sepia-muted uppercase block">Clue Bonus</span>
              <strong className="text-base font-mono-archive font-bold text-burgundy-900">
                {collectedCount >= totalClues ? "+5 pts" : "+0 pts"}
              </strong>
            </div>

            <div className="bg-burgundy-900 text-gold-100 p-3 rounded-xl border border-gold-400/50">
              <span className="text-[10px] font-mono-archive text-gold-300 uppercase block">Total Case Score</span>
              <strong className="text-lg font-mono-archive font-bold text-gold-200">
                {finalScore ? finalScore.totalScore : liveScore + (collectedCount >= totalClues ? 5 : 0)} pts
              </strong>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-warm-300">
            <div className="flex items-center gap-2 text-xs font-mono-archive text-sepia-dark">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Badge Unlocked: <strong>{investigation.solution?.badgeEarned || "Detective Badge"}</strong></span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              {nextCase && (
                <Link
                  to={`/investigate/${nextCase.id}`}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-burgundy-800 hover:bg-burgundy-900 text-gold-100 font-display text-xs font-bold uppercase tracking-wider shadow-dossier transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Play Next Case</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold-300" />
                </Link>
              )}

              <Link
                to="/cases"
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-warm-200 hover:bg-warm-300 text-burgundy-950 font-display text-xs font-bold uppercase tracking-wider border border-warm-400 transition-all flex items-center justify-center gap-1.5"
              >
                <Compass className="w-3.5 h-3.5 text-burgundy-800" />
                <span>Case Explorer</span>
              </Link>
            </div>
          </div>

        </div>
      )}

    </section>
  );
};
