# Aprenda Português – API

Node.js/Express backend providing authenticated progress sync via Microsoft Entra External ID and Azure Cosmos DB.

## Local setup

```bash
cd api
cp .env.example .env
# Fill in ENTRA_* and COSMOS_* values, then:
npm install
npm run dev
```

The API starts on `http://localhost:3001` by default.

## Endpoints

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| GET | `/api/v1/health` | None | Service health check |
| GET | `/api/v1/me` | ****** | Profile + progress (creates default if new user) |
| PUT | `/api/v1/me/progress` | ****** | Upsert full progress document |
| POST | `/api/v1/me/reset` | ****** | Reset progress to defaults |

## Environment variables

See `.env.example` for required and optional variables.

## Auth

Every authenticated endpoint expects an Authorization header in the format:

```
Authorization: ******
```

Where `<entra-access-token>` is the access token acquired from MSAL for the configured API scope. The token must be issued by the configured Entra External ID tenant and have the correct audience (`ENTRA_CLIENT_ID`). The API validates it using JWKS (RS256).

## Cosmos DB schema

One document per user in the `user_progress` container (partition key `/userId`):

```json
{
  "id": "<userId>",
  "userId": "<userId>",
  "xp": 0,
  "streak": 0,
  "lastPlayDate": null,
  "hearts": 3,
  "completedLessons": [],
  "completedUnits": [],
  "badges": [],
  "createdAt": "2026-01-01T00:00:00.000Z",
  "updatedAt": "2026-01-01T00:00:00.000Z"
}
```
