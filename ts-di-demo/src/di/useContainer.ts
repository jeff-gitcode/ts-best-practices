import { useContext } from 'react';
import { Container, ContainerContext } from './container';

// Define a hook to access the container from within a component
// Custom hook to get the container instance
const useContainer = (): Container => {
    const container = useContext(ContainerContext);
    if (!container) {
        throw new Error(
            'Container not found. Make sure to wrap your components with a ContainerProvider.',
        );
    }
    return container;
};

export default useContainer;