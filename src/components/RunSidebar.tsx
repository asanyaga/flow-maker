import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface RunSidebarProps {
  onRun: () => void;
  onRestart: () => void;
  status: 'idle' | 'running' | 'pausedForInput' | 'finished' | 'error';
  error: string | null;
}

const RunSidebar = ({ onRun, onRestart, status, error }: RunSidebarProps) => {
  return (
    <div className="w-80 h-full flex flex-col bg-card border-r border-border p-4">
      <div className="space-y-4 flex-shrink-0">
        <div className="items-center">
          <h2 className="text-lg font-semibold">Run Mode</h2>
          <p className='text-sm text-muted-foreground'>Run your agent interactively.</p>
        </div>
        <Button
          onClick={onRun}
          className="w-full"
          size="lg"
          disabled={status !== 'idle'}
        >
          <Play className="w-4 h-4 mr-2" />
          Run
        </Button>
        <Button
          onClick={onRestart}
          className="w-full"
          size="lg"
          variant="outline"
          disabled={status === 'idle'}
        >
          Restart
        </Button>
        <div className="text-sm text-muted-foreground">
          Status: {status}
          {error && <div className="text-red-500">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default RunSidebar;
