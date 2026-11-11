import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  MapPin, 
  Bookmark, 
  BookmarkCheck, 
  ArrowRight,
  Shield,
  Sparkles,
  Compass
} from 'lucide-react';
import { DifficultyBadge } from '../common/Badge';

export const CaseCard = ({ 
  caseItem, 
  isBookmarked = false, 
  onToggleBookmark,
  isCompleted = false,
  completedScore = null,
  className = "" 
}) => {
  const {
    id,
    caseNumber,
    domain,
    title,
    subtitle,
    shortDescription,
    synopsis,
    illustration,
    heroImage,
    difficulty,
    duration,
    location,
    badgeText,
    rating,
    solversCount
  } = caseItem;

  const displayImage = illustration || heroImage;
  const displayDescription = shortDescription || synopsis;

  return (
    <article className={`group parchment-card rounded-2xl overflow-hidden flex flex-col justify-between relative border border-warm-300 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 ${className}`}>
      
      {/* Top Banner & Illustration Section */}
      <div className="relative aspect-[16/10] overflow-hidden bg-warm-200">
        <img
          src={displayImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter saturate-[0.95]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sepia-dark/85 via-sepia-dark/25 to-transparent" />
        
        {/* Top Badges: Case Number & Bookmark */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-1.5 pointer-events-auto">
            <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono-archive font-bold bg-burgundy-900/90 text-gold-200 border border-gold-400/30 backdrop-blur-sm shadow-sm">
              {caseNumber}
            </span>
            {badgeText && !isCompleted && (
              <span className="hidden sm:inline-block px-2 py-0.5 rounded-md text-[10px] font-mono-archive font-semibold bg-gold-400 text-burgundy-950 shadow-sm">
                ★ {badgeText}
              </span>
            )}
            {isCompleted && (
              <span className="px-2 py-0.5 rounded-md text-[10px] font-mono-archive font-bold bg-emerald-800/90 text-emerald-100 border border-emerald-400/50 shadow-sm backdrop-blur-sm flex items-center gap-1">
                ✓ SOLVED {completedScore ? `· ${completedScore} PTS` : ''}
              </span>
            )}
          </div>

          {/* Bookmark Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onToggleBookmark && onToggleBookmark(id);
            }}
            className="pointer-events-auto p-2 rounded-full bg-white/90 hover:bg-white text-burgundy-900 shadow-md transition-colors"
            title={isBookmarked ? "Remove from Saved Files" : "Save to My Investigations"}
            aria-label="Bookmark case"
          >
            {isBookmarked ? (
              <BookmarkCheck className="w-4 h-4 text-burgundy-700 fill-burgundy-700" />
            ) : (
              <Bookmark className="w-4 h-4 text-sepia-muted hover:text-burgundy-700" />
            )}
          </button>
        </div>

        {/* Location & Solving Time overlay at bottom of image */}
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs text-warm-100">
          <span className="inline-flex items-center gap-1 font-medium bg-sepia-dark/70 backdrop-blur-sm px-2 py-0.5 rounded text-[11px]">
            <MapPin className="w-3 h-3 text-gold-400" /> {location}
          </span>
          <span className="font-mono-archive text-[11px] text-gold-200 flex items-center gap-1 bg-sepia-dark/70 backdrop-blur-sm px-2 py-0.5 rounded">
            <Clock className="w-3 h-3 text-gold-400" /> {duration}
          </span>
        </div>
      </div>

      {/* Card Body Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        <div className="space-y-2">
          {/* Domain name & Difficulty level */}
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] font-mono-archive font-bold text-gold-700 uppercase tracking-wider bg-gold-50 px-2 py-0.5 rounded border border-gold-200">
              {domain}
            </span>
            <DifficultyBadge difficulty={difficulty} />
          </div>

          {/* Case Title */}
          <h3 className="font-serif font-bold text-lg text-burgundy-950 group-hover:text-burgundy-700 transition-colors leading-snug">
            <Link to={`/case/${id}`}>
              {title}
            </Link>
          </h3>

          {/* Short Description */}
          <p className="text-xs text-sepia-body leading-relaxed line-clamp-2">
            {displayDescription}
          </p>
        </div>

        {/* Card Footer: Estimated time & Start Investigation Button */}
        <div className="pt-2 border-t border-warm-200/80 space-y-3">
          <div className="flex items-center justify-between text-[11px] text-sepia-muted font-mono-archive">
            <span>Estimated: <strong className="text-sepia-dark">{duration}</strong></span>
            {solversCount && (
              <span><strong className="text-burgundy-800">{solversCount.toLocaleString()}</strong> sleuths</span>
            )}
          </div>

          {/* Action button */}
          {isCompleted ? (
            <Link
              to={`/case/${id}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-warm-200 hover:bg-warm-300 text-burgundy-950 font-display text-xs font-bold uppercase tracking-wider border border-warm-400/80 shadow-sm transition-all duration-200 group-hover:-translate-y-0.5"
            >
              <span>Review Case File</span>
              <ArrowRight className="w-3.5 h-3.5 text-burgundy-700" />
            </Link>
          ) : (
            <Link
              to={`/case/${id}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-burgundy-800 hover:bg-burgundy-900 text-gold-100 font-display text-xs font-bold uppercase tracking-wider border border-gold-400/40 shadow-sm hover:shadow-md transition-all duration-200 group-hover:-translate-y-0.5"
            >
              <span>Start Investigation</span>
              <ArrowRight className="w-3.5 h-3.5 text-gold-300" />
            </Link>
          )}
        </div>

      </div>

    </article>
  );
};
