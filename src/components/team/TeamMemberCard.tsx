import { Mail, Phone, MapPin, Edit, Trash2, Briefcase } from 'lucide-react';
import { TeamMember } from '../../types/team';
import { motion } from 'motion/react';

interface TeamMemberCardProps {
  member: TeamMember;
  onEdit: (member: TeamMember) => void;
  onDelete: (member: TeamMember) => void;
}

const statusColors = {
  active: 'bg-green-100 text-green-700 border-green-200',
  away: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  inactive: 'bg-gray-100 text-gray-700 border-gray-200',
};

const roleColors = {
  admin: 'bg-purple-50 text-purple-600',
  developer: 'bg-blue-50 text-blue-600',
  designer: 'bg-pink-50 text-pink-600',
  manager: 'bg-orange-50 text-orange-600',
  analyst: 'bg-cyan-50 text-cyan-600',
  other: 'bg-gray-50 text-gray-600',
};

export function TeamMemberCard({ member, onEdit, onDelete }: TeamMemberCardProps) {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all group"
    >
      {/* Header with Avatar and Actions */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          {/* Avatar */}
          {member.avatar ? (
            <img
              src={member.avatar}
              alt={member.name}
              className="w-16 h-16 rounded-full border-2 border-gray-200"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-lg border-2 border-gray-200">
              {getInitials(member.name)}
            </div>
          )}

          {/* Name and Role */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
            <span className={`inline-block px-2 py-1 rounded text-xs font-medium mt-1 ${roleColors[member.role]}`}>
              {member.role.charAt(0).toUpperCase() + member.role.slice(1)}
            </span>
          </div>
        </div>

        {/* Status Badge */}
        <div>
          <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${statusColors[member.status]}`}>
            {member.status.charAt(0).toUpperCase() + member.status.slice(1)}
          </span>
        </div>
      </div>

      {/* Bio */}
      {member.bio && (
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {member.bio}
        </p>
      )}

      {/* Contact Info */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Mail className="w-4 h-4 text-gray-400" />
          <a href={`mailto:${member.email}`} className="hover:text-blue-600 transition-colors">
            {member.email}
          </a>
        </div>

        {member.phone && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Phone className="w-4 h-4 text-gray-400" />
            <a href={`tel:${member.phone}`} className="hover:text-blue-600 transition-colors">
              {member.phone}
            </a>
          </div>
        )}

        {member.department && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Briefcase className="w-4 h-4 text-gray-400" />
            <span>{member.department}</span>
          </div>
        )}

        {member.location && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span>{member.location}</span>
          </div>
        )}
      </div>

      {/* Footer with Join Date and Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="text-xs text-gray-500">
          Joined {new Date(member.joinDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
        </span>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => onEdit(member)}
            className="p-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors"
            title="Edit member"
          >
            <Edit className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDelete(member)}
            className="p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors"
            title="Delete member"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
