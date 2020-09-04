import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import "@contentful/forma-36-react-components/dist/styles.css";

import { QuestionTypeSwitcher } from "./components/QuestionTypeSwitcher";
import { AddChoice } from "./components/AddChoice";

import "./App.css";
import SingleMultipleChoice from "./components/SingleMultipleChoice";
import CustomDropDown from "./components/CustomDropDown";

export type Choice = {
  text: string;
  id: string;
  isValid: boolean;
};

export type QuestionType = "single-choice" | "multiple-choice" | "dropdown";

export type Question = {
  type: QuestionType;
  choices: Choice[];
};

function fetchQuestion(): Question {
  const jsonQuestion = localStorage.getItem("question");
  const question = jsonQuestion ? JSON.parse(jsonQuestion) : null;
  return (
    question || {
      type: "single-choice",
      choices: [],
    }
  );
}

function saveQuestion(question: Question) {
  localStorage.setItem("question", JSON.stringify(question));
}

function App() {
  const [isOpen, setOpen] = React.useState(false);
  const [question, setQuestion] = React.useState<Question>(fetchQuestion());

  React.useEffect(() => {
    saveQuestion(question);
  }, [question]);

  const makeValid = (choiceId: string) => {
    setQuestion({
      ...question,
      choices: question.choices.map((choice) => {
        if (choice.id === choiceId) {
          return { ...choice, isValid: !choice.isValid };
        }
        if (question.type === "single-choice" || question.type === "dropdown")
          return { ...choice, isValid: false };
        return choice;
      }),
    });
  };

  const removeChoice = (choiceId: string) => {
    setQuestion({
      ...question,
      choices: question.choices.filter((choice) => choice.id !== choiceId),
    });
  };

  return (
    <div className="question-container">
      <QuestionTypeSwitcher
        selectedQuestionType={question.type}
        isOpen={isOpen}
        setOpen={setOpen}
        setQuestionType={(questionType) => {
          setQuestion({
            ...question,
            type: questionType,
            choices: question.choices.map((choice) => ({
              ...choice,
              isValid: false,
            })),
          });
        }}
      />
      <DragDropContext
        onDragEnd={(result) => {
          if (result.destination) {
            const sourceIndex = result.source.index;
            const destinationIndex = result.destination.index;
            const choices = [...question.choices];
            if (destinationIndex > sourceIndex) {
              const itemsBefore = choices.slice(0, sourceIndex);
              const itemsAfter = choices.slice(
                sourceIndex + 1,
                destinationIndex + 1
              );
              const itemToMove = choices[sourceIndex];
              const itemsEnd = choices.slice(destinationIndex + 1);
              setQuestion({
                ...question,
                choices: [
                  ...itemsBefore,
                  ...itemsAfter,
                  itemToMove,
                  ...itemsEnd,
                ],
              });
            } else if (sourceIndex > destinationIndex) {
              const itemsBefore = choices.slice(0, destinationIndex);
              const itemsAfter = choices.slice(destinationIndex, sourceIndex);
              const itemToMove = choices[sourceIndex];
              const itemsEnd = choices.slice(sourceIndex + 1);
              setQuestion({
                ...question,
                choices: [
                  ...itemsBefore,
                  itemToMove,
                  ...itemsAfter,
                  ...itemsEnd,
                ],
              });
            }
          }
        }}
      >
        <Droppable droppableId="choices">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="question-choices"
            >
              {question.type === "dropdown" ? (
                <CustomDropDown
                  choices={question.choices}
                  makeValid={makeValid}
                  removeChoice={removeChoice}
                />
              ) : (
                <SingleMultipleChoice
                  question={question}
                  removeChoice={removeChoice}
                  makeValid={makeValid}
                />
              )}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <AddChoice
        onSubmit={(text) => {
          setQuestion({
            ...question,
            choices: [
              ...question.choices,
              {
                isValid: false,
                id: `${Math.random().toString().slice(2)}`,
                text,
              },
            ],
          });
        }}
      />
      <pre>{JSON.stringify(question, null, 2)}</pre>
    </div>
  );
}

export default App;
