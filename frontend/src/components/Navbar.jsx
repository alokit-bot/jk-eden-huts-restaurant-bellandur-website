import { useState, useEffect } from "react";
import { Menu, X, Phone, Flame } from "lucide-react";
import { CONTACT } from "../data/menu";

const LINKS = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Private Huts", href: "#huts" },
    { label: "Menu Highlights", href: "#menu" },
    { label: "Mandi & Tandoor", href: "#mandi" },
    { label: "Reviews", href: "#reviews" },
    { label: "Location", href: "#location" },
];

export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            data-testid="nav-header"
            className={`fixed top-0 inset-x-0 z-50 bg-[#14532D]/95 backdrop-blur-md text-white transition-shadow duration-300 ${scrolled ? "shadow-lg shadow-black/20" : ""}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    <a href="#home" data-testid="nav-logo" className="flex items-center gap-2.5 group">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D97706] text-white shadow-md group-hover:scale-105 transition-transform">
                            <Flame className="h-5 w-5" />
                        </span>
                        <span className="leading-tight">
                            <span className="block font-serif-display font-bold text-lg tracking-tight">JK Eden Huts</span>
                            <span className="block text-[11px] uppercase tracking-[0.2em] text-amber-200/90">Restaurant · Bellandur</span>
                        </span>
                    </a>

                    <nav className="hidden lg:flex items-center gap-7" data-testid="nav-links">
                        {LINKS.map((l) => (
                            <a
                                key={l.label}
                                href={l.href}
                                data-testid={`nav-link-${l.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                                className="text-sm font-medium text-green-50/85 hover:text-amber-300 transition-colors"
                            >
                                {l.label}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden lg:block">
                        <a
                            href={CONTACT.phoneHref}
                            data-testid="nav-book-hut-btn"
                            className="inline-flex items-center gap-2 rounded-full bg-[#C2410C] px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#9A3412] hover:scale-[1.03] transition-all"
                        >
                            <Phone className="h-4 w-4" />
                            Book a Hut
                        </a>
                    </div>

                    <button
                        data-testid="nav-mobile-toggle"
                        className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                    >
                        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {open && (
                <div className="lg:hidden bg-[#14532D] border-t border-white/10" data-testid="nav-mobile-menu">
                    <nav className="px-4 py-4 flex flex-col gap-1">
                        {LINKS.map((l) => (
                            <a
                                key={l.label}
                                href={l.href}
                                data-testid={`nav-mobile-link-${l.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                                onClick={() => setOpen(false)}
                                className="rounded-md px-3 py-2.5 text-sm font-medium text-green-50/90 hover:bg-white/10 hover:text-amber-300 transition-colors"
                            >
                                {l.label}
                            </a>
                        ))}
                        <a
                            href={CONTACT.phoneHref}
                            data-testid="nav-mobile-book-btn"
                            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#C2410C] px-5 py-3 text-sm font-semibold text-white"
                        >
                            <Phone className="h-4 w-4" />
                            Book a Hut · {CONTACT.phone}
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};
