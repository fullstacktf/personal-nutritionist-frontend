import { render, screen } from "@testing-library/react";

import { Footer } from "../Footer";

test("renders team link", () => {
  render(<Footer />);
  
  const catchWord = screen.getByText(/Team/i);
  expect(catchWord).toBeInTheDocument();
});
