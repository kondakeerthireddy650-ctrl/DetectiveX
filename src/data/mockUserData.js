export const INITIAL_USER_PROFILE = {
  detectiveName: "Inspector Kabir Sen",
  badgeNumber: "DX-CID-7492",
  department: "Special Heritage & Cryptic Crimes Branch",
  rankTitle: "Senior Consulting Sleuth",
  joinedDate: "October 2024",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  bio: "Specializing in colonial period heists, locked room mysteries, and royal archives across Bengal and Rajasthan. Known for an analytical mind and reverence for forgotten Indian folklore.",
  stats: {
    casesSolved: 14,
    casesInProgress: 2,
    accuracyRate: "96.4%",
    cluesAnalyzed: 148,
    reputationPoints: 3450,
    rankTier: "Special Investigator Grade I"
  },
  activeCaseIds: ["case-01", "case-02"],
  savedCaseIds: ["case-03", "case-04"],
  badges: [
    {
      id: "b1",
      title: "Royal Archivist",
      description: "Solved 5 palace intrigue mysteries across Rajasthan and Hyderabad",
      dateEarned: "Nov 2024",
      icon: "Crown"
    },
    {
      id: "b2",
      title: "Forensic Pioneer",
      description: "Identified all physical evidence without requesting hints",
      dateEarned: "Dec 2024",
      icon: "Search"
    },
    {
      id: "b3",
      title: "Kolkata Nightcrawler",
      description: "Successfully solved the Marble Palace locked room inquiry",
      dateEarned: "Jan 2025",
      icon: "Compass"
    },
    {
      id: "b4",
      title: "Varanasi Cryptographer",
      description: "Deciphered 3 ancient Sanskrit parchment cyphers",
      dateEarned: "Feb 2025",
      icon: "Scroll"
    }
  ],
  investigationNotes: [
    {
      id: "n-1",
      caseId: "case-01",
      caseTitle: "The Vanishing of the Tagore Diamond",
      date: "Nov 08, 2024",
      note: "The wax cast found near the side gate indicates the key was impressed hours before the banquet. Need to verify who had custody of the master key between 4 PM and 7 PM."
    },
    {
      id: "n-2",
      caseId: "case-02",
      caseTitle: "The Phantom of Jal Mahal",
      date: "Nov 09, 2024",
      note: "Water sluice telemetry was altered. The court physician's journal notes an apothecary order from Ajmer. Cross-reference with carriage toll tax records."
    }
  ]
};

export const PLATFORM_STATS = [
  { label: "Archived Mysteries", value: "48+", suffix: "Cases", description: "Curated Indian mysteries spanning 6 historical eras" },
  { label: "Active Sleuths", value: "14.2k", suffix: "Detectives", description: "Enthusiasts unraveling clues across 28 Indian states" },
  { label: "Evidence Clearance", value: "93.8%", suffix: "Accuracy", description: "Rigorous forensic deductions backed by authentic lore" },
  { label: "Historic Domains", value: "5", suffix: "Specialties", description: "From Royal Intrigues to Modern Cyber-Espionage" }
];
