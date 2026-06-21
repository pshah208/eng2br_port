import { useState } from 'react';
import { useGame } from '../context/GameContext.jsx';
import UnitCard from './UnitCard.jsx';
import Leaderboard from './Leaderboard.jsx';
import curriculum from '../data/curriculum.js';

export default function Dashboard({ onStartLesson }) {
  const { state, dispatch } = useGame();
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  const totalLessons = curriculum.reduce((s, u) => s + u.lessons.length, 0);

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-brand">
          <span className="brand-flag">🇧🇷</span>
          <h1 className="brand-title">Aprenda Português</h1>
          <span className="brand-flag">🇺🇸</span>
        </div>
        <p className="brand-subtitle">Learn Brazilian Portuguese – from beginner to pro!</p>

        {/* Stats bar */}
        <div className="stats-bar">
          <div className="stat-pill stat-pill--xp" title="Total XP">
            ✨ <strong>{state.xp.toLocaleString()}</strong> XP
          </div>
          <div className="stat-pill stat-pill--streak" title="Day streak">
            🔥 <strong>{state.streak}</strong> day streak
          </div>
          <div className="stat-pill stat-pill--progress" title="Lessons completed">
            📚 <strong>{state.completedLessons.length}</strong> / {totalLessons} lessons
          </div>
          {state.badges.length > 0 && (
            <div className="stat-pill stat-pill--badge" title="Badges earned">
              🏅 <strong>{state.badges.length}</strong> {state.badges.length === 1 ? 'badge' : 'badges'}
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="header-actions">
          <button
            className="btn-secondary"
            onClick={() => setShowLeaderboard(true)}
          >
            🏆 Leaderboard
          </button>
          <button
            className="btn-outline"
            onClick={() => {
              if (confirm('Reset all progress? This cannot be undone.')) {
                dispatch({ type: 'RESET_PROGRESS' });
              }
            }}
          >
            🔄 Reset
          </button>
        </div>
      </header>

      {/* Units */}
      <main className="units-container">
        {curriculum.map((unit) => (
          <UnitCard
            key={unit.id}
            unit={unit}
            onSelectLesson={onStartLesson}
          />
        ))}
      </main>

      {/* Footer */}
      <footer className="dashboard-footer">
        <p>
          🇧🇷 <em>Aprenda Português</em> – Built with ❤️ for language learners &nbsp;|&nbsp;
          <a href="https://github.com/pshah208/eng2br_port" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </p>
      </footer>

      {showLeaderboard && (
        <Leaderboard onClose={() => setShowLeaderboard(false)} />
      )}
    </div>
  );
}
