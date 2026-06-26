import { PublicClientApplication, LogLevel } from '@azure/msal-browser';

// ─── MSAL Configuration ───────────────────────────────────────────────────────
// All values are injected at build-time from .env / Azure App Service settings.
// Required Vite env vars:
//   VITE_ENTRA_CLIENT_ID   – Azure app registration client ID
//   VITE_ENTRA_AUTHORITY   – e.g. https://<tenant>.ciamlogin.com/<tenant>.onmicrosoft.com
//   VITE_ENTRA_REDIRECT_URI – e.g. https://<frontend>.azurewebsites.net

const clientId = import.meta.env.VITE_ENTRA_CLIENT_ID || '';
const authority = import.meta.env.VITE_ENTRA_AUTHORITY || '';
const redirectUri = import.meta.env.VITE_ENTRA_REDIRECT_URI || window.location.origin;

export const msalConfig = {
  auth: {
    clientId,
    authority,
    redirectUri,
    knownAuthorities: authority ? [new URL(authority).hostname] : [],
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) return;
        if (level === LogLevel.Error) console.error('[msal]', message);
        if (level === LogLevel.Warning) console.warn('[msal]', message);
      },
    },
  },
};

// Scope(s) to request when acquiring an access token for the backend API.
// VITE_ENTRA_API_SCOPE – e.g. api://<client-id>/user_impersonation
export const apiScopes = import.meta.env.VITE_ENTRA_API_SCOPE
  ? [import.meta.env.VITE_ENTRA_API_SCOPE]
  : [];

export const msalInstance = new PublicClientApplication(msalConfig);
