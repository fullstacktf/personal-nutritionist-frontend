import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "../../../app/store";
import { NutritionistList } from "../NutritionistList";

test("nutritionits list has default text", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <NutritionistList />
      </BrowserRouter>
    </Provider>
  );

  const catchWord = screen.getByText(/No hay nutricionistas/i);
  expect(catchWord).toBeInTheDocument();
});
