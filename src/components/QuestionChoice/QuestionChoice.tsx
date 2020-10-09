import * as React from "react";
import {
  CardDragHandle,
  Card,
  IconButton,
  RadioButton,
  Checkbox,
} from "@contentful/forma-36-react-components";

import { Choice, QuestionType } from "../../App";
import { DraggableProvided } from "react-beautiful-dnd";
import { InputEdit } from "../InputEdit";
import { Spacer } from "../utils";

type ContentProps = {
  choice: Choice;
  removeChoice: (choiceId: string) => void;
  makeValid: (choiceId: string) => void;
  questionType: QuestionType;
  editChoice: (newText: string) => void;
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
  editChoice,
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
        editChoice={editChoice}
      />
    </div>
  );
}

export function QuestionChoiceContent({
  choice,
  removeChoice,
  makeValid,
  questionType,
  editChoice,
}: ContentProps) {
  return (
    <Card
      style={{
        display: "flex",
        backgroundColor:
          choice.isValid && choice.checked
            ? "green"
            : !choice.isValid && choice.checked
            ? "red"
            : "",
      }}
    >
      {choice.checked === undefined && (
        <div style={{ margin: "-0.875rem 1rem -0.875rem -0.875rem" }}>
          <CardDragHandle>move</CardDragHandle>
        </div>
      )}

      <div style={{ alignItems: "center" }}>
        {
          {
            "single-choice": (
              <RadioButton
                data-testid={`make-choice-valid-${choice.id}`}
                checked={choice.isValid}
                onChange={() => {
                  if (choice.checked !== undefined) return;
                  makeValid(choice.id);
                }}
                id="choice-id"
                labelText={choice.text}
              />
            ),
            "multiple-choice": (
              <Checkbox
                labelText={choice.text}
                data-testid={`make-choice-valid-${choice.id}`}
                checked={choice.isValid}
                id="choice-id"
                onChange={() => {
                  if (choice.checked !== undefined) return;
                  makeValid(choice.id);
                }}
              />
            ),
            dropdown: null,
          }[questionType]
        }
        <Spacer />
        <InputEdit
          text={choice.text}
          editText={(newText) => {
            editChoice(newText);
          }}
          checked={choice.checked}
        />
        <Spacer />
        {choice.checked === undefined && (
          <IconButton
            onClick={() => removeChoice(choice.id)}
            buttonType="negative"
            data-testid={`remove-choice-${choice.id}`}
            iconProps={{
              icon: "Close",
            }}
            label="remove"
          />
        )}
      </div>
    </Card>
  );
}
