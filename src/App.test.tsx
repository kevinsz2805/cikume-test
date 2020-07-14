import React from "react";
import TodoList from "./components/Solution2/TodoList";
import { render, fireEvent, waitForElement } from "@testing-library/react";

const mockData = [
  {
    id: 1,
    text: "Buy Grocery",
    done: false,
  },
  {
    id: 2,
    text: "Play Guitar",
    done: true,
  },
  {
    id: 3,
    text: "Romantic Dinner",
    done: false,
  },
];

test("rende <TodoList /> component", () => {
  const mockOnchange = jest.fn();
  const getWrapper = render(<TodoList data={[]} onChange={mockOnchange} />);
  expect(getWrapper).toMatchSnapshot();
});

test("render TODO List", () => {
  const mockOnchange = jest.fn();
  const getWrapper = render(<TodoList data={mockData} onChange={mockOnchange} />);
  expect(getWrapper).toMatchSnapshot();
});
