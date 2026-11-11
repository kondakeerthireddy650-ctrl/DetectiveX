import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CASES_DATA } from '../data/casesData';
import { DifficultyBadge } from '../components/common/Badge';
import { ArchivalStamp, WaxSeal, CornerOrnament, HeritageDivider } from '../components/common/IndianMotif';
import { 
  MapPin, 
  Clock, 
  Users, 
  FileText, 
  Bookmark, 
  BookmarkCheck, 
  ArrowLeft, 
  ShieldCheck, 
  Target, 
  Sparkles, 
  BookOpen, 
  Info, 
  Calendar, 
  AlertCircle, 
  Play, 
  CheckCircle2, 
  FolderLock,
  Search,
  Compass
} from 'lucide-react';

export const CaseDetailPage = ({ 
  bookmarkedIds = [], 
  onToggleBookmark, 
  activeCaseIds = [], 
  onToggleActiveCase,
  completedCases = {}
}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const caseItem = CASES_DATA.find(c => c.id === id) || CASES_DATA[0];

  const isBookmarked = bookmarkedIds.includes(caseItem.id);
  const isActive = activeCaseIds.includes(caseItem.id);
  const isSolved = Boolean(completedCases[caseItem.id]);
  const completedRecord = completedCases[caseItem.id];

  const handleStartCase = () => {
    onToggleActiveCase && onToggleActiveCase(caseItem.id);
    navigate(`/investigate/${caseItem.id}`);
  };

  const {
    caseNumber,
    domain,
    title,
    subtitle,
    storyIntroduction,
    caseBackground,
    investigationObjective,
    importantInformation,
    difficulty,
    duration,
    illustration,
    heroImage,
    location,
    period
  } = caseItem;

  const displayImage = illustration || heroImage;

  return (
    <div className="py-10 bg-warm-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between mb-6">
          <Link
            to="/cases"
            className="inline-flex items-center gap-2 text-xs font-semibold text-burgundy-800 hover:text-burgundy-950 uppercase tracking-wider font-mono-archive group"
          >
            <ArrowLeft className="w-4 h-4 text-gold-600 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Case Explorer</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono-archive text-sepia-muted hidden sm:inline">OFFICIAL DOSSIER:</span>
            <ArchivalStamp text={caseNumber} variant="burgundy" />
          </div>
        </div>

        {/* Main Dossier Card Container */}
        <article className="bg-white rounded-3xl border border-warm-300 shadow-soft-xl overflow-hidden relative">
          
          {/* Top Header Section */}
          <div className="bg-gradient-to-r from-warm-100 via-cream-100 to-warm-100 p-6 sm:p-10 border-b border-warm-300 relative">
            <CornerOrnament className="absolute top-4 left-4 text-gold-500/20 hidden sm:block" />
            <CornerOrnament className="absolute top-4 right-4 text-gold-500/20 transform rotate-90 hidden sm:block" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Case Meta & Title */}
              <div className="md:col-span-8 space-y-4">
                
                {/* Domain & Case Number */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md text-xs font-mono-archive font-bold bg-gold-400 text-burgundy-950 shadow-sm">
                    {caseNumber}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md text-xs font-mono-archive font-bold bg-burgundy-900 text-gold-200 uppercase tracking-wider">
                    {domain}
                  </span>
                  <DifficultyBadge difficulty={difficulty} />
                  {isSolved && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono-archive font-bold bg-emerald-100 text-emerald-900 border border-emerald-300">
                      ✓ SOLVED ({completedRecord?.score || 30} PTS)
                    </span>
                  )}
                  <span className="text-xs font-mono-archive text-sepia-muted flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gold-600" /> {duration}
                  </span>
                </div>

                {/* Main Case Title */}
                <h1 className="text-3xl sm:text-4xl font-serif font-bold text-burgundy-950 leading-tight">
                  {title}
                </h1>

                {/* Catchy Subtitle */}
                <p className="font-serif italic text-base sm:text-lg text-burgundy-800">
                  {subtitle}
                </p>

                {/* Location & Setting */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-sepia-muted pt-1">
                  <span className="flex items-center gap-1 font-medium text-sepia-dark">
                    <MapPin className="w-3.5 h-3.5 text-gold-600" /> {location}
                  </span>
                  <span>•</span>
                  <span className="font-mono-archive">{period}</span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1 text-emerald-800 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                    {isActive ? "Under Active Inquiry" : "Ready to Investigate"}
                  </span>
                </div>

              </div>

              {/* Right Column: Illustration & Quick Actions */}
              <div className="md:col-span-4 flex flex-col items-center sm:items-end gap-4">
                <div className="w-full max-w-[260px] aspect-[4/3] rounded-2xl overflow-hidden border-2 border-warm-300 shadow-md relative group">
                  <img
                    src={displayImage}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sepia-dark/50 to-transparent pointer-events-none" />
                </div>

                {/* Bookmark Toggle */}
                <button
                  onClick={() => onToggleBookmark && onToggleBookmark(caseItem.id)}
                  className={`w-full max-w-[260px] py-2 px-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-semibold transition-all ${
                    isBookmarked
                      ? 'bg-gold-50 border-gold-300 text-burgundy-900 shadow-sm'
                      : 'bg-white border-warm-300 text-sepia-body hover:bg-warm-100'
                  }`}
                  title={isBookmarked ? "Saved in investigations" : "Save this case"}
                >
                  {isBookmarked ? <BookmarkCheck className="w-4 h-4 text-gold-600 fill-gold-500" /> : <Bookmark className="w-4 h-4" />}
                  <span>{isBookmarked ? 'Bookmarked in Dossier' : 'Save to My Cases'}</span>
                </button>
              </div>

            </div>

          </div>

          {/* Dossier Body Content */}
          <div className="p-6 sm:p-10 space-y-10">
            
            {/* 1. STORY INTRODUCTION */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 border-b border-warm-200 pb-2">
                <BookOpen className="w-4 h-4 text-burgundy-800" />
                <h2 className="font-display font-bold text-xs uppercase tracking-widest text-burgundy-900">
                  Story Introduction
                </h2>
              </div>
              <div className="bg-warm-50/80 p-5 sm:p-6 rounded-2xl border border-warm-200 leading-relaxed text-sm text-sepia-body font-serif">
                <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-burgundy-900 first-letter:mr-2 first-letter:float-left first-letter:font-serif">
                  {storyIntroduction}
                </p>
              </div>
            </section>

            {/* 2. CASE BACKGROUND */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 border-b border-warm-200 pb-2">
                <Info className="w-4 h-4 text-gold-700" />
                <h2 className="font-display font-bold text-xs uppercase tracking-widest text-burgundy-900">
                  Case Background & Context
                </h2>
              </div>
              <div className="p-5 sm:p-6 rounded-2xl bg-cream-50 border border-warm-200 space-y-2">
                <p className="text-xs sm:text-sm text-sepia-body leading-relaxed">
                  {caseBackground}
                </p>
              </div>
            </section>

            {/* 3. INVESTIGATION OBJECTIVE */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 border-b border-warm-200 pb-2">
                <Target className="w-4 h-4 text-burgundy-800" />
                <h2 className="font-display font-bold text-xs uppercase tracking-widest text-burgundy-900">
                  Investigation Objective
                </h2>
              </div>
              <div className="p-5 rounded-2xl bg-burgundy-50/70 border border-burgundy-200/80 flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-burgundy-800 text-gold-200 shrink-0 shadow-sm mt-0.5">
                  <Target className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-sm text-burgundy-950">
                    Primary Sleuth Mission
                  </h3>
                  <p className="text-xs sm:text-sm text-sepia-body leading-relaxed">
                    {investigationObjective}
                  </p>
                </div>
              </div>
            </section>

            {/* 4. IMPORTANT INFORMATION */}
            {importantInformation && (
              <section className="space-y-6">
                <div className="flex items-center justify-between border-b border-warm-200 pb-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-gold-600" />
                    <h2 className="font-display font-bold text-xs uppercase tracking-widest text-burgundy-900">
                      Important Information & Key Leads
                    </h2>
                  </div>
                  <ArchivalStamp text="CONFIDENTIAL RECORD" variant="burgundy" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Key Clues Identified */}
                  <div className="bg-warm-50/70 rounded-2xl p-5 border border-warm-200 space-y-3">
                    <h4 className="font-serif font-bold text-sm text-burgundy-950 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-burgundy-700" />
                      <span>Physical Clues Recorded ({importantInformation.keyClues?.length || 3})</span>
                    </h4>
                    <div className="space-y-2.5">
                      {importantInformation.keyClues?.map((clue, idx) => (
                        <div key={clue.id || idx} className="bg-white p-3 rounded-xl border border-warm-200 text-xs space-y-1 shadow-sm">
                          <span className="font-bold text-burgundy-900 block font-mono-archive text-[11px]">
                            • {clue.title}
                          </span>
                          <p className="text-[11px] text-sepia-muted leading-relaxed">
                            {clue.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Persons Involved / Suspects */}
                  <div className="bg-warm-50/70 rounded-2xl p-5 border border-warm-200 space-y-3">
                    <h4 className="font-serif font-bold text-sm text-burgundy-950 flex items-center gap-2">
                      <Users className="w-4 h-4 text-amber-700" />
                      <span>Persons Involved & Statements ({importantInformation.personsInvolved?.length || 3})</span>
                    </h4>
                    <div className="space-y-2.5">
                      {importantInformation.personsInvolved?.map((person, idx) => (
                        <div key={idx} className="bg-white p-3 rounded-xl border border-warm-200 text-xs space-y-1 shadow-sm">
                          <div className="flex items-center justify-between">
                            <strong className="text-sepia-dark font-serif text-[11px]">{person.name}</strong>
                            <span className="text-[10px] font-mono-archive text-gold-700 font-bold">{person.role}</span>
                          </div>
                          <p className="text-[11px] text-sepia-muted italic leading-relaxed">
                            "{person.statement}"
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Timeline & Guidelines Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Incident Timeline */}
                  {importantInformation.timeline && (
                    <div className="bg-white rounded-2xl p-5 border border-warm-200 space-y-3 shadow-soft">
                      <h4 className="font-serif font-bold text-sm text-burgundy-950 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gold-700" />
                        <span>Incident Timeline</span>
                      </h4>
                      <div className="space-y-2">
                        {importantInformation.timeline.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs">
                            <span className="font-mono-archive font-bold text-[10px] text-gold-800 bg-gold-50 px-2 py-0.5 rounded border border-gold-200 shrink-0">
                              {item.time}
                            </span>
                            <span className="text-sepia-body text-[11px] leading-tight mt-0.5">
                              {item.event}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Investigation Guidelines */}
                  {importantInformation.guidelines && (
                    <div className="bg-white rounded-2xl p-5 border border-warm-200 space-y-3 shadow-soft">
                      <h4 className="font-serif font-bold text-sm text-burgundy-950 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-burgundy-700" />
                        <span>Investigative Guidelines</span>
                      </h4>
                      <ul className="space-y-2 text-[11px] text-sepia-body">
                        {importantInformation.guidelines.map((rule, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-gold-600 font-bold">›</span>
                            <span>{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>

              </section>
            )}

            <HeritageDivider className="opacity-40" />

            {/* 5. START CASE BUTTON CALLOUT */}
            <div className="bg-gradient-to-r from-cream-100 via-warm-100 to-cream-100 rounded-3xl p-6 sm:p-8 border border-warm-300 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-6">
              
              <div className="flex items-center gap-4 text-center sm:text-left">
                <WaxSeal size="md" text={isSolved ? "SOLVED" : "ACTIVE"} />
                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-lg text-burgundy-950">
                    {isSolved ? "Mystery Successfully Unraveled!" : "Ready to Enter the Investigation Room?"}
                  </h3>
                  <p className="text-xs text-sepia-body max-w-md">
                    {isSolved 
                      ? `You solved this case with ${completedRecord?.score || 30} points in ${completedRecord?.timeFormatted || 'record time'}. You can re-examine evidence or revisit your deduction anytime.`
                      : "Examine physical clues under the magnifying glass, take notes, request hints, and submit your official charge sheet."}
                  </p>
                </div>
              </div>

              {/* Start Case Action Button */}
              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
                <button
                  onClick={handleStartCase}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-burgundy-800 hover:bg-burgundy-900 text-gold-100 font-display uppercase tracking-wider text-xs font-bold shadow-dossier hover:-translate-y-0.5 transition-all border border-gold-400/50"
                >
                  <Search className="w-4 h-4 text-gold-300" />
                  <span>{isSolved ? "Re-enter Investigation Room" : "Start Investigation Now"}</span>
                </button>

                <Link
                  to="/investigations"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-warm-50 text-sepia-dark text-xs font-semibold border border-warm-300 transition-colors shadow-soft"
                >
                  <span>My Investigations Desk</span>
                </Link>
              </div>

            </div>

          </div>

        </article>

      </div>
    </div>
  );
};
