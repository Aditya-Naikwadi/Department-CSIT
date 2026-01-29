import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';

const faculty = [
    {
        name: "Dr. Rajesh Sharma",
        designation: "Head of Department",
        specialization: "Artificial Intelligence, Data Mining",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
    },
    {
        name: "Prof. Anjali Desai",
        designation: "Assistant Professor",
        specialization: "Web Technologies, Cloud Computing",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
    },
    {
        name: "Prof. Vikram Singh",
        designation: "Senior Lecturer",
        specialization: "Cyber Security, Network Administration",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop"
    },
    {
        name: "Dr. Priya Kapoor",
        designation: "Assistant Professor",
        specialization: "Machine Learning, Python Programming",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop"
    }
];

const Faculty = () => {
    return (
        <div className="pt-24 min-h-screen container mx-auto px-4 pb-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="gradient-text">Faculty</span></h1>
                <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
                    Meet the dedicated team of professors and lecturers who are shaping the future of technology.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {faculty.map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-panel p-6 flex flex-col items-center text-center hover:translate-y-[-10px] transition-transform duration-300"
                    >
                        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-[var(--surface-hover)]">
                            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                        </div>

                        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                        <p className="text-[var(--primary)] text-sm font-medium mb-2">{member.designation}</p>
                        <p className="text-[var(--text-muted)] text-sm mb-6 h-10">{member.specialization}</p>

                        <div className="flex gap-4 mt-auto">
                            <button className="p-2 rounded-full bg-[var(--surface)] hover:bg-[var(--primary)] hover:text-white transition-colors">
                                <Mail size={18} />
                            </button>
                            <button className="p-2 rounded-full bg-[var(--surface)] hover:bg-[var(--primary)] hover:text-white transition-colors">
                                <Linkedin size={18} />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Faculty;
