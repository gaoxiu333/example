import { useRecoilState } from "recoil";
import {
  AppState,
  Todo,
  TodoListType,
  recoilState,
} from "../../../dataStructure";
import { createRef, useEffect, useState } from "react";
import { Layout } from "./style";

interface Props {
  todo: Todo;
}

interface State {
  onEdit: boolean;
}

const Item: React.FC<Props> = ({ todo }) => {
  const [appState, setAppState] = useRecoilState<AppState>(recoilState);
  const editInput = createRef<HTMLInputElement>();
  const init: State = { onEdit: false };
  const [state, setState] = useState(init);
  const onClick = (): void => {
    setState({
      onEdit: true,
    });
  };
  const onBlurEdit = (e: React.FocusEvent<HTMLInputElement>): void => {
    if (e.currentTarget.value.trim().length > 0) {
      setState({
        onEdit: false,
      });
    } else {
      removeItem(todo.id);
    }
  };
  const submitEditText = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter" || e.key === "Escape") {
      if (e.currentTarget.value.trim().length > 0) {
        setState({ onEdit: false });
      }
    }
  };

  const SwitchStyle = (t: Todo, onEdit: boolean): string => {
    switch (true) {
      case onEdit && t.completed:
        return "completed editing";
      case onEdit && !t.completed:
        return "editing";
      case !onEdit && t.completed:
        return "completed";
      case !onEdit && !t.completed:
        return "";
      default:
        return "";
    }
  };

  const reverseCompleted = (id: Todo["id"]): void => {
    const toggled: TodoListType = appState.todoList.map((t) => {
      if (t.id === id) {
        return { ...t, completed: !t.completed };
      } else {
        return t;
      }
    });
    setAppState({ todoList: toggled });
  };

  const removeItem = (terminate: Todo["id"]): void => {
    const removed: TodoListType = appState.todoList.filter(
      (t: Todo): boolean => t.id !== terminate
    );
    setAppState({ todoList: removed });
  };

  const handleTodoTextEdit = (
    e: React.ChangeEvent<HTMLInputElement>,
    onEdit: Todo["id"]
  ): void => {
    const edited = appState.todoList.map((t: Todo) => {
      if (t.id === onEdit) {
        return { ...t, bodyText: e.target.value };
      } else {
        return t;
      }
      setAppState({ todoList: edited });
    });
  };

  useEffect(() => {
    if (state.onEdit === true && editInput.current !== null) {
      editInput.current.focus();
    }
  }, [editInput, state.onEdit]);

  return (
    <Layout data-cy="todo-item">
      <li className={SwitchStyle(todo, state.onEdit)} data-testid="todo-item">
        <div className="view" data-testid="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={() => reverseCompleted(todo.id)}
            data-cy="todo-item-checkbox"
            data-testid="todo-item-complete-check"
          />
          <label
            onClick={onClick}
            data-cy="todo-item-text"
            data-testid="todo-body-text"
          >
            {todo.bodyText}
          </label>
          <button
            className="destroy"
            onClick={() => removeItem(todo.id)}
            data-cy="delete-todo-btn"
            data-testid="delete-todo-btn"
          ></button>
        </div>
        <input
          ref={editInput}
          onBlur={(e: React.FocusEvent<HTMLInputElement>) => onBlurEdit(e)}
          className="edit"
          value={todo.bodyText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleTodoTextEdit(e, todo.id)
          }
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
            submitEditText(e)
          }
          data-cy="todo-edit-input"
          data-testid="todo-edit-input"
        />
      </li>
    </Layout>
  );
};
export { Item };
