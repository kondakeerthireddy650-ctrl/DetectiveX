import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  FolderLock, 
  Compass, 
  UserCheck, 
  Info, 
  Menu, 
  X, 
  BookOpen, 
  Sparkles,
  Search
} from 'lucide-react';

export const Navbar = ({ activeCasesCount = 2 }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Explore Cases', path: '/cases', icon: Compass },
    { 
      name: 'My Investigations', 
      path: '/investigations', 
      icon: FolderLock,
      badge: activeCasesCount > 0 ? activeCasesCount : null 
    },
    { name: 'My Profile', path: '/profile', icon: UserCheck },
    { name: 'About', path: '/about', icon: Info },
  ];

  return (
    <header className="sticky top-0 z-50 bg-warm-50/90 backdrop-blur-md border-b border-warm-200/80 transition-all duration-300">
      {/* Top micro-bar with authentic archival notice */}
      <div className="bg-gradient-to-r from-burgundy-900 via-burgundy-800 to-burgundy-900 text-gold-200 text-[11px] py-1 px-4 text-center font-mono-archive tracking-wider flex items-center justify-center gap-2 border-b border-gold-500/20">
        <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></span>
        <span>SPECIAL HERITAGE & INVESTIGATIVE ARCHIVES DIVISION · BHARAT CID DOSSIERS</span>
        <span className="hidden sm:inline text-gold-400/60">|</span>
        <span className="hidden sm:inline text-gold-300/80">CONFIDENTIAL</span>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-full seal-badge flex items-center justify-center border-2 border-gold-400/60 shadow-md group-hover:scale-105 transition-transform duration-300">
              {/* Inner stylized magnifying glass + Ashoka star motif */}
              <svg className="w-6 h-6 text-gold-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2.5" />
                <circle cx="11" cy="11" r="2.5" fill="currentColor" stroke="none" />
                <path d="M11 5V7M11 15V17M5 11H7M15 11H17" stroke="#DFB15B" strokeWidth="1.5" />
              </svg>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-extrabold text-2xl tracking-wider text-burgundy-900 group-hover:text-burgundy-700 transition-colors">
                  DETECTIVE<span className="text-gold-600">X</span>
                </span>
                <span className="text-[10px] font-mono-archive bg-gold-100 text-gold-800 border border-gold-300 px-1.5 py-0.2 rounded font-semibold">
                  v1.0
                </span>
              </div>
              <span className="text-[11px] font-serif italic text-sepia-muted tracking-wide -mt-0.5">
                The Indian Files
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) => `
                  relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1.5
                  ${isActive 
                    ? 'text-burgundy-900 bg-burgundy-50/80 font-semibold shadow-sm border border-burgundy-200/50' 
                    : 'text-sepia-body hover:text-burgundy-800 hover:bg-warm-100/70'}
                `}
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="ml-1 px-1.5 py-0.2 text-[10px] font-mono-archive font-bold rounded-full bg-burgundy-700 text-gold-100">
                        {link.badge}
                      </span>
                    )}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-burgundy-700 via-gold-500 to-burgundy-700 rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right Action / CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/cases"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider bg-burgundy-800 hover:bg-burgundy-900 text-gold-100 border border-gold-500/40 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              <Search className="w-3.5 h-3.5 text-gold-400" />
              <span>Investigate Case</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-sepia-dark hover:bg-warm-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-burgundy-800" /> : <Menu className="w-6 h-6 text-burgundy-800" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-warm-200 bg-warm-50 px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `
                  px-4 py-3 rounded-lg text-sm font-medium flex items-center justify-between
                  ${isActive 
                    ? 'text-burgundy-900 bg-burgundy-50 font-bold border-l-4 border-burgundy-700 shadow-sm' 
                    : 'text-sepia-body hover:bg-warm-100'}
                `}
              >
                <div className="flex items-center gap-3">
                  {link.icon && <link.icon className="w-4 h-4 text-burgundy-700" />}
                  <span>{link.name}</span>
                </div>
                {link.badge && (
                  <span className="px-2 py-0.5 text-xs font-mono-archive font-bold rounded-full bg-burgundy-700 text-gold-100">
                    {link.badge} active
                  </span>
                )}
              </NavLink>
            ))}

            <div className="pt-3 border-t border-warm-200/80">
              <Link
                to="/cases"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider bg-burgundy-800 text-gold-100 shadow-md"
              >
                <Search className="w-4 h-4 text-gold-400" />
                <span>Start New Investigation</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
