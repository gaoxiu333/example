import { useRecoilState } from "recoil";
import { AppState, Todo, recoilState } from "../../dataStructure";
import { Layout } from "./style";
import FilterLink from "./FilterLink";

export const UnderBar: React.FC = () => {
  const [appState, setAppState] = useRecoilState<AppState>(recoilState);
  const completed: number = appState.todoList.filter(
    (t) => t.completed === true
  ).length;
  const backlog: number = appState.todoList.filter(
    (t) => t.completed === false
  ).length;
  function clearCompleted(): void {
    setAppState({
      todoList: appState.todoList.filter((t: Todo) => !t.completed),
    });
  }
  return (
    <Layout>
      <footer className="footer">
        <span className="todo-count">
          <strong data-cy="remaining-uncompleted-todo-count">{backlog}</strong>{" "}
          item left
        </span>
        <FilterLink></FilterLink>
        {completed > 0 && (
          <button
            onClick={clearCompleted}
            className="clear-completed"
            data-cy="clear-completed-button"
          >
            Clear completed
          </button>
        )}
      </footer>
    </Layout>
  );
};
