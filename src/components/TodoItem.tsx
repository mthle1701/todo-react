import React from "react";
import styled from "styled-components";

type ItemProps = {
  completed: boolean;
};

const Item = styled.div<ItemProps>`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  width: 300px;  // Ajout de la largeur
  border: 1px solid #ccc;
  text-align: center;
  padding: 10px;
  font-size: 1.5em;
  margin-top : 1rem;
`;


type Props = {
  todo: { id: number; text: string; completed: boolean };
  toggleTodo: (id: number) => void;
};

const TodoItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <Item completed={todo.completed} onClick={() => toggleTodo(todo.id)}>
      {todo.text}
    </Item>
  );
};

export default TodoItem;
