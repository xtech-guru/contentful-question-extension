import { TextInput } from "@contentful/forma-36-react-components";
import * as React from "react";

interface Props {
  text: string;
  editText: (newText: string) => void;
}

export function InputEdit({ text, editText }: Props) {
  const [isEditMode, setEditMode] = React.useState<boolean>(false);

  return isEditMode ? (
    <Input
      text={text}
      editText={editText}
      setEditMode={(v: boolean) => {
        setEditMode(v);
      }}
    />
  ) : (
    <span
      onClick={(e) => {
        e.stopPropagation();
        setEditMode(true);
      }}
      style={{ cursor: "text" }}
    >
      {text}
    </span>
  );
}

function Input({
  text,
  editText,
  setEditMode,
}: Props & { setEditMode: (v: boolean) => void }) {
  const divEdit = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function clickEvent(e: MouseEvent) {
      if (!divEdit?.current?.contains(e.target as HTMLElement)) {
        setEditMode(false);
      }
    }

    document.addEventListener("click", clickEvent);

    return function removeEvent() {
      document.removeEventListener("click", clickEvent);
    };
  }, [setEditMode]);

  return (
    <div style={{ display: "inline-block" }} ref={divEdit}>
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
  );
}
