import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../../app/store";
import { CustomizedBreadcrumbs } from "../Breadcrumb";

test("renders nutriguide", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CustomizedBreadcrumbs />
      </BrowserRouter>
    </Provider>
  );

  const catchWord = screen.getByText(/Nutriguide/i);
  expect(catchWord).toBeInTheDocument();
});
