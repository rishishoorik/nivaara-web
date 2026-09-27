import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ShieldCheck, BadgePercent, Headphones, ExternalLink } from "lucide-react";
import { SWIFTBOOK_URL } from "@/lib/booking";

export const Route = createFileRoute("/booking")({
  validateSearch: (s: Record<string, unknown>) => ({
    checkin: typeof s.checkin === "string" ? s.checkin : undefined,
    checkout: typeof s.checkout === "string" ? s.checkout : undefined,
    adults: typeof s.adults === "string" ? s.adults : undefined,
    room: typeof s.room === "string" ? s.room : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Book Direct — Hotel Nivaara Tirupati" },
      {
        name: "description",
        content:
          "Reserve your stay at Hotel Nivaara Tirupati directly. Best-rate guarantee, complimentary breakfast and instant confirmation — moments from Tirumala Temple.",
      },
      { property: "og:title", content: "Book Direct — Hotel Nivaara Tirupati" },
      {
        property: "og:description",
        content:
          "Secure booking with best-rate guarantee and instant confirmation at Hotel Nivaara Tirupati.",
      },
    ],
    links: [{ rel: "canonical", href: "/booking" }],
  }),
  component: BookingPage,
});

function BookingPage() {
  const search = Route.useSearch();
  void search;

  const [redirecting, setRedirecting] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => {
      setRedirecting(true);
      window.location.assign(SWIFTBOOK_URL);
    }, 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Hero band */}
      <section className="bg-navy text-cream py-16">
        <div className="container-x text-center">
          <div className="eyebrow text-gold mb-3">Reserve Direct · Best Rates Guaranteed</div>
          <h1 className="heading-trajan text-4xl md:text-5xl">Book Your Stay</h1>
          <div className="h-px w-16 bg-gold mx-auto my-6" />
          <p className="font-sans max-w-2xl mx-auto text-cream/80 leading-relaxed">
            Instant confirmation · Secure payments · Complimentary breakfast on direct bookings
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-sm">
            {[
              { icon: BadgePercent, label: "Best Rate Guarantee", desc: "Lowest prices when you book direct" },
              { icon: ShieldCheck, label: "Secure Payments", desc: "Protected payment processing" },
              { icon: Headphones, label: "24/7 Reservations", desc: "Call +91 90300 57115" },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="border border-gold/30 bg-cream/5 p-4">
                <Icon className="w-5 h-5 text-gold mx-auto" />
                <div className="mt-2 heading-trajan text-sm tracking-[0.2em]">{label}</div>
                <div className="mt-1 text-cream/70 text-xs">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking handoff */}
      <section className="bg-cream py-10">
        <div className="container-x">
          <div className="bg-white border border-border shadow-2xl overflow-hidden px-6 py-14 text-center">
            <div className="w-12 h-12 border-2 border-gold border-t-transparent rounded-full animate-spin mx-auto" />
            <div className="mt-5 eyebrow text-gold">Secure Booking Engine</div>
            <h2 className="heading-trajan text-3xl md:text-4xl text-navy mt-3">Opening Booking Engine</h2>
            <p className="font-sans max-w-xl mx-auto text-muted-foreground mt-4 leading-relaxed">
              We are taking you to Hotel Nivaara’s secure booking engine for live availability and payments.
            </p>
            <a
              href={SWIFTBOOK_URL}
              className="btn-primary mt-8 inline-flex items-center gap-2"
              rel="noopener noreferrer"
            >
              {redirecting ? "Continue to Booking" : "Open Booking Engine"}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-4">
            Having trouble?{" "}
            <a
              href={SWIFTBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy underline underline-offset-4 hover:text-gold"
            >
              Open the booking engine in a new tab
            </a>{" "}
            · Or call us at{" "}
            <a href="tel:+919030057115" className="text-navy underline underline-offset-4 hover:text-gold">
              +91 90300 57115
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
