import { Todo } from '@/types/todo';
import { PriorityBadge } from './PriorityBadge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Trash2, Calendar } from 'lucide-react';

interface TodoItemProps {
  todo: Todo;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem = ({ todo, onToggleComplete, onDelete }: TodoItemProps) => {
  const formattedDate = todo.dueDate
    ? new Date(todo.dueDate).toLocaleDateString(undefined, {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      })
    : null;

  const isOverdue = todo.dueDate && new Date(todo.dueDate) < new Date() && !todo.completed;

  return (
    <Card className={`shadow-soft border transition-all duration-300 hover:shadow-medium animate-fade-in ${
      todo.completed 
        ? 'bg-success-light/30 border-success/20' 
        : isOverdue 
        ? 'bg-danger-light/30 border-danger/20'
        : 'bg-card border-border/50'
    }`}>
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <Checkbox
            checked={todo.completed}
            onCheckedChange={() => onToggleComplete(todo.id)}
            className="mt-1 data-[state=checked]:bg-success data-[state=checked]:border-success"
          />
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className={`font-semibold text-card-foreground transition-all ${
                todo.completed ? 'line-through opacity-60' : ''
              }`}>
                {todo.title}
              </h3>
              <div className="flex items-center gap-2 flex-shrink-0">
                <PriorityBadge priority={todo.priority} />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onDelete(todo.id)}
                  className="h-8 w-8 p-0 text-muted-foreground hover:text-danger hover:bg-danger-light/20"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {todo.description && (
              <p className={`text-sm text-muted-foreground mb-3 ${
                todo.completed ? 'line-through opacity-60' : ''
              }`}>
                {todo.description}
              </p>
            )}
            
            {formattedDate && (
              <div className={`flex items-center gap-1 text-xs text-muted-foreground ${
                isOverdue ? 'text-danger font-medium' : ''
              }`}>
                <Calendar className="h-3 w-3" />
                <span>{formattedDate}</span>
                {isOverdue && <span className="ml-1">(Overdue)</span>}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};