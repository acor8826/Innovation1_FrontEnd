import { apiClient } from './api';

export interface RnDDetails {
    problem_definition: string;
    technical_uncertainty: string;
    background_research: string;
    hypothesis: string;
    experimental_design: string;
    success_metrics: string;
    risk_assessment: string;
}

export interface ProjectPlan {
    architecture_design: string;
    deliverables: string[];
    suggested_prompts: string[];
    unit_test_strategy: string;
}

export interface TaskSuggestion {
    title: string;
    description: string;
    estimated_days: number;
    priority: 'high' | 'medium' | 'low';
    status: string;
}

export interface AIPlanResponse {
    rnd_details: RnDDetails;
    project_plan: ProjectPlan;
    tasks: TaskSuggestion[];
}

export const aiService = {
    /**
     * Generates an R&D project plan and tasks from a concept using AI.
     */
    async generatePlan(projectId: string, concept: string): Promise<AIPlanResponse> {
        return apiClient.request<AIPlanResponse>('/ai/generate-plan', {
            method: 'POST',
            body: JSON.stringify({
                project_id: projectId,
                concept: concept,
            }),
        });
    },
};
