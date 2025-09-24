import { useState, useEffect } from 'react';
import { Todo, TodoStats, TodoFilters } from '@/types/todo';

const STORAGE_KEY = 'beautifulTodos';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filters, setFilters] = useState<TodoFilters>({
    priority: 'all',
    showCompleted: true,
  });

  // Load todos from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setTodos(JSON.parse(stored));
      } catch (error) {
        console.error('Error parsing stored todos:', error);
      }
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todoData: Omit<Todo, 'id' | 'completed' | 'createdAt'>) => {
    const newTodo: Todo = {
      ...todoData,
      id: crypto.randomUUID(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos(prev => [newTodo, ...prev]);
  };

  const toggleComplete = (id: string) => {
    setTodos(prev => prev.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  // Get filtered todos
  const getFilteredTodos = (): Todo[] => {
    return todos.filter(todo => {
      // Priority filter
      if (filters.priority !== 'all' && todo.priority !== filters.priority) {
        return false;
      }

      // Completed filter
      if (!filters.showCompleted && todo.completed) {
        return false;
      }

      return true;
    });
  };

  // Get statistics
  const getStats = (): TodoStats => {
    const total = todos.length;
    const completed = todos.filter(todo => todo.completed).length;
    const pending = total - completed;

    return { total, pending, completed };
  };

  return {
    todos: getFilteredTodos(),
    allTodos: todos,
    filters,
    stats: getStats(),
    addTodo,
    toggleComplete,
    deleteTodo,
    setFilters,
  };
};