export const ACHIEVEMENTS_DATA = [
  {
    id: "first_investigation",
    title: "First Investigation",
    subtitle: "The Journey Begins",
    description: "Crack your very first mystery case in the DetectiveX archives.",
    icon: "Compass",
    rarity: "Common",
    pointsBonus: 100
  },
  {
    id: "master_observer",
    title: "Master Observer",
    subtitle: "No Detail Left Behind",
    description: "Examine 100% of all available physical and archival clues in a single case.",
    icon: "Eye",
    rarity: "Uncommon",
    pointsBonus: 150
  },
  {
    id: "clue_collector",
    title: "Clue Collector",
    subtitle: "Observation Master",
    description: "Examine and catalog 10 or more total clues across your investigative career.",
    icon: "Bookmark",
    rarity: "Rare",
    pointsBonus: 20
  },
  {
    id: "quick_thinker",
    title: "Quick Thinker",
    subtitle: "Rapid Deduction",
    description: "Solve an entire mystery case in under 5 minutes (300 seconds).",
    icon: "Clock",
    rarity: "Rare",
    pointsBonus: 25
  },
  {
    id: "hint_free_detective",
    title: "Hint-Free Detective",
    subtitle: "Pure Intuition",
    description: "Solve an investigation with zero hints used from the CID advisory panel.",
    icon: "ShieldCheck",
    rarity: "Epic",
    pointsBonus: 30
  },
  {
    id: "case_champion",
    title: "Case Champion",
    subtitle: "Distinguished Sleuth",
    description: "Successfully solve 5 different mystery cases in the national repository.",
    icon: "Trophy",
    rarity: "Epic",
    pointsBonus: 50
  },
  {
    id: "mystery_master",
    title: "Mystery Master",
    subtitle: "Supreme Inquisitor of Bharat",
    description: "Solve all 9 cases across all nine domains in the Case Explorer.",
    icon: "Crown",
    rarity: "Legendary",
    pointsBonus: 100
  }
];

export const DETECTIVE_LEVELS = [
  { level: 1, title: "Junior Munshi", minPoints: 0, minCases: 0, badgeColor: "sepia" },
  { level: 2, title: "Sub-Inspector", minPoints: 20, minCases: 1, badgeColor: "gold" },
  { level: 3, title: "Inspector", minPoints: 50, minCases: 2, badgeColor: "emerald" },
  { level: 4, title: "Senior Consulting Sleuth", minPoints: 100, minCases: 4, badgeColor: "burgundy" },
  { level: 5, title: "Chief CID Superintendent", minPoints: 160, minCases: 6, badgeColor: "gold-dark" },
  { level: 6, title: "Master Detective of the Republic", minPoints: 240, minCases: 9, badgeColor: "crown" }
];
