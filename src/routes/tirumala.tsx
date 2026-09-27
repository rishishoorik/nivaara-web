import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "./rooms";
import templeImage from "@/assets/tirumala/temple.png";

export const Route = createFileRoute("/tirumala")({
  head: () => ({
    meta: [
      { title: "Tirumala Temple Information & Darshan Guide — Hotel Nivaara" },
      { name: "description", content: "Complete pilgrim guide to Tirumala Balaji Temple: Arjitha Sevas, ticket counters, distances and nearby sacred sites. Stay at Hotel Nivaara, 20 km from Tirumala." },
      { property: "og:title", content: "Tirumala Temple Information — Hotel Nivaara" },
      { property: "og:description", content: "Sevas, contact numbers and nearby temples for your Tirumala pilgrimage." },
      { property: "og:url", content: "/tirumala" },
      { property: "og:image", content: "https://nivaarahotels.com/temple.png" },
      { name: "twitter:image", content: "https://nivaarahotels.com/temple.png" },
    ],
    links: [{ rel: "canonical", href: "/tirumala" }],
  }),
  component: Tirumala,
});

const NEARBY = [
  { emoji: "🛕", name: "Tirumala Balaji Temple", distance: "20 km", desc: "World's most visited spiritual destination" },
  { emoji: "🚗", name: "Alipiri Toll Plaza", distance: "3 km", desc: "Gateway to the sacred hills" },
  { emoji: "🕉️", name: "Srinivasa Mangapuram", distance: "6 km", desc: "Sacred pilgrimage destination" },
  { emoji: "🛣️", name: "Bangalore Highway", distance: "2 km", desc: "Major connectivity hub" },
  { emoji: "🛕", name: "Govindaraja Swamy Temple", distance: "1 km", desc: "Ancient Vishnu temple" },
  { emoji: "🌺", name: "Padmavathi Devi Temple", distance: "5 km", desc: "Divine Mother's abode" },
  { emoji: "🌍", name: "ISKCON Temple", distance: "3 km", desc: "International Krishna consciousness" },
  { emoji: "🔱", name: "Kapileswara Temple", distance: "2 km", desc: "Lord Shiva's divine presence" },
  { emoji: "🌪️", name: "Srikalahasti Temple", distance: "40 km", desc: "Famed for Rahu-Ketu pooja" },
  { emoji: "🪔", name: "Gudimallam Temple", distance: "24 km", desc: "Ancient Shiva temple, unique lingam" },
  { emoji: "🙏", name: "Appalayagunta Temple", distance: "21 km", desc: "Peaceful Venkateswara temple" },
  { emoji: "💧", name: "Talakona Waterfalls", distance: "60 km", desc: "Scenic waterfall amidst greenery" },
  { emoji: "🚉", name: "Tirupati Railway Station", distance: "1 km", desc: "Just a short walk from the lobby" },
  { emoji: "🚌", name: "APSRTC Bus Station", distance: "Opposite", desc: "Direct buses to Tirumala every few minutes" },
  { emoji: "✈️", name: "Tirupati Airport (TIR)", distance: "8 km", desc: "Domestic connectivity to major metros" },
  { emoji: "🏛️", name: "Sri Venkateswara Museum", distance: "18 km", desc: "Temple art, architecture & history" },
];

function Tirumala() {
  return (
    <>
      <PageHeader title="Tirumala Pilgrim Guide" subtitle="Everything you need for a smooth and sacred journey" img={templeImage} />

      <section className="py-24 container-x grid lg:grid-cols-2 gap-12">
        <div>
          <div className="eyebrow mb-3">Arjitha Sevas</div>
          <h2 className="font-display text-3xl text-navy">Booking your sevas</h2>
          <div className="h-px w-16 bg-gold my-5" />
          <p className="text-muted-foreground leading-relaxed">
            Seva tickets can be reserved by sending a Demand Draft for the specified amount in favour of
            <em> Executive Officer, T.T.D., Tirupati</em> along with a letter addressed to the
            <em> Peishkar, T.T.D., Tirumala – 517504</em> at least three months in advance.
          </p>
          <a href="https://www.ttdsevaonline.com" target="_blank" rel="noopener noreferrer" className="btn-primary mt-6">
            Visit ttdsevaonline.com
          </a>
        </div>

        <div className="bg-secondary/40 p-8 border-l-4 border-gold">
          <div className="eyebrow mb-3">Helpful Contacts</div>
          <h3 className="font-display text-2xl text-navy">Temple Information</h3>
          <div className="h-px w-12 bg-gold my-4" />
          <dl className="space-y-4 text-sm">
            <div><dt className="text-xs uppercase tracking-widest text-muted-foreground">Tirumala</dt><dd className="text-navy">2232813, 2231777 ext. 4271 / 4217</dd></div>
            <div><dt className="text-xs uppercase tracking-widest text-muted-foreground">Tirupati</dt><dd className="text-navy">2277933, 2277777 ext. 3679, 3589</dd></div>
            <div><dt className="text-xs uppercase tracking-widest text-muted-foreground">STD Code</dt><dd className="text-navy">0877</dd></div>
            <div><dt className="text-xs uppercase tracking-widest text-muted-foreground">Sudarshan Ticket Counter (Tirupati)</dt><dd className="text-navy">0877 2223054 / 2287785 / 2286550</dd></div>
            <div><dt className="text-xs uppercase tracking-widest text-muted-foreground">Official Resources</dt>
              <dd className="text-navy">
                <a href="https://www.tirumala.org" target="_blank" rel="noopener noreferrer" className="hover:text-gold">tirumala.org</a> ·
                <a href="https://www.tirupati.org" target="_blank" rel="noopener noreferrer" className="hover:text-gold"> tirupati.org</a>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="py-20 bg-navy text-cream">
        <div className="container-x text-center max-w-3xl mx-auto">
          <div className="eyebrow text-gold mb-3">About Tirumala</div>
          <h2 className="font-display text-4xl">A sacred hill town in Andhra Pradesh</h2>
          <div className="h-px w-16 bg-gold mx-auto my-6" />
          <p className="text-cream/80 leading-relaxed">
            Home to the famous Sri Venkateswara Temple — one of the most visited religious sites in the world.
            Hotel Nivaara offers convenient access to the temple and other sacred sites, making your
            pilgrimage comfortable and memorable. The main temple is just 20 km from our doorstep.
          </p>
        </div>
      </section>

      <section className="py-24 container-x">
        <div className="text-center mb-12">
          <div className="eyebrow mb-3">Vibrant Neighbourhood</div>
          <h2 className="font-display text-4xl text-navy">Sacred sites near the hotel</h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {NEARBY.map((n)=>(
            <div key={n.name} className="border border-border p-6 hover:border-gold transition bg-cream">
              <div className="text-3xl">{n.emoji}</div>
              <div className="font-display text-lg text-navy mt-3">{n.name}</div>
              <div className="text-xs text-gold font-medium mt-1 uppercase tracking-widest">{n.distance}</div>
              <div className="text-xs text-muted-foreground mt-2">{n.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
