import { render, screen } from "@testing-library/react";
import { NavBar } from "../NavBar";

test("renders h1", () => {
  render(<NavBar />);
  const h1Element = screen.getByText(/Nutriguide/i);
  expect(h1Element).toBeInTheDocument();
});
