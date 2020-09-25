import React from "react";
import {
  Dropdown,
  Button,
  DropdownListItem,
  DropdownList,
  IconButton,
  RadioButton,
} from "@contentful/forma-36-react-components";
import { Choice } from "../../App";
import { InputEdit } from "../InputEdit";
import { Spacer } from "../utils";

import "./style.scss";

interface Props {
  choices: Choice[];
  makeValid: (choiceId: string) => void;
  removeChoice: (choiceId: string) => void;
  editChoice: (choiceId: string, newText: string) => void;
}

export function CustomDropDown(props: Props) {
  const { choices, makeValid, removeChoice, editChoice } = props;
  return (
    <Dropdown
      isOpen={true}
      key={Date.now()} // Force Reinit
      position="bottom-left"
      toggleElement={
        <Button size="small" buttonType="muted" indicateDropdown>
          Trigger Dropdown
        </Button>
      }
    >
      <DropdownList>
        {choices &&
          choices.map(({ id, text, isValid }) => (
            <DropdownListItem key={id} className="dropdown-list-item-overrides">
              <RadioButton
                labelText={text}
                checked={isValid}
                data-testid={`make-choice-${id}-valid`}
                onChange={() => {
                  makeValid(id);
                }}
                id="choice-id"
              />
              <Spacer />
              <InputEdit
                text={text}
                editText={(newText: string) => {
                  editChoice(id, newText);
                }}
              />
              <Spacer />
              <IconButton
                onClick={() => removeChoice(id)}
                buttonType="negative"
                data-testid={`remove-choice-${id}`}
                iconProps={{
                  icon: "Close",
                }}
                label="remove"
              />
            </DropdownListItem>
          ))}
      </DropdownList>
    </Dropdown>
  );
}
