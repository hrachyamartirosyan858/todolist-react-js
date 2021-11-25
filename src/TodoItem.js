import "./TodoItem.css";
import {Item , Input , Label , Span , Button} from "./TodoItem.styled.js"

export function TodoItem({ todo, onChange, onDelete }) {
  return (
    <Item className="item">
      <Label>
        <Input
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
        <Span
          className={todo.isCompleted && "line-through"}
        >
          {todo.text}
        </Span>
        <Button onClick={() => onDelete(todo)}>
          X
        </Button>
      </Label>
    </Item>
  );
}
