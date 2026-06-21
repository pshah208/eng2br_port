export default function ResultScreen({ result, lesson, onContinue, onRetry }) {
  const { correct, incorrect, xpEarned } = result;
  const total = correct + incorrect;
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

  const stars =
    accuracy >= 90 ? '⭐⭐⭐' : accuracy >= 70 ? '⭐⭐' : '⭐';

  return (
    <div className="result-screen">
      <div className="result-card">
        <div className="result-trophy">🏆</div>
        <h1 className="result-title">Lesson Complete! 🎉</h1>
        <p className="result-subtitle">
          {lesson.emoji} {lesson.title}
        </p>
        <p className="result-stars">{stars}</p>

        <div className="result-stats">
          <div className="stat-box stat-box--xp">
            <span className="stat-icon">✨</span>
            <span className="stat-value">+{xpEarned}</span>
            <span className="stat-label">XP earned</span>
          </div>
          <div className="stat-box stat-box--correct">
            <span className="stat-icon">✅</span>
            <span className="stat-value">{correct}</span>
            <span className="stat-label">Correct</span>
          </div>
          <div className="stat-box stat-box--incorrect">
            <span className="stat-icon">❌</span>
            <span className="stat-value">{incorrect}</span>
            <span className="stat-label">Incorrect</span>
          </div>
          <div className="stat-box stat-box--accuracy">
            <span className="stat-icon">🎯</span>
            <span className="stat-value">{accuracy}%</span>
            <span className="stat-label">Accuracy</span>
          </div>
        </div>

        <div className="result-actions">
          <button className="btn-secondary" onClick={onRetry}>
            🔁 Try again
          </button>
          <button className="btn-primary" onClick={onContinue}>
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
}
