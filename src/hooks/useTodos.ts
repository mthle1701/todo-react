import { useReducer } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type State = Todo[];

type Action =
  | { type: "ADD_TODO"; text: string }
  | { type: "TOGGLE_TODO"; id: number }
  | { type: "DELETE_TODO"; id: number }
  | { type: "UPDATE_TODO"; id: number; newText: string };

const todoReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), text: action.text, completed: false },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    case "UPDATE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, text: action.newText } : todo
      );
    default:
      throw new Error("Unhandled action type");
  }
};

const useTodos = () => {
  const [state, dispatch] = useReducer(todoReducer, []);

  const addTodo = (text: string) => {
    dispatch({ type: "ADD_TODO", text });
  };

  const toggleTodo = (id: number) => {
    dispatch({ type: "TOGGLE_TODO", id });
  };

  const deleteTodo = (id: number) => {
    dispatch({ type: "DELETE_TODO", id });
  };

  const updateTodo = (id: number, newText: string) => {
    dispatch({ type: "UPDATE_TODO", id, newText });
  };

  return {
    todos: state,
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodo,
  };
};

export default useTodos;
