import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "../../../app/store";
import { WebPage } from "../WebPage";

test("WebPage has catchword", () => {
  render(<Provider store={store}><BrowserRouter><WebPage /></BrowserRouter></Provider>);
  
  const catchWord = screen.getByText(/La web del cuidado personal/i);
  expect(catchWord).toBeInTheDocument();
});
