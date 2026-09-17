import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SplitText from "./SplitText";
import { travelPortrait, decorativeMark } from "../assets/figmaAssets";

const BADGES = [
  {
    label: "Search with ease",
    className: "bg-forest text-cream -left-2 md:left-0 top-10 md:top-16",
    delay: 0,
  },
  {
    label: "Know your stay",
    className: "bg-green text-ink -right-2 md:right-0 top-6 md:top-8",
    delay: 0.6,
  },
  {
    label: "Feel at home",
    className:
      "bg-forest text-cream -right-4 md:right-2 bottom-24 md:bottom-28",
    delay: 1.2,
  },
  {
    label: "Book with ease",
    className: "bg-green text-ink -left-4 md:left-2 bottom-16 md:bottom-20",
    delay: 1.8,
  },
];

export default function TravelSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const markRotate = useTransform(scrollYProgress, [0, 1], [0, 25]);

  return (
    <section
      ref={ref}
      className="relative py-28 md:py-36 bg-gradient-to-b from-[#f2faf8] to-[#d5ffec] overflow-hidden"
    >
      <motion.img
        src={decorativeMark}
        alt=""
        style={{ rotate: markRotate }}
        className="pointer-events-none absolute -right-40 top-0 w-[900px] opacity-[0.08] select-none"
      />

      <div className="relative max-w-[1520px] mx-auto px-10 md:px-16 lg:px-24 text-center">
        <SplitText
          as="h2"
          text="Travel should feel easy."
          className="font-display font-semibold text-3xl md:text-[54px] leading-[1.05] tracking-tight text-brightgreen"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-5 mb-15 text-lg md:text-[28px] font-display text-ink max-w-3xl mx-auto leading-tight tracking-tight"
        >
          We've made finding and booking your next stay simple from start to
          finish.
        </motion.p>

        <div className="relative mt-20 md:mt-24 max-w-[700px] mx-auto">
          <motion.div
            style={{ y: portraitY }}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-[280px] h-[320px] md:w-[700px] md:h-[400px] overflow-visible"
          >
            <div className="absolute top-20 mt-8 inset-0 rounded-[36px]  shadow-2xl shadow-forest/20" />
            <img
              src={travelPortrait}
              alt="Traveler checking her stay details on her phone"
              className="absolute bottom-0 left-1/2 z-10 h-[150%] w-full max-w-none -translate-x-1/2 object-contain object-bottom"
            />
          </motion.div>

          {BADGES.map((b) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, scale: 0.4, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                delay: b.delay * 0.35,
                duration: 0.6,
                type: "spring",
                stiffness: 170,
                damping: 15,
              }}
              whileHover={{ scale: 1.1, rotate: -4 }}
              className={`absolute px-4 py-2 md:px-5 md:py-3 rounded-xl font-medium text-sm md:text-[20px] whitespace-nowrap shadow-lg animate-float ${b.className}`}
              style={{ animationDelay: `${b.delay}s` }}
              data-cursor-hover
            >
              {b.label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
