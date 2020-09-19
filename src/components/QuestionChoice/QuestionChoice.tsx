import * as React from "react";
import {
  CardDragHandle,
  Card,
  IconButton,
  RadioButtonField,
  CheckboxField,
} from "@contentful/forma-36-react-components";

import { Choice, QuestionType } from "../../App";
import { DraggableProvided } from "react-beautiful-dnd";

type ContentProps = {
  choice: Choice;
  removeChoice: (choiceId: string) => void;
  makeValid: (choiceId: string) => void;
  questionType: QuestionType;
};

type Props = ContentProps & {
  dndProvided: DraggableProvided;
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
      <QuestionChoiceContent
        choice={choice}
        removeChoice={removeChoice}
        makeValid={makeValid}
        questionType={questionType}
      />
    </div>
  );
}

export function QuestionChoiceContent({
  choice,
  removeChoice,
  makeValid,
  questionType,
}: ContentProps) {
  return (
    <Card style={{ display: "flex" }}>
      <div style={{ margin: "-0.875rem 1rem -0.875rem -0.875rem" }}>
        <CardDragHandle>move</CardDragHandle>
      </div>
      {
        {
          "single-choice": (
            <RadioButtonField
              labelText={choice.text}
              inputProps={{
                "data-testid": `make-choice-valid-${choice.id}`,
              }}
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
              inputProps={{
                "data-testid": `make-choice-valid-${choice.id}`,
              }}
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
        data-testid={`remove-choice-${choice.id}`}
        iconProps={{
          icon: "Close",
        }}
        label="remove"
      />
    </Card>
  );
}
