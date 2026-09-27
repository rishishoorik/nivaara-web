import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Star } from "lucide-react";
import { BookingBar } from "../components/BookingBar";
import { IMG } from "../lib/images";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms & Suites — Hotel Nivaara Tirupati" },
      { name: "description", content: "Choose from 90 premium rooms at Hotel Nivaara Tirupati — Executive and Superior rooms with luxury amenities near Tirumala Temple. From ₹3,500/night." },
      { property: "og:title", content: "Luxury Rooms & Suites — Hotel Nivaara Tirupati" },
      { property: "og:description", content: "90 premium rooms in the heart of Tirupati, minutes from Tirumala Temple." },
      { property: "og:url", content: "/rooms" },
      { property: "og:image", content: IMG.roomHero },
    ],
    links: [{ rel: "canonical", href: "/rooms" }],
  }),
  component: Rooms,
});

const ROOMS = [
  {
    name: "Superior Room", size: "288 sq ft", rating: 5.0,
    single: "4,000", double: "5,000", img: IMG.roomSuperior,
    desc: "Our most spacious accommodation, with a separate living area, butler service and luxury linens for the ultimate restful stay.",
    features: ["King bed", "Separate living area", "Butler service", "Luxury amenities", "Premium toiletries", "Marble bathroom"],
  },
  {
    name: "Executive Room", size: "250 sq ft", rating: 4.5,
    single: "3,500", double: "4,000", img: IMG.roomKing,
    desc: "A refined retreat with a plush king bed, premium climate control and a thoughtfully appointed work area — ideal for couples and business travellers alike.",
    features: ["King bed with memory foam", "Premium A/C", "Mini fridge", "Work desk", "43\" Smart UHD TV", "Reserved parking"],
  },
];

function Rooms() {
  return (
    <>
      <PageHeader title="Rooms & Suites" subtitle="90 premium rooms designed for restful nights · From ₹3,500" img={IMG.roomHero} />
      <div className="container-x -mt-12 relative z-20"><BookingBar /></div>

      <section className="py-24 container-x space-y-24">
        {ROOMS.map((r, i) => (
          <div key={r.name} className={`grid lg:grid-cols-2 gap-12 items-center min-w-0 ${i%2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <img src={r.img} alt={r.name} className="w-full h-72 sm:h-96 lg:h-[520px] object-cover" />
            <div className="min-w-0">

              <div className="eyebrow mb-3 flex items-center gap-3">
                {r.size} <span className="text-gold">·</span>
                <span className="flex items-center gap-1 text-navy">
                  <Star className="w-3.5 h-3.5 fill-gold text-gold" /> {r.rating}
                </span>
              </div>
              <h2 className="heading-trajan text-4xl text-navy">{r.name}</h2>
              <div className="h-px w-16 bg-gold my-5" />
              <p className="display-serif text-lg text-muted-foreground leading-relaxed">{r.desc}</p>
              <ul className="mt-6 grid grid-cols-2 gap-2">
                {r.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-end gap-x-8 gap-y-4 border-t border-border pt-6">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Single</div>
                  <div className="heading-trajan text-3xl text-navy">₹{r.single}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Double</div>
                  <div className="heading-trajan text-3xl text-navy">₹{r.double}</div>
                </div>
                <Link to="/booking" search={{ checkin: undefined, checkout: undefined, adults: undefined, room: undefined }} className="btn-primary sm:ml-auto">Book Now</Link>
              </div>

              <div className="text-xs text-muted-foreground mt-3">Inclusive of breakfast & 1L bottled water · Extra bed ₹1,000 · Taxes as applicable</div>
            </div>
          </div>
        ))}
      </section>

      <section className="py-20 bg-navy text-cream">
        <div className="container-x text-center">
          <h2 className="heading-trajan text-3xl md:text-4xl">In-room amenities, refined to detail</h2>
          <div className="h-px w-16 bg-gold mx-auto my-6" />
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10 max-w-4xl mx-auto text-left">
            {[
              "Enhanced secure door locking","Memory-foam beds & quality linen","2 × 500ml water bottles",
              "Tea & coffee maker","43\" Smart UHD TV","Wi-Fi & broadband","Premium bath amenities",
              "Hair dryer (on request)","Laundry service","Iron & ironing board","Reserved parking","24/7 security"
            ].map((a)=>(
              <div key={a} className="flex items-center gap-2 text-sm border-l border-gold pl-3"><Check className="w-3.5 h-3.5 text-gold" /> {a}</div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function PageHeader({ title, subtitle, img }: { title: string; subtitle: string; img?: string }) {
  return (
    <section className="relative h-[52vh] min-h-[400px] w-full overflow-hidden">
      {img ? (
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${img})` }} />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#3e2c1e] via-[#5d4a37] to-[#3e2c1e] flex items-center justify-center">
          <span className="text-cream/20 text-sm uppercase tracking-[0.3em] font-sans">Image coming soon</span>
        </div>
      )}
      {/* Strong dim for legibility */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/75" />
      <div className="relative h-full container-x flex flex-col items-center justify-center text-center py-12">
        <div className="eyebrow text-gold mb-4" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}>Hotel Nivaara Tirupati</div>
        <h1 className="heading-trajan text-4xl md:text-6xl text-white" style={{ textShadow: "0 2px 18px rgba(0,0,0,0.9)" }}>{title}</h1>
        <div className="h-px w-16 bg-gold mt-6" />
        <p className="font-sans text-base md:text-lg mt-5 text-white max-w-2xl leading-relaxed" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.85)" }}>{subtitle}</p>
      </div>
    </section>
  );
}


