import { Priority } from '@/types/todo';

interface PriorityOptionProps {
  priority: Priority;
}

export const PriorityOption = ({ priority }: PriorityOptionProps) => {
  const getColorClass = () => {
    switch (priority) {
      case Priority.HIGH:
        return 'bg-red-500';
      case Priority.MEDIUM:
        return 'bg-yellow-500';
      case Priority.LOW:
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getPriorityLabel = () => {
    switch (priority) {
      case Priority.HIGH:
        return 'High';
      case Priority.MEDIUM:
        return 'Medium';
      case Priority.LOW:
        return 'Low';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="flex items-center gap-2">
      <div className={`w-3 h-3 rounded-full ${getColorClass()}`} />
      <span className="capitalize">{getPriorityLabel()}</span>
    </div>
  );
};