/*
  DRAFT COPY: Keihla's real service menu isn't known yet, so these are common hairstylist services
  with neutral descriptions and no prices. Replace names and descriptions with her actual menu.
*/

const services = [
  { n: "01", name: "Styling", desc: "Blowouts, silk presses and finishes shaped to your hair and your day." },
  { n: "02", name: "Color", desc: "Dimension, tone and highlights, planned around the health of your hair." },
  { n: "03", name: "Extensions", desc: "Added length and fullness, blended so it looks like it's all yours." },
  { n: "04", name: "Cuts & Shaping", desc: "Precision cuts that frame your face and grow out well." },
  { n: "05", name: "Special Occasions", desc: "Hair for the days that matter, planned ahead and styled to last." },
];

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="scroll-mt-6 bg-ivory text-plum">
      <div className="mx-auto grid max-w-360 gap-y-14 px-(--pad) py-24 desk:grid-cols-12 desk:gap-x-12 desk:py-40">
        <div className="desk:sticky desk:top-10 desk:col-span-5 desk:self-start">
          <p className="flex items-center gap-4 text-[.8rem] font-semibold tracking-[.22em]">
            <span aria-hidden="true" className="h-px w-10 bg-plum" />
            SERVICES
          </p>
          <h2
            id="services-heading"
            className="mt-8 font-serif text-[clamp(2.75rem,6vw,5.75rem)] leading-[.95] font-normal tracking-[-.015em] text-balance"
          >
            Hair, planned
            <span className="block italic">around you.</span>
          </h2>
          <p className="mt-8 max-w-[34ch] text-[1.075rem] leading-relaxed text-plum/85">
            Every service is by appointment, so your time in the chair is yours.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#book"
              className="inline-flex min-h-13 w-full items-center justify-center rounded-[2px] bg-lacquer px-8 text-base font-semibold tracking-[.02em] text-ivory no-underline transition-colors hover:bg-[#a82724] active:translate-y-px motion-reduce:transition-none desk:w-auto"
            >
              Book an Appointment
            </a>
            <span className="text-[.9rem] text-plum/70">Houston, TX · By Appointment</span>
          </div>
        </div>

        <ol className="m-0 list-none p-0 desk:col-span-6 desk:col-start-7">
          {services.map(({ n, name, desc }) => (
            <li
              key={n}
              className="grid grid-cols-[3rem_1fr] gap-x-4 gap-y-2 border-t border-plum/20 py-7 transition-[padding] duration-300 last:border-b desk:hover:pl-2 motion-reduce:transition-none"
            >
              <span className="pt-2 text-[.8rem] font-semibold tracking-[.18em] text-plum/65">{n}</span>
              <h3 className="m-0 font-serif text-[clamp(2rem,3.6vw,3.25rem)] leading-[1.05] font-normal tracking-[-.01em]">
                {name}
              </h3>
              <p className="col-start-2 max-w-[38ch] leading-relaxed text-plum/80">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
