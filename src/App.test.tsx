import React from "react";
import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithProviders } from "./utils/testUtils";
import userEvent from "@testing-library/user-event";

test("Should increment", async () => {
  renderWithProviders(<App />);
  const counterValElement = screen.getByTestId("counter-val");
  expect(counterValElement).toHaveTextContent("0");
  for (let i = 1; i <= 20; i++) {
    await userEvent.click(screen.getByRole("button", { name: "+" }));
    expect(counterValElement).toHaveTextContent(i.toString());
  }
  expect(screen.getByText("Counter has reached 20")).toBeInTheDocument();
});
