import { useState } from "react";
import { CalendarCheck, Phone, MessageCircle, User, Clock, Users, Home, NotebookPen } from "lucide-react";
import { toast } from "sonner";
import { CONTACT } from "../data/menu";

const TIME_SLOTS = ["12:00 PM – 2:00 PM", "2:00 PM – 5:00 PM", "5:00 PM – 8:00 PM", "8:00 PM – 10:00 PM", "10:00 PM – 1:00 AM"];
const HUT_TYPES = ["Couple's Lantern Hut", "Family Bamboo Hut", "Celebration & Team Hut", "Open-air Garden Seating", "Indoor Hall"];

const inputCls =
    "w-full rounded-xl border border-[#854D0E]/20 bg-white px-4 py-3 text-sm outline-none focus:border-[#14532D] focus:ring-2 focus:ring-[#14532D]/15 transition-all placeholder:text-gray-400";

export const Booking = () => {
    const [form, setForm] = useState({ name: "", phone: "", date: "", time: TIME_SLOTS[3], party: "4", hut: HUT_TYPES[1], notes: "" });
    const [errors, setErrors] = useState({});
    const [confirmed, setConfirmed] = useState(null);

    const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

    const submit = (e) => {
        e.preventDefault();
        const errs = {};
        if (!form.name.trim()) errs.name = "Please tell us your name";
        if (!/^[0-9+\s-]{10,15}$/.test(form.phone.trim())) errs.phone = "Enter a valid 10-digit phone number";
        if (!form.date) errs.date = "Pick a date for your visit";
        setErrors(errs);
        if (Object.keys(errs).length > 0) return;

        setConfirmed({ ...form });
        toast.success("Hut inquiry received! We'll call you shortly to confirm.", {
            description: `${form.hut} for ${form.party} guests on ${form.date}`,
        });
    };

    return (
        <section data-testid="booking-section" className="bg-[#FDFBF7] py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
                    <div className="lg:col-span-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C2410C]">Reserve Your Hut</p>
                        <h2 className="mt-3 font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900" data-testid="booking-heading">
                            Huts Fill Up Fast on Weekends
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-gray-600">
                            Send us your preferred date, time and party size — we'll call you back within minutes to lock in your private bamboo hut. Prefer to talk right away?
                        </p>
                        <div className="mt-7 space-y-3">
                            <a
                                href={CONTACT.phoneHref}
                                data-testid="booking-call-btn"
                                className="flex items-center gap-3 rounded-xl bg-[#14532D] px-5 py-4 text-white shadow-md hover:bg-[#0d3b20] hover:scale-[1.01] transition-all"
                            >
                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D97706]">
                                    <Phone className="h-4.5 w-4.5 h-5 w-5" />
                                </span>
                                <span>
                                    <span className="block text-xs text-green-100/70">Call us directly</span>
                                    <span className="block font-semibold">{CONTACT.phone}</span>
                                </span>
                            </a>
                            <a
                                href={CONTACT.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="booking-whatsapp-btn"
                                className="flex items-center gap-3 rounded-xl bg-white border border-[#854D0E]/15 px-5 py-4 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all"
                            >
                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white">
                                    <MessageCircle className="h-5 w-5" />
                                </span>
                                <span>
                                    <span className="block text-xs text-gray-500">WhatsApp us</span>
                                    <span className="block font-semibold text-gray-900">{CONTACT.phone}</span>
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-3 rounded-2xl bg-white border border-[#854D0E]/10 shadow-lg p-6 sm:p-8">
                        {confirmed ? (
                            <div className="text-center py-10" data-testid="booking-confirmation">
                                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#14532D]/10">
                                    <CalendarCheck className="h-8 w-8 text-[#14532D]" />
                                </span>
                                <h3 className="mt-5 font-serif-display text-2xl font-bold text-gray-900">Inquiry Sent, {confirmed.name.split(" ")[0]}!</h3>
                                <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-md mx-auto">
                                    We've noted the <strong>{confirmed.hut}</strong> for <strong>{confirmed.party} guests</strong> on <strong>{confirmed.date}</strong> ({confirmed.time}). We'll call <strong>{confirmed.phone}</strong> shortly to confirm your hut.
                                </p>
                                <button
                                    onClick={() => setConfirmed(null)}
                                    data-testid="booking-new-btn"
                                    className="mt-7 rounded-full border-2 border-[#14532D] px-6 py-2.5 text-sm font-semibold text-[#14532D] hover:bg-[#14532D] hover:text-white transition-all"
                                >
                                    Make Another Inquiry
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={submit} data-testid="booking-form" noValidate>
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gray-600">
                                            <User className="h-3.5 w-3.5" /> Full Name
                                        </label>
                                        <input
                                            type="text"
                                            value={form.name}
                                            onChange={(e) => set("name", e.target.value)}
                                            placeholder="Your name"
                                            data-testid="booking-name-input"
                                            className={inputCls}
                                        />
                                        {errors.name && <p className="mt-1 text-xs text-[#C2410C]" data-testid="booking-name-error">{errors.name}</p>}
                                    </div>
                                    <div>
                                        <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gray-600">
                                            <Phone className="h-3.5 w-3.5" /> Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            value={form.phone}
                                            onChange={(e) => set("phone", e.target.value)}
                                            placeholder="+91 XXXXX XXXXX"
                                            data-testid="booking-phone-input"
                                            className={inputCls}
                                        />
                                        {errors.phone && <p className="mt-1 text-xs text-[#C2410C]" data-testid="booking-phone-error">{errors.phone}</p>}
                                    </div>
                                    <div>
                                        <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gray-600">
                                            <CalendarCheck className="h-3.5 w-3.5" /> Preferred Date
                                        </label>
                                        <input
                                            type="date"
                                            value={form.date}
                                            onChange={(e) => set("date", e.target.value)}
                                            data-testid="booking-date-input"
                                            className={inputCls}
                                        />
                                        {errors.date && <p className="mt-1 text-xs text-[#C2410C]" data-testid="booking-date-error">{errors.date}</p>}
                                    </div>
                                    <div>
                                        <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gray-600">
                                            <Clock className="h-3.5 w-3.5" /> Time Slot
                                        </label>
                                        <select value={form.time} onChange={(e) => set("time", e.target.value)} data-testid="booking-time-select" className={inputCls}>
                                            {TIME_SLOTS.map((t) => (
                                                <option key={t}>{t}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gray-600">
                                            <Users className="h-3.5 w-3.5" /> Party Size
                                        </label>
                                        <input
                                            type="number"
                                            min="1"
                                            max="30"
                                            value={form.party}
                                            onChange={(e) => set("party", e.target.value)}
                                            data-testid="booking-party-input"
                                            className={inputCls}
                                        />
                                    </div>
                                    <div>
                                        <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gray-600">
                                            <Home className="h-3.5 w-3.5" /> Preferred Seating
                                        </label>
                                        <select value={form.hut} onChange={(e) => set("hut", e.target.value)} data-testid="booking-hut-select" className={inputCls}>
                                            {HUT_TYPES.map((t) => (
                                                <option key={t}>{t}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gray-600">
                                            <NotebookPen className="h-3.5 w-3.5" /> Special Requests
                                        </label>
                                        <textarea
                                            rows="3"
                                            value={form.notes}
                                            onChange={(e) => set("notes", e.target.value)}
                                            placeholder="Birthday decoration, cake, wheelchair access..."
                                            data-testid="booking-notes-input"
                                            className={inputCls}
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    data-testid="booking-submit-btn"
                                    className="mt-6 w-full rounded-full bg-[#C2410C] px-6 py-4 text-sm sm:text-base font-bold text-white shadow-md hover:bg-[#9A3412] hover:scale-[1.01] transition-all"
                                >
                                    Request Hut Reservation
                                </button>
                                <p className="mt-3 text-center text-xs text-gray-500">
                                    No advance payment needed — we confirm every inquiry by phone.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
