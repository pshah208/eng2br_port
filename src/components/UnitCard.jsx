import { useGame } from '../context/GameContext.jsx';
import ProgressBar from './ProgressBar.jsx';

export default function UnitCard({ unit, onSelectLesson }) {
  const { state } = useGame();

  const completedCount = unit.lessons.filter((l) =>
    state.completedLessons.includes(l.id)
  ).length;

  const isUnitComplete = state.completedUnits.includes(unit.id);
  // all units unlocked; optionally lock by prior unit completion

  return (
    <div
      className={`unit-card${isUnitComplete ? ' unit-card--complete' : ''}`}
      style={{ borderColor: unit.color }}
    >
      <div className="unit-header">
        <span className="unit-emoji">{unit.emoji}</span>
        <div className="unit-info">
          <h2 className="unit-title">{unit.title}</h2>
          <span className="unit-level" style={{ background: unit.color }}>
            {unit.level}
          </span>
        </div>
        {isUnitComplete && (
          <span className="unit-badge" title={`${unit.badge} badge`}>🏅</span>
        )}
      </div>

      <ProgressBar
        value={completedCount}
        max={unit.lessons.length}
        color={unit.color}
      />
      <p className="unit-progress-text">
        {completedCount} / {unit.lessons.length} lessons
      </p>

      <div className="lesson-list">
        {unit.lessons.map((lesson, idx) => {
          const done = state.completedLessons.includes(lesson.id);
          const available = idx === 0 || state.completedLessons.includes(unit.lessons[idx - 1]?.id);
          return (
            <button
              key={lesson.id}
              className={`lesson-btn${done ? ' lesson-btn--done' : ''}${!available && !done ? ' lesson-btn--locked' : ''}`}
              onClick={() => onSelectLesson(unit, lesson)}
              disabled={!available && !done}
              aria-label={`${lesson.title} – ${done ? 'completed' : available ? 'available' : 'locked'}`}
            >
              <span className="lesson-emoji">{lesson.emoji}</span>
              <span className="lesson-title-text">{lesson.title}</span>
              <span className="lesson-xp">+{lesson.xpReward} XP</span>
              {done && <span className="lesson-check">✅</span>}
              {!available && !done && <span className="lesson-lock">🔒</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
