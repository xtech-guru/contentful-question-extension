import * as React from "react";
import {
  CardDragHandle,
  Card,
  IconButton,
  RadioButtonField,
  CheckboxField,
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
              <RadioButtonField
                labelText={choice.text}
                checked={choice.isValid}
                onChange={() => {
                  makeValid(choice.id);
                }}
                id="choice-id"
              />
            ),
            "multiple-choice": (
              <CheckboxField
                labelText={choice.text}
                checked={choice.isValid}
                id="choice-id"
                onChange={() => {
                  makeValid(choice.id);
                }}
              />
            ),
            dropdown: null,
          }[questionType]
        }
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
