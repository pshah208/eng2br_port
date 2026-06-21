import { useState } from 'react';

function normalise(str) {
  return str
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[.!?,;]/g, '');
}

export default function FillBlank({ exercise, onAnswer }) {
  const [value, setValue] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(null);

  // Split sentence on blank marker `___`
  const parts = exercise.sentence.split('___');

  const handleSubmit = () => {
    if (!value.trim() || submitted) return;
    const isCorrect = normalise(value) === normalise(exercise.answer);
    setCorrect(isCorrect);
    setSubmitted(true);
    setTimeout(() => onAnswer(isCorrect), 1000);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') handleSubmit();
  };

  return (
    <div className="exercise-card">
      <p className="exercise-label">✏️ Fill in the blank</p>

      <div className="fill-sentence">
        <span>{parts[0]}</span>
        <input
          className={`fill-input${
            submitted ? (correct ? ' input-correct' : ' input-incorrect') : ''
          }`}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKey}
          disabled={submitted}
          placeholder="???"
          aria-label="Fill in the blank"
          autoFocus
          style={{ width: `${Math.max(value.length, 6) + 2}ch` }}
        />
        {parts[1] && <span>{parts[1]}</span>}
      </div>

      {exercise.hint && (
        <p className="exercise-hint">💡 {exercise.hint}</p>
      )}

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
