import { render, screen } from "@testing-library/react";
import { WebPage } from "../WebPage";
import { BrowserRouter } from "react-router-dom";

test("WebPage has catchword", () => {
  render(<BrowserRouter><WebPage/></BrowserRouter>);
  const catchWord = screen.getByText(/La web del cuidado personal/i);
  expect(catchWord).toBeInTheDocument();
});
