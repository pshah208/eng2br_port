import { useState, useMemo } from 'react';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function WordBank({ exercise, onAnswer }) {
  const shuffled = useMemo(() => shuffle(exercise.words), [exercise]);
  const [bank, setBank] = useState(shuffled);
  const [built, setBuilt] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(null);

  const addWord = (idx) => {
    if (submitted) return;
    const word = bank[idx];
    setBuilt((b) => [...b, word]);
    setBank((bk) => bk.filter((_, i) => i !== idx));
  };

  const removeWord = (idx) => {
    if (submitted) return;
    const word = built[idx];
    setBuilt((b) => b.filter((_, i) => i !== idx));
    setBank((bk) => [...bk, word]);
  };

  const handleSubmit = () => {
    if (!built.length || submitted) return;
    const isCorrect =
      JSON.stringify(built) === JSON.stringify(exercise.answer);
    setCorrect(isCorrect);
    setSubmitted(true);
    setTimeout(() => onAnswer(isCorrect), 1000);
  };

  return (
    <div className="exercise-card">
      <p className="exercise-label">🧩 Arrange the words</p>
      <h2 className="exercise-question">{exercise.prompt}</h2>

      {/* Built sentence area */}
      <div
        className={`word-built${
          submitted ? (correct ? ' correct' : ' incorrect') : ''
        }`}
        aria-label="Your sentence"
      >
        {built.length === 0 ? (
          <span className="word-placeholder">Tap words below…</span>
        ) : (
          built.map((w, i) => (
            <button
              key={i}
              className="word-tile word-tile--active"
              onClick={() => removeWord(i)}
              disabled={submitted}
            >
              {w}
            </button>
          ))
        )}
      </div>

      {/* Word bank */}
      <div className="word-bank">
        {bank.map((w, i) => (
          <button
            key={i}
            className="word-tile"
            onClick={() => addWord(i)}
            disabled={submitted}
          >
            {w}
          </button>
        ))}
      </div>

      {submitted && (
        <p className={`feedback-text ${correct ? 'feedback-correct' : 'feedback-incorrect'}`}>
          {correct
            ? '✅ Correct!'
            : `❌ Correct order: ${exercise.answer.join(' ')}`}
        </p>
      )}

      <button
        className="btn-primary"
        onClick={handleSubmit}
        disabled={built.length === 0 || submitted}
      >
        Check
      </button>
    </div>
  );
}
