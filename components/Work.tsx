import Image from "next/image";

/*
  HOW TO ADD REAL WORK
  Drop Keihla's photos into /public/work and set `src` (and a real `alt`) on each look below,
  e.g. src: "/work/look-01.jpg". Tiles without a `src` show a tonal placeholder.
  Portrait photos (4:5 or 3:4) work best. Tailwind needs complete class strings, so keep them literal.
*/

type Look = {
  n: string;
  src?: string;
  alt: string;
  caption: string;
  tile: string; // grid span + aspect ratio + vertical offset
  bg: string; // placeholder background
  ink: string; // placeholder text colour
};

const looks: Look[] = [
  {
    n: "01", alt: "", caption: "Look 01",
    tile: "col-span-2 desk:col-span-5 aspect-[4/5]",
    bg: "bg-[linear-gradient(160deg,#4a2236_0%,#1e0f18_100%)]", ink: "text-ivory",
  },
  {
    n: "02", alt: "", caption: "Look 02",
    tile: "desk:col-span-4 aspect-[3/4] desk:mt-20",
    bg: "bg-[linear-gradient(200deg,#7a2a30_0%,#2a1220_100%)]", ink: "text-ivory",
  },
  {
    n: "03", alt: "", caption: "Look 03",
    tile: "desk:col-span-3 aspect-[3/4] desk:mt-8",
    bg: "bg-[linear-gradient(180deg,#cdbfb0_0%,#8c7a6c_100%)]", ink: "text-plum",
  },
  {
    n: "04", alt: "", caption: "Look 04",
    tile: "desk:col-span-3 aspect-[3/4]",
    bg: "bg-[linear-gradient(170deg,#3a1b2b_0%,#1e0f18_100%)]", ink: "text-ivory",
  },
  {
    n: "05", alt: "", caption: "Look 05",
    tile: "desk:col-span-5 aspect-[4/5] desk:mt-12",
    bg: "bg-[linear-gradient(190deg,#5b3a2e_0%,#1e0f18_100%)]", ink: "text-ivory",
  },
  {
    n: "06", alt: "", caption: "Look 06",
    tile: "col-span-2 desk:col-span-4 aspect-square desk:mt-28",
    bg: "bg-[linear-gradient(150deg,#7a4a52_0%,#3a1b2b_100%)]", ink: "text-ivory",
  },
];

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-heading" className="scroll-mt-6 bg-plum text-ivory">
      <div className="mx-auto max-w-360 px-(--pad) py-24 desk:py-40">
        <div className="grid items-end gap-6 desk:grid-cols-[1fr_auto] desk:gap-12">
          <div>
            <p className="flex items-center gap-4 text-[.8rem] font-semibold tracking-[.22em]">
              <span aria-hidden="true" className="h-px w-10 bg-ivory" />
              SELECTED WORK
            </p>
            <h2
              id="work-heading"
              className="mt-8 font-serif text-[clamp(2.75rem,6vw,5.75rem)] leading-[.95] font-normal tracking-[-.015em] text-balance"
            >
              My work,
              <span className="block italic">up close.</span>
            </h2>
          </div>
          <p className="max-w-[34ch] text-[1.075rem] leading-relaxed text-ivory/80">
            A look at what happens in the chair, one client at a time.
          </p>
        </div>

        <ul className="mt-16 grid list-none grid-cols-2 gap-3 p-0 desk:mt-24 desk:grid-cols-12 desk:gap-x-6 desk:gap-y-4">
          {looks.map((look) => (
            <li key={look.n} className={`m-0 ${look.tile.split(" ").filter((c) => !c.startsWith("aspect")).join(" ")}`}>
              <figure className="m-0">
                <div
                  className={`relative overflow-hidden ${
                    look.tile.split(" ").find((c) => c.startsWith("aspect")) ?? ""
                  } ${look.src ? "bg-aubergine" : `${look.bg} ${look.ink}`}`}
                >
                  {look.src ? (
                    <Image
                      src={look.src}
                      alt={look.alt}
                      fill
                      sizes="(min-width: 861px) 40vw, 50vw"
                      className="object-cover transition-transform duration-700 hover:scale-[1.03] motion-reduce:transition-none"
                    />
                  ) : (
                    <>
                      <span aria-hidden="true" className="absolute inset-3 border border-current opacity-15" />
                      <span aria-hidden="true" className="absolute top-5 left-5 font-serif text-2xl">
                        {look.n}
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 grid place-items-center text-[.7rem] font-semibold tracking-[.22em] uppercase opacity-60"
                      >
                        Photo to come
                      </span>
                    </>
                  )}
                </div>
                <figcaption className="mt-3 text-[.78rem] font-medium tracking-[.16em] text-sand uppercase">
                  {look.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <div className="mt-20 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-ivory/20 pt-8">
          <a
            href="#book"
            className="inline-flex min-h-13 w-full items-center justify-center rounded-[2px] bg-lacquer px-8 text-base font-semibold tracking-[.02em] text-ivory no-underline transition-colors hover:bg-[#a82724] active:translate-y-px motion-reduce:transition-none desk:w-auto"
          >
            Book an Appointment
          </a>
          <a
            href="https://www.instagram.com/the.prostylist"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-ivory py-2 text-base font-medium no-underline"
          >
            See more on Instagram @the.prostylist
          </a>
        </div>
      </div>
    </section>
  );
}
