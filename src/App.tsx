import React, { useState } from "react";
import styled from "styled-components";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Header from "./components/Header";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; // Alignement en haut de la page
  height: 100vh;
  margin: 0;
  padding: 0;
`;

const ContentWrapper = styled.div`
  width: 320px; // Largeur définie
  text-align: center;
`;

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id: number, newText: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <AppWrapper>
      <Header />
      <ContentWrapper>
        <AddTodo addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      </ContentWrapper>
    </AppWrapper>
  );
};

export default App;
