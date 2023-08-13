import { createContext } from 'react';
import { TodoService } from '../todo/todo-service';

interface Container {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    registry: Record<string, any>;
    resolve<T>(identifier: string): T;
}

// Create a new context for the container
const ContainerContext = createContext<Container | null>(null);

// Container implementation
const Container: Container = {
    registry: {
        TodoService
    },
    resolve<T>(identifier: string): T {
        // eslint-disable-next-line no-prototype-builtins
        if (!this.registry.hasOwnProperty(identifier)) {
            throw new Error(
                `Object with identifier ${identifier} not found in container`,
            );
        }
        return this.registry[identifier];
    },
};

export { Container, ContainerContext };