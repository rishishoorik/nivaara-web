import { createFileRoute, Link } from "@tanstack/react-router";
import { Wifi, Video, Utensils, Car, Users, Maximize2 } from "lucide-react";
import { PageHeader } from "./rooms";
import { IMG } from "../lib/images";

export const Route = createFileRoute("/banquets")({
  head: () => ({
    meta: [
      { title: "Banquet Halls & Wedding Venues in Tirupati — Hotel Nivaara" },
      { name: "description", content: "Host weddings, conferences and celebrations in Tirupati. Banquet halls for 10 to 500 guests with state-of-the-art AV and in-house catering at Hotel Nivaara." },
      { property: "og:title", content: "Banquet Halls in Tirupati — Hotel Nivaara" },
      { property: "og:description", content: "Grand venues for weddings, conferences and celebrations — capacity 10 to 500 guests across our halls." },
      { property: "og:url", content: "/banquets" },
      { property: "og:image", content: IMG.conferenceRed },
    ],
    links: [{ rel: "canonical", href: "/banquets" }],
  }),
  component: Banquets,
});

const HALLS = [
  { name: "Grand-9", cap: 500, area: "8,000 sft", img: IMG.banquetGrand,
    desc: "Our flagship hall — towering ceilings and theatrical lighting for weddings, conventions and the grandest celebrations." },
  { name: "Conference Hall-1", cap: 350, area: "2,900 sft", img: IMG.banquetGrand2,
    desc: "A versatile mid-size venue equipped for conferences, receptions and corporate showcases." },
  { name: "Conference Hall-2", cap: 250, area: "1,100 sft", img: IMG.banquetHall,
    desc: "An intimate hall perfect for board meetings, product launches and private receptions." },
  { name: "The Board Room", cap: 20, area: "350 sft", img: IMG.conferenceArch,
    desc: "An executive board room with premium audio-visual equipment for focused strategy sessions." },
];

function Banquets() {
  return (
    <>
      <PageHeader title="Banquets & Conferences" subtitle="All-inclusive packages from ₹699 per person · Capacity 10 to 500 guests" />

      <section className="py-24 container-x">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { Icon: Users, label: "10 to 500 guests" },
            { Icon: Wifi, label: "High-speed Wi-Fi" },
            { Icon: Video, label: "State-of-the-art AV" },
            { Icon: Utensils, label: "In-house Catering" },
            { Icon: Car, label: "Ample Parking" },
            { Icon: Maximize2, label: "Virtual Meeting Facilities" },
          ].map((a)=>(
            <div key={a.label} className="flex items-center gap-4 border border-border p-5 hover:border-gold transition">
              <a.Icon className="w-6 h-6 text-gold" />
              <div className="heading-trajan text-sm text-navy">{a.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x space-y-20 pb-24">
        {HALLS.map((h, i)=>(
          <div key={h.name} className={`grid lg:grid-cols-5 gap-10 items-center ${i%2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <img src={h.img} alt={h.name} className="lg:col-span-3 w-full h-[460px] object-cover" />
            <div className="lg:col-span-2">
              <div className="eyebrow mb-2">Banquet</div>
              <h2 className="heading-trajan text-4xl text-navy">{h.name}</h2>
              <div className="h-px w-16 bg-gold my-5" />
              <p className="display-serif text-lg text-muted-foreground leading-relaxed">{h.desc}</p>
              <div className="mt-6 flex gap-8 border-t border-b border-border py-5">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Capacity</div>
                  <div className="heading-trajan text-2xl text-navy">{h.cap}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Area</div>
                  <div className="heading-trajan text-2xl text-navy">{h.area}</div>
                </div>
              </div>
              <Link to="/contact" className="btn-primary mt-8">Reserve {h.name}</Link>
            </div>
          </div>
        ))}
      </section>

      <section className="py-24 bg-secondary/40">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow mb-3">Ideal for</div>
            <h2 className="heading-trajan text-4xl text-navy">A venue for every occasion</h2>
            <div className="h-px w-16 bg-gold my-6" />
            <ul className="grid grid-cols-2 gap-3 text-sm">
              {["Corporate Conferences","Wedding Receptions","Sangeet & Mehendi","Get-Togethers","Product Launches","Conventions","Birthday Celebrations","Cultural Events"].map((u)=>(
                <li key={u} className="border-l-2 border-gold pl-3 py-1 text-navy">{u}</li>
              ))}
            </ul>
          </div>
          <img src={IMG.banquetGrand2} alt="Banquet event" className="w-full h-[420px] object-cover" />
        </div>
      </section>
    </>
  );
}
