import { motion } from "framer-motion";
import SplitText from "./SplitText";
import { useTilt } from "../hooks/useTilt";
import {
  iconWhere,
  iconCheckIn,
  iconCheckOut,
  iconGuests,
} from "../assets/figmaAssets";

const FIELDS = [
  {
    icon: iconWhere,
    title: "Where",
    copy: "Search destinations, neighborhoods, or landmarks.",
  },
  { icon: iconCheckIn, title: "Check in", copy: "Choose your arrival date." },
  {
    icon: iconCheckOut,
    title: "Check out",
    copy: "Choose when you're heading home.",
  },
  { icon: iconGuests, title: "Guests", copy: "Tell us who's coming." },
];

function FieldCard({ field, index }) {
  const tilt = useTilt(8);

  return (
    <motion.div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      style={tilt.style}
      initial={{ opacity: 0, y: 60, rotate: index % 2 === 0 ? -3 : 3 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative h-full rounded-2xl bg-forest/5 hover:bg-forest/10 backdrop-blur-sm p-4 md:p-5 overflow-hidden transition-colors"
      data-cursor-hover
    >
      <span className="pointer-events-none absolute inset-[1px] rounded-2xl bg-cream/95" />

      <div className="relative flex h-full flex-col items-center justify-center gap-3 text-center">
        <motion.img
          src={field.icon}
          alt=""
          className="w-9 h-9 md:w-10 md:h-10 object-contain shrink-0"
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.6 }}
        />
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-lg md:text-[24px] text-ink leading-tight tracking-tight">
            {field.title}
          </h3>
          <p className="mt-1 text-forest/80 text-sm md:text-[15px] max-w-[220px] mx-auto">
            {field.copy}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function SearchSection() {
  return (
    <section className="relative bg-gradient-to-b from-cream to-green py-28 md:py-36 overflow-hidden">
      <div className="relative max-w-[1520px] mx-auto px-10 md:px-16 lg:px-24 text-center">
        <SplitText
          as="h2"
          text="Where are you going?"
          className="font-display font-semibold text-3xl md:text-[48px] leading-[1.05] tracking-tight text-ink"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-5 text-lg md:text-[28px] font-display text-ink/90 max-w-3xl mx-auto leading-tight tracking-tight"
        >
          Find a place that fits your trip, your budget, and your vibe.
        </motion.p>

        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-20 max-w-3xl mx-auto text-left">
          {FIELDS.map((f, i) => (
            <FieldCard key={f.title} field={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
