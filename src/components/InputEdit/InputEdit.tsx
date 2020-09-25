import { TextInput } from "@contentful/forma-36-react-components";
import * as React from "react";

interface Props {
  text: string;
  editText: (newText: string) => void;
}

export function InputEdit({ text, editText }: Props) {
  const [isEditMode, setEditMode] = React.useState<boolean>(false);

  return isEditMode ? (
    <div style={{ display: "inline-block" }}>
      <TextInput
        value={text}
        onChange={(e) => {
          editText(e.currentTarget.value);
        }}
        onBlur={() => {
          setEditMode(false);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setEditMode(false);
          }
        }}
      />
    </div>
  ) : (
    <span
      onClick={() => {
        setEditMode(true);
      }}
      style={{ cursor: "text" }}
    >
      {text}
    </span>
  );
}
