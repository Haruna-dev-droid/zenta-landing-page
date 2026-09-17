import { motion } from "framer-motion";
import SplitText from "./SplitText";
import {
  placeCozy,
  placeCity,
  placeWeekend,
  placeUnique,
} from "../assets/figmaAssets";

const PLACES = [
  {
    num: "01",
    title: "Cozy and Quiet",
    copy: "Slow mornings, peaceful spaces, and everything you need to unwind.",
    img: placeCozy,
  },
  {
    num: "02",
    title: "City escapes",
    copy: "Stay close to the places, people, and experiences that bring a city to life.",
    img: placeCity,
  },
  {
    num: "03",
    title: "Weekend getaways",
    copy: "A change of scenery is sometimes all you need.",
    img: placeWeekend,
  },
  {
    num: "04",
    title: "Unique stays",
    copy: "Discover spaces with character, personality, and a story of their own.",
    img: placeUnique,
  },
];

function PlaceCard({ place, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 90, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: 0.75,
        delay: (index % 2) * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative h-[220px] md:h-[280px] rounded-[20px] overflow-hidden shadow-xl shadow-forest/10"
      data-cursor-hover
    >
      <motion.img
        src={place.img}
        alt={place.title}
        className="absolute inset-0 w-full h-full object-cover"
        whileHover={{ scale: 1.12 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cream/5 via-forest/70 to-forest" />

      <motion.span
        initial={{ opacity: 0, scale: 0.5, rotate: -8 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          delay: 0.25 + index * 0.08,
          duration: 0.6,
          type: "spring",
          stiffness: 160,
          damping: 14,
        }}
        className="absolute top-4 right-4 md:top-5 md:right-5 font-display font-semibold text-4xl md:text-5xl text-cream/90 tracking-tight"
      >
        {place.num}
      </motion.span>

      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 overflow-hidden">
        <motion.h3
          initial={{ y: "100%" }}
          whileInView={{ y: "0%" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-semibold text-base md:text-[22px] text-cream tracking-tight md:h-[1.7rem]"
        >
          {place.title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-1 text-green text-xs md:text-[15px] leading-snug max-w-[300px] md:mx-auto md:h-[3.5rem]"
        >
          {place.copy}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default function PlacesSection() {
  return (
    <section className="relative py-28 md:py-36 bg-gradient-to-b from-cream via-mint/40 to-cream overflow-hidden">
      <div className="pointer-events-none absolute top-1/4 right-[-12%] w-[420px] h-[420px] rounded-full bg-green/20 blur-[120px] animate-blobMorph" />

      <div className="relative max-w-[1520px] mx-auto px-10 md:px-16 lg:px-24 text-center">
        <SplitText
          as="h2"
          text="Find your kind of place."
          className="font-display font-semibold text-3xl md:text-[54px] leading-[1.05] tracking-tight text-brightgreen"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-5 text-lg md:text-[28px] font-display text-ink leading-tight tracking-tight"
        >
          Every trip is different. That's why your stay should be too.
        </motion.p>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-20 max-w-4xl mx-auto">
          {PLACES.map((p, i) => (
            <PlaceCard key={p.num} place={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
