/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { useMsal } from '@azure/msal-react';
import { InteractionStatus } from '@azure/msal-browser';
import { apiScopes } from '../auth/msalConfig.js';

// ─── Auth Context ──────────────────────────────────────────────────────────────

const AuthContext = createContext(null);

/**
 * Wraps MSAL state into a simpler interface consumed by the app.
 * Must be placed inside <MsalProvider>.
 */
export function AuthProvider({ children }) {
  const { instance, accounts, inProgress } = useMsal();
  const [accessToken, setAccessToken] = useState(null);

  const isAuthenticated = accounts.length > 0;
  const account = accounts[0] ?? null;

  // Keep the access token refreshed whenever the active account changes.
  useEffect(() => {
    if (!account || apiScopes.length === 0) {
      setAccessToken(null);
      return;
    }

    instance
      .acquireTokenSilent({ account, scopes: apiScopes })
      .then((result) => setAccessToken(result.accessToken))
      .catch(() => setAccessToken(null));
  }, [instance, account]);

  const login = useCallback(() => {
    instance.loginPopup({ scopes: apiScopes });
  }, [instance]);

  const logout = useCallback(() => {
    instance.logoutPopup({ account });
    setAccessToken(null);
  }, [instance, account]);

  /**
   * Acquire (or silently refresh) an access token for the API.
   * Returns null if the user is not authenticated or scopes are not configured.
   */
  const getAccessToken = useCallback(async () => {
    if (!account || apiScopes.length === 0) return null;
    try {
      const result = await instance.acquireTokenSilent({ account, scopes: apiScopes });
      setAccessToken(result.accessToken);
      return result.accessToken;
    } catch {
      return null;
    }
  }, [instance, account]);

  const value = {
    isAuthenticated,
    account,
    accessToken,
    inProgress: inProgress !== InteractionStatus.None,
    login,
    logout,
    getAccessToken,
    /** Friendly display name: full name, then email, then userId prefix. */
    displayName:
      account?.name ||
      account?.username ||
      (account?.localAccountId ? account.localAccountId.slice(0, 8) : null),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within <AuthProvider>');
  return ctx;
}
