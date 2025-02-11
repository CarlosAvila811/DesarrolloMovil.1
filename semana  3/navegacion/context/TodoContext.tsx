import React, { createContext, useState } from 'react';

interface Todo {
  id: number;
  text: string;
}

interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
}

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: () => {},
});

export default function TodoProvider({ children }: { children: React.ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
}