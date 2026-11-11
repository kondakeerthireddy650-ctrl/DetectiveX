import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArchivalStamp, WaxSeal, CornerOrnament, HeritageDivider } from '../components/common/IndianMotif';
import { ACHIEVEMENTS_DATA } from '../data/achievementsData';
import { getDetectiveLevelInfo } from '../utils/progressManager';
import { 
  ShieldCheck, 
  Award, 
  User, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Edit3, 
  Save, 
  Compass, 
  Crown, 
  Search, 
  Scroll,
  TrendingUp,
  FileText,
  Clock,
  Lock,
  Sparkles,
  Trophy,
  Eye,
  Bookmark,
  Layers,
  ArrowRight
} from 'lucide-react';

export const ProfilePage = ({ 
  userProfile, 
  onUpdateProfile,
  completedCases = {},
  unlockedAchievements = {}
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(userProfile.detectiveName || "Inspector Kabir Sen");
  const [bio, setBio] = useState(userProfile.bio || "Specializing in colonial period heists, locked room mysteries, and royal archives across Bengal and Rajasthan.");
  const [department, setDepartment] = useState(userProfile.department || "Special Heritage & Cryptic Crimes Branch");
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Compute actual dynamic gameplay statistics
  const completedList = Object.values(completedCases);
  const totalCompletedCount = completedList.length;
  const totalCasesInGame = 9;
  const remainingCasesCount = Math.max(0, totalCasesInGame - totalCompletedCount);

  // Total points dynamically summed from actual case completions
  const totalPoints = completedList.reduce((acc, curr) => acc + (curr.score || 0), 0);

  // Total clues examined across all cases
  const totalCluesExamined = completedList.reduce((acc, curr) => acc + (curr.cluesExaminedCount || 0), 0);

  // Hint-free investigations count
  const hintFreeCount = completedList.filter(c => (c.hintsUsed || 0) === 0).length;

  // Dynamic Detective Level
  const levelInfo = getDetectiveLevelInfo(totalPoints, totalCompletedCount);

  const handleSave = (e) => {
    e.preventDefault();
    onUpdateProfile && onUpdateProfile({
      ...userProfile,
      detectiveName: name,
      bio: bio,
      department: department
    });
    setIsEditing(false);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const getAchievementIcon = (iconName, isUnlocked) => {
    const colorClass = isUnlocked ? "text-gold-600" : "text-sepia-muted";
    switch (iconName) {
      case 'Crown': return <Crown className={`w-5 h-5 ${colorClass}`} />;
      case 'Search': return <Search className={`w-5 h-5 ${colorClass}`} />;
      case 'Compass': return <Compass className={`w-5 h-5 ${colorClass}`} />;
      case 'Eye': return <Eye className={`w-5 h-5 ${colorClass}`} />;
      case 'Bookmark': return <Bookmark className={`w-5 h-5 ${colorClass}`} />;
      case 'Clock': return <Clock className={`w-5 h-5 ${colorClass}`} />;
      case 'Trophy': return <Trophy className={`w-5 h-5 ${colorClass}`} />;
      case 'ShieldCheck': return <ShieldCheck className={`w-5 h-5 ${colorClass}`} />;
      default: return <Award className={`w-5 h-5 ${colorClass}`} />;
    }
  };

  return (
    <div className="py-12 bg-warm-50 min-h-screen text-sepia-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Banner */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="flex justify-center">
            <ArchivalStamp text="OFFICIAL SERVICE RECORD & REPUTATION" variant="burgundy" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-burgundy-950">
            Detective Profile
          </h1>
          <p className="text-xs sm:text-sm text-sepia-body leading-relaxed">
            Real-time investigative clearance record, achievements unlocked through active deduction, and CID honors.
          </p>
        </div>

        {saveSuccess && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-950 text-xs sm:text-sm flex items-center gap-2.5 shadow-soft">
            <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
            <span>Detective credentials updated successfully in LocalStorage!</span>
          </div>
        )}

        {/* Top Grid: ID Card & Level Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* 1. Official Identity Badge Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border-2 border-warm-300 shadow-soft-xl relative overflow-hidden">
            <CornerOrnament className="absolute top-3 left-3 text-gold-500/20" />
            <CornerOrnament className="absolute top-3 right-3 text-gold-500/20 transform rotate-90" />

            {/* ID Header */}
            <div className="text-center pb-4 border-b border-warm-200">
              <span className="text-[10px] font-mono-archive uppercase tracking-widest text-gold-700 font-bold block">
                BHARAT CID · SPECIAL INVESTIGATIONS DIVISION
              </span>
              <span className="text-xs font-mono-archive text-sepia-muted">
                REGISTRATION ID: {userProfile.badgeNumber || "DX-CID-7492"}
              </span>
            </div>

            {/* Photo & Wax Seal */}
            <div className="my-6 flex flex-col items-center">
              <div className="relative">
                <div className="w-28 h-28 rounded-2xl overflow-hidden border-2 border-gold-400 shadow-md">
                  <img
                    src={userProfile.avatarUrl || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"}
                    alt={userProfile.detectiveName}
                    className="w-full h-full object-cover filter sepia-[0.15]"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3">
                  <WaxSeal size="sm" text="CID" />
                </div>
              </div>

              <h3 className="font-serif font-bold text-2xl text-burgundy-950 mt-4 text-center">
                {userProfile.detectiveName}
              </h3>

              {/* Detective Level Badge */}
              <div className="mt-1 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-burgundy-900 text-xs font-mono-archive font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-600" />
                <span>Level {levelInfo.level}: {levelInfo.title}</span>
              </div>

              <span className="text-[11px] text-sepia-muted mt-1 text-center">
                {userProfile.department}
              </span>
            </div>

            {/* Editable or Static Details */}
            {isEditing ? (
              <form onSubmit={handleSave} className="space-y-3 pt-3 border-t border-warm-200">
                <div>
                  <label className="text-[10px] font-mono-archive font-bold text-sepia-body uppercase block mb-1">
                    Detective Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 text-xs rounded-xl border border-warm-300 bg-warm-50 text-sepia-dark font-medium"
                    required
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono-archive font-bold text-sepia-body uppercase block mb-1">
                    Department / Division
                  </label>
                  <input
                    type="text"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full p-2 text-xs rounded-xl border border-warm-300 bg-warm-50 text-sepia-dark font-medium"
                    required
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono-archive font-bold text-sepia-body uppercase block mb-1">
                    Investigative Bio
                  </label>
                  <textarea
                    rows={3}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="w-full p-2 text-xs rounded-xl border border-warm-300 bg-warm-50 text-sepia-dark font-medium"
                  />
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="w-1/2 py-2 text-xs rounded-xl border border-warm-300 text-sepia-muted"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-1/2 py-2 text-xs rounded-xl bg-burgundy-800 text-gold-100 font-bold uppercase tracking-wider"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-4 pt-3 border-t border-warm-200 text-xs">
                <p className="text-sepia-body text-center italic font-serif leading-relaxed px-2">
                  "{userProfile.bio}"
                </p>

                <div className="bg-warm-50 p-3.5 rounded-2xl border border-warm-200 space-y-2 text-[11px] text-sepia-muted">
                  <div className="flex justify-between">
                    <span>Rank Tier:</span>
                    <strong className="text-burgundy-900 font-mono-archive">{levelInfo.title}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Lifetime Score:</span>
                    <strong className="text-gold-700 font-mono-archive">{totalPoints} PTS</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Cases Cleared:</span>
                    <strong className="text-emerald-800 font-mono-archive">{totalCompletedCount} of {totalCasesInGame} Files</strong>
                  </div>
                </div>

                <button
                  onClick={() => setIsEditing(true)}
                  className="w-full py-2.5 rounded-xl border border-warm-300 hover:border-burgundy-800 text-sepia-dark hover:text-burgundy-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit Profile Details</span>
                </button>
              </div>
            )}

          </div>

          {/* 2. Real-Time Dynamic Performance Dashboard */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Real Stats Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-warm-300 shadow-soft space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-warm-200">
                <div>
                  <span className="text-[10px] font-mono-archive uppercase tracking-widest text-gold-700 font-bold block">
                    INVESTIGATIVE METRICS (CALCULATED LIVE)
                  </span>
                  <h3 className="font-serif font-bold text-lg text-burgundy-950">
                    Live Performance Portfolio
                  </h3>
                </div>
                <ArchivalStamp text="AUDITED REAL-TIME" variant="burgundy" />
              </div>

              {/* 4 Metric Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                
                {/* Total Points */}
                <div className="bg-warm-50 p-4 rounded-2xl border border-warm-200">
                  <span className="text-2xl sm:text-3xl font-display font-extrabold text-burgundy-900 block">
                    {totalPoints}
                  </span>
                  <span className="text-[10px] font-mono-archive uppercase text-gold-700 font-bold block mt-1">
                    Total Points
                  </span>
                </div>

                {/* Completed Cases */}
                <div className="bg-warm-50 p-4 rounded-2xl border border-warm-200">
                  <span className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-800 block">
                    {totalCompletedCount}
                  </span>
                  <span className="text-[10px] font-mono-archive uppercase text-sepia-muted font-bold block mt-1">
                    Completed Cases
                  </span>
                </div>

                {/* Remaining Cases */}
                <div className="bg-warm-50 p-4 rounded-2xl border border-warm-200">
                  <span className="text-2xl sm:text-3xl font-display font-extrabold text-sepia-dark block">
                    {remainingCasesCount}
                  </span>
                  <span className="text-[10px] font-mono-archive uppercase text-sepia-muted font-bold block mt-1">
                    Remaining Cases
                  </span>
                </div>

                {/* Clues Examined */}
                <div className="bg-warm-50 p-4 rounded-2xl border border-warm-200">
                  <span className="text-2xl sm:text-3xl font-display font-extrabold text-gold-700 block">
                    {totalCluesExamined}
                  </span>
                  <span className="text-[10px] font-mono-archive uppercase text-sepia-muted font-bold block mt-1">
                    Clues Analyzed
                  </span>
                </div>

              </div>

              {/* Rank Progression Bar */}
              <div className="bg-cream-50 p-4 rounded-2xl border border-warm-200 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-sepia-dark font-medium flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-burgundy-800" />
                    <span>
                      Rank: <strong>Level {levelInfo.level} ({levelInfo.title})</strong>
                    </span>
                  </span>
                  {levelInfo.nextLevel ? (
                    <span className="text-gold-700 font-mono-archive font-bold text-[11px]">
                      {levelInfo.pointsToNext} PTS to {levelInfo.nextLevel}
                    </span>
                  ) : (
                    <span className="text-emerald-800 font-mono-archive font-bold text-[11px]">
                      Max Level Reached!
                    </span>
                  )}
                </div>

                <div className="w-full h-2.5 rounded-full bg-warm-200 overflow-hidden border border-warm-300">
                  <div 
                    className="h-full bg-gradient-to-r from-burgundy-800 to-gold-500 rounded-full transition-all duration-500"
                    style={{ width: `${levelInfo.progressToNextPercent}%` }}
                  />
                </div>
              </div>

            </div>

            {/* Quick CTA to Case Explorer if cases remain */}
            {remainingCasesCount > 0 && (
              <div className="bg-gradient-to-r from-cream-100 via-warm-100 to-cream-100 p-5 rounded-2xl border border-warm-300 shadow-soft flex items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <h4 className="font-serif font-bold text-sm text-burgundy-950">
                    {remainingCasesCount} Unsolved Mysteries Awaiting You
                  </h4>
                  <p className="text-xs text-sepia-body">
                    Crack more files to unlock the <em>Case Champion</em> and <em>Mystery Master</em> titles!
                  </p>
                </div>
                <Link
                  to="/cases"
                  className="px-4 py-2 rounded-xl bg-burgundy-800 text-gold-100 text-xs font-display uppercase tracking-wider font-bold hover:bg-burgundy-900 transition-colors whitespace-nowrap"
                >
                  Explore Next Mystery →
                </Link>
              </div>
            )}

          </div>

        </div>

        {/* 5. ACHIEVEMENTS SECTION (Unlocked based on actual gameplay!) */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-300 shadow-soft space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-warm-200">
            <div>
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-gold-600" />
                <h3 className="font-serif font-bold text-xl text-burgundy-950">
                  Official Detective Achievements (7 Honors)
                </h3>
              </div>
              <p className="text-xs text-sepia-muted mt-0.5">
                Medals unlocked automatically based on your deductive milestones and investigation rigor.
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono-archive text-xs">
              <span className="text-sepia-muted">Unlocked:</span>
              <strong className="text-burgundy-900 font-bold bg-gold-100 px-3 py-1 rounded-full border border-gold-300">
                {Object.keys(unlockedAchievements).length} of {ACHIEVEMENTS_DATA.length} Unlocked
              </strong>
            </div>
          </div>

          {/* 7 Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {ACHIEVEMENTS_DATA.map((ach) => {
              const isUnlocked = Boolean(unlockedAchievements[ach.id]);
              const unlockInfo = unlockedAchievements[ach.id];

              return (
                <div 
                  key={ach.id}
                  className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between space-y-3 ${
                    isUnlocked
                      ? 'bg-gradient-to-b from-warm-50 to-cream-50 border-gold-400 shadow-soft'
                      : 'bg-warm-50/40 border-warm-200 opacity-60'
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className={`p-2.5 rounded-xl border shadow-sm ${
                        isUnlocked ? 'bg-gold-100 border-gold-300' : 'bg-warm-100 border-warm-200'
                      }`}>
                        {getAchievementIcon(ach.icon, isUnlocked)}
                      </div>

                      <div className="flex items-center gap-1.5">
                        {isUnlocked ? (
                          <span className="text-[10px] font-mono-archive font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            ✓ Unlocked
                          </span>
                        ) : (
                          <span className="text-[10px] font-mono-archive font-semibold text-sepia-muted bg-warm-100 px-2 py-0.5 rounded flex items-center gap-1">
                            <Lock className="w-3 h-3" /> Locked
                          </span>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-serif font-bold text-base text-burgundy-950">
                        {ach.title}
                      </h4>
                      <span className="text-[10px] font-mono-archive font-bold text-gold-700 uppercase tracking-wider block mb-1">
                        {ach.subtitle}
                      </span>
                      <p className="text-xs text-sepia-body leading-relaxed">
                        {ach.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-warm-200/80 flex items-center justify-between text-[11px] font-mono-archive">
                    <span className="text-gold-700 font-semibold">+{ach.pointsBonus} PTS</span>
                    {isUnlocked && unlockInfo?.unlockedAt && (
                      <span className="text-sepia-muted">{unlockInfo.unlockedAt}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 6. RECENT INVESTIGATION HISTORY */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-300 shadow-soft space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-warm-200">
            <div>
              <div className="flex items-center gap-2">
                <Scroll className="w-5 h-5 text-burgundy-800" />
                <h3 className="font-serif font-bold text-xl text-burgundy-950">
                  Recent Investigation History
                </h3>
              </div>
              <p className="text-xs text-sepia-muted mt-0.5">
                Audit log of all solved cases, timestamps, hints used, and awarded scores.
              </p>
            </div>
            <span className="text-xs font-mono-archive text-sepia-muted">
              {completedList.length} Archived Logs
            </span>
          </div>

          {completedList.length > 0 ? (
            <div className="space-y-3">
              {completedList.map((item) => (
                <div 
                  key={item.caseId}
                  className="p-4 rounded-2xl bg-warm-50/70 border border-warm-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-gold-400 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono-archive font-bold bg-burgundy-900 text-gold-200">
                        {item.caseNumber}
                      </span>
                      <span className="text-xs font-mono-archive font-bold text-gold-700 uppercase">
                        {item.domain}
                      </span>
                    </div>

                    <h4 className="font-serif font-bold text-base text-burgundy-950">
                      {item.title}
                    </h4>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-sepia-muted">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-gold-600" /> {item.timeTakenFormatted || "2m 15s"}
                      </span>
                      <span>•</span>
                      <span>Hints: {item.hintsUsed || 0}/3</span>
                      <span>•</span>
                      <span>Date: {item.completedAt}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                    <div className="text-right">
                      <span className="text-lg font-display font-black text-burgundy-900 block leading-none">
                        +{item.score}
                      </span>
                      <span className="text-[10px] font-mono-archive text-gold-700 font-bold uppercase">
                        PTS EARNED
                      </span>
                    </div>

                    <Link
                      to={`/investigate/${item.caseId}`}
                      className="px-3.5 py-2 rounded-xl bg-white hover:bg-warm-100 text-burgundy-900 border border-warm-300 text-xs font-semibold shadow-sm transition-colors"
                    >
                      Review Case →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 px-4 bg-warm-50/50 rounded-2xl border border-warm-200 space-y-3">
              <Scroll className="w-12 h-12 text-warm-400 mx-auto" />
              <h4 className="font-serif font-bold text-lg text-burgundy-950">
                No Mysteries Cleared Yet
              </h4>
              <p className="text-xs text-sepia-body max-w-sm mx-auto">
                Step into the Case Explorer and crack your first investigation to log your clearance scores and achievements here!
              </p>
              <Link
                to="/cases"
                className="inline-block px-5 py-2.5 rounded-xl bg-burgundy-800 text-gold-100 font-display uppercase tracking-wider text-xs font-bold hover:bg-burgundy-900 transition-colors shadow-sm"
              >
                Browse All 9 Cases
              </Link>
            </div>
          )}
        </section>

      </div>
    </div>
  );
};
