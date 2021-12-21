import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "../../../app/store";
import { EventList } from "../EventList";

test("events list has default text", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <EventList />
      </BrowserRouter>
    </Provider>
  );

  const catchWord = screen.getByText(/No hay eventos/i);
  expect(catchWord).toBeInTheDocument();
});
