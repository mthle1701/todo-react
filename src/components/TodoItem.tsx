import React, { useState } from "react";
import styled from "styled-components";

type ItemProps = {
  completed: boolean;
};

const Item = styled.div<ItemProps>`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  width: 300px; // Ajout de la largeur
  border: 1px solid #ccc;
  text-align: center;
  padding: 10px;
  font-size: 1.5em;
  margin-top: 1rem;
`;

type Props = {
  todo: { id: number; text: string; completed: boolean };
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, text: string) => void;
};

const TodoItem: React.FC<Props> = ({
  todo,
  toggleTodo,
  deleteTodo,
  updateTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (newText !== todo.text) {
      updateTodo(todo.id, newText);
    }
    setIsEditing(false);
  };

  return (
    <Item
      completed={todo.completed}
      onClick={() => !isEditing && toggleTodo(todo.id)}
    >
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          autoFocus
        />
      ) : (
        todo.text
      )}
      <button
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo(todo.id);
        }}
        style={{ float: "right" }}
      >
        Delete
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          isEditing ? handleSave() : handleEdit();
        }}
        style={{ float: "right" }}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </Item>
  );
};

export default TodoItem;
