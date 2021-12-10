import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../Home";

test("Home has catchword", () => {
  render(<Home />);
  const catchWord = screen.getByText(/La web del cuidado personal/i);
  expect(catchWord).toBeInTheDocument();
});
