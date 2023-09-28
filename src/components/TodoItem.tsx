import React from "react";
import styled from "styled-components";
import useTodoItem from "../hooks/useTodoItem";

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
  
  const {
    isEditing,
    newText,
    handleEdit,
    handleSave,
    handleToggle,
    handleDelete,
    handleTextChange,
    handleInputChange,
    handleDeleteClick,
  } = useTodoItem({
    initialText: todo.text,
    toggleTodo,
    deleteTodo,
    updateTodo,
    id: todo.id,
  });

  return (
    <Item
      completed={todo.completed}
      onClick={handleToggle}
    >
      <div>
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={handleTextChange}
            autoFocus
          />
        ) : (
          todo.text
        )}
      </div>
      <div>
        <button
          onClick={handleInputChange}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          onClick={handleDeleteClick}
        >
          Delete
        </button>
      </div>
    </Item>
  );
};

export default TodoItem;