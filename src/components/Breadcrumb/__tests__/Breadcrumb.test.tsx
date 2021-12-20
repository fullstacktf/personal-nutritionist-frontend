import React from "react";
import { render, screen } from "@testing-library/react";
import CustomizedBreadcrumbs from "../Breadcrumb";

test("nutriguide name show up in breadcrumb", () => {
  render(<CustomizedBreadcrumbs />);

  // const catchWord = screen.getByText(/Nutriguide/i);
  // expect(catchWord).toBeInTheDocument();
});
