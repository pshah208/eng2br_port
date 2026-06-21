import { useState, useCallback } from 'react';
import { useGame } from '../context/GameContext.jsx';
import ProgressBar from './ProgressBar.jsx';
import Hearts from './Hearts.jsx';
import MultipleChoice from './exercises/MultipleChoice.jsx';
import TranslationInput from './exercises/TranslationInput.jsx';
import WordBank from './exercises/WordBank.jsx';
import MatchingPairs from './exercises/MatchingPairs.jsx';
import FillBlank from './exercises/FillBlank.jsx';
import Flashcard from './exercises/Flashcard.jsx';
import MiniQuiz from './exercises/MiniQuiz.jsx';

function ExerciseRenderer({ exercise, onAnswer }) {
  switch (exercise.type) {
    case 'multiple-choice': return <MultipleChoice exercise={exercise} onAnswer={onAnswer} />;
    case 'translation':     return <TranslationInput exercise={exercise} onAnswer={onAnswer} />;
    case 'word-bank':       return <WordBank exercise={exercise} onAnswer={onAnswer} />;
    case 'matching':        return <MatchingPairs exercise={exercise} onAnswer={onAnswer} />;
    case 'fill-blank':      return <FillBlank exercise={exercise} onAnswer={onAnswer} />;
    case 'flashcard':       return <Flashcard exercise={exercise} onAnswer={onAnswer} />;
    case 'quiz':            return <MiniQuiz exercise={exercise} onAnswer={onAnswer} />;
    default: return <p>Unknown exercise type: {exercise.type}</p>;
  }
}

export default function LessonScreen({ unit, lesson, onComplete, onQuit }) {
  const { state, dispatch } = useGame();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [feedback, setFeedback] = useState(null); // 'correct' | 'incorrect'

  const exercises = lesson.exercises;
  const currentExercise = exercises[currentIdx];

  const handleAnswer = useCallback(
    (isCorrect) => {
      setFeedback(isCorrect ? 'correct' : 'incorrect');

      if (isCorrect) {
        setCorrect((c) => c + 1);
      } else {
        setIncorrect((i) => i + 1);
        dispatch({ type: 'LOSE_HEART' });
      }

      setTimeout(() => {
        setFeedback(null);
        if (currentIdx + 1 >= exercises.length) {
          // lesson finished
          const xpEarned = Math.round(
            lesson.xpReward * ((correct + (isCorrect ? 1 : 0)) / exercises.length)
          );
          dispatch({
            type: 'COMPLETE_LESSON',
            payload: {
              lessonId: lesson.id,
              unitId: unit.id,
              xpEarned,
              badge: unit.badge,
            },
          });
          dispatch({ type: 'RESET_HEARTS' });
          onComplete({ correct: correct + (isCorrect ? 1 : 0), incorrect: incorrect + (isCorrect ? 0 : 1), xpEarned });
        } else {
          setCurrentIdx((i) => i + 1);
        }
      }, 400);
    },
    [currentIdx, exercises.length, correct, incorrect, lesson, unit, dispatch, onComplete]
  );

  return (
    <div className={`lesson-screen${feedback ? ` feedback-${feedback}` : ''}`}>
      {/* Top bar */}
      <div className="lesson-topbar">
        <button className="btn-quit" onClick={onQuit} aria-label="Quit lesson">
          ✕
        </button>
        <ProgressBar
          value={currentIdx}
          max={exercises.length}
          color={unit.color}
        />
        <Hearts count={state.hearts} />
      </div>

      <div className="lesson-body">
        <p className="lesson-meta">
          {unit.emoji} {unit.title} › {lesson.emoji} {lesson.title}
        </p>

        <ExerciseRenderer
          key={currentIdx}
          exercise={currentExercise}
          onAnswer={handleAnswer}
        />

        {/* Feedback flash */}
        {feedback && (
          <div className={`feedback-banner feedback-banner--${feedback}`} aria-live="polite">
            {feedback === 'correct' ? '🎉 Correct!' : '💔 Incorrect!'}
          </div>
        )}
      </div>
    </div>
  );
}
