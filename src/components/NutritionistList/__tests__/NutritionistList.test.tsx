import React from "react";
import { render, screen } from "@testing-library/react";
import { NutritionistList } from "../NutritionistList";

test("nutritionits list has default text", () => {
  render(<NutritionistList />);

  const catchWord = screen.getByText(/No hay nutricionistas/i);
  expect(catchWord).toBeInTheDocument();
});
