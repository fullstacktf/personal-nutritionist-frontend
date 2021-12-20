import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "../../../app/store";
import { NavBar } from "../NavBar";

test("renders nutriguide title", () => {
  render(<Provider store={store}><BrowserRouter><NavBar /></BrowserRouter></Provider>);
  const catchWord = screen.getByText(/Nutriguide/i);
  expect(catchWord).toBeInTheDocument();
});
