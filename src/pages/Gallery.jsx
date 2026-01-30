import { motion as Motion } from 'framer-motion';

const photos = [
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop", // Campus
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop", // Meeting
    "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=800&auto=format&fit=crop", // Presentation
    "https://images.unsplash.com/photo-1577896335412-08473a3d03c4?q=80&w=800&auto=format&fit=crop", // Lab
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop", // Graduation
    "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=800&auto=format&fit=crop", // Library
];

const Gallery = () => {
    return (
        <div className="pt-24 min-h-screen container mx-auto px-4 pb-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo <span className="gradient-text">Gallery</span></h1>
                <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
                    A glimpse into the vibrant campus life, events, and academic activities.
                </p>
            </motion.div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {photos.map((src, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="break-inside-avoid rounded-xl overflow-hidden glass-panel group relative"
                    >
                        <img
                            src={src}
                            alt={`Gallery ${index + 1}`}
                            className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white font-bold border-b-2 border-[var(--primary)] pb-1">View Full Size</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
