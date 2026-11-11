import { ACHIEVEMENTS_DATA, DETECTIVE_LEVELS } from '../data/achievementsData.js';

/**
 * Calculates score for an investigation attempt based on user performance:
 * - Correct answer: 10 points
 * - Using a hint: Deduct 2 points
 * - Completing all questions: Completion badge
 */
export function calculateCaseScore({
  questionsCount = 3,
  correctCount = 3,
  hintsUsed = 0,
  allCluesExamined = true,
  timeTakenSeconds = 240
}) {
  const questionsScore = correctCount * 10;
  const hintsPenalty = hintsUsed * 2;
  const totalScore = Math.max(0, questionsScore - hintsPenalty);

  return {
    questionsScore,
    hintsPenalty,
    hintFreeBonus: 0,
    objectivesBonus: 0,
    speedBonus: 0,
    totalScore,
    badgeEarned: "Official Detective Badge"
  };
}

/**
 * Calculates detective rank and level based on real total points and solved cases.
 */
export function getDetectiveLevelInfo(totalPoints = 0, completedCasesCount = 0) {
  let currentLevel = DETECTIVE_LEVELS[0];

  for (let i = DETECTIVE_LEVELS.length - 1; i >= 0; i--) {
    const lvl = DETECTIVE_LEVELS[i];
    if (totalPoints >= lvl.minPoints && completedCasesCount >= lvl.minCases) {
      currentLevel = lvl;
      break;
    }
  }

  const nextLevel = DETECTIVE_LEVELS.find(l => l.level === currentLevel.level + 1) || null;
  let progressToNextPercent = 100;
  let pointsToNext = 0;

  if (nextLevel) {
    const range = nextLevel.minPoints - currentLevel.minPoints;
    const gained = totalPoints - currentLevel.minPoints;
    progressToNextPercent = Math.min(100, Math.max(0, Math.round((gained / range) * 100)));
    pointsToNext = Math.max(0, nextLevel.minPoints - totalPoints);
  }

  return {
    level: currentLevel.level,
    title: currentLevel.title,
    badgeColor: currentLevel.badgeColor,
    currentPoints: totalPoints,
    nextLevel: nextLevel ? nextLevel.title : null,
    nextLevelNum: nextLevel ? nextLevel.level : null,
    pointsToNext,
    progressToNextPercent
  };
}

/**
 * Evaluates game progress against the 7 achievements and returns newly unlocked ones.
 */
export function evaluateAchievements(currentUnlockedMap = {}, completedCasesList = [], totalCluesExaminedCount = 0) {
  const newlyUnlocked = [];
  const updatedMap = { ...currentUnlockedMap };

  const totalSolved = completedCasesList.length;

  ACHIEVEMENTS_DATA.forEach(ach => {
    // If already unlocked, skip
    if (updatedMap[ach.id]) return;

    let unlocked = false;

    switch (ach.id) {
      case 'first_investigation':
        unlocked = totalSolved >= 1;
        break;

      case 'master_observer':
        // Examined 100% of clues in at least one case
        unlocked = completedCasesList.some(c => c.cluesExaminedCount >= c.totalClues && c.totalClues > 0);
        break;

      case 'clue_collector':
        // Examined 10+ clues total
        unlocked = totalCluesExaminedCount >= 10;
        break;

      case 'quick_thinker':
        // Solved in <= 300 seconds (5 mins)
        unlocked = completedCasesList.some(c => (c.timeTakenSeconds || 999) <= 300);
        break;

      case 'hint_free_detective':
        // Solved with 0 hints
        unlocked = completedCasesList.some(c => c.hintsUsed === 0);
        break;

      case 'case_champion':
        // Solved 5 cases
        unlocked = totalSolved >= 5;
        break;

      case 'mystery_master':
        // Solved all 9 cases
        unlocked = totalSolved >= 9;
        break;

      default:
        break;
    }

    if (unlocked) {
      const unlockDate = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      updatedMap[ach.id] = {
        id: ach.id,
        title: ach.title,
        unlockedAt: unlockDate
      };
      newlyUnlocked.push(ach);
    }
  });

  return {
    newlyUnlocked,
    updatedMap
  };
}

/**
 * Format elapsed seconds into human-readable minutes and seconds (e.g. "2m 15s")
 */
export function formatTimeSeconds(seconds = 0) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  if (mins === 0) return `${secs}s`;
  return `${mins}m ${secs < 10 ? '0' : ''}${secs}s`;
}
