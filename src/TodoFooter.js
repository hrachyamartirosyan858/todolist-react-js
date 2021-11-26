import { TodoFooterLine , CompletedTodosCounter ,  ClearCompletedButton } from "./TodoFooter.styled.js"

export function TodoFooter({ todos, onClear }) {
  const completed = todos.filter((todo) => todo.isCompleted);

  return (
    <TodoFooterLine>
      <CompletedTodosCounter >
        {completed.length}/{todos.length} is completed
      </CompletedTodosCounter>
      <ClearCompletedButton onClick={onClear}>
        Clear completed
      </ClearCompletedButton>
    </TodoFooterLine>
  );
}
