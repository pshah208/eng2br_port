'use strict';

const { container } = require('../cosmos/client');

/** Default progress shape for a new user. */
function defaultProgress() {
  return {
    xp: 0,
    streak: 0,
    lastPlayDate: null,
    hearts: 3,
    completedLessons: [],
    completedUnits: [],
    badges: [],
  };
}

/**
 * Fetch (or create) the progress document for a given userId.
 * @param {string} userId
 * @returns {Promise<object>} The Cosmos document (without internal _* fields).
 */
async function getOrCreateProgress(userId) {
  const { resource: existing } = await container.item(userId, userId).read();

  if (existing) {
    return sanitize(existing);
  }

  const now = new Date().toISOString();
  const doc = {
    id: userId,
    userId,
    ...defaultProgress(),
    createdAt: now,
    updatedAt: now,
  };

  const { resource: created } = await container.items.create(doc);
  return sanitize(created);
}

/**
 * Upsert progress for a user.
 * @param {string} userId
 * @param {object} progressData - validated progress fields
 * @returns {Promise<object>}
 */
async function upsertProgress(userId, progressData) {
  const now = new Date().toISOString();

  // Read existing to preserve createdAt
  const { resource: existing } = await container.item(userId, userId).read();
  const createdAt = existing ? existing.createdAt : now;

  const doc = {
    id: userId,
    userId,
    xp: progressData.xp ?? 0,
    streak: progressData.streak ?? 0,
    lastPlayDate: progressData.lastPlayDate ?? null,
    hearts: progressData.hearts ?? 3,
    completedLessons: progressData.completedLessons ?? [],
    completedUnits: progressData.completedUnits ?? [],
    badges: progressData.badges ?? [],
    createdAt,
    updatedAt: now,
  };

  const { resource: upserted } = await container.items.upsert(doc);
  return sanitize(upserted);
}

/**
 * Reset a user's progress to defaults (keeps identity doc alive).
 * @param {string} userId
 * @returns {Promise<object>}
 */
async function resetProgress(userId) {
  const now = new Date().toISOString();

  const { resource: existing } = await container.item(userId, userId).read();
  const createdAt = existing ? existing.createdAt : now;

  const doc = {
    id: userId,
    userId,
    ...defaultProgress(),
    createdAt,
    updatedAt: now,
  };

  const { resource: upserted } = await container.items.upsert(doc);
  return sanitize(upserted);
}

/** Remove Cosmos internal fields from the returned object. */
function sanitize(doc) {
  if (!doc) return null;
  // eslint-disable-next-line no-unused-vars
  const { _rid, _self, _etag, _attachments, _ts, ...clean } = doc;
  return clean;
}

module.exports = { getOrCreateProgress, upsertProgress, resetProgress, defaultProgress };
