import { apiClient } from './api';
import { RnDProjectExpansion, ProjectModel, RnDTaskExpansion, ExperimentLog } from '../types/rnd';

export const rndService = {
    async getProjectExpansion(projectId: string): Promise<RnDProjectExpansion> {
        const token = await apiClient.getToken();
        const response = await fetch(`${apiClient.baseUrl}/rnd/projects/${projectId}/expansion`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...(token && { 'Authorization': `Bearer ${token}` }),
            },
        });

        if (!response.ok) {
            if (response.status === 404) {
                // Return empty object or null if not found, to allow creation
                return {} as RnDProjectExpansion;
            }
            throw new Error('Failed to fetch R&D expansion');
        }
        return response.json();
    },

    async updateProjectExpansion(projectId: string, data: Partial<RnDProjectExpansion>): Promise<RnDProjectExpansion> {
        const token = await apiClient.getToken();
        const response = await fetch(`${apiClient.baseUrl}/rnd/projects/${projectId}/expansion`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                ...(token && { 'Authorization': `Bearer ${token}` }),
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) throw new Error('Failed to update R&D expansion');
        return response.json();
    },

    async getProjectModels(projectId: string): Promise<ProjectModel[]> {
        const token = await apiClient.getToken();
        const response = await fetch(`${apiClient.baseUrl}/rnd/projects/${projectId}/models`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...(token && { 'Authorization': `Bearer ${token}` }),
            },
        });

        if (!response.ok) throw new Error('Failed to fetch project models');
        return response.json();
    },

    async createProjectModel(data: Omit<ProjectModel, 'id' | 'created_at' | 'updated_at'>): Promise<ProjectModel> {
        const token = await apiClient.getToken();
        const response = await fetch(`${apiClient.baseUrl}/rnd/models`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...(token && { 'Authorization': `Bearer ${token}` }),
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) throw new Error('Failed to create project model');
        return response.json();
    },

    async updateProjectModel(modelId: string, data: Partial<ProjectModel>): Promise<ProjectModel> {
        const token = await apiClient.getToken();
        const response = await fetch(`${apiClient.baseUrl}/rnd/models/${modelId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                ...(token && { 'Authorization': `Bearer ${token}` }),
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) throw new Error('Failed to update project model');
        return response.json();
    },

    async deleteProjectModel(modelId: string): Promise<void> {
        const token = await apiClient.getToken();
        const response = await fetch(`${apiClient.baseUrl}/rnd/models/${modelId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                ...(token && { 'Authorization': `Bearer ${token}` }),
            },
        });

        if (!response.ok) throw new Error('Failed to delete project model');
    },

    async getTaskExpansion(taskId: string): Promise<RnDTaskExpansion> {
        const token = await apiClient.getToken();
        const response = await fetch(`${apiClient.baseUrl}/rnd/tasks/${taskId}/expansion`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...(token && { 'Authorization': `Bearer ${token}` }),
            },
        });

        if (!response.ok) {
            if (response.status === 404) {
                return {} as RnDTaskExpansion;
            }
            throw new Error('Failed to fetch R&D task expansion');
        }
        return response.json();
    },

    async updateTaskExpansion(taskId: string, data: Partial<RnDTaskExpansion>): Promise<RnDTaskExpansion> {
        const token = await apiClient.getToken();
        const response = await fetch(`${apiClient.baseUrl}/rnd/tasks/${taskId}/expansion`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                ...(token && { 'Authorization': `Bearer ${token}` }),
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) throw new Error('Failed to update R&D task expansion');
        return response.json();
    },

    async getExperiments(projectId: string): Promise<ExperimentLog[]> {
        const token = await apiClient.getToken();
        const response = await fetch(`${apiClient.baseUrl}/rnd/projects/${projectId}/experiments`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...(token && { 'Authorization': `Bearer ${token}` }),
            },
        });

        if (!response.ok) throw new Error('Failed to fetch experiments');
        return response.json();
    },

    async createExperiment(data: Omit<ExperimentLog, 'id' | 'created_at' | 'updated_at'>): Promise<ExperimentLog> {
        const token = await apiClient.getToken();
        const response = await fetch(`${apiClient.baseUrl}/rnd/experiments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...(token && { 'Authorization': `Bearer ${token}` }),
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) throw new Error('Failed to create experiment');
        return response.json();
    }
};
