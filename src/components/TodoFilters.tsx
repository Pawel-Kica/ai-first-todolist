import { TodoFilters as TodoFiltersType, Priority } from '@/types/todo';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Filter } from 'lucide-react';

interface TodoFiltersProps {
  filters: TodoFiltersType;
  onFiltersChange: (filters: TodoFiltersType) => void;
}

export const TodoFilters = ({ filters, onFiltersChange }: TodoFiltersProps) => {
  return (
    <Card className="mb-6 shadow-soft border border-border/50 bg-card">
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="h-4 w-4 text-primary" />
          <span className="font-medium">Filters</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="space-y-2">
            <Select
              value={filters.priority}
              onValueChange={(value) => onFiltersChange({ ...filters, priority: value as Priority | 'all' })}
            >
              <SelectTrigger className="border-border/50">
                <SelectValue placeholder="All Priorities" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priorities</SelectItem>
                <SelectItem value={Priority.HIGH}>High</SelectItem>
                <SelectItem value={Priority.MEDIUM}>Medium</SelectItem>
                <SelectItem value={Priority.LOW}>Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center space-x-3">
            <Checkbox
              id="showCompleted"
              checked={filters.showCompleted}
              onCheckedChange={(checked) =>
                onFiltersChange({ ...filters, showCompleted: !!checked })
              }
              className="data-[state=checked]:bg-gradient-primary data-[state=checked]:border-primary h-5 w-5"
            />
            <Label
              htmlFor="showCompleted"
              className="text-base font-medium cursor-pointer"
            >
              Show completed tasks
            </Label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};