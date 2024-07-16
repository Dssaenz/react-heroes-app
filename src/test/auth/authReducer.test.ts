import { AUTH_USER } from "../../types/enums";
import { AuthActions, authReducer } from "../../auth/authReducer";

describe("Test for authReducer hook", () => {
  test("Should return default state", () => {
    const action = { type: AUTH_USER.LOGOUT } as AuthActions;
    const state = authReducer({ logged: false, name: null }, action);

    expect(state).toEqual({ logged: false, name: null });
  });

  test("Should auth with user name", () => {
    const action = {
      type: AUTH_USER.LOGIN,
      payload: {
        name: "Darwin",
      },
    } as AuthActions;
    const state = authReducer({ logged: false, name: null }, action);

    expect(state).toEqual({ logged: true, name: "Darwin" });
  });

  test("Should delete user name and logged in false", () => {
    const action = {
      type: AUTH_USER.LOGOUT,
    } as AuthActions;
    const state = authReducer({ logged: true, name: "Darwin" }, action);

    expect(state).toEqual({ logged: false, name: null });
  });
});
