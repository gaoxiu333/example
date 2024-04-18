import { createRef } from "react";
import { AppState, Todo, recoilState } from "../../dataStructure";
import { Layout } from "./style";
import { useRecoilState } from "recoil";
import { UUID } from "../../functions";

const NewTodoTextInput: React.FC = () => {
  const [appState, setAppState] = useRecoilState<AppState>(recoilState);
  const textInput: React.RefObject<HTMLInputElement> =
    createRef<HTMLInputElement>();
  function addTodo(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (textInput.current === null) return;
    if (e.key === "Enter" && textInput.current.value.trim().length > 0) {
      const todo: Todo = {
        id: UUID(),
        bodyText: textInput.current.value,
        completed: false,
      };
      setAppState({ todoList: [todo, ...appState.todoList] });
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
          placeholder="你今天做什么呢？"
          ref={textInput}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => addTodo(e)}
          data-testid="new-todo-input-text"
          data-cy="new-todo-input-text"
          autoFocus
        />
      </header>
    </Layout>
  );
};

export { NewTodoTextInput };
