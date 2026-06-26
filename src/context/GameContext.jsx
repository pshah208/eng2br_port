/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer, useEffect, useRef, useCallback } from 'react';
import curriculum from '../data/curriculum.js';
import { useAuth } from './AuthContext.jsx';

const API_BASE = import.meta.env.VITE_API_BASE_URL || '';

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

    case 'HYDRATE_FROM_CLOUD': {
      const p = action.payload;
      return {
        ...state,
        xp: p.xp ?? state.xp,
        streak: p.streak ?? state.streak,
        lastPlayDate: p.lastPlayDate ?? state.lastPlayDate,
        hearts: p.hearts ?? state.hearts,
        completedLessons: p.completedLessons ?? state.completedLessons,
        completedUnits: p.completedUnits ?? state.completedUnits,
        badges: p.badges ?? state.badges,
        leaderboard: state.leaderboard.map((entry) =>
          entry.isYou ? { ...entry, xp: p.xp ?? state.xp } : entry
        ),
      };
    }

    default:
      return state;
  }
}

// ─── Cloud API helpers ─────────────────────────────────────────────────────────

async function apiFetch(path, token, options = {}) {
  if (!API_BASE || !token) return null;
  try {
    const authHeader = ['Bearer', token].join(' ');
    const res = await fetch(`${API_BASE}${path}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        Authorization: authHeader,
        ...(options.headers || {}),
      },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

// ─── Context ───────────────────────────────────────────────────────────────────
const GameContext = createContext(null);

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, undefined, getInitialState);
  const { isAuthenticated, getAccessToken } = useAuth();

  // Track previous auth state to detect login events
  const prevAuthRef = useRef(isAuthenticated);

  // Persist to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('aprenda_pt_state', JSON.stringify(state));
  }, [state]);

  // Update streak on mount
  useEffect(() => {
    dispatch({ type: 'UPDATE_STREAK' });
  }, []);

  // On login: fetch cloud progress and hydrate local state
  useEffect(() => {
    if (!isAuthenticated || prevAuthRef.current === isAuthenticated) return;
    prevAuthRef.current = isAuthenticated;

    (async () => {
      const token = await getAccessToken();
      if (!token) return;
      const data = await apiFetch('/me', token);
      if (data?.progress) {
        dispatch({ type: 'HYDRATE_FROM_CLOUD', payload: data.progress });
      }
    })();
  }, [isAuthenticated, getAccessToken]);

  // Update prevAuthRef when auth changes (including initial render)
  useEffect(() => {
    prevAuthRef.current = isAuthenticated;
  });

  // Debounced cloud sync on state changes
  const syncTimerRef = useRef(null);
  useEffect(() => {
    if (!isAuthenticated || !API_BASE) return;

    if (syncTimerRef.current) clearTimeout(syncTimerRef.current);
    syncTimerRef.current = setTimeout(async () => {
      const token = await getAccessToken();
      if (!token) return;
      await apiFetch('/me/progress', token, {
        method: 'PUT',
        body: JSON.stringify({
          xp: state.xp,
          streak: state.streak,
          lastPlayDate: state.lastPlayDate,
          hearts: state.hearts,
          completedLessons: state.completedLessons,
          completedUnits: state.completedUnits,
          badges: state.badges,
        }),
      });
    }, 1500);

    return () => {
      if (syncTimerRef.current) clearTimeout(syncTimerRef.current);
    };
  }, [state, isAuthenticated, getAccessToken]);

  // Cloud-aware reset: also hits /me/reset endpoint when authenticated
  const resetProgress = useCallback(async () => {
    dispatch({ type: 'RESET_PROGRESS' });
    if (isAuthenticated && API_BASE) {
      const token = await getAccessToken();
      if (token) {
        await apiFetch('/me/reset', token, { method: 'POST' });
      }
    }
  }, [isAuthenticated, getAccessToken]);

  return (
    <GameContext.Provider value={{ state, dispatch, resetProgress }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGame must be used within <GameProvider>');
  return ctx;
}
