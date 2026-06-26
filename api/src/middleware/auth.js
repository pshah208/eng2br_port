'use strict';

const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

// Entra External ID JWKS + issuer configured via env vars.
// ENTRA_JWKS_URI  – e.g. https://<tenant>.ciamlogin.com/<tenant>.onmicrosoft.com/discovery/v2.0/keys
// ENTRA_ISSUER    – e.g. https://<tenant>.ciamlogin.com/<tenant>.onmicrosoft.com/v2.0
// ENTRA_CLIENT_ID – the Azure app registration client ID (used as token audience)

const jwksUri = process.env.ENTRA_JWKS_URI;
const issuer = process.env.ENTRA_ISSUER;
const audience = process.env.ENTRA_CLIENT_ID;

if (!jwksUri || !issuer || !audience) {
  console.warn(
    '[auth] WARNING: ENTRA_JWKS_URI, ENTRA_ISSUER, or ENTRA_CLIENT_ID not set – ' +
    'all authenticated requests will be rejected.'
  );
}

const client = jwksClient({
  jwksUri: jwksUri || 'https://example.com/.well-known/jwks.json',
  cache: true,
  cacheMaxEntries: 5,
  cacheMaxAge: 10 * 60 * 1000, // 10 minutes
  rateLimit: true,
});

/**
 * Retrieve signing key for the given JWT header (used by jsonwebtoken).
 */
function getSigningKey(header, callback) {
  client.getSigningKey(header.kid, (err, key) => {
    if (err) return callback(err);
    callback(null, key.getPublicKey());
  });
}

/**
 * Express middleware that validates an Entra External ID access token (JWT).
 * On success, sets req.user = { userId, email, name }.
 * On failure, responds 401 Unauthorized.
 */
function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization || '';
  if (!authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Missing or malformed Authorization header' });
  }

  const token = authHeader.slice(7);

  jwt.verify(
    token,
    getSigningKey,
    {
      issuer,
      audience,
      algorithms: ['RS256'],
    },
    (err, decoded) => {
      if (err) {
        console.warn('[auth] Token verification failed:', err.message);
        return res.status(401).json({ error: 'Invalid or expired token' });
      }

      // oid is the stable per-tenant object ID; sub is per-app user ID.
      // Prefer oid when available (standard in Entra access tokens).
      req.user = {
        userId: decoded.oid || decoded.sub,
        email: decoded.email || decoded.preferred_username || null,
        name: decoded.name || null,
      };

      next();
    }
  );
}

module.exports = { requireAuth };
