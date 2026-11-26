export default function Footer() {
  return (
    <footer className="bg-plum text-ivory">
      <div className="mx-auto max-w-360 px-(--pad) pt-16 pb-8 desk:pt-24">
        <div className="flex flex-col gap-10 desk:flex-row desk:items-end desk:justify-between">
          <div>
            <a
              href="#"
              aria-label="The Pro Stylist, back to top"
              className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-none tracking-[-.01em] italic no-underline"
            >
              The Pro Stylist
            </a>
            <p className="mt-5 max-w-[32ch] leading-relaxed text-ivory/75">
              Keihla Samone, the Pro Stylist behind the chair.
            </p>
          </div>

          <a
            href="https://www.instagram.com/the.prostylist"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block self-start py-1 text-ivory/85 no-underline underline-offset-4 hover:text-ivory hover:underline desk:self-auto"
          >
            @the.prostylist
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-ivory/20 pt-6 text-[.85rem] text-ivory/70">
          <p className="m-0">© {new Date().getFullYear()} The Pro Stylist</p>
          <p className="m-0">Houston, TX · By Appointment</p>
        </div>
      </div>
    </footer>
  );
}
