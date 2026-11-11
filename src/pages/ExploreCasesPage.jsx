import React, { useState, useMemo } from 'react';
import { CASES_DATA, CASE_CATEGORIES, DIFFICULTY_LEVELS } from '../data/casesData';
import { CaseCard } from '../components/cases/CaseCard';
import { ArchivalStamp, HeritageDivider, CornerOrnament } from '../components/common/IndianMotif';
import { 
  Search, 
  RotateCcw, 
  Compass, 
  Filter, 
  SlidersHorizontal,
  FolderOpen,
  Sparkles,
  Layers
} from 'lucide-react';

export const ExploreCasesPage = ({ bookmarkedIds = [], onToggleBookmark, completedCases = {} }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('All Cases');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All Difficulties');
  const [sortBy, setSortBy] = useState('default'); // 'default' | 'duration' | 'title' | 'rating'

  // Working filters & sorting
  const filteredCases = useMemo(() => {
    return CASES_DATA.filter((caseItem) => {
      // 1. Search by case title (and search query in keywords/domain)
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !query ||
        caseItem.title.toLowerCase().includes(query) ||
        caseItem.domain.toLowerCase().includes(query) ||
        caseItem.caseNumber.toLowerCase().includes(query) ||
        (caseItem.shortDescription && caseItem.shortDescription.toLowerCase().includes(query)) ||
        (caseItem.location && caseItem.location.toLowerCase().includes(query));

      // 2. Domain filter
      const matchesDomain = 
        selectedDomain === 'All Cases' || 
        caseItem.domain.toLowerCase() === selectedDomain.toLowerCase();

      // 3. Difficulty filter
      const matchesDifficulty = 
        selectedDifficulty === 'All Difficulties' || 
        caseItem.difficulty === selectedDifficulty;

      return matchesSearch && matchesDomain && matchesDifficulty;
    }).sort((a, b) => {
      if (sortBy === 'default') {
        // Sort by Case Number order (e.g. CASE #01 to CASE #09)
        return a.caseNumber.localeCompare(b.caseNumber);
      }
      if (sortBy === 'duration') {
        const getMins = str => parseInt(str) || 0;
        return getMins(a.duration) - getMins(b.duration);
      }
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      }
      if (sortBy === 'rating') {
        return (b.rating || 0) - (a.rating || 0);
      }
      return 0;
    });
  }, [searchQuery, selectedDomain, selectedDifficulty, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedDomain('All Cases');
    setSelectedDifficulty('All Difficulties');
    setSortBy('default');
  };

  const isFilterActive = searchQuery || selectedDomain !== 'All Cases' || selectedDifficulty !== 'All Difficulties' || sortBy !== 'default';

  return (
    <div className="py-12 bg-warm-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="flex justify-center">
            <ArchivalStamp text="CENTRAL INVESTIGATIVE REPOSITORY" variant="burgundy" />
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-burgundy-950">
            Case Explorer
          </h1>

          <p className="text-sm sm:text-base text-sepia-body leading-relaxed max-w-2xl mx-auto">
            Choose from <strong>9 distinct mystery domains</strong> spanning history, technology, education, environment, culinary arts, travel, fine arts, sports, and Indian heritage.
          </p>

          <HeritageDivider className="opacity-50" />
        </div>

        {/* Filter & Search Control Panel */}
        <div className="bg-white rounded-3xl p-6 border border-warm-300 shadow-soft mb-10 space-y-5 relative">
          <CornerOrnament className="absolute top-3 left-3 text-gold-500/20 hidden sm:block" />
          <CornerOrnament className="absolute top-3 right-3 text-gold-500/20 transform rotate-90 hidden sm:block" />

          {/* Top Row: Search Input + Selectors */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-center">
            
            {/* Search by Case Title */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-sepia-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by case title (e.g. Missing Diamond, Campus Code, Library...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-warm-300 text-xs sm:text-sm text-sepia-dark placeholder-sepia-faint focus:outline-none focus:ring-2 focus:ring-burgundy-700/30 focus:border-burgundy-700 bg-warm-50/60 font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-sepia-muted hover:text-burgundy-800 p-1"
                  title="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Difficulty Filter */}
            <div className="md:col-span-3">
              <div className="relative">
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-warm-300 text-xs sm:text-sm text-sepia-dark focus:outline-none focus:ring-2 focus:ring-burgundy-700/30 focus:border-burgundy-700 bg-warm-50/60 font-medium cursor-pointer"
                >
                  {DIFFICULTY_LEVELS.map(diff => (
                    <option key={diff} value={diff}>{diff}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Case Sorting */}
            <div className="md:col-span-3">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-warm-300 text-xs sm:text-sm text-sepia-dark focus:outline-none focus:ring-2 focus:ring-burgundy-700/30 focus:border-burgundy-700 bg-warm-50/60 font-medium cursor-pointer"
                >
                  <option value="default">Sort: Case Number (#01 - #09)</option>
                  <option value="duration">Sort: Duration (Quickest First)</option>
                  <option value="title">Sort: Case Title (A - Z)</option>
                  <option value="rating">Sort: Highest Rated</option>
                </select>
              </div>
            </div>

          </div>

          {/* Working Domain Filter Pills */}
          <div className="pt-3 border-t border-warm-200/80">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono-archive font-bold text-gold-700 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-gold-600" />
                <span>Filter by Case Domain (9 Domains):</span>
              </span>
              {selectedDomain !== 'All Cases' && (
                <span className="text-xs text-burgundy-800 font-semibold font-mono-archive">
                  Active: {selectedDomain}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {CASE_CATEGORIES.map((cat) => {
                const isSelected = selectedDomain.toLowerCase() === cat.toLowerCase();
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedDomain(cat)}
                    className={`text-xs px-3.5 py-1.5 rounded-full border whitespace-nowrap transition-all duration-200 font-medium flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-burgundy-800 text-gold-100 border-burgundy-900 shadow-sm font-semibold'
                        : 'bg-warm-100/80 hover:bg-warm-200 text-sepia-body border-warm-300'
                    }`}
                  >
                    <span>{cat}</span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Counter & Reset Active Filter Bar */}
        <div className="flex items-center justify-between text-xs text-sepia-muted mb-6 px-1">
          <div className="font-mono-archive">
            Displaying <strong className="text-burgundy-900 font-bold">{filteredCases.length}</strong> of {CASES_DATA.length} Mystery Cases
          </div>

          {isFilterActive && (
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1.5 text-burgundy-800 hover:text-burgundy-950 font-semibold transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          )}
        </div>

        {/* Case Explorer Grid (9 Cases) */}
        {filteredCases.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((caseItem) => (
              <CaseCard
                key={caseItem.id}
                caseItem={caseItem}
                isBookmarked={bookmarkedIds.includes(caseItem.id)}
                onToggleBookmark={onToggleBookmark}
                isCompleted={Boolean(completedCases[caseItem.id])}
                completedScore={completedCases[caseItem.id]?.score}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="bg-white rounded-3xl p-12 text-center border border-warm-300 max-w-lg mx-auto space-y-4 shadow-soft">
            <div className="w-16 h-16 rounded-full bg-warm-100 mx-auto flex items-center justify-center text-burgundy-800 border border-warm-300">
              <Search className="w-7 h-7" />
            </div>
            <h3 className="font-serif font-bold text-xl text-burgundy-950">
              No Cases Match Your Filter
            </h3>
            <p className="text-xs text-sepia-body leading-relaxed">
              No investigation matches "{searchQuery || selectedDomain}". Try clearing your search term or selecting "All Cases".
            </p>
            <button
              onClick={handleResetFilters}
              className="px-5 py-2.5 rounded-xl bg-burgundy-800 text-gold-100 text-xs font-semibold uppercase tracking-wider hover:bg-burgundy-900 transition-colors shadow-sm"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
