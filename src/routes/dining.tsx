import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Users, Check } from "lucide-react";
import { PageHeader } from "./rooms";
import { IMG } from "../lib/images";

export const Route = createFileRoute("/dining")({
  head: () => ({
    meta: [
      { title: "Restaurant in Tirupati — Dining at Hotel Nivaara" },
      { name: "description", content: "Dine at Hotel Nivaara Tirupati — Dakshin pure-vegetarian multi-cuisine, Fusion multi-cuisine restaurant, 24-hour coffee shop and in-room dining for pilgrims visiting Tirumala Temple." },
      { property: "og:title", content: "Dining at Hotel Nivaara Tirupati" },
      { property: "og:description", content: "Dakshin, Fusion, 24-hour coffee shop and in-room dining — a world of flavour for every pilgrim." },
      { property: "og:url", content: "/dining" },
      { property: "og:image", content: IMG.diningHall },
    ],
    links: [{ rel: "canonical", href: "/dining" }],
  }),

  component: Dining,
});

const PLACES = [
  {
    name: "Dakshin",
    tag: "Pure-Veg Multi-Cuisine",
    img: IMG.diningHall,
    hours: "6:00 AM – 11:00 PM",
    capacity: "75 guests",
    desc: "Our signature pure-vegetarian restaurant serving authentic South Indian, North Indian and Continental classics in a soulful, contemporary setting — the perfect first meal after darshan.",
    features: ["Pure-vegetarian kitchen", "Contemporary ambiance", "Private dining area", "Professional service"],
  },
  {
    name: "Fusion",
    tag: "Multi-Cuisine Restaurant",
    img: IMG.diningInterior2,
    hours: "12:00 PM – 11:00 PM",
    capacity: "50 guests",
    desc: "A multi-cuisine destination where Indian, Continental and Chinese flavours come together in elegant interiors. Ideal for family dinners and refined palates.",
    features: ["Elegant interiors", "Fine dining experience", "Family-friendly atmosphere", "Indian, Continental & Chinese"],
  },
  {
    name: "24-Hour Coffee Shop",
    tag: "Café & Light Meals",
    img: IMG.diningInterior3,
    hours: "24 Hours",
    capacity: "40 guests",
    desc: "All-day café with specialty coffee, light meals and outdoor seating — a relaxed stop for conversations between temple visits.",
    features: ["Outdoor seating", "All-day dining", "Specialty coffee", "Casual ambiance"],
  },
  {
    name: "In-Room Dining",
    tag: "24-Hour Service",
    img: IMG.diningInterior4,
    hours: "24 Hours",
    capacity: "Room service",
    desc: "A thoughtfully curated menu delivered to your door, day or night — convenient dining in the privacy of your room.",
    features: ["Round-the-clock service", "Curated selections", "Convenient dining"],
  },
];

function Dining() {
  return (
    <>
      <PageHeader
        title="Restaurant"
        subtitle="Dine at Hotel Nivaara — Dakshin pure-vegetarian, Fusion multi-cuisine, a 24-hour coffee shop and round-the-clock in-room dining for pilgrims visiting Tirumala Temple."
        img={IMG.diningHall}
      />


      <section className="py-24 container-x grid md:grid-cols-2 gap-8">
        {PLACES.map((p) => (
          <article key={p.name} className="bg-cream border border-border group overflow-hidden flex flex-col">
            <div className="aspect-[16/10] overflow-hidden">
              <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            </div>
            <div className="p-7 flex flex-col flex-1">
              <div className="eyebrow">{p.tag}</div>
              <h3 className="heading-trajan text-2xl text-navy mt-2">{p.name}</h3>
              <div className="h-px w-10 bg-gold my-4" />
              <p className="display-serif text-base text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground uppercase tracking-widest">
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-gold" /> {p.hours}</span>
                <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-gold" /> Capacity: {p.capacity}</span>
              </div>
              <div className="mt-5">
                <div className="eyebrow text-navy mb-2">Features</div>
                <ul className="space-y-1.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/contact" className="btn-outline mt-6 self-start">Reserve Table</Link>
            </div>
          </article>
        ))}
      </section>

      <section className="py-20 bg-navy text-cream">
        <div className="container-x text-center max-w-2xl mx-auto">
          <div className="eyebrow text-gold mb-3">Private Events</div>
          <h2 className="heading-trajan text-4xl">Private dining for life's special moments</h2>
          <p className="display-serif text-lg mt-4 text-cream/80">From intimate family gatherings to corporate dinners, our chefs curate menus tailored to your occasion.</p>
          <Link to="/contact" className="btn-gold mt-8 inline-flex">Enquire Now</Link>
        </div>
      </section>
    </>
  );
}
