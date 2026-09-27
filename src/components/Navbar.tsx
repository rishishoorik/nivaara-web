import { Link } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { BadgePercent } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/nivaara-logo-warm.png";
import vydaLogo from "../assets/vyda-hotels-header.jpg";

const links: ReadonlyArray<{ to: string; label: string; cta?: boolean }> = [
  { to: "/", label: "Home" },
  { to: "/rooms", label: "Stay" },
  { to: "/dining", label: "Dining" },
  { to: "/banquets", label: "Celebrate" },
  { to: "/gallery", label: "Gallery" },
  { to: "/facilities", label: "Facilities" },
  { to: "/tirumala", label: "Attractions" },
  { to: "/contact", label: "Contact" },
  { to: "/booking", label: "Book Now", cta: true },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const update = () => {
      document.documentElement.style.setProperty(
        "--header-height",
        `${header.offsetHeight}px`
      );
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(header);
    return () => ro.disconnect();
  }, []);

  return (
    <header ref={headerRef} className="fixed top-0 inset-x-0 z-50 transition-all duration-500">
      {/* Promo strip */}
      <div className={`relative z-[60] bg-navy text-ivory text-[11px] tracking-[0.25em] uppercase text-center transition-all duration-500 overflow-hidden ${
        scrolled ? "py-1.5" : "py-2"
      }`}>
        <BadgePercent className="inline w-3.5 h-3.5 mr-2 text-gold" />
        Book Direct · Save 15% ·{" "}
        <Link to="/booking" search={{ checkin: undefined, checkout: undefined, adults: undefined, room: undefined }} className="text-gold hover:underline">Book Now</Link> ·{" "}
        <a href="tel:+919030057115" className="text-gold hover:underline">+91 90300 57115</a>
      </div>

      <div className={`transition-all duration-500 ${
        scrolled ? "bg-ivory/98 backdrop-blur shadow-[0_1px_0_0_var(--color-border)]" : "bg-ivory/95 backdrop-blur-sm shadow-[0_1px_0_0_var(--color-border)]"
      }`}>
        <div className="container-x">
          <div className={`relative flex flex-col items-center transition-all duration-500 ${
            scrolled ? "py-3 lg:py-0" : ""
          }`}>
            {/* Vyda parent brand — left side */}
            <a
              href="https://vydahotels.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex absolute left-0 items-center transition-all duration-500 ${
                scrolled ? "top-1/2 -translate-y-1/2" : "top-1/2 -translate-y-1/2 lg:top-3 lg:translate-y-0"
              }`}
              aria-label="Vyda Hotels"
            >
              <img
                src={vydaLogo}
                alt="Vyda Hotels"
                className={`w-auto object-contain transition-all duration-500 ${
                  scrolled ? "h-10 md:h-12" : "h-10 md:h-20"
                }`}
              />
            </a>

            {/* Logo block — collapses on scroll */}
            <div className={`flex flex-col items-center overflow-hidden transition-all duration-500 ${
              scrolled ? "max-h-0 opacity-0 py-0" : "max-h-40 opacity-100 py-4"
            }`}>
              <Link to="/" className="flex flex-col items-center group">
                <img src={logo} alt="Hotel Nivaara" className="h-12 sm:h-14 w-auto" />
                <div className="display-serif text-[11px] tracking-[0.4em] uppercase text-muted-foreground mt-1">
                  Tirupati &middot; India
                </div>
              </Link>
            </div>

            {/* Desktop text nav */}
            <nav className={`hidden lg:flex items-center transition-all duration-500 ${
              scrolled ? "gap-8 py-3" : "gap-9 mt-4 pb-4"
            }`}>
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to as "/"}
                  className={l.cta
                    ? "bg-navy text-ivory text-[11px] tracking-[0.22em] uppercase font-semibold px-4 py-2 hover:bg-gold hover:text-navy transition"
                    : "link-underline"}
                  activeProps={l.cta ? undefined : { style: { color: "var(--color-gold)" } }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            {/* Mobile toggle — refined hamburger with label */}
            <button
              className="lg:hidden absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 text-navy"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <span className="hidden sm:inline font-display text-[10px] tracking-[0.25em] uppercase">
                {open ? "Close" : "Menu"}
              </span>
              <div className="relative w-5 h-5 flex flex-col justify-center items-center gap-[5px]">
                <span className={`block w-5 h-[1.5px] bg-current transition-all duration-300 ${open ? "rotate-45 translate-y-[3.5px]" : ""}`} />
                <span className={`block w-5 h-[1.5px] bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`} />
                <span className={`block w-5 h-[1.5px] bg-current transition-all duration-300 ${open ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile full-screen overlay menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-[45] bg-navy/40 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-0 top-[var(--header-height,130px)] z-[50] bg-ivory lg:hidden overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]"
            >
              <div className="container-x py-8 sm:py-12">
                {/* Logo in menu for brand reinforcement */}
                <div className="flex flex-col items-center mb-8">
                  <img src={logo} alt="Hotel Nivaara" className="h-10 w-auto mb-2" />
                  <div className="display-serif text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
                    Tirupati &middot; India
                  </div>
                </div>

                <nav className="flex flex-col items-center gap-1">
                  {links.map((l, i) => (
                    <motion.div
                      key={l.to}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        to={l.to as "/"}
                        onClick={() => setOpen(false)}
                        className="block py-3 font-display text-lg sm:text-xl tracking-[0.08em] uppercase text-navy hover:text-gold transition-colors duration-300"
                        activeProps={{ style: { color: "var(--color-gold)" } }}
                      >
                        {l.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Divider */}
                <div className="flex justify-center my-6">
                  <span className="divider-gold" />
                </div>

                {/* Contact details */}
                <div className="text-center space-y-1">
                  <a href="tel:+919030057115" className="block text-sm tracking-wide text-navy hover:text-gold transition-colors">
                    +91 90300 57115
                  </a>
                  <a href="mailto:res.tpt@nivaarahotels.com" className="block text-sm tracking-wide text-muted-foreground hover:text-navy transition-colors">
                    res.tpt@nivaarahotels.com
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

