export interface TeamMemberInfo {
    id: string;
    name: string;
    role: string;
    avatar?: string;
}

export interface Project {
    id: string;
    name: string;
    description?: string;
    status: 'active' | 'pending' | 'blocked';
    owner: string;
    ownerAvatar?: string;
    deadline?: string;
    is_rnd: boolean;
    start_date?: string;
    technical_uncertainty?: string;
    new_knowledge_intended?: string;
    hypothesis?: string;
    experiment_plan?: string;
    core_activity_description?: string;
    lastUpdated: string;
    teamMembers: TeamMemberInfo[];
    createdAt: string;
    updatedAt: string;
}
