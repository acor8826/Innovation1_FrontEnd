import React, { useState, useEffect } from 'react';
import { RnDProjectExpansion, ProjectModel, ExperimentLog } from '../../types/rnd';
import { rndService } from '../../services/rndService';

interface RnDProjectExpansionProps {
    projectId: string;
}

export const RnDProjectExpansionView: React.FC<RnDProjectExpansionProps> = ({ projectId }) => {
    const [expansion, setExpansion] = useState<RnDProjectExpansion | null>(null);
    const [models, setModels] = useState<ProjectModel[]>([]);
    const [experiments, setExperiments] = useState<ExperimentLog[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<'details' | 'models' | 'experiments'>('details');

    useEffect(() => {
        loadData();
    }, [projectId]);

    const loadData = async () => {
        setLoading(true);
        try {
            const [expData, modelsData, experimentsData] = await Promise.all([
                rndService.getProjectExpansion(projectId),
                rndService.getProjectModels(projectId),
                rndService.getExperiments(projectId)
            ]);
            setExpansion(expData);
            setModels(modelsData);
            setExperiments(experimentsData);
        } catch (err) {
            setError('Failed to load R&D data');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleSaveDetails = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!expansion) return;

        try {
            const updated = await rndService.updateProjectExpansion(projectId, expansion);
            setExpansion(updated);
            alert('R&D Details saved successfully');
        } catch (err) {
            alert('Failed to save details');
        }
    };

    const handleInputChange = (field: keyof RnDProjectExpansion, value: string) => {
        if (!expansion) {
            setExpansion({ project_id: projectId } as RnDProjectExpansion);
        }
        setExpansion(prev => prev ? ({ ...prev, [field]: value }) : { project_id: projectId, [field]: value } as RnDProjectExpansion);
    };

    if (loading) return <div>Loading R&D Data...</div>;
    if (error) return <div className="text-red-500">{error}</div>;

    return (
        <div className="bg-white p-6 rounded-lg shadow mt-6">
            <h2 className="text-2xl font-bold mb-4">R&D Project Expansion</h2>

            <div className="flex border-b mb-4">
                <button
                    className={`py-2 px-4 ${activeTab === 'details' ? 'border-b-2 border-blue-500 font-bold' : ''}`}
                    onClick={() => setActiveTab('details')}
                >
                    R&D Details
                </button>
                <button
                    className={`py-2 px-4 ${activeTab === 'models' ? 'border-b-2 border-blue-500 font-bold' : ''}`}
                    onClick={() => setActiveTab('models')}
                >
                    Models ({models.length})
                </button>
                <button
                    className={`py-2 px-4 ${activeTab === 'experiments' ? 'border-b-2 border-blue-500 font-bold' : ''}`}
                    onClick={() => setActiveTab('experiments')}
                >
                    Experiments ({experiments.length})
                </button>
            </div>

            {activeTab === 'details' && (
                <form onSubmit={handleSaveDetails} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Problem Definition</label>
                        <textarea
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                            rows={3}
                            value={expansion?.problem_definition || ''}
                            onChange={(e) => handleInputChange('problem_definition', e.target.value)}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Technical Uncertainty</label>
                            <textarea
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                                rows={3}
                                value={expansion?.technical_uncertainty || ''}
                                onChange={(e) => handleInputChange('technical_uncertainty', e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Background Research</label>
                            <textarea
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                                rows={3}
                                value={expansion?.background_research || ''}
                                onChange={(e) => handleInputChange('background_research', e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Hypothesis</label>
                        <textarea
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                            rows={2}
                            value={expansion?.hypothesis || ''}
                            onChange={(e) => handleInputChange('hypothesis', e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Experimental Design</label>
                        <textarea
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                            rows={3}
                            value={expansion?.experimental_design || ''}
                            onChange={(e) => handleInputChange('experimental_design', e.target.value)}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Success Metrics</label>
                            <textarea
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                                rows={2}
                                value={expansion?.success_metrics || ''}
                                onChange={(e) => handleInputChange('success_metrics', e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Risk Assessment</label>
                            <textarea
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                                rows={2}
                                value={expansion?.risk_assessment || ''}
                                onChange={(e) => handleInputChange('risk_assessment', e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                            Save R&D Details
                        </button>
                    </div>
                </form>
            )}

            {activeTab === 'models' && (
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-medium">Project Models</h3>
                        <button className="bg-green-600 text-white px-3 py-1 rounded text-sm" onClick={() => alert('Add Model feature coming soon')}>
                            + Add Model
                        </button>
                    </div>
                    {models.length === 0 ? (
                        <p className="text-gray-500 italic">No models defined yet.</p>
                    ) : (
                        <ul className="divide-y">
                            {models.map(model => (
                                <li key={model.id} className="py-3">
                                    <h4 className="font-bold">{model.name}</h4>
                                    <p className="text-sm text-gray-600">{model.description}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}

            {activeTab === 'experiments' && (
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-medium">Experiment Logs</h3>
                        <button className="bg-green-600 text-white px-3 py-1 rounded text-sm" onClick={() => alert('Add Experiment feature coming soon')}>
                            + Log Experiment
                        </button>
                    </div>
                    {experiments.length === 0 ? (
                        <p className="text-gray-500 italic">No experiments logged yet.</p>
                    ) : (
                        <ul className="divide-y">
                            {experiments.map(exp => (
                                <li key={exp.id} className="py-3">
                                    <div className="flex justify-between">
                                        <h4 className="font-bold">{exp.title}</h4>
                                        <span className="text-sm text-gray-500">{new Date(exp.date).toLocaleDateString()}</span>
                                    </div>
                                    <p className="text-sm text-gray-800 mt-1">{exp.outcome}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};
