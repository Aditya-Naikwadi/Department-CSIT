import { motion as Motion } from 'framer-motion';
import { Linkedin, Briefcase } from 'lucide-react';

const alumni = [
    {
        name: "Vikram Malhotra",
        batch: "2018",
        role: "Senior Software Engineer",
        company: "Google",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
        quote: "The practical exposure at CSIT Dept laid the foundation for my career at a tech giant."
    },
    {
        name: "Sneha Patel",
        batch: "2020",
        role: "Data Scientist",
        company: "Amazon",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
        quote: "From theory to application, the faculty guided me at every step of my data science journey."
    },
    {
        name: "Rahul Verma",
        batch: "2019",
        role: "Full Stack Developer",
        company: "Microsoft",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
        quote: "Hackathons and coding clubs at the college helped me build a strong portfolio."
    }
];

const Alumni = () => {
    return (
        <div className="pt-24 min-h-screen container mx-auto px-4 pb-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Alumni <span className="gradient-text">Network</span></h1>
                <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
                    Celebrating the success of our graduates who are making a mark in the global technology landscape.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {alumni.map((alum, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-panel p-8 flex flex-col items-center text-center relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-10" />

                        <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] mb-4 relative z-10">
                            <img src={alum.image} alt={alum.name} className="w-full h-full rounded-full object-cover border-4 border-[var(--background)]" />
                        </div>

                        <h3 className="text-xl font-bold mb-1">{alum.name}</h3>
                        <p className="text-[var(--text-muted)] text-sm mb-4">Batch of {alum.batch}</p>

                        <div className="flex items-center gap-2 mb-6 text-[var(--primary)] font-medium bg-[var(--surface)] px-4 py-2 rounded-full">
                            <Briefcase size={16} />
                            <span>{alum.role} at {alum.company}</span>
                        </div>

                        <p className="italic text-[var(--text-muted)] mb-6">"{alum.quote}"</p>

                        <button className="text-[var(--text-muted)] hover:text-[#0077b5] transition-colors mt-auto">
                            <Linkedin size={24} />
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Alumni;
