import { useState, useEffect } from 'react';
import { Todo } from './todo-model';
import { TodoService } from './todo-service';
import useInject from '../di/useInject';

function TodoList() {
    const [todos, setTodos] = useState<Todo[]>([]);
    // const todoService = useContext(TodoContext);
    const todoService = useInject<typeof TodoService>('TodoService');

    useEffect(() => {
        async function fetchTodos() {
            try {
                const todos: Todo[] = await todoService.getTodos(); // Call TodoService to get todos
                setTodos(todos);
            } catch (error) {
                console.error(error);
            }
        }
        fetchTodos();
    }, [todoService]);

    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>{todo.id}, {todo.title}</li>
            ))}
        </ul>
    );
}

export default TodoList;