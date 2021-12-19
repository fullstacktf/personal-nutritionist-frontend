import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "../../../app/store";
import { NavBar } from "../NavBar";

test("renders h1", () => {
  render(<Provider store={store}><BrowserRouter><NavBar /></BrowserRouter></Provider>);
  const h1Element = screen.getByText(/Nutriguide/i);
  expect(h1Element).toBeInTheDocument();
});
