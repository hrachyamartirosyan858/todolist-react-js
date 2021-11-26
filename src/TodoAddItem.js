import { useState } from "react";
import { AddItemForm , ChangeAllCheckboxes , AddTodoText } from "./TodoAddItem.styled.js";


export function TodoAddItem({ onAdd, onAllCompletedChange }) {
  const [text, setText] = useState("");
  const [isChecked, setIschecked] = useState(false);

  return (
    <AddItemForm
      onSubmit={(e) => {
        e.preventDefault();
        onAdd(text);
        setText("");
      }}
    >
      <ChangeAllCheckboxes
        type="checkbox"
        onChange={(e) => {
          setIschecked(e.target.checked);
          onAllCompletedChange(isChecked);
        }}
      ></ChangeAllCheckboxes>
      <AddTodoText
        placeholder="what needs to be done ?"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></AddTodoText>
    </AddItemForm>
  );
}
