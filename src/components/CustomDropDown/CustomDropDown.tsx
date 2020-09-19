import React from "react";
import {
  Dropdown,
  Button,
  DropdownListItem,
  DropdownList,
  IconButton,
  RadioButtonField,
} from "@contentful/forma-36-react-components";
import { Choice } from "../../App";

interface Props {
  choices: Choice[];
  makeValid: (choiceId: string) => void;
  removeChoice: (choiceId: string) => void;
}

export function CustomDropDown(props: Props) {
  const { choices, makeValid, removeChoice } = props;
  return (
    <Dropdown
      isOpen={true}
      key={Date.now()} // Force Reinit
      toggleElement={
        <Button size="small" buttonType="muted" indicateDropdown>
          Trigger Dropdown
        </Button>
      }
    >
      <DropdownList>
        {choices &&
          choices.map(({ id, text, isValid }) => (
            <DropdownListItem key={id}>
              <RadioButtonField
                labelText={text}
                checked={isValid}
                inputProps={{
                  "data-testid": `make-choice-${id}-valid`,
                }}
                onChange={() => {
                  makeValid(id);
                }}
                id="choice-id"
              />
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
