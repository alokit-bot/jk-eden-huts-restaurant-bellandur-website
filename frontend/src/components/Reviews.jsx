import { Star, Quote, BadgeCheck } from "lucide-react";
import { REVIEWS } from "../data/menu";

export const Reviews = () => {
    return (
        <section id="reviews" data-testid="reviews-section" className="bg-white py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C2410C]">Wall of Love</p>
                    <h2 className="mt-3 font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900" data-testid="reviews-heading">
                        4,800+ Guests Have Dined Under Our Lanterns
                    </h2>
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#FDFBF7] border border-[#854D0E]/15 px-5 py-2" data-testid="reviews-rating-pill">
                        <div className="flex">
                            {[...Array(4)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                            ))}
                            <Star className="h-4 w-4 text-amber-400" />
                        </div>
                        <span className="text-sm font-semibold text-gray-800">4.0 on Google Maps & Dining Portals</span>
                    </div>
                </div>

                <div className="mt-12 grid md:grid-cols-3 gap-7">
                    {REVIEWS.map((r) => (
                        <figure
                            key={r.id}
                            data-testid={`reviews-card-${r.id}`}
                            className="relative rounded-2xl bg-[#FDFBF7] border border-[#854D0E]/10 p-7 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <Quote className="absolute top-6 right-6 h-8 w-8 text-[#D97706]/20" />
                            <div className="flex gap-0.5" data-testid={`reviews-stars-${r.id}`}>
                                {[...Array(r.stars)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <blockquote className="mt-4 text-sm sm:text-base leading-relaxed text-gray-700">"{r.quote}"</blockquote>
                            <figcaption className="mt-6 flex items-center justify-between border-t border-[#854D0E]/10 pt-4">
                                <div>
                                    <p className="text-sm font-bold text-gray-900 flex items-center gap-1.5">
                                        {r.name}
                                        <BadgeCheck className="h-4 w-4 text-[#14532D]" />
                                    </p>
                                    <p className="text-xs text-gray-500">Verified Diner</p>
                                </div>
                                <span className="rounded-full bg-[#D97706]/10 px-3 py-1 text-[11px] font-semibold text-[#854D0E]">{r.tag}</span>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
};
