import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { Navbar } from "../../components";
import { AuthContext } from "../../auth/authContext";

describe("Test for <Navbar />", () => {
  const contextValue = {
    name: "Darwin",
    logged: true,
    signIn: jest.fn(),
    signOut: jest.fn(),
  };

  test("Should print user name", () => {
    const { container } = render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const navElement = container.querySelector("p");
    expect(navElement?.textContent).toContain("Darwin");
  });
});
