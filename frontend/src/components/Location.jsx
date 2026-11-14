import { MapPin, Phone, MessageCircle, Clock, Navigation } from "lucide-react";
import { CONTACT, IMAGES } from "../data/menu";

export const Location = () => {
    return (
        <section id="location" data-testid="location-section" className="bg-[#14532D] texture-grain py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-400">Find Us</p>
                        <h2 className="mt-3 font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white" data-testid="location-heading">
                            Right on the Bellandur Outer Ring Road
                        </h2>

                        <div className="mt-8 space-y-5">
                            <div className="flex items-start gap-4" data-testid="location-address">
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                                    <MapPin className="h-5 w-5 text-amber-400" />
                                </span>
                                <div>
                                    <p className="font-semibold text-white">{CONTACT.address}</p>
                                    <p className="mt-1 text-sm text-green-50/70">{CONTACT.landmark}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4" data-testid="location-hours">
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                                    <Clock className="h-5 w-5 text-amber-400" />
                                </span>
                                <div>
                                    <p className="font-semibold text-white">{CONTACT.hours}</p>
                                    <p className="mt-1 text-sm text-green-50/70">Lunch, dinner & late night — 7 days a week</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4" data-testid="location-phone">
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                                    <Phone className="h-5 w-5 text-amber-400" />
                                </span>
                                <div>
                                    <a href={CONTACT.phoneHref} className="font-semibold text-white hover:text-amber-300 transition-colors">{CONTACT.phone}</a>
                                    <p className="mt-1 text-sm text-green-50/70">Call for hut reservations & takeaway</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-9 flex flex-wrap gap-3">
                            <a
                                href={CONTACT.maps}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="location-directions-btn"
                                className="inline-flex items-center gap-2 rounded-full bg-[#D97706] px-6 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-[#B45309] hover:scale-[1.03] transition-all"
                            >
                                <Navigation className="h-4 w-4" />
                                Get Directions
                            </a>
                            <a
                                href={CONTACT.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="location-whatsapp-btn"
                                className="inline-flex items-center gap-2 rounded-full border-2 border-emerald-400/60 bg-emerald-500/10 px-6 py-3.5 text-sm font-bold text-emerald-300 hover:bg-emerald-400 hover:text-[#14532D] hover:scale-[1.03] transition-all"
                            >
                                <MessageCircle className="h-4 w-4" />
                                WhatsApp Us
                            </a>
                            <a
                                href={CONTACT.phoneHref}
                                data-testid="location-call-btn"
                                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-6 py-3.5 text-sm font-bold text-white hover:bg-white hover:text-[#14532D] hover:scale-[1.03] transition-all"
                            >
                                <Phone className="h-4 w-4" />
                                Call Now
                            </a>
                        </div>
                    </div>

                    <div className="relative" data-testid="location-image-wrap">
                        <img
                            src={IMAGES.hutGarden}
                            alt="JK Eden Huts garden seating in the evening"
                            className="rounded-2xl object-cover h-72 sm:h-96 w-full shadow-2xl"
                        />
                        <div className="absolute -bottom-5 left-5 right-5 sm:left-8 sm:right-auto rounded-2xl bg-white px-6 py-4 shadow-xl">
                            <p className="text-xs font-semibold uppercase tracking-wide text-[#C2410C]">Free Delivery</p>
                            <p className="mt-1 text-sm font-semibold text-gray-900">Within 3 KM of Bellandur ORR</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
