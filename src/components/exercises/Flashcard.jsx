import { useState } from 'react';

export default function Flashcard({ exercise, onAnswer }) {
  const [flipped, setFlipped] = useState(false);
  const [answered, setAnswered] = useState(false);

  const handleFlip = () => {
    if (!answered) setFlipped((f) => !f);
  };

  const handleRate = (knew) => {
    setAnswered(true);
    setTimeout(() => onAnswer(knew), 400);
  };

  return (
    <div className="exercise-card">
      <p className="exercise-label">🃏 Flashcard – click to flip</p>

      <div
        className={`flashcard${flipped ? ' flashcard--flipped' : ''}`}
        onClick={handleFlip}
        role="button"
        tabIndex={0}
        aria-label={flipped ? 'Back of flashcard' : 'Front of flashcard'}
        onKeyDown={(e) => e.key === 'Enter' && handleFlip()}
      >
        <div className="flashcard-inner">
          <div className="flashcard-front">
            <span className="fc-flag">🇺🇸</span>
            <p className="fc-text">{exercise.front}</p>
            <p className="fc-tap">Tap to reveal</p>
          </div>
          <div className="flashcard-back">
            <span className="fc-flag">🇧🇷</span>
            <p className="fc-text">{exercise.back}</p>
            {exercise.pronunciation && (
              <p className="fc-pronunciation">🔊 {exercise.pronunciation}</p>
            )}
          </div>
        </div>
      </div>

      {flipped && !answered && (
        <div className="fc-actions">
          <p className="fc-prompt">Did you know this?</p>
          <div className="fc-buttons">
            <button
              className="btn-incorrect"
              onClick={() => handleRate(false)}
            >
              😕 Not yet
            </button>
            <button
              className="btn-correct"
              onClick={() => handleRate(true)}
            >
              ✅ Got it!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
