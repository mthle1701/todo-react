// useTodoItem.ts
import { useState } from "react";

type UseTodoItemProps = {
  initialText: string;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, text: string) => void;
  id: number;
};

const useTodoItem = ({
  initialText,
  toggleTodo,
  deleteTodo,
  updateTodo,
  id,
}: UseTodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(initialText);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (newText !== initialText) {
      updateTodo(id, newText);
    }
    setIsEditing(false);
  };

  const handleToggle = () => {
    if (!isEditing) {
      toggleTodo(id);
    }
  };

  const handleDelete = () => {
    deleteTodo(id);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewText(e.target.value);
  };

  const handleInputChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    isEditing ? handleSave() : handleEdit();
  };

  const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    handleDelete();
  };

  return {
    isEditing,
    newText,
    setNewText,
    handleEdit,
    handleSave,
    handleToggle,
    handleDelete,
    handleTextChange,
    handleInputChange,
    handleDeleteClick,
  };
};

export default useTodoItem;
