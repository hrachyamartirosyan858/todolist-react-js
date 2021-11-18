import './App.css';
import { useState } from 'react';
import { TodoList } from './TodoList';
import { TodoAddItem } from './TodoAddItem';
import { TodoFooter } from './TodoFooter';

function App() {

const [todos, setTodos] = useState([
  {
    id: Math.random(),
    text: "parapel",
    isCompleted: false
  },
  {
    id: Math.random(),
    text: "resume sarqel",
    isCompleted: false
  },
  {
    id: Math.random(),
    text: "ynduvel gorci",
    isCompleted: false
  }

])

  return (
    <div className="App">
    <p className="todo-title">todos</p>
    <div className="todo-frame">
      <TodoAddItem onAdd={(text) => setTodos([...todos, 
                                          {id: Math.random(),
                                            text: text,
                                            isCompleted: false}])}
                   onAllCompletedChange={(isChecked) => setTodos(todos.map((todo)=>{
                      if(isChecked){
                       return {
                         ...todo,
                         isCompleted: false
                       }
                      } else {
                        return {
                         ...todo,
                         isCompleted: true
                       }
                      }
                    }))}
                 
      />
      <TodoList todos={todos} 
                onDelete={(todo) => {setTodos(todos.filter((t)=>t.id !== todo.id))}}
                onChange={(changedTodo) => {setTodos(todos.map((todo) => {
                  if(changedTodo.id === todo.id){
                      return changedTodo;
                  } else {
                    return todo;
                  }
                }))}} />
      <TodoFooter todos={todos} onClear={() => {setTodos(todos.filter((todo) => !todo.isCompleted))}}/>
      </div>
    </div>
  );
}

export default App;
