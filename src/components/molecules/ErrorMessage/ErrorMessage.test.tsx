import { render, screen, waitFor } from "@testing-library/react";
import ErrorMessage from "./ErrorMessage";
import { MemoryRouter } from "react-router-dom";

describe("ErrorMessage", () => {
  it("should display the correct message", async () => {
    const errorMessage = "Test Error Message";
    render(
      <MemoryRouter>
        <ErrorMessage error={errorMessage} />
      </MemoryRouter>
    );
    const errorElement = await waitFor(() => screen.getByText(errorMessage));
    expect(errorElement).toHaveTextContent(errorMessage);
  });
});
