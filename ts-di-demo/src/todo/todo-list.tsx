import { useState, useEffect } from 'react';
import { Todo } from './todo-model';
import { TodoService } from './todo-service';

function TodoList() {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        async function fetchTodos() {
            try {
                const todos: Todo[] = await TodoService.getTodos(); // Call TodoService to get todos
                setTodos(todos);
            } catch (error) {
                console.error(error);
            }
        }
        fetchTodos();
    }, []);

    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>{todo.id}, {todo.title}</li>
            ))}
        </ul>
    );
}

export default TodoList;