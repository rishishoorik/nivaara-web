import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import vydaLogo from "@/assets/vyda-hotels.jpg";

export function Footer() {
  return (
    <footer className="bg-navy text-cream/90 mt-24">
      <div className="container-x py-16 grid md:grid-cols-4 gap-10">
        <div>
          <div className="font-display text-2xl tracking-wider text-cream">HOTEL NIVAARA</div>
          <div className="text-[10px] tracking-[0.3em] uppercase text-gold mt-1">Tirupati</div>
          <p className="text-sm text-cream/70 mt-5 leading-relaxed">
            A tranquil sanctuary for pilgrims and discerning travellers, moments from the sacred hills of Tirumala.
          </p>
          <div className="flex gap-3 mt-6">
            <a href="https://www.instagram.com/nivaarahoteltirupati/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 grid place-items-center border border-cream/20 hover:bg-gold hover:border-gold hover:text-navy transition">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61591554894587" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 grid place-items-center border border-cream/20 hover:bg-gold hover:border-gold hover:text-navy transition">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="eyebrow text-gold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            {[
              ["/rooms","Rooms & Suites"],
              ["/dining","Dining"],
              ["/banquets","Banquets & Conferences"],
              ["/facilities","Facilities & Services"],
              ["/gallery","Gallery"],
              ["/tirumala","Tirumala Info"],
              ["/contact","Reservations"],
            ].map(([to,label])=>(
              <li key={to}><Link to={to} className="hover:text-gold transition">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow text-gold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-cream/80">
            <li className="flex gap-3"><MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" /> Next to APSRTC Central Bus Station, Tirupati - 517501, AP, India</li>
            <li className="flex gap-3"><Phone className="w-4 h-4 mt-0.5 text-gold shrink-0" /> <a href="tel:+919030057115" className="hover:text-gold">+91 90300 57115</a></li>
            <li className="flex gap-3"><Phone className="w-4 h-4 mt-0.5 text-gold shrink-0" /> <a href="tel:08772257115" className="hover:text-gold">0877 2257115</a></li>
            <li className="flex gap-3"><Mail className="w-4 h-4 mt-0.5 text-gold shrink-0" /> <a href="mailto:res.tpt@nivaarahotels.com" className="hover:text-gold">res.tpt@nivaarahotels.com</a></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow text-gold mb-4">Stay Connected</h4>
          <p className="text-sm text-cream/70 mb-4">Subscribe for exclusive offers and seasonal packages.</p>
          <form className="flex flex-col sm:flex-row gap-2 sm:gap-0" onSubmit={(e)=>e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="Your email"
              className="flex-1 min-w-0 bg-transparent border border-cream/20 px-3 py-2 text-sm placeholder:text-cream/40 focus:outline-none focus:border-gold"
            />
            <button className="bg-gold text-navy px-4 py-2 sm:py-0 text-xs uppercase tracking-widest font-semibold hover:bg-cream shrink-0">Join</button>
          </form>
          <div className="mt-6">
            <a href="https://vydahotels.com" target="_blank" rel="noopener noreferrer" className="block group">
              <span className="flex items-center justify-center rounded-xl bg-white px-5 py-3 w-full shadow-[0_8px_30px_-8px_rgba(255,255,255,0.35)] ring-1 ring-white/30 group-hover:shadow-[0_10px_36px_-8px_rgba(255,255,255,0.45)] transition">
                <img src={vydaLogo} alt="Vyda Hotels" className="h-10 w-auto max-w-full object-contain" />
              </span>
            </a>
          </div>




        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-x py-5 flex flex-col sm:flex-row justify-between items-center text-xs text-cream/50 gap-2">
          <div>© {new Date().getFullYear()} Hotel Nivaara, Tirupati. All rights reserved.</div>
          <div>Crafted for pilgrims & travellers · Best rate guaranteed when you book direct.</div>
        </div>
      </div>
    </footer>
  );
}
