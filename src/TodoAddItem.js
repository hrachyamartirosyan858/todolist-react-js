import { useState } from "react";
import "./TodoAddItem.css";

export function TodoAddItem({ onAdd, onAllCompletedChange }) {
  const [text, setText] = useState("");
  const [isChecked, setIschecked] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAdd(text);
        setText("");
      }}
    >
      <input
        className="all-todo-change"
        type="checkbox"
        onChange={(e) => {
          setIschecked(e.target.checked);
          onAllCompletedChange(isChecked);
        }}
      ></input>
      <input
        className="add-todo"
        placeholder="what needs to be done ?"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
    </form>
  );
}
