import { motion } from 'framer-motion';
import { Book, Code, Database, Server } from 'lucide-react';

const programs = [
    {
        title: "B.Sc. Computer Science",
        duration: "3 Years",
        icon: Code,
        description: "A comprehensive undergraduate program focusing on the fundamental concepts of computer science, algorithms, and software development.",
        modules: ["Data Structures", "Java Programming", "Web Development", "Operating Systems"]
    },
    {
        title: "B.Sc. Information Technology",
        duration: "3 Years",
        icon: Server,
        description: "Designed to provide a strong foundation in IT infrastructure, networking, and information management systems.",
        modules: ["Networking", "Database Management", "Python", "Cloud Computing"]
    },
    {
        title: "M.Sc. Computer Science",
        duration: "2 Years",
        icon: Database,
        description: "Advanced postgraduate program specializing in areas like Artificial Intelligence, Machine Learning, and Data Science.",
        modules: ["Artificial Intelligence", "Big Data Analytics", "Cyber Security", "Research Methodology"]
    },
    {
        title: "M.Sc. Information Technology",
        duration: "2 Years",
        icon: Book,
        description: "Focuses on advanced IT solutions, software engineering, and enterprise resource planning.",
        modules: ["Enterprise Computing", "Distributed Systems", "Mobile Computing", "IT Governance"]
    }
];

const Programs = () => {
    return (
        <div className="pt-24 min-h-screen container mx-auto px-4 pb-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="gradient-text">Programs</span></h1>
                <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
                    We offer a range of undergraduate and postgraduate programs designed to equip students with the skills needed for the digital era.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {programs.map((program, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-panel p-8 hover:bg-[var(--surface-hover)] transition-all group"
                    >
                        <div className="flex items-start justify-between mb-6">
                            <div className="w-12 h-12 rounded-lg bg-[var(--surface)] flex items-center justify-center group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                                <program.icon size={24} className="text-[var(--primary)] group-hover:text-white" />
                            </div>
                            <span className="bg-[var(--surface)] text-xs font-semibold px-3 py-1 rounded-full text-[var(--text-muted)] border border-[var(--surface-hover)]">
                                {program.duration}
                            </span>
                        </div>

                        <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                        <p className="text-[var(--text-muted)] mb-6">{program.description}</p>

                        <div className="space-y-2">
                            <h4 className="text-sm font-semibold text-[var(--accent)] uppercase tracking-wider">Key Modules</h4>
                            <ul className="flex flex-wrap gap-2">
                                {program.modules.map((mod, i) => (
                                    <li key={i} className="text-xs bg-[var(--surface)] px-2 py-1 rounded text-[var(--text-muted)]">
                                        {mod}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button className="w-full mt-6 btn btn-outline group-hover:bg-[var(--primary)] group-hover:text-white group-hover:border-[var(--primary)]">
                            View Curriculum
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Programs;
