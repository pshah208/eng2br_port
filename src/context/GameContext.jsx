import { createContext, useContext, useReducer, useEffect } from 'react';
import curriculum from '../data/curriculum.js';

// ─── Initial State ─────────────────────────────────────────────────────────────
const getInitialState = () => {
  try {
    const saved = localStorage.getItem('aprenda_pt_state');
    if (saved) return JSON.parse(saved);
  } catch (_) {
    // ignore parse errors
  }
  return {
    xp: 0,
    streak: 0,
    lastPlayDate: null,
    hearts: 3,
    completedLessons: [],    // array of lesson ids
    completedUnits: [],      // array of unit ids
    badges: [],              // earned badge names
    leaderboard: [
      { name: 'Ana Silva', xp: 4200, flag: '🇧🇷' },
      { name: 'John Smith', xp: 3800, flag: '🇺🇸' },
      { name: 'Yuki Tanaka', xp: 3200, flag: '🇯🇵' },
      { name: 'Carlos Mendes', xp: 2900, flag: '🇧🇷' },
      { name: 'Sophie Dubois', xp: 2400, flag: '🇫🇷' },
      { name: 'You', xp: 0, flag: '🌟', isYou: true },
    ],
  };
};

// ─── Reducer ───────────────────────────────────────────────────────────────────
function gameReducer(state, action) {
  switch (action.type) {
    case 'COMPLETE_LESSON': {
      const { lessonId, unitId, xpEarned, badge } = action.payload;
      const alreadyDone = state.completedLessons.includes(lessonId);
      const newXP = state.xp + (alreadyDone ? Math.floor(xpEarned / 2) : xpEarned);

      // check if all lessons in unit are done
      const unit = curriculum.find((u) => u.id === unitId);
      const allLessonIds = unit ? unit.lessons.map((l) => l.id) : [];
      const newCompleted = alreadyDone
        ? state.completedLessons
        : [...state.completedLessons, lessonId];
      const unitComplete =
        !state.completedUnits.includes(unitId) &&
        allLessonIds.every((id) => newCompleted.includes(id));

      const newBadges =
        badge && unitComplete && !state.badges.includes(badge)
          ? [...state.badges, badge]
          : state.badges;

      const newUnits = unitComplete
        ? [...state.completedUnits, unitId]
        : state.completedUnits;

      // update leaderboard "You" entry
      const newLeaderboard = state.leaderboard.map((entry) =>
        entry.isYou ? { ...entry, xp: newXP } : entry
      );

      return {
        ...state,
        xp: newXP,
        completedLessons: newCompleted,
        completedUnits: newUnits,
        badges: newBadges,
        leaderboard: newLeaderboard,
      };
    }

    case 'LOSE_HEART':
      return { ...state, hearts: Math.max(0, state.hearts - 1) };

    case 'RESET_HEARTS':
      return { ...state, hearts: 3 };

    case 'UPDATE_STREAK': {
      const today = new Date().toDateString();
      if (state.lastPlayDate === today) return state;
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      const newStreak =
        state.lastPlayDate === yesterday ? state.streak + 1 : 1;
      return { ...state, streak: newStreak, lastPlayDate: today };
    }

    case 'RESET_PROGRESS':
      return {
        ...getInitialState(),
        leaderboard: state.leaderboard, // keep leaderboard
      };

    default:
      return state;
  }
}

// ─── Context ───────────────────────────────────────────────────────────────────
const GameContext = createContext(null);

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, undefined, getInitialState);

  // Persist to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('aprenda_pt_state', JSON.stringify(state));
  }, [state]);

  // Update streak on mount
  useEffect(() => {
    dispatch({ type: 'UPDATE_STREAK' });
  }, []);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGame must be used within <GameProvider>');
  return ctx;
}
