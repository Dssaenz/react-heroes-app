import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { AuthContext } from "../../auth/authContext";
import DashboardRoutes from "../../routes/DashboardRoutes";

describe("Test for <DashboardRoutes />", () => {
  test("Should render component.", () => {
    const contextValue = {
      name: "Darwin",
      logged: true,
      signIn: jest.fn(),
      signOut: jest.fn(),
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/marvel"]}>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );
  });
});
