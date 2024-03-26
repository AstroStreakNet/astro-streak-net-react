import { render, screen } from "@testing-library/react";
import { app } from "../../../config";
import Health from "./Health";
import { MemoryRouter } from "react-router-dom";

describe("Health", () => {
  it("should render name, stage, version and home link ", async () => {
    app.name = "test-launchpad-react";
    app.stage = "test-stage";
    app.version = "test-version";

    render(
      <MemoryRouter>
        <Health />
      </MemoryRouter>
    );

    expect(screen.getByText("Name: test-launchpad-react")).toBeInTheDocument();
    expect(screen.getByText("Stage: test-stage")).toBeInTheDocument();
    expect(screen.getByText("Version: test-version")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveTextContent("Return Home");
  });
});
