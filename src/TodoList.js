import { TodoItem } from "./TodoItem";
import { TodoListBox } from "./TodoList.styled";

export function TodoList({ todos, onChange, onDelete }) {
  return (
    <TodoListBox>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onChange={onChange}
          />
        );
      })}
    </TodoListBox>
  );
}
