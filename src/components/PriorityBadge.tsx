import { Badge } from '@/components/ui/badge';

interface PriorityBadgeProps {
  priority: 'low' | 'medium' | 'high';
}

export const PriorityBadge = ({ priority }: PriorityBadgeProps) => {
  const getVariant = () => {
    switch (priority) {
      case 'high':
        return 'destructive';
      case 'medium':
        return 'secondary';
      case 'low':
        return 'outline';
      default:
        return 'secondary';
    }
  };

  const getColor = () => {
    switch (priority) {
      case 'high':
        return 'bg-danger text-danger-foreground';
      case 'medium':
        return 'bg-warning text-warning-foreground';
      case 'low':
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