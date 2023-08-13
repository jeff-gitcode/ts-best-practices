import React from 'react';
import { Container, ContainerContext } from './container';

interface ContainerProviderProps {
    container: Container;
    children: React.ReactNode;
}

// Define a component that provides the container to its children
/**
 * ContainerProvider is a React component that provides a container to all
 * children components.
 * @param container The container to provide to children components.
 * @param children The children components.
 * @constructor
 * @example
 * ```tsx
 * const container = new Container();
 * const App = () => (
 *  <ContainerProvider container={container}>
 *   <MyComponent />
 * </ContainerProvider>
 * );
 * ```
 */
const ContainerProvider: React.FC<ContainerProviderProps> = ({
    container,
    children,
}) => {
    return (
        <ContainerContext.Provider value={container}>
            {children}
        </ContainerContext.Provider>
    );
};

export default ContainerProvider;