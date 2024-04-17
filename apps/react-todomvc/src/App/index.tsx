import { createRef } from "react";
import { Todo, recoilState } from "../dataStructure";
import { Layout } from "./styles";
import { useRecoilState } from "recoil";
import { UUID } from "../functions";

const NewTodoInput: React.FC = () => {
  const [appState, setAppState] = useRecoilState(recoilState);
  const textInput: React.RefObject<HTMLInputElement> =
    createRef(HTMLInputElement);

  function addTodo(e): void {
    if (textInput.current === null) return;
    if (e.key === "Enter" && textInput.current.value.trim().length > 0) {
      const todo: Todo = {
        id: UUID(),
        bodyText: textInput.current.value,
        complted: false,
      };
      setAppState({
        todoList: [todo, ...appState.todoList],
      });
      textInput.current.value = "";
    }
  }
  return (
    <Layout>
      <header className="header">
        <h1>todos</h1>
        <input
          type="text"
          className="new-todo"
          placeholder="你今天做什么？"
          ref={textInput}
          onKeyPress={(e) => addTodo(e)}
          data-testid="new-todo-input-text"
          data-cy="new-todo-input-text"
          autoFocus
        />
      </header>
    </Layout>
  );
};
export { NewTodoInput };
