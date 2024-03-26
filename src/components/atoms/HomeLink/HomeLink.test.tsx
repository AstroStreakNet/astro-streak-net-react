import { render, screen } from "@testing-library/react";
import HomeLink from "./HomeLink";
import { MemoryRouter } from "react-router-dom";

describe("HomeLink", () => {
  it("should display", async () => {
    render(
      <MemoryRouter>
        <HomeLink />
      </MemoryRouter>
    );
    const link = screen.getByRole("link");
    expect(link).toHaveTextContent("Return Home");
  });
});
