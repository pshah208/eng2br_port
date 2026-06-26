import { useState } from 'react';
import { GameProvider } from './context/GameContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import Dashboard from './components/Dashboard.jsx';
import LessonScreen from './components/LessonScreen.jsx';
import ResultScreen from './components/ResultScreen.jsx';
import './App.css';

// Screens: 'dashboard' | 'lesson' | 'result'
export default function App() {
  const [screen, setScreen] = useState('dashboard');
  const [activeUnit, setActiveUnit] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);
  const [lessonResult, setLessonResult] = useState(null);

  const handleStartLesson = (unit, lesson) => {
    setActiveUnit(unit);
    setActiveLesson(lesson);
    setLessonResult(null);
    setScreen('lesson');
  };

  const handleLessonComplete = (result) => {
    setLessonResult(result);
    setScreen('result');
  };

  const handleContinue = () => {
    setScreen('dashboard');
    setActiveUnit(null);
    setActiveLesson(null);
    setLessonResult(null);
  };

  const handleRetry = () => {
    // Reset to same lesson
    setLessonResult(null);
    setScreen('lesson');
  };

  return (
    <AuthProvider>
      <GameProvider>
        {screen === 'dashboard' && (
          <Dashboard onStartLesson={handleStartLesson} />
        )}
        {screen === 'lesson' && activeLesson && (
          <LessonScreen
            unit={activeUnit}
            lesson={activeLesson}
            onComplete={handleLessonComplete}
            onQuit={handleContinue}
          />
        )}
        {screen === 'result' && lessonResult && (
          <ResultScreen
            result={lessonResult}
            lesson={activeLesson}
            onContinue={handleContinue}
            onRetry={handleRetry}
          />
        )}
      </GameProvider>
    </AuthProvider>
  );
}
