import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "../../../app/store";
import { SideMenu } from "../Menu";

test("should have home item", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <SideMenu />
      </BrowserRouter>
    </Provider>
  );

  const menuItem = screen.getByText(/Home/i);
  expect(menuItem).toBeInTheDocument();
});

test("should have calendar item", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <SideMenu />
      </BrowserRouter>
    </Provider>
  );

  const menuItem = screen.getByText(/Calendario/i);
  expect(menuItem).toBeInTheDocument();
});


test("should have settings item", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <SideMenu />
      </BrowserRouter>
    </Provider>
  );

  const menuItem = screen.getByText(/Configuración/i);
  expect(menuItem).toBeInTheDocument();
});

test("should have recipes nutritionist", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <SideMenu />
      </BrowserRouter>
    </Provider>
  );

  const menuItem = screen.getByText(/Nutritionistas/i);
  expect(menuItem).toBeInTheDocument();
});


test("should have a personal separator", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <SideMenu />
      </BrowserRouter>
    </Provider>
  );

  const menuItem = screen.getByText(/Personal/i);
  expect(menuItem).toBeInTheDocument();
});
