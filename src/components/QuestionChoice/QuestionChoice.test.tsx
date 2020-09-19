import * as React from "react";
import { fireEvent, render } from "@testing-library/react";
import { QuestionChoiceContent } from "./QuestionChoice";

test("QuestionChoiceContent", () => {
  const remoceChoice = jest.fn();
  const makeValid = jest.fn();

  const { getByTestId } = render(
    <QuestionChoiceContent
      choice={{ id: "id1", isValid: false, text: "choice1" }}
      questionType="single-choice"
      removeChoice={remoceChoice}
      makeValid={makeValid}
    />
  );

  const radioButton = getByTestId("make-choice-valid-id1");
  fireEvent.click(radioButton);
  expect(makeValid).toBeCalledWith("id1");
  const removeButton = getByTestId("remove-choice-id1");
  fireEvent.click(removeButton);
  expect(remoceChoice).toBeCalledWith("id1");
});
