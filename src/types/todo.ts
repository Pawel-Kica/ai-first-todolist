export interface Todo {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
  createdAt: string;
}

export interface TodoStats {
  total: number;
  pending: number;
  completed: number;
}

export interface TodoFilters {
  priority: string;
  showCompleted: boolean;
}