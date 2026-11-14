import { Phone, UtensilsCrossed, Star, Sparkles, Clock, MapPin } from "lucide-react";
import { IMAGES, CONTACT } from "../data/menu";

const BADGES = [
    { icon: Star, label: "4.0★ Rated", sub: "4,800+ Reviews" },
    { icon: Sparkles, label: "Private Dining Huts", sub: "Exclusive & Cozy" },
    { icon: Clock, label: "Open till 1:00 AM", sub: "Late Night Dining" },
    { icon: MapPin, label: "Free Delivery", sub: "Within 3 KM" },
];

export const Hero = () => {
    return (
        <section id="home" data-testid="hero-section" className="relative min-h-screen flex items-center pt-16 lg:pt-20">
            <div className="absolute inset-0">
                <img
                    src={IMAGES.hero}
                    alt="Private bamboo thatched dining huts with warm lantern light"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
                <div className="max-w-2xl">
                    <p data-testid="hero-eyebrow" className="fade-up inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
                        <Sparkles className="h-3.5 w-3.5" />
                        Bellandur · Outer Ring Road
                    </p>

                    <h1 data-testid="hero-headline" className="fade-up stagger-1 mt-6 font-serif-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white">
                        Escape into Private Thatched Huts with Irresistible{" "}
                        <span className="text-amber-400">Tandoor</span> &{" "}
                        <span className="text-amber-400">Arabian Mandi</span>.
                    </h1>

                    <p data-testid="hero-subheadline" className="fade-up stagger-2 mt-6 text-base sm:text-lg leading-relaxed text-green-50/85">
                        Bellandur's favourite private hut dining destination along the Outer Ring Road. Over 4,800+ guests celebrate birthdays, family dinners, and relaxed evening get-togethers in individual bamboo huts surrounded by warm ambient lighting, smoky tandoor platters, and authentic Mandi.
                    </p>

                    <div className="fade-up stagger-3 mt-8 flex flex-wrap gap-4">
                        <a
                            href={CONTACT.phoneHref}
                            data-testid="hero-call-btn"
                            className="inline-flex items-center gap-2 rounded-full bg-[#C2410C] px-7 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-black/30 hover:bg-[#9A3412] hover:scale-[1.03] transition-all"
                        >
                            <Phone className="h-4.5 w-4.5 h-5 w-5" />
                            Call to Reserve Hut
                        </a>
                        <a
                            href="#menu"
                            data-testid="hero-menu-btn"
                            className="inline-flex items-center gap-2 rounded-full border-2 border-amber-300/70 bg-white/5 px-7 py-3.5 text-sm sm:text-base font-semibold text-amber-200 backdrop-blur-sm hover:bg-amber-300 hover:text-[#14532D] hover:scale-[1.03] transition-all"
                        >
                            <UtensilsCrossed className="h-5 w-5" />
                            Explore Menu
                        </a>
                    </div>

                    <div className="fade-up stagger-4 mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-2xl" data-testid="hero-trust-badges">
                        {BADGES.map((b) => (
                            <div
                                key={b.label}
                                data-testid={`hero-badge-${b.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                                className="rounded-xl border border-white/15 bg-white/10 backdrop-blur-md px-4 py-3.5"
                            >
                                <b.icon className="h-5 w-5 text-amber-400" />
                                <p className="mt-2 text-sm font-semibold text-white leading-tight">{b.label}</p>
                                <p className="text-xs text-green-50/70 mt-0.5">{b.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
