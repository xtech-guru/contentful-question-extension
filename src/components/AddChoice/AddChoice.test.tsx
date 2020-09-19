import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { AddChoice } from "./AddChoice";

test("AddChoice component", async () => {
  const onSubmit = jest.fn();
  const { getByRole } = render(<AddChoice onSubmit={onSubmit} />);
  const input = getByRole("add-choice-input") as HTMLInputElement;
  fireEvent.change(input, { target: { value: "choice1" } });
  expect(input.value).toBe("choice1");
  fireEvent.keyPress(input, { keyCode: 13 }); // 13 is keycode for `enter`
  expect(onSubmit).toHaveBeenCalledTimes(1);
});
