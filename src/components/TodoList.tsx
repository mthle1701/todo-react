import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";

type Props = {
  todos: { id: number; text: string; completed: boolean }[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, text: string) => void; // Ajout de cette ligne
};

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TodoList: React.FC<Props> = ({
  todos,
  toggleTodo,
  deleteTodo,
  updateTodo,
}) => {
  return (
    <ListWrapper>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </ListWrapper>
  );
};

export default TodoList;