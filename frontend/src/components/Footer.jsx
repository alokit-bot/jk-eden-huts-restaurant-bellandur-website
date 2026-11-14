import { Flame, MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { CONTACT } from "../data/menu";

const QUICK_LINKS = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Private Huts", href: "#huts" },
    { label: "Menu Highlights", href: "#menu" },
    { label: "Reviews", href: "#reviews" },
    { label: "Location", href: "#location" },
];

export const Footer = () => {
    return (
        <footer data-testid="footer-section" className="bg-[#0d3b20] text-green-50/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div>
                        <div className="flex items-center gap-2.5">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D97706] text-white">
                                <Flame className="h-5 w-5" />
                            </span>
                            <span className="leading-tight">
                                <span className="block font-serif-display font-bold text-lg text-white">JK Eden Huts</span>
                                <span className="block text-[11px] uppercase tracking-[0.2em] text-amber-200/80">Restaurant</span>
                            </span>
                        </div>
                        <p className="mt-4 text-sm leading-relaxed">
                            Private Hut Dining, Sizzling Tandoor, Fragrant Biryani & Authentic Arabian Mandi in Bellandur, Bengaluru.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-amber-400">Quick Links</h4>
                        <ul className="mt-4 space-y-2.5">
                            {QUICK_LINKS.map((l) => (
                                <li key={l.label}>
                                    <a
                                        href={l.href}
                                        data-testid={`footer-link-${l.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                                        className="text-sm hover:text-amber-300 transition-colors"
                                    >
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-amber-400">Contact</h4>
                        <ul className="mt-4 space-y-3 text-sm">
                            <li className="flex items-start gap-2.5">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                                <span>{CONTACT.address}</span>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <Phone className="h-4 w-4 shrink-0 text-amber-400" />
                                <a href={CONTACT.phoneHref} data-testid="footer-phone-link" className="hover:text-amber-300 transition-colors">{CONTACT.phone}</a>
                            </li>
                            <li className="flex items-center gap-2.5">
                                <MessageCircle className="h-4 w-4 shrink-0 text-amber-400" />
                                <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" data-testid="footer-whatsapp-link" className="hover:text-amber-300 transition-colors">
                                    WhatsApp {CONTACT.phone}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-amber-400">Hours</h4>
                        <ul className="mt-4 space-y-3 text-sm">
                            <li className="flex items-start gap-2.5">
                                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                                <span>Open 7 Days a Week<br />12:00 PM – 1:00 AM</span>
                            </li>
                            <li className="text-green-50/60">Lunch · Dinner · Late Night</li>
                            <li className="text-green-50/60">Free delivery within 3 KM</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs" data-testid="footer-copyright">© 2026 JK Eden Huts Restaurant. All rights reserved.</p>
                    <p className="text-xs text-green-50/50">100% Halal · Freshly grilled on order</p>
                </div>
            </div>
        </footer>
    );
};
