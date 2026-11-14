import { Sparkles, Users, Heart, Flame, Check } from "lucide-react";
import { IMAGES } from "../data/menu";

const POINTS = [
    "Your own bamboo hut with drawn curtains and gentle lantern light",
    "Ceiling fans, cushioned seating and total privacy for every party",
    "Smoky tandoor platters and Mandi served straight from the fire",
    "Perfect for team dinners, couple dates and family birthdays",
];

export const Experience = () => {
    return (
        <section id="about" data-testid="experience-section" className="bg-[#FDFBF7] py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="relative order-2 lg:order-1">
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src={IMAGES.hutGarden}
                                alt="Open-air garden seating with bamboo huts"
                                data-testid="experience-img-garden"
                                className="rounded-2xl object-cover h-64 sm:h-80 w-full shadow-lg"
                            />
                            <img
                                src={IMAGES.hero}
                                alt="Private thatched hut interior with warm lighting"
                                data-testid="experience-img-hut"
                                className="rounded-2xl object-cover h-64 sm:h-80 w-full shadow-lg mt-8"
                            />
                        </div>
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-auto lg:-right-6 lg:translate-x-0 rounded-2xl bg-[#14532D] px-6 py-5 shadow-xl" data-testid="experience-floating-card">
                            <p className="font-serif-display text-3xl font-bold text-amber-400">20+</p>
                            <p className="text-sm text-green-50/85">Private huts & cabins</p>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C2410C]">The Eden Huts Dining Experience</p>
                        <h2 className="mt-3 font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900" data-testid="experience-heading">
                            A Private Sanctuary, Hidden Away from ORR Traffic
                        </h2>
                        <p className="mt-5 text-base leading-relaxed text-gray-600" data-testid="experience-story">
                            Step off the Outer Ring Road and into another world. At JK Eden Huts, every party gets its own dedicated bamboo thatched hut — curtains drawn, lanterns glowing, fans humming softly overhead. No shared halls, no prying eyes, just your people and platters of smoky Alfham, sizzling tandoor and fragrant Mandi.
                        </p>
                        <p className="mt-4 text-base leading-relaxed text-gray-600">
                            From Ecospace team dinners to couple dates, family birthday celebrations and late-night cravings — this is Bellandur's cozy escape, open till 1:00 AM every single day.
                        </p>

                        <ul className="mt-7 space-y-3.5" data-testid="experience-points">
                            {POINTS.map((p) => (
                                <li key={p} className="flex items-start gap-3">
                                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#14532D]/10">
                                        <Check className="h-3.5 w-3.5 text-[#14532D]" />
                                    </span>
                                    <span className="text-sm sm:text-base text-gray-700">{p}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {[
                                { icon: Heart, label: "Couple Dates" },
                                { icon: Users, label: "Family Dinners" },
                                { icon: Sparkles, label: "Birthdays" },
                                { icon: Flame, label: "Late Night Cravings" },
                            ].map((t) => (
                                <span
                                    key={t.label}
                                    data-testid={`experience-tag-${t.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-[#854D0E]/20 bg-white px-4 py-2 text-xs font-semibold text-[#854D0E] shadow-sm"
                                >
                                    <t.icon className="h-3.5 w-3.5 text-[#C2410C]" />
                                    {t.label}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
