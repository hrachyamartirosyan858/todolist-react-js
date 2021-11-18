import "./TodoItem.css"

export function TodoItem({todo, onChange,  onDelete}){
    
    return (
        <div className="item">
           <label className="item-label"> 
                <input className="item-isCompleted" type="checkbox" checked={todo.isCompleted} onChange={(e) => {
                    onChange({
                        ...todo,
                        isCompleted: e.target.checked
                    })
                }}/>
                <span className={todo.isCompleted ? "item-text line-through" : "item-text"} >{todo.text}</span>
                <button className="item-delete" onClick={() => onDelete(todo)}>X</button>
            </label>
        </div>
    )
}