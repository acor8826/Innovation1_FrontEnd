import { FolderKanban, CheckSquare, AlertCircle, Users } from 'lucide-react';
import { KPICard } from '../components/dashboard/KPICard';
import { ProjectsTable } from '../components/dashboard/ProjectsTable';
import { ActivityFeed } from '../components/dashboard/ActivityFeed';
import { SEO } from '../components/SEO';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { projects, activities, kpiData } from '../data/mockData';

export default function Dashboard() {
  return (
    <DashboardLayout>
      <SEO
        title="Dashboard | Innovation1 Project Management"
        description="Manage your projects, track tasks, and monitor team activity with Innovation1's AI-powered project management dashboard."
        keywords="project dashboard, task management, team collaboration, project tracking"
        canonical="https://innovation1.com/dashboard"
      />
      
      <div className="space-y-6">
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
            <ProjectsTable projects={projects} />
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