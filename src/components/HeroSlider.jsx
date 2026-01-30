import { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';

// Placeholder images - using Unsplash for "Computer Science Department" vibes
const images = [
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1920&auto=format&fit=crop", // Coding code
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1920&auto=format&fit=crop", // Meeting/Class
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1920&auto=format&fit=crop", // Students
    "https://images.unsplash.com/photo-1504384308090-c54be3852f92?q=80&w=1920&auto=format&fit=crop", // Building/Office
];

const HeroSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden">
            <AnimatePresence mode='wait'>
                <Motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${images[currentIndex]})` }}
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)] via-transparent to-transparent opacity-90" />
                    <div className="absolute inset-0 bg-black/40" />
                </Motion.div>
            </AnimatePresence>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-10 flex items-center container mx-auto px-4">
                <div className="max-w-3xl">
                    <Motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                    >
                        <span className="gradient-text">Excellence</span> in <br />
                        CS & IT Education
                    </Motion.h1>

                    <Motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="text-lg md:text-2xl text-[var(--text-muted)] mb-8 max-w-2xl"
                    >
                        B.K. Birla College's premier department fostering innovation, research, and future-ready technology professionals.
                    </Motion.p>

                    <Motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1, duration: 0.8 }}
                        className="flex gap-4"
                    >
                        <button className="btn btn-primary text-lg px-8 py-3">Explore Programs</button>
                        <button className="btn btn-outline text-lg px-8 py-3">View Gallery</button>
                    </Motion.div>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-12 left-0 right-0 z-20 flex justify-center gap-3">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-[var(--primary)]' : 'w-2 bg-white/50 hover:bg-white'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;
