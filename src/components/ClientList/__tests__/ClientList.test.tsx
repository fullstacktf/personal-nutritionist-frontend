import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "../../../app/store";
import { ClientList } from "../ClientList";

test("client list has default text", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <ClientList />
      </BrowserRouter>
    </Provider>
  );

  const catchWord = screen.getByText(/No hay clientes/i);
  expect(catchWord).toBeInTheDocument();
});
