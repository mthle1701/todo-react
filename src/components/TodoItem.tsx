import React, { useState } from "react";
import styled from "styled-components";

type ItemProps = {
  completed: boolean;
};

const Item = styled.div<ItemProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  width: 300px;
  border: 1px solid #ccc;
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
      <div>
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
      </div>
      <div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            isEditing ? handleSave() : handleEdit();
          }}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            deleteTodo(todo.id);
          }}
        >
          Delete
        </button>
      </div>
    </Item>
  );
};

export default TodoItem;
