import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { NavBar } from "../NavBar";

test("renders h1", () => {
  render(<BrowserRouter><NavBar /></BrowserRouter>);
  const h1Element = screen.getByText(/Nutriguide/i);
  expect(h1Element).toBeInTheDocument();
});
