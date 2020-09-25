import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { QuestionChoice } from "../QuestionChoice";
import { Question } from "../../App";

interface Props {
  question: Question;
  removeChoice: (choiceId: string) => void;
  makeValid: (choiceId: string) => void;
  editChoice: (choiceId: string, newText: string) => void;
}

export function SingleMultipleChoice(props: Props) {
  const { question, removeChoice, makeValid } = props;
  return (
    <>
      {question.choices.map((choice, index) => (
        <Draggable key={choice.id} draggableId={choice.id} index={index}>
          {(provided, snapshot) => (
            <QuestionChoice
              questionType={question.type}
              dndProvided={provided}
              choice={choice}
              removeChoice={removeChoice}
              makeValid={makeValid}
              editChoice={(newText: string) => {
                props.editChoice(choice.id, newText);
              }}
            />
          )}
        </Draggable>
      ))}
    </>
  );
}
