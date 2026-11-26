import Image from "next/image";

/*
  DRAFT COPY: written from the few facts we have (Keihla Samone, The Pro Stylist, Houston TX,
  by appointment, four years in business). Replace with Keihla's own words before launch.
*/

const facts = [
  { label: "Based in", value: "Houston, TX" },
  { label: "Booking", value: "By appointment" },
  { label: "In business", value: "4 years" },
  { label: "Follow", value: "@the.prostylist", href: "https://www.instagram.com/the.prostylist" },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-6 bg-ivory text-plum"
    >
      <div className="mx-auto grid max-w-360 gap-y-14 px-(--pad) py-24 desk:grid-cols-12 desk:gap-x-12 desk:py-40">
        {/* Portrait: a real still from Keihla's anniversary reel, set lower than the copy for an editorial stagger */}
        <figure className="m-0 desk:col-span-5 desk:mt-24">
          <div className="relative aspect-4/5 overflow-hidden bg-aubergine">
            <Image
              src="/keihla.png"
              alt="Keihla Samone seated in a denim jumpsuit, smiling at the camera"
              fill
              sizes="(min-width: 861px) 40vw, 100vw"
              className="object-cover object-[70%_30%]"
            />
          </div>
          <figcaption className="mt-4 text-[.78rem] font-medium tracking-[.18em] text-plum/70 uppercase">
            Keihla Samone · Houston, TX
          </figcaption>
        </figure>

        <div className="desk:col-span-6 desk:col-start-7">
          <p className="flex items-center gap-4 text-[.8rem] font-semibold tracking-[.22em]">
            <span aria-hidden="true" className="h-px w-10 bg-plum" />
            ABOUT KEIHLA
          </p>

          <h2
            id="about-heading"
            className="mt-8 font-serif text-[clamp(2.75rem,6vw,5.75rem)] leading-[.95] font-normal tracking-[-.015em] text-balance"
          >
            Every appointment
            <span className="block italic">is personal.</span>
          </h2>

          <div className="mt-10 max-w-[46ch] space-y-6 text-[1.075rem] leading-relaxed text-plum/85">
            <p>
              I&rsquo;m Keihla Samone, the stylist behind The Pro Stylist. For four years I&rsquo;ve
              built this business one client at a time, and it has always been about more than hair:
              how you feel when you sit down, and how you feel when you stand up.
            </p>
            <p>
              Working by appointment means your time is yours. No rushing. Just a chair, a plan we
              make together, and a result that feels like you.
            </p>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-plum/20 pt-8">
            {facts.map(({ label, value, href }) => (
              <div key={label}>
                <dt className="text-[.75rem] font-semibold tracking-[.18em] text-plum/70 uppercase">
                  {label}
                </dt>
                <dd className="mt-1 font-serif text-[1.65rem] leading-tight">
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-plum/30 underline-offset-4 hover:decoration-plum"
                    >
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#book"
              className="inline-flex min-h-13 w-full items-center justify-center rounded-[2px] bg-lacquer px-8 text-base font-semibold tracking-[.02em] text-ivory no-underline transition-colors hover:bg-[#a82724] active:translate-y-px motion-reduce:transition-none desk:w-auto"
            >
              Book an Appointment
            </a>
            <a
              href="#work"
              className="border-b border-plum py-2 text-base font-medium no-underline"
            >
              Explore My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
