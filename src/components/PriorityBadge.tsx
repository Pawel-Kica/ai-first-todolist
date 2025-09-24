import { Badge } from '@/components/ui/badge';
import { Priority } from '@/types/todo';

interface PriorityBadgeProps {
  priority: Priority;
}

export const PriorityBadge = ({ priority }: PriorityBadgeProps) => {
  const getVariant = () => {
    switch (priority) {
      case Priority.HIGH:
        return 'destructive';
      case Priority.MEDIUM:
        return 'secondary';
      case Priority.LOW:
        return 'outline';
      default:
        return 'secondary';
    }
  };

  const getColor = () => {
    switch (priority) {
      case Priority.HIGH:
        return 'bg-danger text-danger-foreground';
      case Priority.MEDIUM:
        return 'bg-warning text-warning-foreground';
      case Priority.LOW:
        return 'bg-success text-success-foreground';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <Badge className={`${getColor()} capitalize font-medium px-2 py-1 text-xs`}>
      {priority}
    </Badge>
  );
};