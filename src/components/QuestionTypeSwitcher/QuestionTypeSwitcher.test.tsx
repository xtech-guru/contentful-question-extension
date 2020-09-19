import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { QuestionTypeSwitcher } from "./QuestionTypeSwitcher";

test("QuestionTypeSwitcher", () => {
  const setOpen = jest.fn();
  const setQuestionType = jest.fn();
  const { getAllByRole, getByText } = render(
    <QuestionTypeSwitcher
      isOpen={true}
      setOpen={setOpen}
      selectedQuestionType="single-choice"
      setQuestionType={setQuestionType}
    />
  );
  const menuItems = getAllByRole("menuitem");
  expect(menuItems.length).toBe(3);
  const multipleChoiceMenuItem = getByText("multiple-choice");
  fireEvent.click(multipleChoiceMenuItem);
  expect(setQuestionType).toBeCalledWith("multiple-choice");
  expect(setOpen).toBeCalledWith(false);
});
