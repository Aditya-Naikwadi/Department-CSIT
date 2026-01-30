import { motion as Motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';

const events = [
    {
        title: "TechXplore 2026",
        date: "March 15, 2026",
        time: "10:00 AM - 5:00 PM",
        location: "Main Auditorium",
        category: "Symposium",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
        description: "Annual technical symposium featuring coding competitions, hackathons, and guest lectures from industry leaders."
    },
    {
        title: "Seminar on AI Ethics",
        date: "February 28, 2026",
        time: "2:00 PM - 4:00 PM",
        location: "Seminar Hall IT",
        category: "Seminar",
        image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=800&auto=format&fit=crop",
        description: "A deep dive into the ethical considerations of Artificial Intelligence in modern society."
    },
    {
        title: "Code for Good Hackathon",
        date: "April 10, 2026",
        time: "24 Hours",
        location: "CS Labs 1 & 2",
        category: "Hackathon",
        image: "https://images.unsplash.com/photo-1504384308090-c54be3852f92?q=80&w=800&auto=format&fit=crop",
        description: "24-hour hackathon aiming to solve real-world problems faced by local NGOs and non-profits."
    }
];

const Events = () => {
    return (
        <div className="pt-24 min-h-screen container mx-auto px-4 pb-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Upcoming <span className="gradient-text">Events</span></h1>
                <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
                    Stay updated with the latest workshops, seminars, and technical fests happening in the department.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map((event, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-panel overflow-hidden group"
                    >
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute top-4 right-4 bg-[var(--primary)] text-white text-xs font-bold px-3 py-1 rounded-full">
                                {event.category}
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">{event.title}</h3>
                            <p className="text-[var(--text-muted)] text-sm mb-4 line-clamp-2">{event.description}</p>

                            <div className="space-y-2 text-sm text-[var(--text-muted)]">
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} className="text-[var(--secondary)]" />
                                    <span>{event.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={16} className="text-[var(--secondary)]" />
                                    <span>{event.time}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin size={16} className="text-[var(--secondary)]" />
                                    <span>{event.location}</span>
                                </div>
                            </div>

                            <button className="w-full mt-6 btn btn-outline text-sm py-2">
                                Register Now
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Events;
