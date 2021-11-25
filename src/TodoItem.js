import "./TodoItem.css";
import {TodoItemDiv , TodoItemIsCompletedInput , TodoItemLabel , TextTodoSpan , DeleteTodoButton} from "./TodoItem.styled.js"

export function TodoItem({ todo, onChange, onDelete }) {
  return (
    <TodoItemDiv>
      <TodoItemLabel>
        <TodoItemIsCompletedInput
          className="item-isCompleted"
          type="checkbox"
          checked={todo.isCompleted}
          onChange={(e) => {
            onChange({
              ...todo,
              isCompleted: e.target.checked,
            });
          }}
        />
        <TextTodoSpan
          className={todo.isCompleted && "line-through"}
        >
          {todo.text}
        </TextTodoSpan>
        <DeleteTodoButton onClick={() => onDelete(todo)}>
          X
        </DeleteTodoButton>
      </TodoItemLabel>
    </TodoItemDiv>
  );
}
