import * as React from "react";
import { fireEvent, render } from "@testing-library/react";
import { CustomDropDown } from "./CustomDropDown";

test("CustomDropdown", () => {
  const makeValid = jest.fn();
  const removeChoice = jest.fn();
  const { getAllByRole, getByTestId } = render(
    <CustomDropDown
      choices={[
        { id: "id1", isValid: false, text: "choice1" },
        { id: "id2", isValid: true, text: "choice2" },
        { id: "id3", isValid: false, text: "choice3" },
      ]}
      makeValid={makeValid}
      removeChoice={removeChoice}
    />
  );
  const menuItems = getAllByRole("menuitem");
  expect(menuItems.length).toBe(3);

  const thirdChoiceRadio = getByTestId("make-choice-id3-valid");
  fireEvent.click(thirdChoiceRadio);
  expect(makeValid).toBeCalledWith("id3");
  const thirdChoiceRemove = getByTestId("remove-choice-id3");
  fireEvent.click(thirdChoiceRemove);
  expect(removeChoice).toBeCalledWith("id3");
});
