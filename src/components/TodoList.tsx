import React from "react";
import TodoItem from "./TodoItem";
import styled from 'styled-components';

type Props = {
  todos: { id: number; text: string; completed: boolean }[];
  toggleTodo: (id: number) => void;
};

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
  return (
    <ListWrapper>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ListWrapper>
  );
};

export default TodoList;
