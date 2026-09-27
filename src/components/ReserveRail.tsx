import { Phone, Mail, MessageCircle, CalendarCheck, X, Plus } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";

export function ReserveRail() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const actions = [
    {
      label: "Book a Stay",
      icon: CalendarCheck,
      to: "/booking",
      primary: true,
    },
    {
      label: "Call Reservations",
      icon: Phone,
      href: "tel:+919030057115",
    },
    {
      label: "WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/919030057115",
      external: true,
    },
    {
      label: "Email",
      icon: Mail,
      href: "mailto:res.tpt@nivaarahotels.com",
    },
  ];

  return (
    <div
      className={`fixed z-40 bottom-6 right-6 md:bottom-8 md:right-8 flex flex-col items-end gap-3 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      {/* Action chips */}
      <div className="flex flex-col items-end gap-2">
        {actions.map((a, i) => {
          const Icon = a.icon;
          const content = (
            <div
              className={`group flex items-center gap-3 pl-4 pr-2 py-2 rounded-full backdrop-blur-md border shadow-[0_8px_30px_rgba(20,15,10,0.12)] transition-all duration-300 ${
                a.primary
                  ? "bg-navy text-ivory border-navy/30"
                  : "bg-ivory/95 text-navy border-border hover:border-gold"
              }`}
            >
              <span className="text-[11px] tracking-[0.22em] uppercase font-medium">
                {a.label}
              </span>
              <span
                className={`grid place-items-center w-9 h-9 rounded-full transition-colors ${
                  a.primary
                    ? "bg-gold text-navy"
                    : "bg-navy/5 group-hover:bg-gold group-hover:text-navy"
                }`}
              >
                <Icon className="w-4 h-4" strokeWidth={1.75} />
              </span>
            </div>
          );

          const wrapperStyle = {
            transitionDelay: open ? `${i * 40}ms` : `${(actions.length - i) * 30}ms`,
          };

          const cls = `transform-gpu transition-all duration-300 ${
            open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
          }`;

          if (a.to) {
            return (
              <Link key={a.label} to={a.to} className={cls} style={wrapperStyle} onClick={() => setOpen(false)}>
                {content}
              </Link>
            );
          }
          return (
            <a
              key={a.label}
              href={a.href}
              target={a.external ? "_blank" : undefined}
              rel={a.external ? "noopener noreferrer" : undefined}
              className={cls}
              style={wrapperStyle}
            >
              {content}
            </a>
          );
        })}
      </div>

      {/* FAB */}
      <button
        type="button"
        aria-label={open ? "Close reservation menu" : "Open reservation menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="relative grid place-items-center w-14 h-14 rounded-full bg-navy text-ivory shadow-[0_12px_40px_rgba(20,15,10,0.35)] hover:shadow-[0_16px_50px_rgba(20,15,10,0.45)] transition-all duration-300 hover:scale-105"
      >
        <span className={`absolute inset-0 rounded-full bg-gold/40 transition-transform duration-700 ${open ? "scale-100 opacity-0" : "scale-100 opacity-100 animate-ping"}`} />
        <span className="relative">
          {open ? <X className="w-5 h-5" strokeWidth={2} /> : <Plus className="w-5 h-5" strokeWidth={2} />}
        </span>
        {!open && (
          <span className="absolute -top-1 -right-1 bg-gold text-navy text-[9px] font-bold tracking-wider px-1.5 py-0.5 rounded-full uppercase">
            Book
          </span>
        )}
      </button>
    </div>
  );
}
