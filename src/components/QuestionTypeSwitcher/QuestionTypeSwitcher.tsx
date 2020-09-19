import * as React from "react";
import {
  Dropdown,
  Button,
  DropdownListItem,
  DropdownList,
} from "@contentful/forma-36-react-components";
import { QuestionType } from "../../App";

const questionTypes: QuestionType[] = [
  "single-choice",
  "multiple-choice",
  "dropdown",
];

type Props = {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  selectedQuestionType: QuestionType;
  setQuestionType: (questionType: QuestionType) => void;
};

export function QuestionTypeSwitcher({
  isOpen,
  setOpen,
  selectedQuestionType,
  setQuestionType,
}: Props) {
  return (
    <div className="question-type">
      <span>Choose question type:</span>
      <Dropdown
        isOpen={isOpen}
        onClose={() => {
          setOpen(false);
        }}
        key={Date.now()} // Force Reinit
        toggleElement={
          <Button
            size="small"
            buttonType="muted"
            indicateDropdown
            onClick={() => setOpen(!isOpen)}
          >
            {selectedQuestionType}
          </Button>
        }
      >
        <DropdownList>
          {questionTypes.map((questionType) => (
            <DropdownListItem
              key={questionType}
              isActive={questionType === selectedQuestionType}
              onClick={() => {
                setQuestionType(questionType);
                setOpen(false);
              }}
            >
              {questionType}
            </DropdownListItem>
          ))}
        </DropdownList>
      </Dropdown>
    </div>
  );
}
