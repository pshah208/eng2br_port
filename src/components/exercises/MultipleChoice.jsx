import { useState } from 'react';

export default function MultipleChoice({ exercise, onAnswer }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (idx) => {
    if (submitted) return;
    setSelected(idx);
  };

  const handleSubmit = () => {
    if (selected === null) return;
    setSubmitted(true);
    const correct = selected === exercise.correct;
    setTimeout(() => onAnswer(correct), 900);
  };

  return (
    <div className="exercise-card">
      <p className="exercise-label">Choose the correct answer</p>
      <h2 className="exercise-question">{exercise.question}</h2>

      <div className="mc-options">
        {exercise.options.map((opt, idx) => {
          let cls = 'mc-option';
          if (submitted) {
            if (idx === exercise.correct) cls += ' correct';
            else if (idx === selected) cls += ' incorrect';
          } else if (selected === idx) {
            cls += ' selected';
          }
          return (
            <button
              key={idx}
              className={cls}
              onClick={() => handleSelect(idx)}
              aria-pressed={selected === idx}
              disabled={submitted}
            >
              {opt}
            </button>
          );
        })}
      </div>

      <button
        className="btn-primary"
        onClick={handleSubmit}
        disabled={selected === null || submitted}
      >
        Check
      </button>
    </div>
  );
}
