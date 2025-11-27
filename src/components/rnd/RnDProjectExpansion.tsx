import { useState, useEffect } from 'react';
import {
    ChevronDown,
    ChevronUp,
    FlaskConical,
    Target,
    AlertTriangle,
    Lightbulb,
    FileText,
    Sparkles,
    Loader2,
    CheckCircle,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { apiClient } from '../../services/api';
import { aiService } from '../../services/ai';
import { toast } from 'sonner';

interface RnDProjectExpansionProps {
    projectId: string;
}

export function RnDProjectExpansionView({ projectId }: RnDProjectExpansionProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [loading, setLoading] = useState(true);
    const [projectData, setProjectData] = useState<any>(null);
    const [concept, setConcept] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);

    useEffect(() => {
        if (isExpanded) {
            loadProjectData();
        }
    }, [isExpanded, projectId]);

    const loadProjectData = async () => {
        try {
            setLoading(true);
            const data = await apiClient.getProject(projectId);
            setProjectData(data);
        } catch (error) {
            console.error('Failed to load project data:', error);
            toast.error('Failed to load project details');
        } finally {
            setLoading(false);
        }
    };

    const handleGeneratePlan = async () => {
        if (!concept.trim()) {
            toast.error('Please describe your project concept first.');
            return;
        }

        try {
            setIsGenerating(true);
            const response = await aiService.generatePlan(projectId, concept);

            toast.success(`Plan generated! ${response.tasks.length} tasks added.`);

            // Reload data to show new fields
            await loadProjectData();
            setConcept(''); // Clear input
        } catch (error) {
            console.error('AI Generation failed:', error);
            toast.error('Failed to generate plan. Please try again.');
        } finally {
            setIsGenerating(false);
        }
    };

    if (!isExpanded) {
        return (
            <Button
                variant="outline"
                className="w-full mt-4 flex items-center justify-between"
                onClick={() => setIsExpanded(true)}
            >
                <span className="flex items-center gap-2">
                    <FlaskConical className="w-4 h-4 text-purple-600" />
                    R&D Project Details
                </span>
                <ChevronDown className="w-4 h-4" />
            </Button>
        );
    }

    return (
        <div className="mt-6 space-y-6 border-t pt-6">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                    <FlaskConical className="w-6 h-6 text-purple-600" />
                    R&D Project Expansion
                </h2>
                <Button variant="ghost" size="sm" onClick={() => setIsExpanded(false)}>
                    <ChevronUp className="w-4 h-4 mr-2" />
                    Collapse
                </Button>
            </div>

            {/* AI Agent Section */}
            <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-purple-900">
                        <Sparkles className="w-5 h-5 text-purple-600" />
                        AI R&D Agent
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-sm text-purple-800">
                        Describe your project concept below. Our AI agent will analyze it against R&D tax criteria,
                        generate compliance documentation, create a project plan, and populate your task board.
                    </p>
                    <Textarea
                        placeholder="e.g., We are building a new machine learning model to optimize solar panel efficiency by analyzing real-time weather data..."
                        value={concept}
                        onChange={(e) => setConcept(e.target.value)}
                        className="min-h-[100px] bg-white"
                    />
                    <Button
                        onClick={handleGeneratePlan}
                        disabled={isGenerating || !concept.trim()}
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                    >
                        {isGenerating ? (
                            <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                Generating Plan & Tasks...
                            </>
                        ) : (
                            <>
                                <Sparkles className="w-4 h-4 mr-2" />
                                Generate R&D Plan & Tasks
                            </>
                        )}
                    </Button>
                </CardContent>
            </Card>

            {loading ? (
                <div className="flex justify-center py-8">
                    <Loader2 className="w-8 h-8 animate-spin text-purple-600" />
                </div>
            ) : projectData ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Core R&D Fields */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base flex items-center gap-2">
                                <Target className="w-4 h-4 text-blue-500" />
                                Problem Definition
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-600 whitespace-pre-wrap">
                                {projectData.core_activity_description || 'Not defined yet.'}
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4 text-orange-500" />
                                Technical Uncertainty
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-600 whitespace-pre-wrap">
                                {projectData.technical_uncertainty || 'Not defined yet.'}
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base flex items-center gap-2">
                                <Lightbulb className="w-4 h-4 text-yellow-500" />
                                Hypothesis
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-600 whitespace-pre-wrap">
                                {projectData.hypothesis || 'Not defined yet.'}
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base flex items-center gap-2">
                                <FileText className="w-4 h-4 text-green-500" />
                                Experiment Plan
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-600 whitespace-pre-wrap">
                                {projectData.experiment_plan || 'Not defined yet.'}
                            </p>
                        </CardContent>
                    </Card>

                    {/* New Knowledge */}
                    <Card className="md:col-span-2">
                        <CardHeader>
                            <CardTitle className="text-base flex items-center gap-2">
                                <FlaskConical className="w-4 h-4 text-purple-500" />
                                New Knowledge Intended
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-600 whitespace-pre-wrap">
                                {projectData.new_knowledge_intended || 'Not defined yet.'}
                            </p>
                        </CardContent>
                    </Card>

                    {/* AI Generated Plan Details (if available) */}
                    {projectData.project_plan && (
                        <Card className="md:col-span-2 bg-slate-50 border-slate-200">
                            <CardHeader>
                                <CardTitle className="text-base flex items-center gap-2 text-slate-800">
                                    <CheckCircle className="w-4 h-4 text-slate-600" />
                                    AI Generated Project Strategy
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {(() => {
                                    try {
                                        const plan = JSON.parse(projectData.project_plan);
                                        return (
                                            <>
                                                <div>
                                                    <h4 className="font-semibold text-sm mb-1">Architecture Design</h4>
                                                    <p className="text-sm text-gray-600">{plan.architecture_design}</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-sm mb-1">Deliverables</h4>
                                                    <ul className="list-disc list-inside text-sm text-gray-600">
                                                        {plan.deliverables.map((d: string, i: number) => (
                                                            <li key={i}>{d}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-sm mb-1">Unit Test Strategy</h4>
                                                    <p className="text-sm text-gray-600">{plan.unit_test_strategy}</p>
                                                </div>
                                            </>
                                        );
                                    } catch (e) {
                                        return <p className="text-sm text-red-500">Error parsing project plan.</p>;
                                    }
                                })()}
                            </CardContent>
                        </Card>
                    )}
                </div>
            ) : (
                <div className="text-center py-8 text-gray-500">
                    No project data available.
                </div>
            )}
        </div>
    );
}
