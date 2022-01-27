import { createContext } from 'react';

interface TodoContextInterface {
  todos: { id: string; title: string; completed: Boolean }[];
  setCompleted: Function;
}

export const TodoContext = createContext<TodoContextInterface>({
  todos: [],
  setCompleted: () => { }
});
