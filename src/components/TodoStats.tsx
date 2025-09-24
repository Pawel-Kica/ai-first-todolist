import { TodoStats as TodoStatsType } from '@/types/todo';

interface TodoStatsProps {
  stats: TodoStatsType;
}

export const TodoStats = ({ stats }: TodoStatsProps) => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      <div className="bg-card rounded-xl p-6 shadow-soft border border-border/50 hover:shadow-medium transition-all duration-300">
        <div className="text-2xl font-bold text-primary mb-1">{stats.total}</div>
        <div className="text-sm text-muted-foreground">Total Tasks</div>
      </div>
      <div className="bg-card rounded-xl p-6 shadow-soft border border-border/50 hover:shadow-medium transition-all duration-300">
        <div className="text-2xl font-bold text-warning mb-1">{stats.pending}</div>
        <div className="text-sm text-muted-foreground">Pending</div>
      </div>
      <div className="bg-card rounded-xl p-6 shadow-soft border border-border/50 hover:shadow-medium transition-all duration-300">
        <div className="text-2xl font-bold text-success mb-1">{stats.completed}</div>
        <div className="text-sm text-muted-foreground">Completed</div>
      </div>
    </div>
  );
};