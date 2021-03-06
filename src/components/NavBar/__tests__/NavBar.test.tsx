import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "../../../app/store";
import { NavBar } from "../NavBar";

test("renders sign up button", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </Provider>
  );

  const catchWord = screen.getByText(/Regístrate/i);
  expect(catchWord).toBeInTheDocument();
});
