import { AlertTriangle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DeleteConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  memberName: string;
  isDeleting: boolean;
}

export function DeleteConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  memberName,
  isDeleting,
}: DeleteConfirmModalProps) {
  const handleClose = () => {
    if (!isDeleting) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-md pointer-events-auto"
            >
              <div className="bg-white rounded-xl shadow-2xl border border-gray-200">
                {/* Header */}
                <div className="flex items-start justify-between p-6 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-50 rounded-lg">
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">Delete Team Member</h2>
                      <p className="text-sm text-gray-600 mt-1">This action cannot be undone</p>
                    </div>
                  </div>
                  <button
                    onClick={handleClose}
                    disabled={isDeleting}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-500"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Body */}
                <div className="p-6">
                  <p className="text-gray-700">
                    Are you sure you want to remove{' '}
                    <span className="font-semibold text-gray-900">{memberName}</span> from the team?
                  </p>
                  <p className="text-gray-600 mt-2 text-sm">
                    All associated data and permissions will be permanently removed.
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={handleClose}
                    disabled={isDeleting}
                    className="px-6 py-2.5 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg transition-all disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={onConfirm}
                    disabled={isDeleting}
                    className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isDeleting ? 'Deleting...' : 'Delete Member'}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
