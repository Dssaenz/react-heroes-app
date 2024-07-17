import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import AppRoutes from "../../routes/AppRouter";
import { AuthContext } from "../../auth/authContext";

describe("Test for <AppRouter />", () => {
  test("Should print login if user is not authenticated.", () => {
    const contextValue = {
      name: null,
      logged: false,
      signIn: jest.fn(),
      signOut: jest.fn(),
    };
    render(
      <AuthContext.Provider value={contextValue}>
        <AppRoutes />
      </AuthContext.Provider>
    );
  });

  test("Should print login if user is not authenticated.", () => {
    const contextValue = {
      name: "Darwin",
      logged: true,
      signIn: jest.fn(),
      signOut: jest.fn(),
    };
    const { container } = render(
      <AuthContext.Provider value={contextValue}>
        <AppRoutes />
      </AuthContext.Provider>
    );

    const navElement = container.querySelector("nav");
    expect(navElement).toHaveClass(
      "navbar navbar-expand-sm navbar-dark bg-dark"
    );
  });
});
