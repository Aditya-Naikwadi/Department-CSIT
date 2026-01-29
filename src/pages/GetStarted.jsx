import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GetStarted = () => {
    const [activeTab, setActiveTab] = useState('login');

    return (
        <div className="pt-24 min-h-screen flex items-center justify-center container mx-auto px-4 pb-12">
            <div className="w-full max-w-md">
                <div className="flex bg-[var(--surface)] p-1 rounded-xl mb-8 border border-[var(--surface-hover)]">
                    <button
                        onClick={() => setActiveTab('login')}
                        className={`flex-1 py-3 text-sm font-semibold rounded-lg transition-all ${activeTab === 'login'
                                ? 'bg-[var(--primary)] text-white shadow-lg'
                                : 'text-[var(--text-muted)] hover:text-white'
                            }`}
                    >
                        Login
                    </button>
                    <button
                        onClick={() => setActiveTab('register')}
                        className={`flex-1 py-3 text-sm font-semibold rounded-lg transition-all ${activeTab === 'register'
                                ? 'bg-[var(--secondary)] text-white shadow-lg'
                                : 'text-[var(--text-muted)] hover:text-white'
                            }`}
                    >
                        Register
                    </button>
                </div>

                <div className="glass-panel p-8 relative overflow-hidden">
                    {/* Decorative Background */}
                    <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${activeTab === 'login' ? 'from-[var(--primary)] to-[var(--primary-dark)]' : 'from-[var(--secondary)] to-[var(--secondary)]'}`} />

                    <AnimatePresence mode='wait'>
                        {activeTab === 'login' ? (
                            <motion.form
                                key="login"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="space-y-6"
                            >
                                <h2 className="text-3xl font-bold text-center mb-6">Welcome Back</h2>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-[var(--text-muted)]">Email Address</label>
                                    <input type="email" className="w-full bg-[var(--background)] border border-[var(--surface-hover)] rounded-lg px-4 py-3 focus:border-[var(--primary)] focus:outline-none transition-colors" placeholder="student@example.com" />
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <label className="text-sm font-medium text-[var(--text-muted)]">Password</label>
                                        <a href="#" className="text-sm text-[var(--primary)] hover:underline">Forgot?</a>
                                    </div>
                                    <input type="password" className="w-full bg-[var(--background)] border border-[var(--surface-hover)] rounded-lg px-4 py-3 focus:border-[var(--primary)] focus:outline-none transition-colors" placeholder="••••••••" />
                                </div>

                                <button type="button" className="btn btn-primary w-full py-4 text-lg">
                                    Login
                                </button>
                            </motion.form>
                        ) : (
                            <motion.form
                                key="register"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-[var(--text-muted)]">First Name</label>
                                        <input type="text" className="w-full bg-[var(--background)] border border-[var(--surface-hover)] rounded-lg px-4 py-3 focus:border-[var(--secondary)] focus:outline-none transition-colors" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-[var(--text-muted)]">Last Name</label>
                                        <input type="text" className="w-full bg-[var(--background)] border border-[var(--surface-hover)] rounded-lg px-4 py-3 focus:border-[var(--secondary)] focus:outline-none transition-colors" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-[var(--text-muted)]">Email Address</label>
                                    <input type="email" className="w-full bg-[var(--background)] border border-[var(--surface-hover)] rounded-lg px-4 py-3 focus:border-[var(--secondary)] focus:outline-none transition-colors" placeholder="student@example.com" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-[var(--text-muted)]">Password</label>
                                    <input type="password" className="w-full bg-[var(--background)] border border-[var(--surface-hover)] rounded-lg px-4 py-3 focus:border-[var(--secondary)] focus:outline-none transition-colors" placeholder="••••••••" />
                                </div>

                                <button type="button" className="btn w-full py-4 text-lg bg-[var(--secondary)] hover:bg-[#db2777] text-white transition-colors">
                                    Create Account
                                </button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;
