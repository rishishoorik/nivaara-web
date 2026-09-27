import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Wifi, Car, Utensils, Coffee, ShieldCheck, Award, Heart, Leaf,
  ChevronLeft, ChevronRight, Star, Phone, Sparkles, BadgePercent,
  ConciergeBell, MapPin, Plane, Train, Check,
} from "lucide-react";

import { IMG } from "../lib/images";
import { BookingBar } from "../components/BookingBar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hotel Nivaara Tirupati — Best Luxury Hotel Near Tirumala Temple" },
      { name: "description", content: "Hotel Nivaara Tirupati — 4-star luxury hotel opposite APSRTC bus station, 20 km from Tirumala Balaji Temple. 90 premium rooms, Dakshin pure-veg, Fusion multi-cuisine, 24-hour coffee shop, banquets for 10 to 500 guests. Book direct for best rates + free breakfast." },
      { name: "keywords", content: "Hotel Nivaara, best hotel Tirupati, hotel near Tirumala temple, luxury hotel Tirupati, pilgrim hotel Tirupati, wedding venue Tirupati, banquet hall Tirupati" },
      { property: "og:title", content: "Hotel Nivaara Tirupati — Luxury Stay Near Tirumala" },
      { property: "og:description", content: "Award-winning 4-star hospitality near the sacred hills of Tirumala. Dakshin, Fusion, coffee shop & in-room dining. Reserve direct for the lowest rates." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: IMG.exteriorTwilight },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Home,
});

type Slide = {
  eyebrow: string; name: string; region: string; story: string;
  links: { label: string; to: string }[]; image: string;
};

const SLIDES: Slide[] = [
  {
    eyebrow: "Hotel Nivaara · Tirupati",
    name: "A Sanctuary Near Tirumala",
    region: "20 km from Sri Venkateswara Temple",
    story:
      "Hand-finished interiors, lantern-lit corridors and a tranquil courtyard — a contemporary luxury hotel moments from the APSRTC station and the sacred road to Tirumala.",
    links: [
      { label: "Stay", to: "/rooms" },
      { label: "Dining", to: "/dining" },
      { label: "Celebrate", to: "/banquets" },
    ],
    image: IMG.exteriorTwilight,
  },
  {
    eyebrow: "Grand-9 · Conferences · Weddings",
    name: "The Banquet Pavilions",
    region: "Capacity 10 – 500 guests",
    story:
      "From intimate boardrooms to our pillarless Grand-9 ballroom — celebrations crafted with cinematic light, in-house catering and white-glove choreography.",
    links: [
      { label: "Venues", to: "/banquets" },
      { label: "Plan an Event", to: "/contact" },
    ],
    image: IMG.conferenceRed,
  },
  {
    eyebrow: "Dakshin · Fusion · In-Room Dining",
    name: "Multi-Cuisine & Café",
    region: "South Indian, North Indian, Continental & Chinese",
    story:
      "From Dakshin’s pure-vegetarian classics to Fusion’s multi-cuisine spread, and our 24-hour coffee shop — every craving is met. Round-the-clock in-room dining completes the experience for travellers on their own schedule.",
    links: [
      { label: "Dining", to: "/dining" },
      { label: "Reserve", to: "/booking" },
    ],
    image: IMG.diningTandoori,
  },

];

const FAQ = [
  { q: "How far is Hotel Nivaara from Tirumala Temple?", a: "The sacred Sri Venkateswara Temple at Tirumala is approximately 20 km — about a 45-minute drive via the Alipiri ghat road. Our concierge can arrange cab transfers and darshan guidance." },
  { q: "Is Hotel Nivaara close to Tirupati Railway Station?", a: "Yes — Tirupati Railway Station is just 1 km from our lobby, and the APSRTC Central Bus Station is directly opposite the hotel." },
  { q: "What is included when I book direct on nivaarahotels.com?", a: "Direct bookings receive our Best Rate Guarantee, complimentary breakfast, complimentary high-speed Wi-Fi, and priority upgrades subject to availability." },
  { q: "Do you offer banquet halls for weddings in Tirupati?", a: "Yes. Our Grand-9 hall hosts 10 to 500 guests with in-house catering, AV and event choreography. We also have intimate halls for receptions, sangeet and corporate events." },
  { q: "Is parking and 24-hour service available?", a: "Complimentary valet parking, 24-hour front desk, 24-hour in-room dining, and 24/7 security are all included for every guest." },
];

