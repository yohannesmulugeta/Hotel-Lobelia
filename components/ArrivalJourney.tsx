"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scenes = [
  {
    label: "Arrival",
    number: "01",
    title: "The airport is only the beginning.",
    copy: "Touch down nearby, take the complimentary shuttle and arrive without adding another journey to your day.",
    image: "https://www.hotellobeliaaddis.com/img/gallery/exterior--surroundings/6.jpg",
  },
  {
    label: "Welcome",
    number: "02",
    title: "Step inside. Let the city soften.",
    copy: "A calm reception and a friendly welcome shift the pace the moment you walk through the door.",
    image: "https://www.hotellobeliaaddis.com/img/gallery/lobby--reception-area/5.jpg",
  },
  {
    label: "Pause",
    number: "03",
    title: "Coffee, a meal, a moment to reset.",
    copy: "Settle into the shared spaces for Ethiopian coffee, breakfast or an easy meal before heading upstairs.",
    image: "https://www.hotellobeliaaddis.com/img/gallery/anchor-bar--restaurant/8.jpg",
  },
  {
    label: "Rest",
    number: "04",
    title: "Close the door. You are home for the night.",
    copy: "Clean rooms, soft light and the comfort of knowing tomorrow starts only minutes from the airport.",
    image: "https://www.hotellobeliaaddis.com/img/rooms/deluxe-king---rooms/1.jpg",
  },
];

export default function ArrivalJourney() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    if (!root.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".journey-copy");
      const images = gsap.utils.toArray<HTMLElement>(".journey-image");

      gsap.set(images.slice(1), { autoAlpha: 0, scale: 1.05 });
      gsap.set(images[0], { autoAlpha: 1, scale: 1 });

      const activate = (index: number) => {
        setActive(index);

        images.forEach((image, imageIndex) => {
          gsap.to(image, {
            autoAlpha: imageIndex === index ? 1 : 0,
            scale: imageIndex === index ? 1 : 1.04,
            duration: 0.9,
            ease: "power3.out",
            overwrite: true,
          });
        });
      };

      cards.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top 60%",
          end: "bottom 40%",
          onEnter: () => activate(index),
          onEnterBack: () => activate(index),
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="journey" id="journey" ref={root}>
      <div className="journey-intro">
        <p className="eyebrow">Your stay, in four moments</p>
        <h2>From touchdown<br />to lights out.</h2>
        <p>Scroll through the arrival experience.</p>
      </div>

      <div className="journey-layout">
        <div className="journey-stage">
          {scenes.map((scene, index) => (
            <div className="journey-image" key={scene.label}>
              <img src={scene.image} alt={`Hotel Lobelia — ${scene.label}`} />
              <div className="journey-vignette" />
            </div>
          ))}

          <div className="journey-ui">
            <span className="journey-active">{scenes[active].number}</span>
            <div className="journey-progress">
              {scenes.map((scene, index) => (
                <i className={index <= active ? "is-active" : ""} key={scene.number} />
              ))}
            </div>
            <span className="journey-total">04</span>
          </div>
        </div>

        <div className="journey-copies">
          {scenes.map((scene) => (
            <article className="journey-copy" key={scene.label}>
              <span className="journey-label">{scene.number} / {scene.label}</span>
              <h3>{scene.title}</h3>
              <p>{scene.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
