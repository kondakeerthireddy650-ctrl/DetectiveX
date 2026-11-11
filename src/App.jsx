import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ExploreCasesPage } from './pages/ExploreCasesPage';
import { MyInvestigationsPage } from './pages/MyInvestigationsPage';
import { CaseDetailPage } from './pages/CaseDetailPage';
import { InvestigationPage } from './pages/InvestigationPage';
import { ProfilePage } from './pages/ProfilePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { useLocalStorage } from './hooks/useLocalStorage';
import { INITIAL_USER_PROFILE } from './data/mockUserData';

// Scroll to top helper on route navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

export function App() {
  // LocalStorage state management
  const [bookmarkedIds, setBookmarkedIds] = useLocalStorage(
    'detectivex_saved_cases',
    INITIAL_USER_PROFILE.savedCaseIds
  );

  const [activeCaseIds, setActiveCaseIds] = useLocalStorage(
    'detectivex_active_cases',
    INITIAL_USER_PROFILE.activeCaseIds
  );

  const [userProfile, setUserProfile] = useLocalStorage(
    'detectivex_user_profile',
    INITIAL_USER_PROFILE
  );

  const [userNotes, setUserNotes] = useLocalStorage(
    'detectivex_user_notes',
    INITIAL_USER_PROFILE.investigationNotes
  );

  const [completedCases, setCompletedCases] = useLocalStorage(
    'detectivex_completed_cases',
    {}
  );

  const [unlockedAchievements, setUnlockedAchievements] = useLocalStorage(
    'detectivex_unlocked_achievements',
    {}
  );

  // Toggle Bookmark
  const handleToggleBookmark = (caseId) => {
    setBookmarkedIds((prev) => 
      prev.includes(caseId) 
        ? prev.filter(id => id !== caseId)
        : [...prev, caseId]
    );
  };

  // Toggle Active Investigation
  const handleToggleActiveCase = (caseId) => {
    setActiveCaseIds((prev) => 
      prev.includes(caseId)
        ? prev
        : [...prev, caseId]
    );
  };

  // Save Completed Case
  const handleSaveCompletedCase = (completedRecord) => {
    setCompletedCases((prev) => ({
      ...prev,
      [completedRecord.caseId]: completedRecord
    }));
    // Remove from active case ids upon completion
    setActiveCaseIds((prev) => prev.filter(id => id !== completedRecord.caseId));
  };

  // Update Achievements Map
  const handleUpdateAchievements = (updatedAchievementsMap) => {
    setUnlockedAchievements(updatedAchievementsMap);
  };

  // Add field note
  const handleAddNote = (newNote) => {
    setUserNotes((prev) => [newNote, ...prev]);
  };

  // Delete field note
  const handleDeleteNote = (noteId) => {
    setUserNotes((prev) => prev.filter(n => n.id !== noteId));
  };

  // Update Profile
  const handleUpdateProfile = (updatedProfile) => {
    setUserProfile(updatedProfile);
  };

  // Count active cases that are not yet completed
  const activeUnsolvedCount = activeCaseIds.filter(id => !completedCases[id]).length;

  return (
    <div className="flex flex-col min-h-screen bg-warm-50 text-sepia-dark selection:bg-burgundy-700 selection:text-gold-200">
      <ScrollToTop />
      
      {/* Universal Navbar */}
      <Navbar activeCasesCount={activeUnsolvedCount} />

      {/* Main Content View with Routes wrapped in ErrorBoundary */}
      <main className="flex-grow">
        <ErrorBoundary>
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  bookmarkedIds={bookmarkedIds} 
                  onToggleBookmark={handleToggleBookmark} 
                  completedCases={completedCases}
                />
              } 
            />
            <Route 
              path="/about" 
              element={<AboutPage />} 
            />
            <Route 
              path="/cases" 
              element={
                <ExploreCasesPage 
                  bookmarkedIds={bookmarkedIds} 
                  onToggleBookmark={handleToggleBookmark} 
                  completedCases={completedCases}
                />
              } 
            />
            <Route 
              path="/investigations" 
              element={
                <MyInvestigationsPage 
                  activeCaseIds={activeCaseIds} 
                  bookmarkedIds={bookmarkedIds} 
                  onToggleBookmark={handleToggleBookmark}
                  userNotes={userNotes}
                  onAddNote={handleAddNote}
                  onDeleteNote={handleDeleteNote}
                  completedCases={completedCases}
                />
              } 
            />
            <Route 
              path="/case/:id" 
              element={
                <CaseDetailPage 
                  bookmarkedIds={bookmarkedIds} 
                  onToggleBookmark={handleToggleBookmark}
                  activeCaseIds={activeCaseIds}
                  onToggleActiveCase={handleToggleActiveCase}
                  completedCases={completedCases}
                />
              } 
            />
            {/* Main Interactive Investigation Gameplay Route */}
            <Route 
              path="/investigate/:id" 
              element={
                <InvestigationPage 
                  userProfile={userProfile}
                  onUpdateProfile={handleUpdateProfile}
                  onAddGlobalNote={handleAddNote}
                  completedCases={completedCases}
                  onSaveCompletedCase={handleSaveCompletedCase}
                  unlockedAchievements={unlockedAchievements}
                  onUpdateAchievements={handleUpdateAchievements}
                />
              } 
            />
            <Route 
              path="/profile" 
              element={
                <ProfilePage 
                  userProfile={userProfile} 
                  onUpdateProfile={handleUpdateProfile} 
                  completedCases={completedCases}
                  unlockedAchievements={unlockedAchievements}
                />
              } 
            />
            <Route 
              path="*" 
              element={<NotFoundPage />} 
            />
          </Routes>
        </ErrorBoundary>
      </main>

      {/* Universal Footer */}
      <Footer />
    </div>
  );
}

export default App;
