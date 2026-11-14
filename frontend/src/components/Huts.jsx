import { Users, Check, Phone } from "lucide-react";
import { HUTS, CONTACT } from "../data/menu";

export const Huts = () => {
    return (
        <section id="huts" data-testid="huts-section" className="bg-[#14532D] texture-grain py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-400">Private Huts</p>
                    <h2 className="mt-3 font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white" data-testid="huts-heading">
                        Your Own Bamboo Hut, Waiting with the Lanterns On
                    </h2>
                    <p className="mt-4 text-base text-green-50/75">
                        Pick the hut that fits your evening — intimate corners for two, roomy family huts, or long celebration tables under string lights.
                    </p>
                </div>

                <div className="mt-12 grid md:grid-cols-3 gap-7">
                    {HUTS.map((hut) => (
                        <div
                            key={hut.id}
                            data-testid={`huts-card-${hut.id}`}
                            className="group rounded-2xl bg-white overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
                        >
                            <div className="relative h-52 overflow-hidden">
                                <img
                                    src={hut.image}
                                    alt={hut.name}
                                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-[#14532D]/90 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-amber-300">
                                    <Users className="h-3.5 w-3.5" />
                                    {hut.capacity}
                                </span>
                            </div>
                            <div className="p-6">
                                <h3 className="font-serif-display text-xl font-bold text-gray-900">{hut.name}</h3>
                                <p className="mt-2.5 text-sm leading-relaxed text-gray-600">{hut.description}</p>
                                <ul className="mt-4 space-y-2">
                                    {hut.features.map((f) => (
                                        <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                                            <Check className="h-4 w-4 text-[#14532D]" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={CONTACT.phoneHref}
                                    data-testid={`huts-book-btn-${hut.id}`}
                                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C2410C] px-5 py-3 text-sm font-semibold text-white hover:bg-[#9A3412] hover:scale-[1.02] transition-all"
                                >
                                    <Phone className="h-4 w-4" />
                                    Book This Hut
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
