import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PageHeader } from "./rooms";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Reservations — Hotel Nivaara Tirupati" },
      { name: "description", content: "Book your stay or event at Hotel Nivaara Tirupati. Call +91 90300 57115 or email res.tpt@nivaarahotels.com. Open 24/7." },
      { property: "og:title", content: "Contact Hotel Nivaara Tirupati" },
      { property: "og:description", content: "Reservations, enquiries and directions. Best rates guaranteed when you book direct." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const FAQ = [
  { q: "What is the check-in and check-out time?", a: "Check-in is at 12:00 PM and check-out is at 11:00 AM. Early check-in and late check-out are subject to availability." },
  { q: "How far is the hotel from Tirumala Temple?", a: "The main Tirumala Sri Venkateswara Temple is approximately 20 km from the hotel. Alipiri Toll Plaza is just 3 km away." },
  { q: "Do you provide airport / railway station pickup?", a: "Yes. Our travel desk can arrange pickups from Tirupati Airport (8 km) and Tirupati Railway Station (1 km). Please request in advance." },
  { q: "What dining options are available?", a: "Dakshin — our pure-vegetarian multi-cuisine restaurant serving South Indian, North Indian and Continental — plus 24-hour in-room dining." },
  { q: "Do you have parking facilities?", a: "Yes — complimentary parking with professional valet service, included for all in-house guests." },
  { q: "Is Wi-Fi available throughout the hotel?", a: "Complimentary high-speed Wi-Fi is available in every room and across all public areas." },
  { q: "Can you help with Tirumala darshan tickets?", a: "Our concierge team can guide you on Arjitha Sevas and darshan slots. Please share your travel plans at the time of booking." },
  { q: "What are the cancellation policies?", a: "Standard reservations may be cancelled up to 24 hours before check-in. Group and event bookings have specific terms — please contact us." },
];

function Contact() {
  const [open, setOpen] = useState<number | null>(0);
  const [form, setForm] = useState({ name: "", email: "", phone: "", checkin: "", checkout: "", guests: "2", room: "Executive Room", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nCheck-in: ${form.checkin}\nCheck-out: ${form.checkout}\nGuests: ${form.guests}\nRoom: ${form.room}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:res.tpt@nivaarahotels.com?subject=${encodeURIComponent("Reservation Enquiry")}&body=${body}`;
  };

  return (
    <>
      <PageHeader title="Contact & Reservations" subtitle="Our team is at your service, 24 hours a day" img={IMG.exteriorWalk} />

      <section className="py-24 container-x grid lg:grid-cols-2 gap-12">
        <div>
          <div className="eyebrow mb-3">Get in Touch</div>
          <h2 className="font-display text-4xl text-navy">We'd love to welcome you</h2>
          <div className="h-px w-16 bg-gold my-6" />
          <div className="space-y-6">
            <Info Icon={MapPin} label="Address">
              Next to APSRTC Central Bus Station,<br />Tirupati – 517501, Andhra Pradesh, India
            </Info>
            <Info Icon={Phone} label="Reservations">
              <a href="tel:+919030057115" className="hover:text-gold block">+91 90300 57115</a>
              <a href="tel:08772257115" className="hover:text-gold block">0877 2257115</a>
            </Info>
            <Info Icon={Mail} label="Email">
              <a href="mailto:res.tpt@nivaarahotels.com" className="hover:text-gold">res.tpt@nivaarahotels.com</a>
            </Info>
            <Info Icon={Clock} label="Front Desk">Open 24 hours</Info>
          </div>

          <div className="mt-10 aspect-video overflow-hidden border border-border">
            <iframe
              title="Hotel Nivaara location"
              src="https://www.google.com/maps?q=APSRTC+Central+Bus+Station+Tirupati&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <form onSubmit={submit} className="bg-cream border border-border p-8 space-y-5">
          <div className="eyebrow mb-1">Quick Reservation</div>
          <h3 className="font-display text-3xl text-navy">Send us an enquiry</h3>
          <div className="h-px w-12 bg-gold" />

          <div className="grid sm:grid-cols-2 gap-4">
            <FormInput label="Name" value={form.name} onChange={(v)=>setForm({...form, name:v})} required />
            <FormInput label="Phone" type="tel" value={form.phone} onChange={(v)=>setForm({...form, phone:v})} required />
          </div>
          <FormInput label="Email" type="email" value={form.email} onChange={(v)=>setForm({...form, email:v})} required />
          <div className="grid sm:grid-cols-2 gap-4">
            <FormInput label="Check-in" type="date" value={form.checkin} onChange={(v)=>setForm({...form, checkin:v})} required />
            <FormInput label="Check-out" type="date" value={form.checkout} onChange={(v)=>setForm({...form, checkout:v})} required />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <FormSelect label="Guests" value={form.guests} onChange={(v)=>setForm({...form, guests:v})} options={["1","2","3","4+"]} />
            <FormSelect label="Room Type" value={form.room} onChange={(v)=>setForm({...form, room:v})} options={["Executive Room","Superior Room"]} />
          </div>
          <div>
            <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Special Requests</label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e)=>setForm({...form, message:e.target.value})}
              className="mt-1.5 w-full border border-border bg-transparent px-3 py-2 text-sm focus:outline-none focus:border-gold"
            />
          </div>
          <button type="submit" className="btn-primary w-full">Send Enquiry</button>
          <p className="text-xs text-muted-foreground text-center">Best rates guaranteed when you book direct.</p>
        </form>
      </section>

      <section className="py-24 bg-secondary/40">
        <div className="container-x max-w-3xl">
          <div className="text-center mb-12">
            <div className="eyebrow mb-3">FAQ</div>
            <h2 className="font-display text-4xl text-navy">Frequently asked questions</h2>
          </div>
          <div className="space-y-3">
            {FAQ.map((f, i) => (
              <div key={f.q} className="bg-cream border border-border">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center"
                >
                  <span className="font-medium text-navy">{f.q}</span>
                  <span className="text-gold text-2xl leading-none">{open === i ? "−" : "+"}</span>
                </button>
                {open === i && <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Info({ Icon, label, children }: { Icon: React.ComponentType<{className?: string}>; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 grid place-items-center bg-navy text-gold shrink-0"><Icon className="w-4 h-4" /></div>
      <div>
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="text-navy mt-1">{children}</div>
      </div>
    </div>
  );
}

function FormInput({ label, type="text", value, onChange, required }: { label: string; type?: string; value: string; onChange: (v: string)=>void; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</span>
      <input type={type} required={required} value={value} onChange={(e)=>onChange(e.target.value)}
        className="mt-1.5 w-full border border-border bg-transparent px-3 py-2.5 text-sm focus:outline-none focus:border-gold" />
    </label>
  );
}
function FormSelect({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string)=>void; options: string[] }) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</span>
      <select value={value} onChange={(e)=>onChange(e.target.value)}
        className="mt-1.5 w-full border border-border bg-transparent px-3 py-2.5 text-sm focus:outline-none focus:border-gold">
        {options.map((o)=><option key={o}>{o}</option>)}
      </select>
    </label>
  );
}
