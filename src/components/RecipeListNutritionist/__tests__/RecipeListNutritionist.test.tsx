import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "../../../app/store";
import { RecipeListNutritionist } from "../RecipeListNutritionist";

test("nutritionits recipes list has default text", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <RecipeListNutritionist />
      </BrowserRouter>
    </Provider>
  );

  const catchWord = screen.getByText(/No hay recetas/i);
  expect(catchWord).toBeInTheDocument();
});
