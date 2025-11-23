import { useState } from 'react';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Checkbox } from '../ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { apiClient } from '../../services/api';

interface AddProjectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onProjectCreated?: () => void;
}

export function AddProjectModal({ open, onOpenChange, onProjectCreated }: AddProjectModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    status: 'ACTIVE',
    deadline: '',
    is_rnd: false,
    start_date: '',
    technical_uncertainty: '',
    new_knowledge_intended: '',
    hypothesis: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error('Project name is required');
      return;
    }

    setIsLoading(true);
    try {
      console.log('📤 Creating project:', formData);
      const result = await apiClient.createProject({
        name: formData.name,
        description: formData.description,
        status: formData.status,
        deadline: formData.deadline || null,
        is_rnd: formData.is_rnd,
        start_date: formData.start_date || null,
        technical_uncertainty: formData.technical_uncertainty,
        new_knowledge_intended: formData.new_knowledge_intended,
        hypothesis: formData.hypothesis,
      });

      console.log('✅ Project created successfully:', result);
      toast.success('Project created successfully');

      // Close modal first
      onOpenChange(false);

      // Reset form
      setFormData({
        name: '',
        description: '',
        status: 'ACTIVE',
        deadline: '',
        is_rnd: false,
        start_date: '',
        technical_uncertainty: '',
        new_knowledge_intended: '',
        hypothesis: '',
      });

      // Wait a moment for modal to close, then refresh projects
      setTimeout(() => {
        console.log('🔄 Calling onProjectCreated callback...');
        onProjectCreated?.();
        console.log('✓ Callback executed');
      }, 500);
    } catch (error: any) {
      console.error('❌ Error creating project:', error);
      toast.error(error.message || 'Failed to create project');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add New Project</DialogTitle>
          <DialogDescription>
            Create a new project to track tasks and team collaboration.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Project Name</Label>
              <Input
                id="name"
                placeholder="Enter project name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Enter project description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select
                value={formData.status}
                onValueChange={(value: string) => setFormData({ ...formData, status: value })}
              >
                <SelectTrigger id="status">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ACTIVE">Active</SelectItem>
                  <SelectItem value="PENDING">Pending</SelectItem>
                  <SelectItem value="BLOCKED">Blocked</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="deadline">Deadline</Label>
              <Input
                id="deadline"
                type="date"
                value={formData.deadline}
                onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
              />
            </div>

            <div className="flex items-center space-x-2 py-2">
              <Checkbox
                id="is_rnd"
                checked={formData.is_rnd}
                onCheckedChange={(checked: boolean | string) =>
                  setFormData({ ...formData, is_rnd: checked === true })
                }
              />
              <Label htmlFor="is_rnd">Is this an R&D Project?</Label>
            </div>

            {formData.is_rnd && (
              <div className="space-y-4 border-l-2 border-blue-500 pl-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="start_date">R&D Start Date <span className="text-red-500">*</span></Label>
                  <Input
                    id="start_date"
                    type="date"
                    value={formData.start_date}
                    onChange={(e) => setFormData({ ...formData, start_date: e.target.value })}
                    required={formData.is_rnd}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="technical_uncertainty">Technical Uncertainty (The "Why") <span className="text-red-500">*</span></Label>
                  <Textarea
                    id="technical_uncertainty"
                    placeholder="Describe the technical gap or uncertainty that prevents you from knowing the outcome."
                    value={formData.technical_uncertainty}
                    onChange={(e) => setFormData({ ...formData, technical_uncertainty: e.target.value })}
                    rows={3}
                    required={formData.is_rnd}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="new_knowledge_intended">New Knowledge Intended (The "What") <span className="text-red-500">*</span></Label>
                  <Textarea
                    id="new_knowledge_intended"
                    placeholder="What new knowledge is being sought through this project?"
                    value={formData.new_knowledge_intended}
                    onChange={(e) => setFormData({ ...formData, new_knowledge_intended: e.target.value })}
                    rows={3}
                    required={formData.is_rnd}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hypothesis">Hypothesis (Optional)</Label>
                  <Textarea
                    id="hypothesis"
                    placeholder="What is the hypothesis being tested?"
                    value={formData.hypothesis}
                    onChange={(e) => setFormData({ ...formData, hypothesis: e.target.value })}
                    rows={2}
                  />
                </div>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} disabled={isLoading}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Creating...' : 'Create Project'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
