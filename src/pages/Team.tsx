import { useState, useEffect } from 'react';
import { Users, Plus, Search, Filter, UserPlus } from 'lucide-react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { SEO } from '../components/SEO';
import { TeamMemberCard } from '../components/team/TeamMemberCard';
import { TeamMemberModal } from '../components/team/TeamMemberModal';
import { DeleteConfirmModal } from '../components/team/DeleteConfirmModal';
import { teamService } from '../services/teamService';
import { TeamMember, TeamRole, TeamStatus } from '../types/team';
import { toast } from 'sonner@2.0.3';
import { motion, AnimatePresence } from 'motion/react';

export default function Team() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [filteredMembers, setFilteredMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState<TeamRole | 'all'>('all');
  const [statusFilter, setStatusFilter] = useState<TeamStatus | 'all'>('all');

  // Modal states
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Load members on mount
  useEffect(() => {
    loadMembers();
  }, []);

  // Filter members when search or filters change
  useEffect(() => {
    filterMembers();
  }, [members, searchQuery, roleFilter, statusFilter]);

  const loadMembers = async () => {
    try {
      setLoading(true);
      const data = await teamService.getMembers();
      setMembers(data);
    } catch (error) {
      console.error('Failed to load team members:', error);
      toast.error('Failed to load team members');
    } finally {
      setLoading(false);
    }
  };

  const filterMembers = () => {
    let filtered = [...members];

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (m) =>
          m.name.toLowerCase().includes(query) ||
          m.email.toLowerCase().includes(query) ||
          m.role.toLowerCase().includes(query) ||
          m.department?.toLowerCase().includes(query)
      );
    }

    // Apply role filter
    if (roleFilter !== 'all') {
      filtered = filtered.filter((m) => m.role === roleFilter);
    }

    // Apply status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter((m) => m.status === statusFilter);
    }

    setFilteredMembers(filtered);
  };

  const handleAddMember = async (memberData: Omit<TeamMember, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      await teamService.createMember(memberData);
      await loadMembers();
      toast.success('Team member added successfully');
    } catch (error) {
      console.error('Failed to add team member:', error);
      toast.error('Failed to add team member');
      throw error;
    }
  };

  const handleEditMember = async (memberData: Omit<TeamMember, 'id' | 'createdAt' | 'updatedAt'>) => {
    if (!selectedMember) return;

    try {
      await teamService.updateMember(selectedMember.id, memberData);
      await loadMembers();
      toast.success('Team member updated successfully');
      setSelectedMember(null);
    } catch (error) {
      console.error('Failed to update team member:', error);
      toast.error('Failed to update team member');
      throw error;
    }
  };

  const handleDeleteMember = async () => {
    if (!selectedMember) return;

    try {
      setIsDeleting(true);
      await teamService.deleteMember(selectedMember.id);
      await loadMembers();
      toast.success('Team member removed successfully');
      setIsDeleteModalOpen(false);
      setSelectedMember(null);
    } catch (error) {
      console.error('Failed to delete team member:', error);
      toast.error('Failed to delete team member');
    } finally {
      setIsDeleting(false);
    }
  };

  const handleEdit = (member: TeamMember) => {
    setSelectedMember(member);
    setIsEditModalOpen(true);
  };

  const handleDelete = (member: TeamMember) => {
    setSelectedMember(member);
    setIsDeleteModalOpen(true);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setRoleFilter('all');
    setStatusFilter('all');
  };

  const activeFiltersCount = [
    searchQuery.trim() !== '',
    roleFilter !== 'all',
    statusFilter !== 'all',
  ].filter(Boolean).length;

  if (loading) {
    return (
      <DashboardLayout>
        <SEO
          title="Team | Innovation1 Project Management"
          description="Manage your team members and collaborators"
          keywords="team management, team members, collaboration"
        />
        <div className="flex items-center justify-center h-96">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
            <p className="text-gray-600">Loading team members...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <SEO
        title="Team | Innovation1 Project Management"
        description="Manage your team members and collaborators"
        keywords="team management, team members, collaboration"
      />

      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Team Members</h1>
            <p className="text-gray-600 mt-1">
              Manage your team and their roles
            </p>
          </div>

          <button
            onClick={() => setIsAddModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium shadow-sm"
          >
            <UserPlus className="w-4 h-4" />
            <span>Add Member</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-50 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Members</p>
                <p className="text-2xl font-bold text-gray-900">{members.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-50 rounded-lg">
                <div className="w-6 h-6 rounded-full bg-green-500" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Active</p>
                <p className="text-2xl font-bold text-gray-900">
                  {members.filter((m) => m.status === 'active').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-yellow-50 rounded-lg">
                <div className="w-6 h-6 rounded-full bg-yellow-500" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Away</p>
                <p className="text-2xl font-bold text-gray-900">
                  {members.filter((m) => m.status === 'away').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-purple-50 rounded-lg">
                <div className="w-6 h-6 rounded-full bg-purple-500" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Departments</p>
                <p className="text-2xl font-bold text-gray-900">
                  {new Set(members.map((m) => m.department).filter(Boolean)).size}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, email, role, or department..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Role Filter */}
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value as TeamRole | 'all')}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            >
              <option value="all">All Roles</option>
              <option value="admin">Admin</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Manager</option>
              <option value="analyst">Analyst</option>
              <option value="other">Other</option>
            </select>

            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as TeamStatus | 'all')}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="away">Away</option>
              <option value="inactive">Inactive</option>
            </select>

            {/* Clear Filters */}
            {activeFiltersCount > 0 && (
              <button
                onClick={clearFilters}
                className="px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg transition-colors whitespace-nowrap"
              >
                Clear ({activeFiltersCount})
              </button>
            )}
          </div>
        </div>

        {/* Team Members Grid */}
        {filteredMembers.length === 0 ? (
          <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {searchQuery || roleFilter !== 'all' || statusFilter !== 'all'
                ? 'No members found'
                : 'No team members yet'}
            </h3>
            <p className="text-gray-600 mb-6">
              {searchQuery || roleFilter !== 'all' || statusFilter !== 'all'
                ? 'Try adjusting your search or filters'
                : 'Get started by adding your first team member'}
            </p>
            {!(searchQuery || roleFilter !== 'all' || statusFilter !== 'all') && (
              <button
                onClick={() => setIsAddModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
              >
                <UserPlus className="w-5 h-5" />
                Add Your First Member
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredMembers.map((member) => (
                <TeamMemberCard
                  key={member.id}
                  member={member}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Add Member Modal */}
      <TeamMemberModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddMember}
        mode="create"
      />

      {/* Edit Member Modal */}
      <TeamMemberModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedMember(null);
        }}
        onSubmit={handleEditMember}
        member={selectedMember}
        mode="edit"
      />

      {/* Delete Confirm Modal */}
      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setSelectedMember(null);
        }}
        onConfirm={handleDeleteMember}
        memberName={selectedMember?.name || ''}
        isDeleting={isDeleting}
      />
    </DashboardLayout>
  );
}
