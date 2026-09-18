"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scenes = [
  {
    label: "01 / ARRIVE",
    title: "From Bole to the front door.",
    copy: "Land nearby, arrange your pickup and reach the hotel without turning arrival into another trip.",
    image: "https://www.hotellobeliaaddis.com/img/gallery/exterior--surroundings/6.jpg",
  },
  {
    label: "02 / WELCOME",
    title: "The city fades at reception.",
    copy: "A warm, practical welcome gives the experience its first change of pace.",
    image: "https://www.hotellobeliaaddis.com/img/gallery/lobby--reception-area/5.jpg",
  },
  {
    label: "03 / PAUSE",
    title: "Coffee before the room.",
    copy: "Move through the shared spaces slowly: food, coffee, conversation, then somewhere quiet.",
    image: "https://www.hotellobeliaaddis.com/img/gallery/anchor-bar--restaurant/8.jpg",
  },
  {
    label: "04 / REST",
    title: "And then, your room.",
    copy: "The journey ends with a simple promise: close the door, settle in and let Addis wait outside.",
    image: "https://www.hotellobeliaaddis.com/img/rooms/deluxe-king---rooms/1.jpg",
  },
];

export default function ArrivalJourney() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!root.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".journey-copy");
      const images = gsap.utils.toArray<HTMLElement>(".journey-image");

      gsap.set(images.slice(1), { autoAlpha: 0, scale: 1.06 });

      cards.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top 58%",
          end: "bottom 42%",
          onEnter: () => activate(index),
          onEnterBack: () => activate(index),
        });
      });

      function activate(index: number) {
        images.forEach((image, imageIndex) => {
          gsap.to(image, {
            autoAlpha: imageIndex === index ? 1 : 0,
            scale: imageIndex === index ? 1 : 1.035,
            duration: 0.75,
            ease: "power2.out",
            overwrite: true,
          });
        });
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="journey" id="journey" ref={root}>
      <div className="section-intro">
        <p className="eyebrow">One scroll. One continuous arrival.</p>
        <h2>Move from the street to the room.</h2>
        <p>
          This section is the foundation for the final cinematic sequence. We can later replace these fades with an image-sequence camera transition.
        </p>
      </div>

      <div className="journey-layout">
        <div className="journey-stage">
          {scenes.map((scene, index) => (
            <div className="journey-image" key={scene.label} style={{ zIndex: scenes.length - index }}>
              <img src={scene.image} alt="" />
              <div className="journey-vignette" />
              <span className="journey-counter">0{index + 1} / 04</span>
            </div>
          ))}
        </div>

        <div className="journey-copies">
          {scenes.map((scene) => (
            <article className="journey-copy" key={scene.label}>
              <span>{scene.label}</span>
              <h3>{scene.title}</h3>
              <p>{scene.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
