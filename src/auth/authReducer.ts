import { AUTH_USER } from "../types/enums";

type AuthActions =
  | {
      type: AUTH_USER.LOGIN;
      payload: {
        name: string;
      };
    }
  | { type: AUTH_USER.LOGOUT };

export interface AuthState {
  name: string | null;
  logged: boolean;
}

export const authReducer = (
  state: AuthState,
  action: AuthActions
): AuthState => {
  switch (action.type) {
    case AUTH_USER.LOGIN:
      return {
        ...action.payload,
        logged: true,
      };

    case AUTH_USER.LOGOUT:
      return {
        name: null,
        logged: false,
      };
    default:
      return state;
  }
};
