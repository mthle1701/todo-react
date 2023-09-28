import React from "react";
import styled from "styled-components";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import useTodos from "./hooks/useTodos";

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
  const { todos, addTodo, toggleTodo, deleteTodo, updateTodo } = useTodos();

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
