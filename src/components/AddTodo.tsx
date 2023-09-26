import React from 'react';
import styled from 'styled-components';

const InputBar = styled.input`
  box-sizing: border-box;
  font-size: 1.5em;
  padding: 10px;
  margin-right: 10px;
  width: 225px;
`;

const AddButton = styled.button`
  box-sizing: border-box;
  font-size: 1.5em;
  padding: 10px 20px;
`;


type AddTodoProps = {
  addTodo: (text: string) => void;
};

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [text, setText] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
      <form onSubmit={handleSubmit} style={{ display: 'flex', width: '100%' }}>
        <InputBar
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task"
        />
        <AddButton type="submit">Add</AddButton>
      </form>
  );
};

export default AddTodo;
