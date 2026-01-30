import { motion as Motion } from 'framer-motion';
import { BookOpen, FileText, Search, Download } from 'lucide-react';

const resources = [
    { title: "Data Structures & Algorithms", author: "Cormen et al.", type: "E-Book", size: "15 MB" },
    { title: "Artificial Intelligence: A Modern Approach", author: "Russell & Norvig", type: "E-Book", size: "22 MB" },
    { title: "Introduction to Computer Networks", author: "Tanenbaum", type: "E-Book", size: "18 MB" },
    { title: "Operating System Concepts", author: "Silberschatz", type: "E-Book", size: "20 MB" },
    { title: "Research Paper: Deep Learning in Healthcare", author: "CSIT Dept.", type: "PDF", size: "2 MB" },
    { title: "Previous Year Question Papers (2025)", author: "Exam Cell", type: "PDF", size: "5 MB" },
];

const ELibrary = () => {
    return (
        <div className="pt-24 min-h-screen container mx-auto px-4 pb-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Digital <span className="gradient-text">Library</span></h1>
                <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
                    Access a vast collection of e-books, research papers, and academic resources anytime, anywhere.
                </p>
            </motion.div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12 relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]">
                    <Search size={20} />
                </div>
                <input
                    type="text"
                    placeholder="Search for books, papers, or topics..."
                    className="w-full pl-12 pr-4 py-4 rounded-full bg-[var(--surface)] border border-[var(--surface-hover)] focus:border-[var(--primary)] focus:outline-none transition-colors text-[var(--text-main)]"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((res, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="glass-panel p-6 hover:bg-[var(--surface-hover)] transition-colors flex items-start gap-4"
                    >
                        <div className="w-12 h-12 rounded bg-[var(--surface)] flex items-center justify-center shrink-0">
                            {res.type === 'E-Book' ? <BookOpen size={24} className="text-[var(--primary)]" /> : <FileText size={24} className="text-[var(--secondary)]" />}
                        </div>

                        <div className="flex-grow">
                            <h3 className="font-bold mb-1 line-clamp-1">{res.title}</h3>
                            <p className="text-[var(--text-muted)] text-sm mb-3">by {res.author}</p>

                            <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                                <span className="bg-[var(--surface)] px-2 py-1 rounded border border-[var(--surface-hover)]">{res.type}</span>
                                <span>{res.size}</span>
                            </div>
                        </div>

                        <button className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors">
                            <Download size={20} />
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ELibrary;
