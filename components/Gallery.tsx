"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  ["Lobby", "https://www.hotellobeliaaddis.com/img/gallery/lobby--reception-area/2.jpg"],
  ["Anchor Bar", "https://www.hotellobeliaaddis.com/img/gallery/anchor-bar--restaurant/1.jpg"],
  ["Restaurant", "https://www.hotellobeliaaddis.com/img/gallery/anchor-bar--restaurant/6.jpg"],
  ["Fitness", "https://www.hotellobeliaaddis.com/img/gallery/fitness-center--steam/1.jpg"],
  ["Steam", "https://www.hotellobeliaaddis.com/img/gallery/fitness-center--steam/5.jpg"],
  ["Meeting Hall", "https://www.hotellobeliaaddis.com/img/gallery/meeting-hall/1.jpg"],
];

export default function Gallery() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!section.current || !track.current || window.innerWidth < 800) return;

    const ctx = gsap.context(() => {
      const getDistance = () => Math.max(0, track.current!.scrollWidth - window.innerWidth + 80);

      gsap.to(track.current, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section.current,
          start: "top top",
          end: () => `+=${getDistance() + window.innerHeight * 0.7}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="gallery" id="inside" ref={section}>
      <div className="gallery-heading">
        <p className="eyebrow">Inside Lobelia</p>
        <h2>A hotel should feel understandable before you arrive.</h2>
      </div>
      <div className="gallery-track" ref={track}>
        {images.map(([label, src], index) => (
          <figure className={`gallery-card ${index % 2 ? "gallery-card-small" : ""}`} key={src}>
            <img src={src} alt={`Hotel Lobelia ${label}`} />
            <figcaption>{label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
