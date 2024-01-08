import { createContext, useReducer, ReactNode, useEffect } from "react";

import { AuthState, authReducer } from "./authReducer";
import { ASYNC_STORAGE_KEYS, AUTH_USER } from "../types/enums";

interface AuthProviderProps {
  children: ReactNode;
}

interface SignInProps {
  name: string;
}

interface AuthContextProps {
  name: string | null;
  logged: boolean;
  signIn: (loginData: SignInProps) => void;
  signOut: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

const init = () => {
  return (
    JSON.parse(localStorage.getItem(ASYNC_STORAGE_KEYS.USER) || "{}") || {
      name: null,
      logged: false,
    }
  );
};

const authInitialSatate: AuthState = {
  name: null,
  logged: false,
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, dispatch] = useReducer(authReducer, authInitialSatate, init);

  const signIn = (loginData: SignInProps) => {
    dispatch({
      type: AUTH_USER.LOGIN,
      payload: {
        name: loginData.name,
      },
    });
  };

  const signOut = () => {
    dispatch({ type: AUTH_USER.LOGOUT });
  };

  useEffect(() => {
    localStorage.setItem(ASYNC_STORAGE_KEYS.USER, JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        ...user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
