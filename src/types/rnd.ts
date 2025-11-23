export interface RnDProjectExpansion {
  id: string;
  project_id: string;
  problem_definition?: string;
  technical_uncertainty?: string;
  background_research?: string;
  hypothesis?: string;
  experimental_design?: string;
  success_metrics?: string;
  risk_assessment?: string;
  technical_learnings?: string;
  completion_summary?: string;
  next_iteration_recommendations?: string;
  timesheet_categories?: string[];
  cost_attribution_map?: Record<string, any>;
  audit_evidence_checklist?: Record<string, any>[];
  created_at: string;
  updated_at: string;
}

export interface ProjectModel {
  id: string;
  project_id: string;
  name: string;
  description?: string;
  technical_description?: string;
  hypotheses?: string;
  experiments?: string;
  metrics?: string;
  created_at: string;
  updated_at: string;
}

export interface RnDTaskExpansion {
  id: string;
  task_id: string;
  uncertainty?: string;
  experiment_step?: string;
  expected_outcome?: string;
  actual_result?: string;
  daily_breakdown?: Record<string, any>[];
  created_at: string;
  updated_at: string;
}

export interface ExperimentLog {
  id: string;
  project_id: string;
  date: string;
  title: string;
  description?: string;
  outcome?: string;
  issues?: string;
  created_at: string;
  updated_at: string;
}
