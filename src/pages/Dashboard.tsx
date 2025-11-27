import { useState, useEffect } from 'react';
import { FolderKanban, CheckSquare, AlertCircle, Users } from 'lucide-react';
import { KPICard } from '../components/dashboard/KPICard';
import { ProjectsTable } from '../components/dashboard/ProjectsTable';
import { ActivityFeed } from '../components/dashboard/ActivityFeed';
import { SEO } from '../components/SEO';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { apiClient } from '../services/api';
import { projects as fallbackProjects, activities as fallbackActivities, kpiData as fallbackKPIData } from '../data/mockData';

interface KPIData {
  activeProjects: { value: string | number; trend: string };
  tasksDueToday: { value: string | number; trend: string };
  overdueTasks: { value: string | number; trend: string };
  teamMembers: { value: string | number; trend: string };
}

export default function Dashboard() {
  const [kpiData, setKpiData] = useState<KPIData>(fallbackKPIData);
  const [projects, setProjects] = useState(fallbackProjects);
  const [activities, setActivities] = useState(fallbackActivities);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch KPIs from backend
      const kpiResponse = await apiClient.getDashboardKPIs();
      if (kpiResponse) {
        setKpiData({
          activeProjects: {
            value: kpiResponse.active_projects || 0,
            trend: `${kpiResponse.active_projects_trend || '+8%'} this week`
          },
          tasksDueToday: {
            value: kpiResponse.tasks_due_today || 0,
            trend: `${kpiResponse.tasks_due_today_trend || '-2%'} this week`
          },
          overdueTasks: {
            value: kpiResponse.overdue_tasks || 0,
            trend: `${kpiResponse.overdue_tasks_trend || '-15%'} this week`
          },
          teamMembers: {
            value: kpiResponse.team_members || 0,
            trend: `${kpiResponse.team_members_trend || '+5%'} this week`
          }
        });
      }

      // Fetch projects from backend
      const projectsResponse = await apiClient.getProjects();
      if (projectsResponse) {
        // Handle both array and wrapped response formats
        const projectsArray = Array.isArray(projectsResponse)
          ? projectsResponse
          : (projectsResponse.projects || []);
        if (Array.isArray(projectsArray)) {
          setProjects(projectsArray);
        }
      }

      // Fetch activities from backend
      const activitiesResponse = await apiClient.getDashboardActivities();
      if (activitiesResponse) {
        // Handle both array and wrapped response formats
        const activitiesArray = Array.isArray(activitiesResponse)
          ? activitiesResponse
          : (activitiesResponse.activities || []);
        if (Array.isArray(activitiesArray)) {
          setActivities(activitiesArray);
        }
      }

      setLoading(false);
    } catch (err) {
      console.error('Error fetching dashboard data:', err);
      setError('Failed to load dashboard data. Using demo data.');
      // Fall back to mock data on error
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <DashboardLayout>
      <SEO
        title="Dashboard | Innovation1 Project Management"
        description="Manage your projects, track tasks, and monitor team activity with Innovation1's AI-powered project management dashboard."
        keywords="project dashboard, task management, team collaboration, project tracking"
        canonical="https://innovation1.com/dashboard"
      />

      <div className="space-y-6">
        {error && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-yellow-700">
            {error}
          </div>
        )}

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title="Active Projects"
            value={kpiData.activeProjects.value}
            trend={kpiData.activeProjects.trend}
            icon={FolderKanban}
          />
          <KPICard
            title="Tasks Due Today"
            value={kpiData.tasksDueToday.value}
            trend={kpiData.tasksDueToday.trend}
            icon={CheckSquare}
          />
          <KPICard
            title="Overdue Tasks"
            value={kpiData.overdueTasks.value}
            trend={kpiData.overdueTasks.trend}
            icon={AlertCircle}
          />
          <KPICard
            title="Team Members"
            value={kpiData.teamMembers.value}
            trend={kpiData.teamMembers.trend}
            icon={Users}
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Projects Table */}
          <div className="lg:col-span-2">
            <ProjectsTable projects={projects} onRefresh={fetchDashboardData} />
          </div>

          {/* Activity Feed */}
          <div className="lg:col-span-1">
            <ActivityFeed activities={activities} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}