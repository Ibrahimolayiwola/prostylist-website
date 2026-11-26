"use client";

import { useEffect, useRef } from "react";

export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true; // React does not always reflect the muted attribute
    video.play().catch(() => {}); // muted autoplay is allowed; ignore if the browser still blocks it
  }, []);

  return (
    <figure className="absolute inset-y-0 right-0 -z-10 m-0 w-full desk:w-[max(42vw,56.25svh)]">
      <video
        src="/hero.mp4"
        ref={ref}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/poster.jpg"
        aria-label="Keihla Samone celebrating four years of The Pro Stylist"
        style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
        className="film-mask object-[50%_25%] desk:object-[50%_30%]"
      />
      {/* Readability overlay: heavier at the bottom on mobile where the copy sits over the video */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(30,15,24,.6)_0,rgba(30,15,24,.05)_24%,rgba(30,15,24,.5)_38%,rgba(30,15,24,.94)_74%)] desk:bg-[linear-gradient(180deg,rgba(30,15,24,.55)_0,rgba(30,15,24,0)_22%,rgba(30,15,24,0)_55%,rgba(30,15,24,.78)_100%)]"
      />
    </figure>
  );
}
