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
    Copy,
    Info,
    X,
    ArrowRight
} from 'lucide-react';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { Skeleton } from '../ui/skeleton';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '../ui/tooltip';
import { apiClient } from '../../services/api';
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
            // Simulate progress steps could be added here if we had a streaming API
            await apiClient.generateRnDPlan(projectId, concept);

            toast.success('AI Plan Generated Successfully');

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

    const copyToClipboard = (text: string, label: string) => {
        if (!text) return;
        navigator.clipboard.writeText(text);
        toast.success(`${label} copied to clipboard`);
    };

    if (!isExpanded) {
        return (
            <Button
                variant="outline"
                className="w-full mt-6 flex items-center justify-between bg-white hover:bg-purple-50 border-purple-200 text-purple-900 transition-all duration-200 shadow-sm hover:shadow"
                onClick={() => setIsExpanded(true)}
            >
                <span className="flex items-center gap-2 font-semibold">
                    <FlaskConical className="w-5 h-5 text-purple-600" />
                    R&D Project Expansion
                </span>
                <ChevronDown className="w-5 h-5 text-purple-400" />
            </Button>
        );
    }

    return (
        <div className="mt-8 space-y-8 border-t border-purple-100 pt-8 animate-in fade-in slide-in-from-top-4 duration-500">
            {/* Sticky Header */}
            <div className="flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-sm z-10 py-4 border-b border-gray-100 -mx-6 px-6 shadow-sm">
                <h2 className="text-2xl font-bold flex items-center gap-3 text-gray-900">
                    <div className="p-2 bg-purple-100 rounded-lg">
                        <FlaskConical className="w-6 h-6 text-purple-700" />
                    </div>
                    R&D Project Expansion
                </h2>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsExpanded(false)}
                    className="text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                >
                    <ChevronUp className="w-4 h-4 mr-2" />
                    Collapse
                </Button>
            </div>

            {/* AI Agent Section */}
            <Card className="bg-gradient-to-br from-purple-50 via-white to-blue-50 border-purple-200 shadow-md overflow-hidden relative group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Sparkles className="w-32 h-32 text-purple-600" />
                </div>

                <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-purple-900 text-lg">
                        <Sparkles className="w-5 h-5 text-purple-600" />
                        AI R&D Agent
                        <Badge variant="secondary" className="ml-2 bg-purple-100 text-purple-700 hover:bg-purple-200 border-purple-200">
                            Beta
                        </Badge>
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 relative z-0">
                    <p className="text-sm text-purple-800/80 leading-relaxed max-w-3xl">
                        Describe your project concept below. Our AI agent will analyze it against <strong>Australian R&D Tax Incentive</strong> criteria,
                        generate compliance documentation, create a project plan, and populate your task board automatically.
                    </p>

                    <div className="relative">
                        <Textarea
                            placeholder="e.g., We are building a new machine learning model to optimize solar panel efficiency by analyzing real-time weather data. The core challenge is handling the latency of edge devices..."
                            value={concept}
                            onChange={(e) => setConcept(e.target.value)}
                            className="min-h-[120px] bg-white/80 backdrop-blur-sm border-purple-200 focus:border-purple-400 focus:ring-purple-400 resize-none pr-10 shadow-inner text-base"
                        />
                        {concept && (
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute top-2 right-2 h-6 w-6 text-gray-400 hover:text-gray-600"
                                onClick={() => setConcept('')}
                            >
                                <X className="w-4 h-4" />
                            </Button>
                        )}
                    </div>

                    <div className="flex justify-end pt-2">
                        <Button
                            onClick={handleGeneratePlan}
                            disabled={isGenerating || !concept.trim()}
                            className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white disabled:bg-purple-300 disabled:text-white disabled:opacity-100 shadow-lg shadow-purple-200 hover:shadow-purple-300 transition-all duration-300 font-medium px-8 py-6 h-auto text-base"
                        >
                            {isGenerating ? (
                                <>
                                    <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                                    <span className="flex flex-col items-start text-left">
                                        <span>Generating Plan...</span>
                                        <span className="text-xs opacity-90 font-normal">This may take up to 30 seconds</span>
                                    </span>
                                </>
                            ) : (
                                <>
                                    <Sparkles className="w-5 h-5 mr-2" />
                                    Generate R&D Plan & Tasks
                                    <ArrowRight className="w-4 h-4 ml-2 opacity-70" />
                                </>
                            )}
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Separator className="bg-gray-100" />

            {/* Results Grid */}
            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[1, 2, 3, 4].map((i) => (
                        <Card key={i} className="border-gray-100 shadow-sm">
                            <CardHeader className="pb-2">
                                <Skeleton className="h-6 w-3/4" />
                            </CardHeader>
                            <CardContent>
                                <Skeleton className="h-4 w-full mb-2" />
                                <Skeleton className="h-4 w-5/6" />
                                <Skeleton className="h-4 w-4/6" />
                            </CardContent>
                        </Card>
                    ))}
                </div>
            ) : projectData ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-700">
                    <RnDFieldCard
                        title="Problem Definition"
                        icon={<Target className="w-5 h-5 text-blue-500" />}
                        content={projectData.core_activity_description}
                        tooltip="The core technical problem being solved."
                        color="blue"
                    />

                    <RnDFieldCard
                        title="Technical Uncertainty"
                        icon={<AlertTriangle className="w-5 h-5 text-orange-500" />}
                        content={projectData.technical_uncertainty}
                        tooltip="Why the solution is not obvious to a competent professional."
                        color="orange"
                    />

                    <RnDFieldCard
                        title="Hypothesis"
                        icon={<Lightbulb className="w-5 h-5 text-yellow-500" />}
                        content={projectData.hypothesis}
                        tooltip="The technical hypothesis being tested."
                        color="yellow"
                    />

                    <RnDFieldCard
                        title="Experiment Plan"
                        icon={<FileText className="w-5 h-5 text-green-500" />}
                        content={projectData.experiment_plan}
                        tooltip="The plan for testing the hypothesis."
                        color="green"
                    />

                    <div className="md:col-span-2">
                        <RnDFieldCard
                            title="New Knowledge Intended"
                            icon={<FlaskConical className="w-5 h-5 text-purple-500" />}
                            content={projectData.new_knowledge_intended}
                            tooltip="The new knowledge or capability being generated."
                            color="purple"
                        />
                    </div>

                    {/* AI Generated Plan Details */}
                    {projectData.project_plan && (
                        <Card className="md:col-span-2 bg-slate-50 border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <CardHeader className="border-b border-slate-100 bg-slate-50/50">
                                <CardTitle className="text-lg flex items-center gap-2 text-slate-800">
                                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                                    AI Generated Project Strategy
                                    <Badge variant="outline" className="ml-auto border-emerald-200 text-emerald-700 bg-emerald-50">
                                        Ready for Review
                                    </Badge>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6 pt-6">
                                {(() => {
                                    try {
                                        const plan = JSON.parse(projectData.project_plan);
                                        return (
                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div className="space-y-4">
                                                    <div>
                                                        <h4 className="font-semibold text-sm text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                                                            Architecture Design
                                                        </h4>
                                                        <p className="text-sm text-slate-600 leading-relaxed bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                                                            {plan.architecture_design}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-sm text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                                                            Unit Test Strategy
                                                        </h4>
                                                        <p className="text-sm text-slate-600 leading-relaxed bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                                                            {plan.unit_test_strategy}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-sm text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                                                        Key Deliverables
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {plan.deliverables.map((d: string, i: number) => (
                                                            <li key={i} className="text-sm text-slate-600 flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                                                                <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                                                                <span>{d}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        );
                                    } catch (e) {
                                        return (
                                            <div className="flex items-center gap-2 text-red-500 bg-red-50 p-4 rounded-lg">
                                                <AlertTriangle className="w-4 h-4" />
                                                <p className="text-sm">Error parsing project plan data.</p>
                                            </div>
                                        );
                                    }
                                })()}
                            </CardContent>
                        </Card>
                    )}
                </div>
            ) : (
                <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                    <FlaskConical className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-500 font-medium">No R&D data available yet.</p>
                    <p className="text-sm text-gray-400">Use the AI Agent above to generate a plan.</p>
                </div>
            )}
        </div>
    );
}

