import { motion as Motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactUs = () => {
    return (
        <div className="pt-24 min-h-screen container mx-auto px-4 pb-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact <span className="gradient-text">Us</span></h1>
                <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
                    Have questions? Reach out to us and we'll get back to you as soon as possible.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div className="glass-panel p-8">
                        <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-[var(--surface)] text-[var(--primary)] flex items-center justify-center shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Visit Us</h4>
                                    <p className="text-[var(--text-muted)]">
                                        CSIT Department, 2nd Floor, IT Building,<br />
                                        B.K. Birla College, Kalyan (W), Maharashtra 421304
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[var(--surface)] text-[var(--primary)] flex items-center justify-center shrink-0">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Call Us</h4>
                                    <p className="text-[var(--text-muted)]">+91 0251 2231294</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[var(--surface)] text-[var(--primary)] flex items-center justify-center shrink-0">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Email Us</h4>
                                    <p className="text-[var(--text-muted)]">csit@bkbirlacollegekalyan.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="h-64 rounded-xl overflow-hidden glass-panel border border-[var(--surface-hover)]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.791555319525!2d73.1491783!3d19.2478546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7942e66286751%3A0x6d1123bfcc72af6c!2sB.%20K.%20Birla%20College%20of%20Arts%2C%20Science%20%26%20Commerce!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass-panel p-8"
                >
                    <h3 className="text-2xl font-bold mb-6">Send Message</h3>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[var(--text-muted)]">Name</label>
                                <input type="text" className="w-full bg-[var(--surface)] border border-[var(--surface-hover)] rounded-lg px-4 py-3 focus:border-[var(--primary)] focus:outline-none transition-colors" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[var(--text-muted)]">Email</label>
                                <input type="email" className="w-full bg-[var(--surface)] border border-[var(--surface-hover)] rounded-lg px-4 py-3 focus:border-[var(--primary)] focus:outline-none transition-colors" placeholder="john@example.com" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-[var(--text-muted)]">Subject</label>
                            <input type="text" className="w-full bg-[var(--surface)] border border-[var(--surface-hover)] rounded-lg px-4 py-3 focus:border-[var(--primary)] focus:outline-none transition-colors" placeholder="Inquiry about admissions" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-[var(--text-muted)]">Message</label>
                            <textarea rows="5" className="w-full bg-[var(--surface)] border border-[var(--surface-hover)] rounded-lg px-4 py-3 focus:border-[var(--primary)] focus:outline-none transition-colors" placeholder="Write your message here..."></textarea>
                        </div>

                        <button type="button" className="btn btn-primary w-full flex items-center justify-center gap-2">
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactUs;
