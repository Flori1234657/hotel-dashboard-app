import { describe, expect, test } from "vitest";
import { screen, render } from "@testing-library/react";
import FirstPage from "../FirstPage";

test("A shfaqen rezervimet?", async () => {
  render(<FirstPage switchpg={{}} swiPgObj={{}} />);
  const listElement = await screen.findAllByTestId("rezervimetElement");
  expect(listElement).toBeInTheDocument();
});
