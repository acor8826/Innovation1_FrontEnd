import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        pharmacyName: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            onClose();
            setFormState({ name: '', email: '', pharmacyName: '', message: '' });
        }, 2000);
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
                        onClick={onClose}
                        className="fixed inset-0 bg-[#020817]/80 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 flex items-center justify-center z-[101] p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="w-full max-w-lg pointer-events-auto"
                        >
                            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-sky-100">
                                {/* Header Gradient */}
                                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#2D9CDB] via-[#A6E1FF] to-[#C084F5]" />

                                {/* Close Button */}
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                <div className="p-8">
                                    {isSubmitted ? (
                                        <div className="text-center py-12">
                                            <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <Sparkles className="w-8 h-8" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Sent!</h3>
                                            <p className="text-slate-600">We'll be in touch with you shortly.</p>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="mb-8">
                                                <h2 className="text-2xl font-bold text-slate-900 mb-2">Start Your Transformation</h2>
                                                <p className="text-slate-600">
                                                    Tell us about your pharmacy's needs and we'll design a custom AI roadmap for you.
                                                </p>
                                            </div>

                                            <form onSubmit={handleSubmit} className="space-y-5">
                                                <div>
                                                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                                    <input
                                                        type="text"
                                                        required
                                                        value={formState.name}
                                                        onChange={e => setFormState({ ...formState, name: e.target.value })}
                                                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                                                        placeholder="John Doe"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-slate-700 mb-1">Work Email</label>
                                                    <input
                                                        type="email"
                                                        required
                                                        value={formState.email}
                                                        onChange={e => setFormState({ ...formState, email: e.target.value })}
                                                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                                                        placeholder="john@pharmacy.com.au"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-slate-700 mb-1">Pharmacy Name</label>
                                                    <input
                                                        type="text"
                                                        required
                                                        value={formState.pharmacyName}
                                                        onChange={e => setFormState({ ...formState, pharmacyName: e.target.value })}
                                                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                                                        placeholder="Innovation1 Pharmacy"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-slate-700 mb-1">How can we help?</label>
                                                    <textarea
                                                        rows={3}
                                                        value={formState.message}
                                                        onChange={e => setFormState({ ...formState, message: e.target.value })}
                                                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all resize-none"
                                                        placeholder="We're looking to automate our compounding workflow..."
                                                    />
                                                </div>

                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="w-full relative group overflow-hidden rounded-xl py-3.5 disabled:opacity-70"
                                                >
                                                    <div className="absolute inset-0 bg-gradient-to-r from-[#2D9CDB] to-[#A6E1FF]" />
                                                    <div className="absolute inset-0 bg-gradient-to-r from-[#A6E1FF] to-[#C084F5] opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    <span className="relative flex items-center justify-center gap-2 text-white font-semibold">
                                                        {isSubmitting ? 'Sending...' : 'Send Request'}
                                                        {!isSubmitting && <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                                                    </span>
                                                </button>
                                            </form>
                                        </>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
