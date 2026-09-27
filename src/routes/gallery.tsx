import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "./rooms";
import { IMG, GALLERY } from "../lib/images";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Photo Gallery — Hotel Nivaara Tirupati" },
      { name: "description", content: "Explore Hotel Nivaara Tirupati through photographs of our rooms, dining, banquet halls, lobby and exterior." },
      { property: "og:title", content: "Photo Gallery — Hotel Nivaara" },
      { property: "og:description", content: "Photographs of rooms, restaurants, banquet halls and architecture at Hotel Nivaara Tirupati." },
      { property: "og:url", content: "/gallery" },
      { property: "og:image", content: IMG.exteriorTwilight },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const CATEGORIES = ["All", "Exterior", "Interior", "Dining", "Banquets", "Tirumala"];

function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const filtered = filter === "All" ? GALLERY : GALLERY.filter((i) => i.cat === filter);

  return (
    <>
      <PageHeader title="Photo Gallery" subtitle="Step inside Hotel Nivaara through our lens" img={IMG.lobbyChandelier} />

      <section className="py-16 container-x">
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`text-xs uppercase tracking-widest px-4 py-2 border transition ${
                filter === c ? "bg-navy text-cream border-navy" : "border-border text-navy hover:border-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map((img) => (
            <button
              key={img.src}
              onClick={() => setLightbox(img.src)}
              className="block w-full overflow-hidden group relative aspect-[4/3] bg-muted"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                style={{ filter: 'contrast(0.96) saturate(0.92) brightness(1.01)' }}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </button>
          ))}
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 bg-navy/95 z-[60] flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLightbox(null)}
        >
          <img src={lightbox} alt="" style={{ filter: 'contrast(0.96) saturate(0.92) brightness(1.01)' }} className="max-h-[90vh] max-w-[90vw] object-contain" />
        </div>
      )}
    </>
  );
}