function Home() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 7000);
    return () => clearInterval(t);
  }, []);
  const s = SLIDES[i];

  return (
    <>
      {/* HERO — editorial split carousel */}
      <section className="pt-12 md:pt-16 pb-16 bg-ivory">
        <div className="container-x grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-14 items-center">
          <div className="relative aspect-[4/5] lg:aspect-[5/6] overflow-hidden bg-cream">
            <AnimatePresence mode="wait">
              <motion.img
                key={s.image}
                src={s.image}
                alt={s.name}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute bottom-5 left-5 bg-ivory/90 backdrop-blur px-4 py-2 flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-navy">
              <Star className="w-3.5 h-3.5 text-gold fill-gold" /> 4.8 · 1,200+ Reviews
            </div>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.7 }}
                className="text-center max-w-md mx-auto"
              >
                <div className="eyebrow text-navy/70 mb-6">{s.eyebrow}</div>
                <h1 className="heading-trajan text-3xl md:text-5xl text-navy leading-[1.15]">
                  {s.name}
                </h1>
                <div className="eyebrow mt-4 text-muted-foreground">{s.region}</div>
                <p className="display-serif text-xl md:text-2xl text-foreground/80 mt-8 leading-relaxed">
                  {s.story}
                </p>
                <div className="mt-10 flex items-center justify-center gap-5 flex-wrap">
                  {s.links.map((l, idx) => (
                    <span key={l.to + idx} className="flex items-center gap-5">
                      <Link to={l.to} className="link-underline">{l.label}</Link>
                      {idx < s.links.length - 1 && <span className="text-gold">|</span>}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-12 flex items-center justify-center gap-6">
              <button onClick={() => setI((p) => (p - 1 + SLIDES.length) % SLIDES.length)} aria-label="Previous" className="p-2 text-navy hover:text-gold transition">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                {SLIDES.map((_, idx) => (
                  <button key={idx} onClick={() => setI(idx)} aria-label={`Slide ${idx + 1}`}
                    className={`h-px transition-all ${idx === i ? "w-10 bg-navy" : "w-5 bg-navy/30"}`} />
                ))}
              </div>
              <button onClick={() => setI((p) => (p + 1) % SLIDES.length)} aria-label="Next" className="p-2 text-navy hover:text-gold transition">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Booking bar */}
        <div className="container-x mt-14"><BookingBar /></div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-cream border-y border-border">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {STATS.map((st) => (
            <div key={st.label} className="bg-cream p-8 text-center">
              <div className="heading-trajan text-3xl md:text-4xl text-navy">{st.value}</div>
              <div className="eyebrow mt-2 text-muted-foreground">{st.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section-pad">
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.9 }}
          className="display-serif-italic text-2xl md:text-4xl leading-[1.4] text-navy text-center container-x max-w-4xl"
        >
          A world of quiet luxury, steeped in the lore of the sacred land — where every corridor,
          every meal and every silence draws you closer to the <em>Spirit of Tirumala</em>.
        </motion.p>
        <div className="flex justify-center mt-10"><span className="divider-gold" /></div>
      </section>

      {/* EXPERIENCES */}
      <section className="section-pad bg-cream">
        <div className="container-x text-center max-w-2xl mx-auto">
          <div className="eyebrow mb-6">The Nivaara Experience</div>
          <h2 className="heading-trajan text-3xl md:text-4xl text-navy">A sanctuary, considered</h2>
          <div className="flex justify-center mt-6 mb-8"><span className="divider-gold" /></div>
          <p className="display-serif text-lg md:text-xl text-foreground/75 leading-relaxed">
            At Nivaara we leave nothing unattended — and yet nothing is over-done. Every detail
            is drawn from the warp and weft of South Indian craft, hospitality and ritual.
          </p>
        </div>

        <div className="container-x mt-20 grid md:grid-cols-3 gap-6">
          {EXPERIENCES.map((e, idx) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="group"
            >
              <div className="aspect-[4/5] overflow-hidden bg-ivory">
                <img src={e.img} alt={e.title} className="w-full h-full object-cover transition duration-[1500ms] group-hover:scale-105" />
              </div>
              <div className="text-center mt-6">
                <div className="eyebrow text-navy/70">{e.kicker}</div>
                <h3 className="heading-trajan text-xl text-navy mt-3">{e.title}</h3>
                <p className="display-serif text-base text-foreground/70 mt-3 max-w-xs mx-auto leading-relaxed">{e.body}</p>
                <Link to={e.to} className="link-underline mt-5 inline-block">Discover</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* ROOMS & TARIFFS */}
      <section className="section-pad bg-ivory">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="eyebrow mb-4">Rooms & Tariffs</div>
            <h2 className="heading-trajan text-3xl md:text-4xl text-navy">Choose your sanctuary</h2>
            <div className="flex justify-center mt-5 mb-6"><span className="divider-gold" /></div>
            <p className="display-serif text-lg text-foreground/75 leading-relaxed">
              Ninety hand-finished rooms across two crafted typologies — each with premium bedding,
              high-speed Wi-Fi, in-room safe and 24-hour dining.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {ROOM_CARDS.map((r, idx) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="bg-cream border border-border flex flex-col overflow-hidden group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={r.img} alt={r.title} className="absolute inset-0 w-full h-full object-cover transition duration-[1500ms] group-hover:scale-105" />
                  <div className="absolute top-4 right-4 bg-navy text-ivory heading-trajan text-[11px] tracking-[0.25em] px-4 py-1.5 rounded-full shadow-lg">
                    {r.area}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-ivory/95 backdrop-blur px-3 py-1.5 flex items-center gap-1.5 text-[11px] tracking-[0.2em] uppercase text-navy">
                    <Star className="w-3.5 h-3.5 text-gold fill-gold" /> {r.rating}
                  </div>
                </div>
                <div className="p-7 flex-1 flex flex-col">
                  <h3 className="heading-trajan text-2xl text-navy">{r.title}</h3>
                  <div className="mt-4 space-y-2 border-y border-border py-4">
                    <div className="flex items-baseline justify-between">
                      <span className="font-sans text-sm text-foreground/75">Single Occupancy</span>
                      <span className="heading-trajan text-lg text-navy">{r.single}</span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="font-sans text-sm text-foreground/75">Double Occupancy</span>
                      <span className="heading-trajan text-lg text-gold">{r.double}</span>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-2.5 flex-1">
                    {r.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 font-sans text-sm text-foreground/80">
                        <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" strokeWidth={2} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex items-center gap-4">
                    <Link to="/booking" search={{ checkin: undefined, checkout: undefined, adults: undefined, room: undefined }} className="btn-gold flex-1 text-center">Book Now</Link>
                    <Link to="/rooms" className="link-underline text-sm">Details</Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center mt-10 font-sans text-xs tracking-widest uppercase text-muted-foreground">
            Tariffs exclusive of applicable taxes · Complimentary breakfast with every direct booking
          </p>
        </div>
      </section>


      <section className="section-pad container-x">

        <div className="text-center mb-14">
          <div className="eyebrow mb-4">Limited-Time Offers</div>
          <h2 className="heading-trajan text-3xl md:text-4xl text-navy">Curated Stay Packages</h2>
          <div className="flex justify-center mt-5"><span className="divider-gold" /></div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {OFFERS.map((o) => (
            <div key={o.title} className="relative overflow-hidden group bg-navy text-ivory flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={o.img} alt={o.title} className="absolute inset-0 w-full h-full object-cover transition duration-[1500ms] group-hover:scale-105" />
                {o.badge && (
                  <div className="absolute top-4 left-4 bg-gold text-gold-foreground heading-trajan text-[10px] tracking-[0.3em] px-3 py-1.5 shadow-lg">
                    {o.badge}
                  </div>
                )}
              </div>
              <div className="p-7 flex-1 flex flex-col">
                <div className="eyebrow text-gold">{o.kicker}</div>
                <h3 className="heading-trajan text-2xl mt-3 text-ivory">{o.title}</h3>
                <p className="font-sans text-sm mt-3 text-ivory/85 leading-relaxed">{o.body}</p>
                <div className="mt-5 flex items-baseline gap-3">
                  <span className="heading-trajan text-3xl text-gold">{o.price}</span>
                  <span className="font-sans text-sm text-ivory/55 line-through">{o.was}</span>
                  <span className="text-[10px] tracking-widest uppercase text-ivory/70">/ night</span>
                </div>
                <Link to="/contact" className="inline-block mt-auto pt-5 heading-trajan text-[11px] tracking-[0.4em] text-gold self-start">
                  <span className="border-b border-gold pb-1">Book This Offer</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY BOOK DIRECT */}
      <section className="section-pad bg-navy text-ivory">
        <div className="container-x">
          <div className="text-center max-w-xl mx-auto mb-14">
            <Sparkles className="w-6 h-6 text-gold mx-auto" strokeWidth={1.25} />
            <div className="eyebrow text-gold mt-4">Best Rate Guarantee</div>
            <h2 className="heading-trajan text-3xl md:text-4xl mt-4">Why book direct with us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {BENEFITS.map((b) => (
              <div key={b.title} className="border border-gold/25 p-7 text-center hover:bg-gold/5 transition">
                <b.Icon className="w-7 h-7 text-gold mx-auto" strokeWidth={1.25} />
                <h3 className="heading-trajan text-base mt-5 text-ivory">{b.title}</h3>
                <p className="display-serif text-sm text-ivory/75 mt-3 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="section-pad bg-cream">
        <div className="container-x">
          <div className="text-center max-w-xl mx-auto mb-14">
            <div className="eyebrow mb-4">Every Comfort</div>
            <h2 className="heading-trajan text-3xl md:text-4xl text-navy">Quietly attended</h2>
            <div className="flex justify-center mt-5"><span className="divider-gold" /></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-px bg-border">
            {AMENITIES.map((a) => (
              <div key={a.label} className="bg-cream p-6 lg:p-8 text-center">
                <a.Icon className="w-6 h-6 text-gold mx-auto" strokeWidth={1.25} />
                <div className="mt-4 heading-trajan text-[11px] tracking-[0.28em] text-navy">{a.label}</div>
                {a.sub && <div className="mt-1 text-[10px] tracking-wider text-muted-foreground">{a.sub}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="section-pad container-x">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="eyebrow mb-4">In the Spiritual Heart</div>
          <h2 className="heading-trajan text-3xl md:text-4xl text-navy">Connectivity</h2>
          <div className="flex justify-center mt-5"><span className="divider-gold" /></div>
          <p className="display-serif text-lg text-foreground/70 mt-6">
            Opposite the APSRTC Central Bus Station — walking distance from Tirupati railway
            and twenty kilometres from the holy hills of Tirumala.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {LOCATIONS.map((l) => (
            <div key={l.name} className="bg-ivory p-8 text-center">
              <l.Icon className="w-5 h-5 text-gold mx-auto" strokeWidth={1.25} />
              <div className="heading-trajan text-[11px] tracking-[0.32em] text-gold mt-4">{l.distance}</div>
              <div className="heading-trajan text-lg text-navy mt-2">{l.name}</div>
              <div className="display-serif text-sm text-muted-foreground mt-2">{l.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* GUEST STORIES — unified Google Reviews + featured testimonial */}
      <section className="section-pad bg-navy text-ivory">
        <div className="container-x max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="eyebrow text-gold mb-4">Verified Reviews</div>
            <h2 className="heading-trajan text-3xl md:text-4xl text-ivory">Guest Stories</h2>
            <div className="flex justify-center mt-5 mb-6"><span className="divider-gold" /></div>

            {/* Featured rotating quote */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 text-gold fill-gold" />)}
            </div>
            <FeaturedQuote />

            {/* Google summary chip */}
            <div className="mt-8 inline-flex items-center gap-4 bg-cream border border-gold/40 px-6 py-4 mx-auto">
              <GoogleG className="w-6 h-6" />
              <div className="flex items-center gap-2">
                <span className="heading-trajan text-xl text-navy">4.8</span>
                <div className="flex">
                  {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 text-gold fill-gold" />)}
                </div>
              </div>
              <span className="text-sm text-navy/70">· Google Reviews</span>
            </div>
            <div className="mt-4">
              <a
                href="https://www.google.com/travel/search?q=nivaara%20tirupati&ap=ugEHcmV2aWV3cw"
                target="_blank" rel="noopener noreferrer"
                className="link-underline text-sm text-ivory/80"
              >
                Read all on Google →
              </a>
            </div>
          </div>

          {/* Google review cards — ivory on navy */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GOOGLE_REVIEWS.map((r, idx) => (
              <motion.article
                key={r.name + idx}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.06 }}
                className="bg-ivory/95 border border-ivory/20 p-7 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-navy text-ivory flex items-center justify-center heading-trajan text-sm">
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <div className="heading-trajan text-sm text-navy">{r.name}</div>
                      <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{r.when}</div>
                    </div>
                  </div>
                  <GoogleG className="w-5 h-5 opacity-80" />
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, idx) => <Star key={idx} className="w-3.5 h-3.5 text-gold fill-gold" />)}
                </div>
                <p className="display-serif text-[15px] leading-relaxed text-foreground/85 flex-1">"{r.quote}"</p>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://g.page/r/nivaara-tirupati/review"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-gold text-ivory font-display text-[0.8rem] uppercase tracking-[0.18em] font-medium hover:bg-gold hover:text-navy transition-all duration-300"
            >
              <GoogleG className="w-4 h-4" /> Write a Review on Google
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad container-x max-w-3xl">
        <div className="text-center mb-12">
          <div className="eyebrow mb-3">Plan Your Stay</div>
          <h2 className="heading-trajan text-3xl md:text-4xl text-navy">Frequently asked</h2>
          <div className="flex justify-center mt-5"><span className="divider-gold" /></div>
        </div>
        <FaqAccordion />
      </section>

      {/* RESERVE CTA */}
      <section className="section-pad container-x text-center">
        <Award className="w-8 h-8 text-gold mx-auto" strokeWidth={1.25} />
        <h2 className="heading-trajan text-3xl md:text-4xl text-navy mt-6">Reserve Direct</h2>
        <div className="flex justify-center mt-5"><span className="divider-gold" /></div>
        <p className="display-serif text-lg text-foreground/70 mt-6 max-w-xl mx-auto">
          The finest rates, complimentary upgrades when available, and a personal concierge for your
          Tirumala pilgrimage — only when you book with us directly.
        </p>
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <Link to="/contact" className="btn-primary">Send an Enquiry</Link>
          <a href="tel:+919030057115" className="btn-gold"><Phone className="w-3.5 h-3.5" /> +91 90300 57115</a>
        </div>
      </section>
    </>
  );
}

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {FAQ.map((f, idx) => (
        <div key={f.q} className="border border-border bg-cream">
          <button onClick={() => setOpen(open === idx ? null : idx)}
            className="w-full flex justify-between items-center text-left px-6 py-5">
            <span className="heading-trajan text-sm text-navy tracking-[0.12em]">{f.q}</span>
            <span className="text-gold text-2xl leading-none">{open === idx ? "−" : "+"}</span>
          </button>
          {open === idx && (
            <div className="px-6 pb-6 display-serif text-base text-foreground/75 leading-relaxed">{f.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}

const STATS = [
  { value: "90", label: "Premium Rooms" },
  { value: "2", label: "Signature Restaurants" },
  { value: "10–500", label: "Banquet Capacity" },
  { value: "4.8★", label: "Guest Rating" },
];

const GOOGLE_REVIEWS = [
  { name: "Ramesh Iyer", when: "2 weeks ago", quote: "Excellent stay near the bus stand. Rooms are spotless, staff went out of their way to arrange our Tirumala darshan. Breakfast at Dakshin was authentic and generous." },
  { name: "Priya Sharma", when: "1 month ago", quote: "We hosted our reception at Grand-9 hall and it was flawless — beautiful décor, attentive service, and the food received compliments from every guest." },
  { name: "Karthik Reddy", when: "3 weeks ago", quote: "Best value 4-star in Tirupati. Quiet rooms, fast Wi-Fi, and the 24-hour coffee shop was a lifesaver after a late train. Will definitely return." },
  { name: "Anitha Venkat", when: "1 month ago", quote: "Came with elderly parents — wheelchair access, lift, and the concierge handled VIP darshan tickets end to end. Truly stress-free pilgrimage." },
  { name: "Suresh Bhat", when: "2 months ago", quote: "Spacious Executive Room, premium bedding, and the bathroom was immaculate. The South Indian thali at Dakshin is a must-try." },
  { name: "Meera Krishnan", when: "3 weeks ago", quote: "Loved the warm hospitality. From check-in to checkout everything was smooth. Walking distance to the bus stand and very close to the railway station." },
];

function FeaturedQuote() {
  const [t, setT] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setT((p) => (p + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={t}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <blockquote className="display-serif-italic text-2xl md:text-3xl leading-[1.5] text-ivory">
            "{TESTIMONIALS[t].quote}"
          </blockquote>
          <div className="mt-6 heading-trajan text-[11px] tracking-[0.4em] text-gold">
            {TESTIMONIALS[t].name} · {TESTIMONIALS[t].from}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function GoogleG({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  );
}

const EXPERIENCES = [
  { kicker: "Stay", title: "Rooms & Suites", body: "Ninety premium rooms in two crafted typologies — king and superior.", img: IMG.roomDoubleHero, to: "/rooms" },
  { kicker: "Dine", title: "Dining & Café", body: "Dakshin pure-vegetarian, Fusion multi-cuisine, a 24-hour coffee shop and round-the-clock in-room dining — every craving is met.", img: IMG.diningTandoori, to: "/dining" },
  { kicker: "Celebrate", title: "Grand Pavilions", body: "From intimate boardrooms to the pillarless Grand-9 ballroom for up to five hundred.", img: IMG.meetingMarble, to: "/banquets" },
] as const;

const ROOM_CARDS = [
  {
    title: "Superior Room",
    area: "288 Sq Ft",
    rating: "5.0",
    single: "₹4,000",
    double: "₹5,000",
    img: IMG.roomSuperiorHero,
    features: ["King Bed", "Separate Living Area", "Luxury Amenities", "Premium Bath with Rain Shower", "Smart LED TV"],
  },
  {
    title: "Executive Room",
    area: "250 Sq Ft",
    rating: "4.5",
    single: "₹3,500",
    double: "₹4,000",
    img: IMG.roomDoubleHero,
    features: ["King Bed", "Premium A/C", "Mini Fridge", "Tea & Coffee Maker", "Work Desk & Wi-Fi"],
  },
] as const;




const OFFERS = [
  { kicker: "Wedding Soirée", title: "Grand-9 Celebrations", body: "All-inclusive ballroom packages with in-house catering and choreography.", img: IMG.conferenceRed, price: "₹699", was: "₹1,000", badge: "Per Plate" },
  { kicker: "Long Stay", title: "Seven-Night Retreat", body: "Extended stays with daily breakfast, laundry and a complimentary city excursion.", img: IMG.lobbyChandelier, price: "₹3,200", was: "₹4,000", badge: "Save 20%" },
] as const;

const BENEFITS = [
  { Icon: BadgePercent, title: "Best Rate Guarantee", body: "Find a lower rate elsewhere — we'll match it and give you 10% off." },
  { Icon: ConciergeBell, title: "Concierge Priority", body: "Personal concierge for darshan tickets, taxis and dining reservations." },
  { Icon: Wifi, title: "Free High-Speed Wi-Fi", body: "Unlimited fibre Wi-Fi across rooms and public spaces — always free." },
] as const;

const AMENITIES = [
  { Icon: Wifi, label: "High-Speed Wi-Fi" },
  { Icon: Utensils, label: "Multi-Cuisine" },
  { Icon: Car, label: "Valet Parking" },
  { Icon: ShieldCheck, label: "24/7 Security" },
  { Icon: Coffee, label: "All-Day Café" },
  { Icon: Heart, label: "Doctor on Call" },
  { Icon: Leaf, label: "All-Day Veg Restaurant", sub: "7 AM – 11 PM" },
];

const LOCATIONS = [
  { Icon: MapPin, distance: "Opposite", name: "APSRTC Bus Station", desc: "Direct buses to Tirumala" },
  { Icon: Train, distance: "1 km", name: "Tirupati Railway", desc: "A short walk from the lobby" },
  { Icon: Plane, distance: "8 km", name: "Tirupati Airport", desc: "Convenient air connectivity" },
  { Icon: Sparkles, distance: "20 km", name: "Tirumala Hills", desc: "The sacred abode of Sri Venkateswara" },
] as const;

const TESTIMONIALS = [
  { quote: "An absolute haven after our Tirumala darshan. The warmth here is genuine, the silence sacred.", name: "Rajesh K.", from: "Hyderabad" },
  { quote: "The Grand-9 hall made our daughter's wedding unforgettable — flawless from rehearsal to farewell.", name: "Lakshmi R.", from: "Chennai" },
  { quote: "Business travel made effortless — quiet rooms, the finest South Indian breakfast in Tirupati.", name: "Arjun M.", from: "Bengaluru" },
];
