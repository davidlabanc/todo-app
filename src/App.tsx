import React from "react";
import styled from 'styled-components';
import { Routes, Route } from 'react-router'

import { TodoContext } from './shared/context/todo-context';
import { useTodo } from './shared/hooks/todo-hook';

import Description from './views/Description/Description';
import Todo from './views/Todo/Todo';

// rework this into regular api call, feel free to use any open api
var todos = (): Promise<{ id: string; title: string; completed: Boolean}[]> => {
  return fetch('https://jsonplaceholder.typicode.com/users/1/todos')
    .then((response) => response.json())
};

function App() {
  const {items, setTodos, setCompleted} = useTodo()

  React.useEffect(() => {
    (async () => {
      var awaitedTodos = await todos();

      setTodos(awaitedTodos)
    })()
  }, [])

  let routes = (
    <Routes>
      <Route path="/detail/:id" element={<Description />} />
      <Route path="/" element={<Todo />} />
    </Routes>
  )

  return (
    <TodoContext.Provider value={{
      todos: items, setCompleted
    }}>
      <Container>
        <TodoContainer>
          {routes}
        </TodoContainer>
      </Container>
    </TodoContext.Provider>
  );
}

export default React.memo(App);

const TodoContainer = styled.div`
  border-radius: 20px;
  padding: 50px;
  min-width: 20%;
  width: max-content;
  margin: 200px auto;
  border-radius: 50px;
  background: #efefef;
  box-shadow: 12px 12px 24px #cbcbcb, -12px -12px 24px #ffffff;
  min-height: 200px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #efefef;
  min-height: 100vh;
`;