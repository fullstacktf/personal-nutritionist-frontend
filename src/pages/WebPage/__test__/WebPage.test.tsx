import { render, screen } from "@testing-library/react";
import { WebPage } from "../WebPage";

test("WebPage has catchword", () => {
  render(<WebPage />);
  const catchWord = screen.getByText(/La web del cuidado personal/i);
  expect(catchWord).toBeInTheDocument();
});