// Helper Component for Fields
function RnDFieldCard({ title, icon, content, tooltip, color }: { title: string, icon: React.ReactNode, content: string, tooltip: string, color: string }) {
    const hasContent = content && content.length > 0;

    return (
        <Card className={`border-l-4 shadow-sm hover:shadow-md transition-all duration-200 group`} style={{ borderLeftColor: `var(--${color}-500)` }}>
            <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
                <CardTitle className="text-base font-semibold flex items-center gap-2 text-gray-800">
                    {icon}
                    {title}
                </CardTitle>
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-gray-600">
                                    <Info className="w-4 h-4" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="max-w-xs text-xs">{tooltip}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    {hasContent && (
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-gray-400 hover:text-gray-600"
                            onClick={() => {
                                navigator.clipboard.writeText(content);
                                toast.success('Copied to clipboard');
                            }}
                        >
                            <Copy className="w-4 h-4" />
                        </Button>
                    )}
                </div>
            </CardHeader>
            <CardContent>
                {hasContent ? (
                    <div className="relative">
                        <p className="text-sm text-gray-600 whitespace-pre-wrap leading-relaxed">
                            {content}
                        </p>
                        <Badge variant="outline" className="mt-4 text-xs font-normal text-gray-400 border-gray-200">
                            AI Generated
                        </Badge>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-6 text-gray-400 bg-gray-50/50 rounded-lg border border-dashed border-gray-100">
                        <p className="text-sm italic">Not defined yet</p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
