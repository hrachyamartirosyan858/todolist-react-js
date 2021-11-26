import "./App.css";
import { useState } from "react";
import { TodoList } from "./TodoList";
import { TodoAddItem } from "./TodoAddItem";
import { TodoFooter } from "./TodoFooter";

let nextId = 0

function App() {
  const [todos, setTodos] = useState([
    {
      id: nextId++,
      text: "parapel",
      isCompleted: false,
    },
    {
      id: nextId++,
      text: "resume sarqel",
      isCompleted: false,
    },
    {
      id: nextId++,
      text: "ynduvel gorci",
      isCompleted: false,
    },
  ]);

 function handleOnAdd(text){
  setTodos([
    ...todos,
    { id: nextId++, text: text, isCompleted: false },
  ])
 }

function handleOnAllCompletedChange(isChecked){
  setTodos(
    todos.map((todo) => {
      if (isChecked) {
        return {
          ...todo,
          isCompleted: false,
        };
      } else {
        return {
          ...todo,
          isCompleted: true,
        };
      }
    })
  )
}

function handleChangeTodo(changedTodo){
  setTodos(
    todos.map((todo) => {
      if (changedTodo.id === todo.id) {
        return changedTodo;
      } else {
        return todo;
      }
    })
  );
}

  return (
    <div className="App">
      <p className="todo-title">todos</p>
      <div className="todo-frame">
        <TodoAddItem
          onAdd={handleOnAdd}
          onAllCompletedChange={handleOnAllCompletedChange}
        />
        <TodoList
          todos={todos}
          onDelete={(todo) => {
            setTodos(todos.filter((t) => t.id !== todo.id));
          }}
          onChange={handleChangeTodo}
        />
        <TodoFooter
          todos={todos}
          onClear={() => {
            setTodos(todos.filter((todo) => !todo.isCompleted));
          }}
        />
      </div>
    </div>
  );
}

export default App;
