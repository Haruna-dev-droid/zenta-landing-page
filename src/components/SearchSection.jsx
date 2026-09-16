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
      className="group relative rounded-2xl bg-forest/10 hover:bg-forest/15 backdrop-blur-sm p-5 md:p-6 overflow-hidden transition-colors"
      data-cursor-hover
    >
      {/* Sweeping glow border on hover */}
      <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 [background:conic-gradient(from_var(--a,0deg),transparent_0%,rgba(0,234,128,0.5)_18%,transparent_36%)] animate-spinSlow" />
      <span className="pointer-events-none absolute inset-[2px] rounded-2xl bg-cream/95" />

      <div className="relative flex items-start gap-4">
        <motion.img
          src={field.icon}
          alt=""
          className="w-10 h-10 md:w-12 md:h-12 object-contain shrink-0"
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.6 }}
        />
        <div>
          <h3 className="font-display text-xl md:text-[28px] text-ink leading-tight tracking-tight">
            {field.title}
          </h3>
          <p className="mt-1 text-forest/80 text-sm md:text-[15px] max-w-[220px]">
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
      <div className="relative max-w-[1520px] mx-auto px-8 md:px-12 lg:px-16 text-center">
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

        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 max-w-3xl mx-auto text-left">
          {FIELDS.map((f, i) => (
            <FieldCard key={f.title} field={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
