import { useGame } from '../context/GameContext.jsx';

export default function Leaderboard({ onClose }) {
  const { state } = useGame();

  const sorted = [...state.leaderboard].sort((a, b) => b.xp - a.xp);

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Leaderboard">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">🏆 Leaderboard</h2>
        <p className="modal-subtitle">Top learners this week</p>

        <ol className="leaderboard-list">
          {sorted.map((entry, idx) => (
            <li
              key={entry.name}
              className={`leaderboard-entry${entry.isYou ? ' leaderboard-entry--you' : ''}`}
            >
              <span className="lb-rank">
                {idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `#${idx + 1}`}
              </span>
              <span className="lb-flag">{entry.flag}</span>
              <span className="lb-name">{entry.name}{entry.isYou ? ' (you)' : ''}</span>
              <span className="lb-xp">{entry.xp.toLocaleString()} XP</span>
            </li>
          ))}
        </ol>

        <button className="btn-secondary" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
