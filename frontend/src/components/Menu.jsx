import { useState } from "react";
import { Search, Flame, Star, Award, Leaf, Phone } from "lucide-react";
import { MENU_ITEMS, CATEGORIES, CONTACT } from "../data/menu";

const badgeStyle = (b) => {
    if (b === "Bestseller") return "bg-[#C2410C] text-white";
    if (b === "Chef's Special") return "bg-[#D97706] text-white";
    if (b === "Halal Certified") return "bg-[#14532D] text-white";
    if (b === "Veg") return "bg-emerald-600 text-white";
    return "bg-gray-700 text-white";
};

const badgeIcon = (b) => {
    if (b === "Bestseller") return Flame;
    if (b === "Chef's Special") return Star;
    if (b === "Veg") return Leaf;
    return Award;
};

export const Menu = () => {
    const [category, setCategory] = useState("all");
    const [query, setQuery] = useState("");
    const [vegOnly, setVegOnly] = useState(false);

    const items = MENU_ITEMS.filter((i) => {
        if (category !== "all" && i.category !== category) return false;
        if (vegOnly && !i.veg) return false;
        if (query && !`${i.name} ${i.description}`.toLowerCase().includes(query.toLowerCase())) return false;
        return true;
    });

    return (
        <section id="menu" data-testid="menu-section" className="bg-[#FDFBF7] py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C2410C]">Menu Highlights</p>
                    <h2 className="mt-3 font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900" data-testid="menu-heading">
                        Sizzling Tandoor, Fragrant Mandi & Everything In Between
                    </h2>
                    <p className="mt-4 text-base text-gray-600">
                        100% halal, freshly grilled on order. Prices in INR — generous portions, honest Bellandur pricing.
                    </p>
                </div>

                <div className="mt-10 flex flex-col lg:flex-row lg:items-center gap-4" id="mandi">
                    <div className="flex flex-wrap gap-2 flex-1" data-testid="menu-category-tabs">
                        {CATEGORIES.map((c) => (
                            <button
                                key={c.id}
                                data-testid={`menu-tab-${c.id}`}
                                onClick={() => setCategory(c.id)}
                                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                                    category === c.id
                                        ? "bg-[#14532D] text-white shadow-md scale-[1.03]"
                                        : "bg-white text-gray-700 border border-[#854D0E]/15 hover:border-[#14532D]/40 hover:text-[#14532D]"
                                }`}
                            >
                                {c.label}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search dishes..."
                                data-testid="menu-search-input"
                                className="w-44 sm:w-56 rounded-full border border-[#854D0E]/20 bg-white py-2.5 pl-9 pr-4 text-sm outline-none focus:border-[#14532D] focus:ring-2 focus:ring-[#14532D]/15 transition-all"
                            />
                        </div>
                        <button
                            onClick={() => setVegOnly(!vegOnly)}
                            data-testid="menu-veg-toggle"
                            className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-semibold transition-all ${
                                vegOnly ? "bg-emerald-600 text-white shadow-md" : "bg-white border border-[#854D0E]/15 text-gray-700 hover:border-emerald-600/40"
                            }`}
                        >
                            <Leaf className="h-3.5 w-3.5" />
                            Veg
                        </button>
                    </div>
                </div>

                {items.length === 0 ? (
                    <p className="mt-16 text-center text-gray-500" data-testid="menu-empty-state">
                        No dishes match your search — try a different craving.
                    </p>
                ) : (
                    <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-7" data-testid="menu-grid">
                        {items.map((item) => (
                            <article
                                key={item.id}
                                data-testid={`menu-card-${item.id}`}
                                className="group rounded-2xl bg-white border border-[#854D0E]/10 overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        loading="lazy"
                                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                                        {item.badges.map((b) => {
                                            const Icon = badgeIcon(b);
                                            return (
                                                <span
                                                    key={b}
                                                    data-testid={`menu-badge-${item.id}-${b.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                                                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${badgeStyle(b)}`}
                                                >
                                                    <Icon className="h-3 w-3" />
                                                    {b}
                                                </span>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className="p-5">
                                    <div className="flex items-start justify-between gap-3">
                                        <h3 className="font-serif-display text-lg font-bold text-gray-900 leading-snug">{item.name}</h3>
                                        <div className="text-right shrink-0">
                                            <p className="font-serif-display text-lg font-bold text-[#C2410C]" data-testid={`menu-price-${item.id}`}>{item.price}</p>
                                            <p className="text-[11px] text-gray-500">{item.priceNote}</p>
                                        </div>
                                    </div>
                                    <p className="mt-2.5 text-sm leading-relaxed text-gray-600">{item.description}</p>
                                    <a
                                        href={CONTACT.phoneHref}
                                        data-testid={`menu-order-btn-${item.id}`}
                                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#14532D] hover:text-[#C2410C] transition-colors"
                                    >
                                        <Phone className="h-4 w-4" />
                                        Call to Order
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};
