import React from "react";
import {
  Dropdown,
  Button,
  DropdownListItem,
  DropdownList,
  RadioButton,
  IconButton,
} from "@contentful/forma-36-react-components";
import { Choice } from "../App";

interface Props {
  choices: Choice[];
  makeValid: (choiceId: string) => void;
  removeChoice: (choiceId: string) => void;
}

export default function CustomDropDown(props: Props) {
  const { choices, makeValid, removeChoice } = props;
  const [isOpen, setOpen] = React.useState(true);
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
            <DropdownListItem key={id}>
              <RadioButton
                checked={isValid}
                labelText="valid answer"
                type="radio"
                onChange={() => {
                  makeValid(id);
                }}
              />
              {text}
              <IconButton
                onClick={() => removeChoice(id)}
                buttonType="negative"
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
