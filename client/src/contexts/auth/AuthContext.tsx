import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { getToken, removeToken, setToken } from 'src/utils/token';
import { AuthState } from 'src/interfaces/auth';
import { useUser } from 'src/hooks';
import { Dimmer, Loader } from 'semantic-ui-react';

export interface AuthContextState {
  auth: AuthState | null;
  login: (token: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextState>(
  {} as AuthContextState
);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [auth, setAuth] = useState<AuthState | null>(null);
  const { getMe } = useUser();

  const login = async (token: string) => {
    setToken(token);
    const me = await getMe(token);
    setAuth({ token, me });
  };

  const logout = () => {
    if (auth) {
      removeToken();
      setAuth(null);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const token: string = getToken();
        if (token) {
          const me = await getMe(token);
          setAuth({ token, me });
        } else {
          setAuth(null);
        }
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {isLoading ? (
        <Dimmer>
          <Loader>Loading...</Loader>
        </Dimmer>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}
