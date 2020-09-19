import * as React from "react";
import { render } from "@testing-library/react";
import { SingleMultipleChoice } from "./SingleMultipleChoice";

test("SingleMultipleChoice", () => {
  const removeChoice = jest.fn();
  const makeValid = jest.fn();

  render(
    <SingleMultipleChoice
      question={{
        choices: [],
        type: "single-choice",
      }}
      removeChoice={removeChoice}
      makeValid={makeValid}
    />
  );
});
