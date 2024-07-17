import "@testing-library/jest-dom";
import { MemoryRouter, Route } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import { PrivateRoutes } from "../../routes/PrivateRoutes";
import { ASYNC_STORAGE_KEYS } from "../../types/enums";

describe("Test for <PrivateRoutes />", () => {
  const TestComponent = () => <div>Protected Content</div>;

  beforeEach(() => {
    localStorage.clear();
  });

  test("Renders the component when the user is authenticated", () => {
    render(
      <MemoryRouter initialEntries={["/protected"]}>
        <PrivateRoutes
          path="/protected"
          isAuthenticated={true}
          component={TestComponent}
        />
      </MemoryRouter>
    );

    expect(screen.getByText("Protected Content")).toBeInTheDocument();
    expect(localStorage.getItem(ASYNC_STORAGE_KEYS.PATH_NAME)).toBe(
      "/protected"
    );
  });

  test("Redirects to /login when the user is not authenticated", () => {
    render(
      <MemoryRouter initialEntries={["/protected"]}>
        <PrivateRoutes
          path="/protected"
          isAuthenticated={false}
          component={TestComponent}
        />
        <Route path="/login">
          <div>Login Page</div>
        </Route>
      </MemoryRouter>
    );

    expect(screen.queryByText("Protected Content")).not.toBeInTheDocument();
    expect(screen.queryByText("Login Page")).toBeInTheDocument();
    expect(localStorage.getItem(ASYNC_STORAGE_KEYS.PATH_NAME)).toBe("/login");
  });
});
