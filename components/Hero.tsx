"use client"
import { useState } from "react";
import HeroVideo from "./HeroVideo";
// Tailwind only sees complete class strings, so each line keeps its literal classes.
const headline = [
  { text: "4 Years of", cls: "not-italic" },
  { text: "Making You", cls: "italic [animation-delay:.12s]" },
  { text: "Feel", cls: "italic [animation-delay:.24s]" },
  { text: "Beautiful.", cls: "italic [animation-delay:.36s]" },
];

const shadow = "[text-shadow:0_1px_14px_rgba(30,15,24,.7)]";

export default function Hero() {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <section
      aria-label="Introduction"
      className="relative isolate grid min-h-svh grid-rows-[auto_1fr_auto] overflow-hidden bg-[radial-gradient(120%_90%_at_20%_100%,var(--color-aubergine)_0%,var(--color-plum)_62%)] before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:bg-[linear-gradient(90deg,rgba(30,15,24,.6)_0,rgba(30,15,24,.25)_45%,rgba(30,15,24,0)_70%)] before:content-['']"
    >
      <HeroVideo />

      <nav aria-label="Primary" className="flex items-center justify-between px-(--pad) py-6">
        <a
          href="#"
          aria-label="The Pro Stylist, home"
          className="font-serif text-[1.6rem] tracking-[.01em] italic no-underline"
        >
          The Pro Stylist
        </a>
        <ul className="m-0 flex list-none gap-[clamp(1.25rem,3vw,2.5rem)] p-0 max-md:hidden">
          {[
            ["Work", "#work"],
            ["About", "#about"],
            ["Contact", "#book"],
          ].map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                className="border-b border-transparent py-2 text-[.95rem] font-medium no-underline [text-shadow:0_1px_14px_rgba(30,15,24,.7)] transition-colors hover:border-ivory motion-reduce:transition-none"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        {/* mobile menu button  */}
        <button
      onClick={() => setToggleMenu(!toggleMenu)}
      className="flex flex-col gap-1.5 md:hidden"
    >
      {/* Line 1 */}
      <span
        className={`h-[3px] w-7 bg-ivory rounded transition-all duration-300
        ${toggleMenu ? "rotate-45 translate-y-[9px]" : ""}
      `}
      />

      {/* Line 2 */}
      <span
        className={`h-[3px] w-5 bg-ivory rounded transition-all duration-300
        ${toggleMenu ? "opacity-0" : ""}
      `}
      />

      {/* Line 3 */}
      <span
        className={`h-[3px] w-7 bg-ivory rounded transition-all duration-300
        ${toggleMenu ? "-rotate-45 -translate-y-[9px]" : ""}
      `}
      />
    </button>
      </nav>

      <div className="relative self-end px-(--pad) pt-8 pb-6">
        <p className="mb-5 text-[.8rem] font-semibold tracking-[.22em] text-ivory [text-shadow:0_1px_14px_rgba(30,15,24,.7)]">
          THE PRO STYLIST
        </p>

        <h1
          aria-label="4 Years of Making You Feel Beautiful."
          className="m-0 max-w-[9ch] font-serif text-[clamp(3rem,14.5vw,6.5rem)] leading-[.88] font-normal tracking-[-.015em] text-balance lining-nums [text-shadow:0_2px_28px_rgba(30,15,24,.55)] desk:max-w-[11ch] desk:text-[clamp(3.6rem,10.6vw,11rem)]"
        >
          {headline.map(({ text, cls }) => (
            <span key={text} aria-hidden="true" className="block overflow-hidden pb-[.06em]">
              <i
               className={`block animate-rise motion-reduce:animate-none ${cls}`}
              >
                {text}
              </i>
            </span>
          ))}
        </h1>

        <p className="mt-7 max-w-[34ch] text-[clamp(1.05rem,1.4vw,1.25rem)] leading-normal font-medium text-ivory [text-shadow:0_1px_18px_rgba(30,15,24,.7)] desk:max-w-[30ch]">
          Meet Keihla Samone — the Pro Stylist behind the chair.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 desk:gap-y-6">
          <a
            href="#book"
            className="inline-flex min-h-13 w-full items-center justify-center rounded-[2px] bg-lacquer px-8 text-base font-semibold tracking-[.02em] text-ivory no-underline transition-colors hover:bg-[#a82724] active:translate-y-px motion-reduce:transition-none desk:w-auto"
          >
            Book an Appointment
          </a>
          <a
            href="#work"
            className={`border-b border-ivory py-2 text-base font-medium no-underline ${shadow}`}
          >
            Explore My Work
          </a>
        </div>
      </div>

      <div className="mx-(--pad) flex flex-wrap items-center justify-between gap-4 border-t border-ivory/20 pt-5 pb-7 text-[.9rem] text-[#e8ded2] [text-shadow:0_1px_12px_rgba(30,15,24,.7)]">
        <span>Houston, TX · By Appointment</span>
        <a
          href="https://www.instagram.com/the.prostylist"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ivory no-underline underline-offset-4 hover:underline"
        >
          @the.prostylist
        </a>
      </div>
    </section>
  );
}
