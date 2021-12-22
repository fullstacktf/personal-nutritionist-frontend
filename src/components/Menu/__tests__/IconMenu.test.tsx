import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "../../../app/store";
import { IconMenu } from "../IconMenu";
import { Event } from "@mui/icons-material";

test("should have name correct", () => {
  const item = { icon: <Event color="info" />, name: "Calendario", url: "/calendar" };

  render(
    <Provider store={store}>
      <BrowserRouter>
        <IconMenu key={"prueba"} icon={item.icon} name={item.name} url={item.url} />
      </BrowserRouter>
    </Provider>
  );

  const menuItem = screen.getByText(/Calendario/i);
  expect(menuItem).toBeInTheDocument();
});

