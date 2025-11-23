import React, { useState, useEffect } from 'react';
import { RnDTaskExpansion } from '../../types/rnd';
import { rndService } from '../../services/rndService';

interface RnDTaskExpansionProps {
    taskId: string;
}

export const RnDTaskExpansionView: React.FC<RnDTaskExpansionProps> = ({ taskId }) => {
    const [expansion, setExpansion] = useState<RnDTaskExpansion | null>(null);
    const [loading, setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            loadData();
        }
    }, [taskId, isOpen]);

    const loadData = async () => {
        setLoading(true);
        try {
            const data = await rndService.getTaskExpansion(taskId);
            setExpansion(data);
        } catch (err) {
            console.error('Failed to load R&D task data', err);
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        if (!expansion) return;
        try {
            const updated = await rndService.updateTaskExpansion(taskId, expansion);
            setExpansion(updated);
            alert('R&D Task Details saved');
        } catch (err) {
            alert('Failed to save task details');
        }
    };

    const handleInputChange = (field: keyof RnDTaskExpansion, value: string) => {
        if (!expansion) {
            setExpansion({ task_id: taskId } as RnDTaskExpansion);
        }
        setExpansion(prev => prev ? ({ ...prev, [field]: value }) : { task_id: taskId, [field]: value } as RnDTaskExpansion);
    };

    return (
        <div className="mt-2 border-t pt-2">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
            >
                {isOpen ? '▼ Hide R&D Details' : '▶ Show R&D Details'}
            </button>

            {isOpen && (
                <div className="mt-2 bg-gray-50 p-3 rounded border">
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <div className="space-y-3">
                            <div>
                                <label className="block text-xs font-medium text-gray-700">Uncertainty / Challenge</label>
                                <input
                                    type="text"
                                    className="mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-1 border"
                                    value={expansion?.uncertainty || ''}
                                    onChange={(e) => handleInputChange('uncertainty', e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-700">Experiment Step</label>
                                <input
                                    type="text"
                                    className="mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-1 border"
                                    value={expansion?.experiment_step || ''}
                                    onChange={(e) => handleInputChange('experiment_step', e.target.value)}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <div>
                                    <label className="block text-xs font-medium text-gray-700">Expected Outcome</label>
                                    <textarea
                                        className="mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-1 border"
                                        rows={2}
                                        value={expansion?.expected_outcome || ''}
                                        onChange={(e) => handleInputChange('expected_outcome', e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-700">Actual Result</label>
                                    <textarea
                                        className="mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-1 border"
                                        rows={2}
                                        value={expansion?.actual_result || ''}
                                        onChange={(e) => handleInputChange('actual_result', e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    onClick={handleSave}
                                    className="bg-blue-600 text-white text-xs px-3 py-1 rounded hover:bg-blue-700"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
