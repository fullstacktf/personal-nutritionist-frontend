import React from "react";
import { render, screen } from "@testing-library/react";
import { NutritionistList } from "../NutritionistList";

test("app has component home", () => {
  render(<NutritionistList />);

  const catchWord = screen.getByText(/No nutritionists/i);
  expect(catchWord).toBeInTheDocument();
});
