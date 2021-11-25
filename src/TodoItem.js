import "./TodoItem.css";
import { CompleteTodoCheckbox , TodoItemLine , TextTodoText , DeleteTodoButton} from "./TodoItem.styled.js"

export function TodoItem({ todo, onChange, onDelete }) {
  return (
      <TodoItemLine>
        <CompleteTodoCheckbox
          type="checkbox"
          checked={todo.isCompleted}
          onChange={(e) => {
            onChange({
              ...todo,
              isCompleted: e.target.checked,
            });
          }}
        />
        <TextTodoText
          className={todo.isCompleted && "line-through"}
        >
          {todo.text}
        </TextTodoText>
        <DeleteTodoButton onClick={() => onDelete(todo)}>
          X
        </DeleteTodoButton>
      </TodoItemLine>
  );
}
