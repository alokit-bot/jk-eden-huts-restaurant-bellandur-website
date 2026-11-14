import { Users, Star, Home, Flame } from "lucide-react";

const STATS = [
    { icon: Users, value: "4,800+", label: "Happy Guests & Reviews" },
    { icon: Star, value: "4.0★", label: "Across Dining Portals" },
    { icon: Home, value: "20+", label: "Private Huts & Cabins" },
    { icon: Flame, value: "100%", label: "Halal, Grilled on Order" },
];

export const Stats = () => {
    return (
        <section data-testid="stats-section" className="bg-[#854D0E] texture-grain">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {STATS.map((s) => (
                        <div key={s.label} data-testid={`stats-item-${s.value.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`} className="text-center">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#D97706] shadow-lg">
                                <s.icon className="h-5 w-5 text-white" />
                            </div>
                            <p className="mt-4 font-serif-display text-3xl sm:text-4xl font-bold text-white">{s.value}</p>
                            <p className="mt-1 text-sm text-amber-100/85">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
