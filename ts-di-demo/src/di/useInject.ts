import { Container } from './container';
import useContainer from './useContainer';

// Define a hook to inject dependencies from the container
// Custom hook to get an instance from the container
const useInject = <T>(identifier: string): T => {
    const container: Container = useContainer();
    return container.resolve<T>(identifier);
};

export default useInject;