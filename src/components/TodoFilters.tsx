import { TodoFilters as TodoFiltersType } from '@/types/todo';
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
            <Label className="text-sm font-medium">Filter by Priority</Label>
            <Select 
              value={filters.priority} 
              onValueChange={(value) => onFiltersChange({ ...filters, priority: value })}
            >
              <SelectTrigger className="border-border/50">
                <SelectValue placeholder="All Priorities" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priorities</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox
              id="showCompleted"
              checked={filters.showCompleted}
              onCheckedChange={(checked) => 
                onFiltersChange({ ...filters, showCompleted: !!checked })
              }
              className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <Label 
              htmlFor="showCompleted" 
              className="text-sm font-medium cursor-pointer"
            >
              Show completed tasks
            </Label>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};