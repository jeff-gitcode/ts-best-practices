import { createContext } from 'react';
import { TodoService } from './todo-service';

export const TodoContext = createContext(
    TodoService
);
