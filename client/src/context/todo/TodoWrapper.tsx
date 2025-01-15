import { PropsWithChildren } from 'react';
import TodoProvider from './TodoProvider'

function TodoWrapper({ children }: PropsWithChildren) {
  return (
    <TodoProvider>
      {children}
    </TodoProvider>
  )
}

export default TodoWrapper
