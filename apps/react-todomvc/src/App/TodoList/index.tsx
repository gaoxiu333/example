import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { AppState, Todo, recoilState } from "../../dataStructure";
import { Layout } from "./style";
import { Item } from "./Item";

const TodoList: React.FC = () => {
  const { pathname } = useLocation();
  const [appState, setAppState] = useRecoilState<AppState>(recoilState);
  function toggleAllCheckbox(e: React.ChangeEvent<HTMLInputElement>): void {
    setAppState({
      todoList: appState.todoList.map(
        (t: Todo): Todo => ({ ...t, completed: e.target.checked })
      ),
    });
  }
  return (
    <Layout>
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkboc"
          onChange={toggleAllCheckbox}
          data-cy="toggle-all-btn"
          data-testid="toggle-all-btn"
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list" data-testid="todo-list">
          {appState.todoList
            .filter((t: Todo): boolean => {
              switch (pathname) {
                case "/":
                  return true;
                case "/active":
                  return !t.completed;
                case "/completed":
                  return t.completed;
                default:
                  return true;
              }
            })
            .map((t: Todo) => {
              return <Item key={t.id} todo={t}></Item>;
            })}
        </ul>
      </section>
    </Layout>
  );
};

export { TodoList };
