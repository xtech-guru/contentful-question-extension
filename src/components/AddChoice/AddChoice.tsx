import * as React from "react";
import { TextInput } from "@contentful/forma-36-react-components";

interface Props {
  onSubmit: (text: string) => void;
}

export function AddChoice(props: Props) {
  const [text, setText] = React.useState("");

  return (
    <div className="add-choice-container">
      <TextInput
        value={text}
        placeholder="add the choice's text and press return"
        role="add-choice-input"
        onChange={(event) => {
          setText(event.currentTarget.value);
        }}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            props.onSubmit(text);
            setText("");
          }
        }}
      />
    </div>
  );
}
