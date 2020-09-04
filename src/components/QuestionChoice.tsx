import * as React from "react";
import {
  CardDragHandle,
  Card,
  IconButton,
  RadioButton,
  Checkbox,
} from "@contentful/forma-36-react-components";

import { Choice, QuestionType } from "../App";
import { DraggableProvided } from "react-beautiful-dnd";

type Props = {
  choice: Choice;
  removeChoice: (choiceId: string) => void;
  makeValid: (choiceId: string) => void;
  dndProvided: DraggableProvided;
  questionType: QuestionType;
};

export function QuestionChoice({
  choice,
  removeChoice,
  makeValid,
  dndProvided,
  questionType,
}: Props) {
  return (
    <div
      {...dndProvided.draggableProps}
      {...dndProvided.dragHandleProps}
      ref={dndProvided.innerRef}
    >
      <Card style={{ display: "flex" }}>
        <div style={{ margin: "-0.875rem 1rem -0.875rem -0.875rem" }}>
          <CardDragHandle>move</CardDragHandle>
        </div>
        {
          {
            "single-choice": (
              <RadioButton
                checked={choice.isValid}
                labelText="valid answer"
                type="radio"
                onChange={() => {
                  makeValid(choice.id);
                }}
              />
            ),
            "multiple-choice": (
              <Checkbox
                checked={choice.isValid}
                labelText="valid answer"
                type="checkbox"
                onChange={() => {
                  makeValid(choice.id);
                }}
              />
            ),
            dropdown: null,
          }[questionType]
        }
        <div>{choice.text}</div>
        <IconButton
          onClick={() => removeChoice(choice.id)}
          buttonType="negative"
          iconProps={{
            icon: "Close",
          }}
          label="remove"
        />
      </Card>
    </div>
  );
}
