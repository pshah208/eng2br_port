import { useState } from 'react';

function normalise(str) {
  return str
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove diacritics for lenient check
    .replace(/[.!?,;]/g, '');
}

export default function TranslationInput({ exercise, onAnswer }) {
  const [value, setValue] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(null);

  const handleSubmit = () => {
    if (!value.trim() || submitted) return;
    const accepted = [
      exercise.answer,
      ...(exercise.alternatives || []),
    ];
    const isCorrect = accepted.some(
      (a) => normalise(a) === normalise(value)
    );
    setCorrect(isCorrect);
    setSubmitted(true);
    setTimeout(() => onAnswer(isCorrect), 1000);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') handleSubmit();
  };

  return (
    <div className="exercise-card">
      <p className="exercise-label">🇺🇸 Translate into Portuguese 🇧🇷</p>
      <h2 className="exercise-question">{exercise.prompt}</h2>
      {exercise.hint && (
        <p className="exercise-hint">💡 Pronunciation: <em>{exercise.hint}</em></p>
      )}

      <input
        className={`translation-input${
          submitted ? (correct ? ' input-correct' : ' input-incorrect') : ''
        }`}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKey}
        placeholder="Type in Portuguese…"
        disabled={submitted}
        aria-label="Portuguese translation"
        autoFocus
      />

      {submitted && (
        <p className={`feedback-text ${correct ? 'feedback-correct' : 'feedback-incorrect'}`}>
          {correct ? '✅ Correct!' : `❌ Answer: ${exercise.answer}`}
        </p>
      )}

      <button
        className="btn-primary"
        onClick={handleSubmit}
        disabled={!value.trim() || submitted}
      >
        Check
      </button>
    </div>
  );
}
