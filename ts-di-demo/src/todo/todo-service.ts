import { Todo } from "./todo-model";

export const TodoService = {
    async getTodos(): Promise<Todo[]> {
        return [{
            id: '1',
            title: 'Todo 1',
            notes: 'Notes 1',
            startDate: '2020-01-01',
            endDate: '2020-01-02',
            completed: false
        }, {
            id: '2',
            title: 'Todo 2',
            notes: 'Notes 2',
            startDate: '2020-01-01',
            endDate: '2020-01-02',
            completed: false
        }
        ];
    }
};