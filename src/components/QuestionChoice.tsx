import * as React from "react";
import {
  CardDragHandle,
  Card,
  IconButton,
  RadioButton,
} from "@contentful/forma-36-react-components";

import { Choice } from "../App";
import { DraggableProvided } from "react-beautiful-dnd";

type Props = {
  choice: Choice;
  removeChoice: (choiceId: string) => void;
  makeValid: (choiceId: string) => void;
  dndProvided: DraggableProvided;
};

export function QuestionChoice({
  choice,
  removeChoice,
  makeValid,
  dndProvided,
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
        <RadioButton
          checked={choice.isValid}
          labelText="valid answer"
          type="radio"
          onChange={() => {
            makeValid(choice.id);
          }}
        />
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
