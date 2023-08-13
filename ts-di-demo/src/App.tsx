import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './todo/todo-list'
import { Container } from './di/container'
import ContainerProvider from './di/ContainerProvider'

// const MyComponent = () => {
//   const todoService = useInject<typeof TodoService>('TodoService');
//   return <div>{todoService.getTodos}</div>; // Output: 'bar'
// };

// const container = {
//   registry: {
//     myService: MyService()
//   },
//   resolve(identifier) {
//     if (!this.registry.hasOwnProperty(identifier)) {
//       throw new Error(`Object with identifier ${identifier} not found in container`);
//     }
//     return this.registry[identifier];
//   }
// };



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ContainerProvider container={Container}>
        <TodoList />
      </ContainerProvider>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

