import React from "react";
import { render, screen } from "@testing-library/react";
import { ClientList } from "../ClientList";

test("client list has default text", () => {
  render(<ClientList />);

  const catchWord = screen.getByText(/No hay clientes/i);
  expect(catchWord).toBeInTheDocument();
});
