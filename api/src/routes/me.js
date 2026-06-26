'use strict';

const { Router } = require('express');
const { requireAuth } = require('../middleware/auth');
const { getOrCreateProgress, upsertProgress, resetProgress } = require('../services/progressService');

const router = Router();

// All /me routes require authentication
router.use(requireAuth);

// ─── GET /api/v1/me ──────────────────────────────────────────────────────────
// Returns authenticated user profile + current progress (creates default if none exists).
router.get('/', async (req, res) => {
  try {
    const progress = await getOrCreateProgress(req.user.userId);
    res.json({
      user: {
        userId: req.user.userId,
        email: req.user.email,
        name: req.user.name,
      },
      progress,
    });
  } catch (err) {
    console.error('[me] GET /me error:', err.message);
    res.status(500).json({ error: 'Failed to retrieve user progress' });
  }
});

// ─── PUT /api/v1/me/progress ─────────────────────────────────────────────────
// Upserts the full progress document for the authenticated user.
router.put('/progress', async (req, res) => {
  const body = req.body;

  // Lightweight schema validation
  const validationError = validateProgressPayload(body);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  try {
    const progress = await upsertProgress(req.user.userId, body);
    res.json({ progress });
  } catch (err) {
    console.error('[me] PUT /me/progress error:', err.message);
    res.status(500).json({ error: 'Failed to save progress' });
  }
});

// ─── POST /api/v1/me/reset ───────────────────────────────────────────────────
// Resets progress to defaults for the authenticated user.
router.post('/reset', async (req, res) => {
  try {
    const progress = await resetProgress(req.user.userId);
    res.json({ message: 'Progress reset successfully', progress });
  } catch (err) {
    console.error('[me] POST /me/reset error:', err.message);
    res.status(500).json({ error: 'Failed to reset progress' });
  }
});

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Validate the shape of a progress update payload.
 * Returns an error message string, or null if valid.
 * @param {unknown} body
 * @returns {string|null}
 */
function validateProgressPayload(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return 'Request body must be a JSON object';
  }

  const { xp, streak, hearts, lastPlayDate, completedLessons, completedUnits, badges } = body;

  if (xp !== undefined && (typeof xp !== 'number' || xp < 0)) {
    return 'xp must be a non-negative number';
  }
  if (streak !== undefined && (typeof streak !== 'number' || streak < 0)) {
    return 'streak must be a non-negative number';
  }
  if (hearts !== undefined && (typeof hearts !== 'number' || hearts < 0 || hearts > 10)) {
    return 'hearts must be a number between 0 and 10';
  }
  if (lastPlayDate !== undefined && lastPlayDate !== null && typeof lastPlayDate !== 'string') {
    return 'lastPlayDate must be a string or null';
  }
  if (completedLessons !== undefined && !Array.isArray(completedLessons)) {
    return 'completedLessons must be an array';
  }
  if (completedUnits !== undefined && !Array.isArray(completedUnits)) {
    return 'completedUnits must be an array';
  }
  if (badges !== undefined && !Array.isArray(badges)) {
    return 'badges must be an array';
  }

  return null;
}

module.exports = router;
