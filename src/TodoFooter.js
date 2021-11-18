import "./TodoFooter.css"

export function TodoFooter({todos, onClear}){

    const completed = todos.filter((todo) => (todo.isCompleted))

    return (
        <div className="todo-footer">
            <span className="completed-count">{completed.length}/{todos.length} is completed</span>
            <button className="clear-completed" onClick={onClear}>Clear completed</button>
        </div>
    )
}