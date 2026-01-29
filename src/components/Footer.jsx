import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[var(--surface)] text-[var(--text-muted)] pt-16 pb-8 mt-auto border-t border-[var(--surface-hover)]">
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <div>
                    <h3 className="text-2xl font-bold text-[var(--text-main)] mb-4">CSIT Dept.</h3>
                    <p className="mb-4">
                        Empowering students with cutting-edge technology and knowledge at B.K. Birla College.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-[var(--primary)] transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-[var(--primary)] transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="hover:text-[var(--primary)] transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-[var(--primary)] transition-colors"><Linkedin size={20} /></a>
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-semibold text-[var(--text-main)] mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><Link to="/programs" className="hover:text-[var(--primary)] transition-colors">Programs</Link></li>
                        <li><Link to="/faculty" className="hover:text-[var(--primary)] transition-colors">Faculty</Link></li>
                        <li><Link to="/events" className="hover:text-[var(--primary)] transition-colors">Events</Link></li>
                        <li><Link to="/e-library" className="hover:text-[var(--primary)] transition-colors">E-Library</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold text-[var(--text-main)] mb-4">Departments</h4>
                    <ul className="space-y-2">
                        <li><Link to="/programs" className="hover:text-[var(--primary)] transition-colors">Computer Science</Link></li>
                        <li><Link to="/programs" className="hover:text-[var(--primary)] transition-colors">Information Tech</Link></li>
                        <li><Link to="/programs" className="hover:text-[var(--primary)] transition-colors">Data Science</Link></li>
                        <li><Link to="/programs" className="hover:text-[var(--primary)] transition-colors">Artificial Intelligence</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold text-[var(--text-main)] mb-4">Contact Us</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <MapPin size={20} className="text-[var(--primary)] shrink-0" />
                            <span>B.K. Birla College, Kalyan (W), Maharashtra 421304</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone size={20} className="text-[var(--primary)] shrink-0" />
                            <span>+91 123 456 7890</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={20} className="text-[var(--primary)] shrink-0" />
                            <span>info@bkbirlacollege.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container border-t border-[var(--surface-hover)] pt-8 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} CSIT Department, B.K. Birla College. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
