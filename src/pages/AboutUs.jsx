import { motion as Motion } from 'framer-motion';
import { Target, Eye, History } from 'lucide-react';

const AboutUs = () => {
    return (
        <div className="pt-24 min-h-screen container mx-auto px-4 pb-12">
            <Motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">About <span className="gradient-text">Us</span></h1>
                <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
                    Learn about our rich history, mission, and vision for the future.
                </p>
            </Motion.div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                <Motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass-panel p-8 hover:border-[var(--secondary)] transition-colors"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-[var(--surface)] text-[var(--secondary)] flex items-center justify-center">
                            <Target size={24} />
                        </div>
                        <h2 className="text-2xl font-bold">Our Mission</h2>
                    </div>
                    <p className="text-[var(--text-muted)] leading-relaxed">
                        To provide high-quality education in computer science and information technology, fostering a culture of innovation, research, and ethical values, empowering students to become global leaders in the tech industry.
                    </p>
                </Motion.div>

                <Motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass-panel p-8 hover:border-[var(--primary)] transition-colors"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-[var(--surface)] text-[var(--primary)] flex items-center justify-center">
                            <Eye size={24} />
                        </div>
                        <h2 className="text-2xl font-bold">Our Vision</h2>
                    </div>
                    <p className="text-[var(--text-muted)] leading-relaxed">
                        To be a center of excellence in computing education, recognized for academic integrity, cutting-edge research, and social responsibility.
                    </p>
                </Motion.div>
            </div>

            {/* History */}
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop"
                        alt="College Building"
                        className="rounded-xl shadow-lg"
                    />
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                        <span className="text-[var(--accent)]"><History /></span>
                        Our History
                    </h2>
                    <div className="space-y-6 text-[var(--text-muted)]">
                        <p>
                            Established in 1999, the Department of Computer Science & IT started with a humble batch of 30 students. Over the decades, it has grown into one of the most sought-after departments in the region.
                        </p>
                        <p>
                            In 2010, we inaugurated our state-of-the-art laboratory complex, funded by a special grant for excellence in technology education.
                        </p>
                        <p>
                            Today, with over 500 students and a highly qualified faculty team, we continue to set benchmarks in academic performance and placement records.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
