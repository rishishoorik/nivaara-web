import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Wifi, Car, Coffee, ConciergeBell, ShieldCheck, Heart, Utensils, Briefcase,
  Wind, Droplets, ShowerHead, Sparkles, Plane, Languages, Clock, ParkingCircle,
  Tv, Bed, Phone, Lock, Mountain,
} from "lucide-react";
import { PageHeader } from "./rooms";
import { IMG } from "../lib/images";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title: "Hotel Facilities & Services in Tirupati — Hotel Nivaara" },
      { name: "description", content: "Full list of facilities at Hotel Nivaara Tirupati — 24/7 concierge, doctor on call, travel desk, valet parking, R.O. drinking water, multi-cuisine dining, complimentary Wi-Fi and Tirumala darshan assistance." },
      { property: "og:title", content: "Facilities & Services — Hotel Nivaara, Tirupati" },
      { property: "og:description", content: "Every comfort handled — from darshan assistance and travel desk to in-room dining, doctor on call and high-speed Wi-Fi." },
      { property: "og:url", content: "/facilities" },
      { property: "og:image", content: IMG.lobbyChandelier },
    ],
    links: [{ rel: "canonical", href: "/facilities" }],
  }),
  component: FacilitiesPage,
});

const GROUPS = [
  {
    title: "Guest Services",
    items: [
      { Icon: ConciergeBell, label: "24/7 Concierge", desc: "Round-the-clock assistance, requests and recommendations." },
      { Icon: Mountain, label: "Tirumala Darshan Assistance", desc: "Help with darshan tickets, accommodation guidance and transfer planning." },
      { Icon: Plane, label: "Travel Desk", desc: "Airport pickups, cab hire, local sightseeing and rail bookings." },
      { Icon: Heart, label: "Doctor on Call", desc: "On-call medical assistance available around the clock." },
      { Icon: Sparkles, label: "Laundry & Pressing", desc: "Same-day laundry, dry-clean and ironing service." },
      { Icon: Languages, label: "Multilingual Staff", desc: "English, Hindi, Telugu and Tamil-speaking team." },
    ],
  },
  {
    title: "Dining & Refreshment",
    items: [
      { Icon: Utensils, label: "Dakshin — Pure Veg Restaurant", desc: "Authentic South, North, Chinese & Continental in a sattvic setting. Open 7 AM – 11 PM." },
      { Icon: Coffee, label: "Fusion Multi-Cuisine", desc: "Contemporary multi-cuisine restaurant for relaxed dining." },
      { Icon: Clock, label: "24-Hour In-Room Dining", desc: "Full menu delivered to your room, any hour of the day." },
      { Icon: Droplets, label: "R.O. Drinking Water", desc: "Filtered R.O. water in all rooms and public areas." },
    ],
  },
  {
    title: "In-Room Comforts",
    items: [
      { Icon: Wifi, label: "Complimentary High-Speed Wi-Fi", desc: "Unlimited fibre Wi-Fi in all rooms and public spaces." },
      { Icon: Tv, label: "43\" Smart UHD TV", desc: "Premium Smart TVs with cable and streaming apps." },
      { Icon: Bed, label: "Memory-Foam Bedding", desc: "Premium memory-foam mattresses with hypoallergenic linen." },
      { Icon: Wind, label: "Climate Control", desc: "Individually controlled air-conditioning in every room." },
      { Icon: ShowerHead, label: "Rain-Shower Bathrooms", desc: "Walk-in showers, premium fittings and curated toiletries." },
      { Icon: Phone, label: "In-Room Tea/Coffee", desc: "Electric kettle with complimentary tea, coffee and cookies." },
    ],
  },
  {
    title: "Business & Connectivity",
    items: [
      { Icon: Briefcase, label: "Banquets 10 to 500 guests", desc: "Four halls including the flagship Grand-9 ballroom." },
      { Icon: Briefcase, label: "Virtual Meeting Facilities", desc: "Hybrid AV setups for webinars and remote presentations." },
    ],
  },
  {
    title: "Safety & Convenience",
    items: [
      { Icon: ParkingCircle, label: "Valet Parking", desc: "Complimentary valet with ample on-site parking." },
      { Icon: ShieldCheck, label: "24/7 CCTV & Security", desc: "Round-the-clock surveillance and trained security personnel." },
      { Icon: Lock, label: "Electronic Door Locks", desc: "Key-card access and in-room digital safe lockers." },
      { Icon: Car, label: "EV Drop-Off", desc: "Charging-friendly arrival bay and porter assistance." },
    ],
  },
] as const;

function FacilitiesPage() {
  return (
    <>
      <PageHeader
        title="Facilities & Services"
        subtitle="Every comfort, anticipated · Darshan assistance · 24/7 concierge · Doctor on call"
        img={IMG.lobbyChandelier}
      />

      <section className="py-20 container-x">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="eyebrow mb-3">A complete experience</div>
          <h2 className="heading-trajan text-3xl md:text-4xl text-navy">Crafted for pilgrims, families & business travellers</h2>
          <div className="h-px w-16 bg-gold my-6 mx-auto" />
          <p className="display-serif text-muted-foreground leading-relaxed">
            From the moment you arrive, every detail is handled — sacred journeys, business agendas
            or family celebrations alike. Below is the full list of facilities and services available
            to in-house guests.
          </p>
        </div>

        <div className="space-y-16">
          {GROUPS.map((g) => (
            <div key={g.title}>
              <div className="flex items-baseline justify-between border-b border-border pb-4 mb-8">
                <h3 className="heading-trajan text-2xl text-navy">{g.title}</h3>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  {g.items.length} services
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {g.items.map((it) => (
                  <div
                    key={it.label}
                    className="border border-border p-6 hover:border-gold hover:shadow-sm transition group"
                  >
                    <it.Icon className="w-7 h-7 text-gold mb-4 group-hover:scale-110 transition" />
                    <div className="heading-trajan text-lg text-navy mb-2">{it.label}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <img src={IMG.temple} alt="Tirumala Sri Venkateswara Temple" className="w-full h-[420px] object-cover" />
          <div>
            <div className="eyebrow mb-3">Signature Package</div>
            <h2 className="heading-trajan text-3xl md:text-4xl text-navy">Tirumala Darshan Assistance</h2>
            <div className="h-px w-16 bg-gold my-6" />
            <p className="display-serif text-lg text-muted-foreground leading-relaxed">
              Our concierge handles the most challenging part of your pilgrimage — guidance on
              darshan tickets, Alipiri transfers, prasadam queues and Tirumala accommodation
              referrals — so your time in Tirupati stays focused on devotion, not logistics.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-navy">
              <li className="border-l-2 border-gold pl-3">Darshan-ticket guidance (Sarva Darshan, Seeghra Darshan, Arjitha Seva)</li>
              <li className="border-l-2 border-gold pl-3">Cab transfers to Alipiri & Tirumala (advance booking)</li>
              <li className="border-l-2 border-gold pl-3">Early-morning breakfast & packed prasadam-friendly meals</li>
              <li className="border-l-2 border-gold pl-3">Late check-out for evening-darshan returns (subject to availability)</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">Request Darshan Assistance</Link>
              <Link to="/tirumala" className="btn-ghost">Read the Pilgrim Guide</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
