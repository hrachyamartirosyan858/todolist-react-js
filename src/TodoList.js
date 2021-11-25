import { TodoItem } from "./TodoItem";
import "./TodoList.css";

export function TodoList({ todos, onChange, onDelete }) {
  return (
    <div className="todo-list">
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onChange={onChange} />;
      })}
    </div>
  );
}
