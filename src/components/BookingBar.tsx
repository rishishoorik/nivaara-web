import { useMemo, useState } from "react";
import { Calendar as CalIcon, Users, BedDouble, ChevronDown } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { SWIFTBOOK_URL } from "@/lib/booking";

export function BookingBar({ floating = false }: { floating?: boolean }) {
  const today = useMemo(() => {
    const d = new Date(); d.setHours(0,0,0,0); return d;
  }, []);
  const tomorrow = useMemo(() => {
    const d = new Date(today); d.setDate(d.getDate()+1); return d;
  }, [today]);

  const [checkin, setCheckin] = useState<Date>(today);
  const [checkout, setCheckout] = useState<Date>(tomorrow);
  const [guests, setGuests] = useState("2");
  const [room, setRoom] = useState("Executive Room");

  const nights = Math.max(1, Math.round((checkout.getTime() - checkin.getTime()) / 86400000));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (checkout <= checkin) return;
    window.location.assign(SWIFTBOOK_URL);
  };

  return (
    <form
      onSubmit={submit}
      className={`bg-cream shadow-2xl border border-border ${
        floating ? "relative -mt-16 z-20 mx-4 lg:mx-auto max-w-5xl" : "max-w-5xl mx-auto"
      } grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border w-full`}
    >
      <DateField
        icon={<CalIcon className="w-4 h-4" />}
        label="Check In"
        value={checkin}
        sublabel={format(checkin, "EEE")}
        onChange={(d) => {
          setCheckin(d);
          if (checkout <= d) {
            const nx = new Date(d); nx.setDate(nx.getDate()+1); setCheckout(nx);
          }
        }}
        fromDate={today}
      />
      <DateField
        icon={<CalIcon className="w-4 h-4" />}
        label={`Check Out · ${nights} ${nights === 1 ? "night" : "nights"}`}
        value={checkout}
        sublabel={format(checkout, "EEE")}
        onChange={setCheckout}
        fromDate={new Date(checkin.getTime() + 86400000)}
      />
      <Field icon={<Users className="w-4 h-4" />} label="Guests">
        <div className="relative">
          <select value={guests} onChange={(e)=>setGuests(e.target.value)} className="w-full bg-transparent text-navy font-medium focus:outline-none appearance-none pr-6 cursor-pointer">
            <option>1</option><option>2</option><option>3</option><option>4</option>
          </select>
          <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
        </div>
      </Field>
      <Field icon={<BedDouble className="w-4 h-4" />} label="Room">
        <div className="relative">
          <select value={room} onChange={(e)=>setRoom(e.target.value)} className="w-full bg-transparent text-navy font-medium focus:outline-none appearance-none pr-6 cursor-pointer truncate">
            <option>Executive Room</option>
            <option>Superior Room</option>
          </select>
          <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
        </div>
      </Field>
      <button type="submit" className="bg-navy text-cream text-xs uppercase tracking-[0.2em] font-semibold py-4 hover:bg-gold hover:text-navy transition sm:col-span-2 lg:col-span-1">
        Check Availability
      </button>
    </form>
  );
}

function DateField({
  icon, label, value, sublabel, onChange, fromDate,
}: {
  icon: React.ReactNode;
  label: string;
  value: Date;
  sublabel: string;
  onChange: (d: Date) => void;
  fromDate: Date;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button type="button" className="bg-cream px-5 py-4 flex flex-col gap-1 text-left min-w-0 hover:bg-cream/70 transition">
          <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {icon} {label}
          </span>
          <div className="flex items-baseline gap-2 min-w-0">
            <span className="font-serif text-navy text-xl leading-none">{format(value, "dd MMM")}</span>
            <span className="text-xs text-muted-foreground uppercase tracking-wider">{sublabel}, {format(value, "yyyy")}</span>
          </div>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 border-border bg-cream shadow-2xl" align="start" sideOffset={8}>
        <div className="bg-navy text-cream px-5 py-3">
          <div className="text-[10px] uppercase tracking-[0.25em] text-gold">{label}</div>
          <div className="font-serif text-2xl mt-1">{format(value, "EEEE, dd MMMM yyyy")}</div>
        </div>
        <Calendar
          mode="single"
          selected={value}
          onSelect={(d) => { if (d) { onChange(d); setOpen(false); } }}
          disabled={(d) => d < fromDate}
          defaultMonth={value}
          className="p-4"
        />
      </PopoverContent>
    </Popover>
  );
}

function Field({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <label className="bg-cream px-5 py-4 flex flex-col gap-1 cursor-pointer min-w-0">
      <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {icon} {label}
      </span>
      <div className="min-w-0 w-full">{children}</div>
    </label>
  );
}
