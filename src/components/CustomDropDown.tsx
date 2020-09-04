import React from "react";
import {
  Dropdown,
  Button,
  DropdownListItem,
  DropdownList,
  RadioButton,
} from "@contentful/forma-36-react-components";
import { Choice } from "../App";

interface Props {
  choices: Choice[];
  makeValid: (choiceId: string) => void;
}

export default function CustomDropDown(props: Props) {
  const { choices, makeValid } = props;
  const [isOpen, setOpen] = React.useState(false);
  return (
    <Dropdown
      isOpen={isOpen}
      onClose={() => setOpen(false)}
      key={Date.now()} // Force Reinit
      toggleElement={
        <Button
          size="small"
          buttonType="muted"
          indicateDropdown
          onClick={() => setOpen(!isOpen)}
        >
          Trigger Dropdown
        </Button>
      }
    >
      <DropdownList>
        {choices &&
          choices.map(({ id, text, isValid }) => (
            <DropdownListItem onClick={() => undefined}>
              <RadioButton
                checked={isValid}
                labelText="valid answer"
                type="radio"
                onChange={() => {
                  makeValid(id);
                }}
              />
              {text}
            </DropdownListItem>
          ))}
      </DropdownList>
    </Dropdown>
  );
}
