import { useState } from 'react';

export default function MiniQuiz({ exercise, onAnswer }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const q = exercise.questions[current];
  const isLast = current === exercise.questions.length - 1;

  const handleSelect = (idx) => {
    if (submitted) return;
    setSelected(idx);
  };

  const handleNext = () => {
    if (selected === null) return;
    const correct = selected === q.correct;
    const newScore = correct ? score + 1 : score;

    setSubmitted(true);

    setTimeout(() => {
      if (isLast) {
        // pass if ≥ 3/5
        onAnswer(newScore >= 3, { score: newScore });
        return;
      }
      setCurrent((c) => c + 1);
      setSelected(null);
      setSubmitted(false);
      setScore(newScore);
    }, 800);
  };

  return (
    <div className="exercise-card">
      <p className="exercise-label">
        🧪 Mini Quiz – Question {current + 1} / {exercise.questions.length}
      </p>
      <h2 className="exercise-question">{q.q}</h2>

      <div className="mc-options">
        {q.options.map((opt, idx) => {
          let cls = 'mc-option';
          if (submitted) {
            if (idx === q.correct) cls += ' correct';
            else if (idx === selected) cls += ' incorrect';
          } else if (selected === idx) {
            cls += ' selected';
          }
          return (
            <button
              key={idx}
              className={cls}
              onClick={() => handleSelect(idx)}
              disabled={submitted}
              aria-pressed={selected === idx}
            >
              {opt}
            </button>
          );
        })}
      </div>

      <button
        className="btn-primary"
        onClick={handleNext}
        disabled={selected === null || submitted}
      >
        {isLast ? 'Finish Quiz' : 'Next'}
      </button>
    </div>
  );
}
