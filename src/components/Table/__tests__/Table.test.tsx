import React from "react";
import { render, screen } from "@testing-library/react";
import { StickyHeadTable } from "../Table";

const setup = () => {
  const titles = [{ id: "name", label: "NOMBRE", minWidth: 170, align: "left" }];
  const data = ["A"];

  render(
    <StickyHeadTable 
      name="Lista de prueba"
      titles={titles}
      data={data}
    />
  );
};

test("table component has name", () => {
  setup();

  const catchWord = screen.getByText(/Lista de prueba/i);
  expect(catchWord).toBeInTheDocument();
});

test("table component has title list", () => {
  setup();

  const catchWord = screen.getByText(/NOMBRE/i);
  expect(catchWord).toBeInTheDocument();
});

test("table component has item list", () => {
  setup();

  const catchWord = screen.getByText("A");
  expect(catchWord).toBeInTheDocument();
});
