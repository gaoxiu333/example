import { useRecoilValue } from "recoil";
import { AppState, LocalStorageKey, recoilState } from "../dataStructure";
import { useEffect } from "react";
import { Layout } from "./styles";
import { NewTodoTextInput } from "./NewTodoInput/index";
import { TodoList } from "./TodoList";
import { UnderBar } from "./UnderBar";

const TodoMVC: React.FC = () => {
  const appState = useRecoilValue<AppState>(recoilState);
  useEffect((): void => {
    window.localStorage.setItem(
      LocalStorageKey.APP_STATE,
      JSON.stringify(appState)
    );
  }, [appState]);
  return (
    <Layout>
      <section className="todoapp">
        <NewTodoTextInput />
        {appState.todoList.length ? (
          <>
            <TodoList />
            <UnderBar />
          </>
        ) : null}
      </section>
    </Layout>
  );
};

export { TodoMVC };
