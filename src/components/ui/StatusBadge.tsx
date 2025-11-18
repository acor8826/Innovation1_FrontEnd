interface StatusBadgeProps {
  status: 'active' | 'pending' | 'blocked';
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const styles = {
    active: 'bg-green-100 text-green-700 border-green-200',
    pending: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    blocked: 'bg-red-100 text-red-700 border-red-200',
  };

  const labels = {
    active: 'Active',
    pending: 'Pending',
    blocked: 'Blocked',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full border ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}
