import { useState } from 'react';
import { Plus, Grid, List } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { projects } from '../data/mockData';
import { StatusBadge } from '../components/ui/StatusBadge';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Button } from '../components/ui/button';
import { AddProjectModal } from '../components/projects/AddProjectModal';

export default function Projects() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <DashboardLayout>
      <SEO
        title="Projects | Innovation1 Project Management"
        description="View and manage all your projects in one place. Track progress, assign team members, and stay on top of deadlines with Innovation1's project management tools."
        keywords="project management, project tracking, team projects, project dashboard, project collaboration"
        canonical="https://innovation1.com/projects"
      />
      
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-gray-900">All Projects</h2>
            <p className="text-gray-600 mt-1">Manage and track all your legal projects</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
            <Button onClick={() => setIsModalOpen(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Add Project
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-gray-900">{project.name}</h3>
                  <StatusBadge status={project.status} />
                </div>
                <p className="text-gray-600 mb-6 line-clamp-2">{project.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={project.ownerAvatar} alt={project.owner} />
                      <AvatarFallback>{project.owner[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-gray-900">{project.owner}</span>
                  </div>
                  <span className="text-gray-500">{project.lastUpdated}</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-gray-600">Project Name</th>
                    <th className="px-6 py-3 text-left text-gray-600">Status</th>
                    <th className="px-6 py-3 text-left text-gray-600">Owner</th>
                    <th className="px-6 py-3 text-left text-gray-600">Last Updated</th>
                    <th className="px-6 py-3 text-left text-gray-600">Deadline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {projects.map((project) => (
                    <tr key={project.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <Link to={`/projects/${project.id}`} className="text-blue-600 hover:underline">
                          {project.name}
                        </Link>
                      </td>
                      <td className="px-6 py-4">
                        <StatusBadge status={project.status} />
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={project.ownerAvatar} alt={project.owner} />
                            <AvatarFallback>{project.owner[0]}</AvatarFallback>
                          </Avatar>
                          <span className="text-gray-900">{project.owner}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{project.lastUpdated}</td>
                      <td className="px-6 py-4 text-gray-600">{project.deadline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Add Project Modal */}
        <AddProjectModal open={isModalOpen} onOpenChange={setIsModalOpen} />
      </div>
    </DashboardLayout>
  );
}