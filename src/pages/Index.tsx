import { useTodos } from '@/hooks/useTodos';
import { TodoStats } from '@/components/TodoStats';
import { AddTaskForm } from '@/components/AddTaskForm';
import { TodoFilters } from '@/components/TodoFilters';
import { TodoItem } from '@/components/TodoItem';
import { CheckCircle, ListTodo } from 'lucide-react';

const Index = () => {
  const {
    todos,
    filters,
    stats,
    addTodo,
    toggleComplete,
    deleteTodo,
    setFilters,
  } = useTodos();

  return (
    <div className="min-h-screen bg-gradient-bg">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-primary rounded-xl shadow-medium">
              <ListTodo className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
              Beautiful Todo List
            </h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Organize your tasks with style and efficiency
          </p>
        </div>

        {/* Statistics */}
        <TodoStats stats={stats} />

        {/* Add Task Form */}
        <AddTaskForm onAddTask={addTodo} />

        {/* Filters */}
        <TodoFilters 
          filters={filters}
          onFiltersChange={setFilters}
        />

        {/* Tasks List */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">
              Your Tasks ({todos.length})
            </h2>
          </div>
          
          {todos.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                <ListTodo className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium text-muted-foreground mb-2">
                No tasks found
              </h3>
              <p className="text-muted-foreground">
                {filters.priority !== 'all' || !filters.showCompleted
                  ? 'Try adjusting your filters or add a new task.'
                  : 'Add your first task to get started!'}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggleComplete={toggleComplete}
                  onDelete={deleteTodo}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
