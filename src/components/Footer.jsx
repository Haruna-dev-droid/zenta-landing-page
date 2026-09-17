import { motion } from "framer-motion";
import {
  Home,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";
import { footerMark } from "../assets/figmaAssets";
import MagneticButton from "./MagneticButton";

const COLUMNS = [
  {
    title: "Explore",
    links: ["Properties", "How it works", "Services", "About Us"],
  },
  {
    title: "Support",
    links: [
      "Help center",
      "Contact us",
      "Cancellation options",
      "Trust & safety",
    ],
  },
  {
    title: "Company",
    links: ["Careers", "Press", "Partner with us", "Terms & privacy"],
  },
];

const MARQUEE_WORDS = [
  "Cozy and quiet",
  "City escapes",
  "Weekend getaways",
  "Unique stays",
  "Book with ease",
];

const SOCIALS = [
  { icon: Instagram, label: "Instagram" },
  { icon: Twitter, label: "X / Twitter" },
  { icon: Facebook, label: "Facebook" },
  { icon: Linkedin, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#f2faf8] to-[#d5ffec] pt-24 pb-10">
      <img
        src={footerMark}
        alt=""
        className="pointer-events-none select-none absolute -left-32 -top-16 w-[1100px] opacity-[0.09]"
      />

      <div className="relative max-w-[1520px] mx-auto px-10 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr] gap-12 md:gap-8 pb-16 border-b border-forest/15">
          <div>
            <a
              href="#top"
              className="flex items-center gap-2 w-fit"
              data-cursor-hover
            >
              <span className="grid place-items-center w-9 h-9 rounded-xl bg-green text-forest">
                <Home size={20} strokeWidth={2.4} />
              </span>
              <span className="font-display font-semibold text-xl tracking-tight text-green">
                zenta.
              </span>
            </a>
            <p className="mt-5 text-forest/80 max-w-xs leading-relaxed">
              Thousands of stays. Flexible booking. Made for you — wherever
              you're going, feel at home.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  aria-label={label}
                  whileHover={{
                    y: -4,
                    backgroundColor: "#00ea80",
                    color: "#004238",
                  }}
                  className="grid place-items-center w-10 h-10 rounded-full bg-forest text-cream transition-colors"
                  data-cursor-hover
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-forest font-semibold text-lg mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-forest/75 hover:text-forest hover:pl-1 transition-all duration-300 inline-block"
                      data-cursor-hover
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-display text-forest font-semibold text-lg mb-4">
              Stay in the loop
            </h4>
            <p className="text-forest/75 mb-4">
              New stays and better deals, straight to your inbox.
            </p>
            <form
              className="flex items-center bg-cream rounded-xl border border-forest/20 overflow-hidden pr-1.5"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="you@email.com"
                className="w-full bg-transparent px-4 py-3 text-sm text-ink placeholder:text-forest/40 outline-none"
              />
              <MagneticButton
                as="button"
                type="submit"
                strength={10}
                className="shrink-0 w-9 h-9 rounded-lg bg-forest text-green"
                data-cursor-hover
              >
                <ArrowUpRight size={18} />
              </MagneticButton>
            </form>
          </div>
        </div>

        {/* Infinite marquee strip of stay categories */}
        <div className="relative py-8 overflow-hidden border-b border-forest/15">
          <div className="flex w-max marquee-track">
            {[...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS].map(
              (word, i) => (
                <span
                  key={i}
                  className="mx-6 font-display text-2xl md:text-4xl text-forest/20 whitespace-nowrap tracking-tight"
                >
                  {word} <span className="text-green/40">&bull;</span>
                </span>
              ),
            )}
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-forest/60">
          <p>&copy; {new Date().getFullYear()} zenta. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="hover:text-forest transition-colors"
              data-cursor-hover
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-forest transition-colors"
              data-cursor-hover
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-forest transition-colors"
              data-cursor-hover
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
