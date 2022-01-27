import { useContext } from 'react';
import styled from 'styled-components';

import { TodoContext } from '../../shared/context/todo-context';

import TodoItem from './TodoItem';

function Todo() {
  const { todos } = useContext(TodoContext)

  return (
    <>
      <Header>To do list</Header>
      {
        todos.map((todo, index) => (
          <TodoItem key={todo.id} todo={todo} number={index} />
        ))
      }
    </>
  );
}

export default Todo

const Header = styled.div`
  font-size: 2em;
  font-weight: 600;
  padding-bottom: 40px;
  color: #474b54;
`;