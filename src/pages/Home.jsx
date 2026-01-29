import HeroSlider from '../components/HeroSlider';
import { motion } from 'framer-motion';
import { BookOpen, Users, Trophy, Rocket } from 'lucide-react';

const stats = [
    { icon: BookOpen, label: "Specialized Programs", value: "6+" },
    { icon: Users, label: "Expert Faculty", value: "25+" },
    { icon: Trophy, label: "Placement Rate", value: "95%" },
    { icon: Rocket, label: "Active Projects", value: "50+" },
];

const Home = () => {
    return (
        <div className="min-h-screen">
            <HeroSlider />

            {/* Stats Section with Glassmorphism */}
            <div className="relative z-20 -mt-24 container mx-auto px-4 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel p-8 flex flex-col items-center text-center hover:bg-[var(--surface-hover)] transition-colors group"
                        >
                            <div className="w-16 h-16 rounded-full bg-[var(--surface)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <stat.icon size={32} className="text-[var(--primary)]" />
                            </div>
                            <h3 className="text-4xl font-bold mb-2 gradient-text">{stat.value}</h3>
                            <p className="text-[var(--text-muted)] font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Welcome / About Preview */}
            <section className="py-20 bg-[var(--surface)]">
                <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold mb-6">Welcome to <span className="text-[var(--primary)]">CSIT</span></h2>
                            <p className="text-[var(--text-muted)] mb-6 text-lg leading-relaxed">
                                The Department of Computer Science and Information Technology at B.K. Birla College is committed to providing world-class education in computing.
                                Our curriculum is designed to bridge the gap between academic knowledge and industry requirements, ensuring our students are ready to tackle
                                global challenges.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {['State-of-the-art Laboratories', 'Industry-Integrated Curriculum', 'Research-Driven Environment'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-[var(--secondary)]" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="btn btn-primary group">
                                Read More About Us <Rocket size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative z-10 rounded-2xl overflow-hidden shadow-glow"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                                alt="Students collaborating"
                                className="w-full h-auto object-cover"
                            />
                        </motion.div>
                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--primary)] rounded-full blur-[80px] opacity-30" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[var(--secondary)] rounded-full blur-[80px] opacity-30" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
