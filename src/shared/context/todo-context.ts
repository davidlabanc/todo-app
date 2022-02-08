import { createContext } from 'react';
import { TodoInterface } from '../../ts/interfaces/app_interfaces';
interface TodoContextInterface {
  todos: TodoInterface[];
  setCompleted: Function;
}

export const TodoContext = createContext<TodoContextInterface>({
  todos: [],
  setCompleted: () => { }
});
