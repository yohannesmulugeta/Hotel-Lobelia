"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scenes = [
  {
    number: "01",
    label: "Outside",
    eyebrow: "Bole · Addis Ababa",
    title: "Your stay begins before you step inside.",
    copy: "A calm base in Bole, only minutes from Addis Ababa Bole International Airport.",
    image: "sequence/01-exterior-wide.png",
    position: "50% 50%",
  },
  {
    number: "02",
    label: "Approach",
    eyebrow: "Come closer",
    title: "Leave the street behind.",
    copy: "As you approach the hotel, the pace of the city starts to fall away.",
    image: "sequence/02-exterior-approach.png",
    position: "50% 50%",
  },
  {
    number: "03",
    label: "Entrance",
    eyebrow: "The front door",
    title: "A warm welcome is waiting.",
    copy: "The entrance becomes the transition point between busy Bole and a quieter place to stay.",
    image: "sequence/03-entrance-close.png",
    position: "50% 50%",
  },
  {
    number: "04",
    label: "Inside",
    eyebrow: "Step in",
    title: "The light changes. The mood changes.",
    copy: "Warm interiors and polished details make arrival feel easy.",
    image: "sequence/04-inside-entrance.png",
    position: "50% 50%",
  },
  {
    number: "05",
    label: "Reception",
    eyebrow: "Welcome to Lobelia",
    title: "Settle in before you head upstairs.",
    copy: "Pause at reception, ask what you need, then continue deeper into the hotel.",
    image: "sequence/05-lobby-reception.png",
    position: "50% 50%",
  },
  {
    number: "06",
    label: "Corridor",
    eyebrow: "Toward your room",
    title: "The city gets quieter with every step.",
    copy: "Move away from the lobby and toward the private part of your stay.",
    image: "sequence/06-corridor.png",
    position: "50% 50%",
  },
  {
    number: "07",
    label: "Bedroom",
    eyebrow: "Your room is ready",
    title: "Drop your bags. Close the door.",
    copy: "Warm wood, soft light and a comfortable room designed for an easy night in Addis.",
    image: "sequence/07-bedroom-wide.png",
    position: "50% 50%",
  },
  {
    number: "08",
    label: "Closer",
    eyebrow: "Slow down",
    title: "A softer, quieter ending to the day.",
    copy: "The room becomes more intimate as the journey settles into rest.",
    image: "sequence/08-bedroom-close.png",
    position: "50% 50%",
  },
  {
    number: "09",
    label: "Rest",
    eyebrow: "Now, rest",
    title: "Tomorrow can wait.",
    copy: "The journey ends here—with a quiet room and a bed ready when you are.",
    image: "sequence/09-bed-detail.png",
    position: "50% 50%",
  },
];

export default function ArrivalJourney() {
  const root = useRef<HTMLElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    if (!root.current) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const frames = gsap.utils.toArray<HTMLElement>(".cinema-frame");
      const copies = gsap.utils.toArray<HTMLElement>(".cinema-copy");
      const images = frames
        .map((frame) => frame.querySelector(".cinema-frame-main"))
        .filter(Boolean) as HTMLImageElement[];

      gsap.set(frames, { autoAlpha: 0 });
      gsap.set(copies, { autoAlpha: 0, y: 18 });
      gsap.set(images, { scale: 1.015, xPercent: 0, yPercent: 0 });

      gsap.set(frames[0], { autoAlpha: 1 });
      gsap.set(copies[0], { autoAlpha: 1, y: 0 });

      const mobile = window.matchMedia("(max-width: 720px)").matches;
      const scrollPerScene = mobile ? window.innerHeight * 1.02 : window.innerHeight * 1.18;
      const sceneSpacing = 1.25;

      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => `+=${scrollPerScene * (scenes.length - 1)}`,
          scrub: 1.35,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          fastScrollEnd: false,
          onUpdate: (self) => {
            const index = Math.min(
              scenes.length - 1,
              Math.round(self.progress * (scenes.length - 1))
            );
            setActive(index);

            if (progress.current) {
              gsap.set(progress.current, {
                scaleX: self.progress,
                transformOrigin: "left center",
              });
            }
          },
        },
      });

      scenes.forEach((_, index) => {
        const sceneStart = index * sceneSpacing;
        const image = images[index];

        if (image) {
          timeline.fromTo(
            image,
            {
              scale: index === 0 ? 1.015 : 1.005,
              xPercent: index % 2 === 0 ? -0.35 : 0.35,
              yPercent: 0.15,
            },
            {
              scale: 1.075,
              xPercent: index % 2 === 0 ? 0.45 : -0.45,
              yPercent: -0.3,
              duration: sceneSpacing + 0.42,
              ease: "none",
            },
            sceneStart
          );
        }

        if (index === 0) return;

        const transitionStart = sceneStart - 0.72;

        timeline
          .to(
            copies[index - 1],
            {
              autoAlpha: 0,
              y: -12,
              duration: 0.34,
              ease: "power1.inOut",
            },
            transitionStart
          )
          .to(
            frames[index - 1],
            {
              autoAlpha: 0,
              duration: 0.92,
              ease: "sine.inOut",
            },
            transitionStart
          )
          .fromTo(
            frames[index],
            { autoAlpha: 0 },
            {
              autoAlpha: 1,
              duration: 0.92,
              ease: "sine.inOut",
            },
            transitionStart
          )
          .fromTo(
            copies[index],
            { autoAlpha: 0, y: 14 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out",
            },
            transitionStart + 0.48
          );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="cinema" id="journey" ref={root}>
      <div className="cinema-stage">
        {scenes.map((scene, index) => (
          <div
            className={`cinema-frame ${index === 0 ? "is-opening" : ""}`}
            key={scene.number}
          >
            {index === 0 && (
              <img
                className="cinema-frame-backdrop"
                src={scene.image}
                alt=""
                aria-hidden="true"
              />
            )}
            <img
              className="cinema-frame-main"
              src={scene.image}
              alt={`Hotel Lobelia — ${scene.label}`}
              style={{ objectPosition: scene.position }}
              loading={index < 3 ? "eager" : "lazy"}
              decoding="async"
              fetchPriority={index < 2 ? "high" : "auto"}
            />
            <div className="cinema-shade" />
          </div>
        ))}

        <div className="cinema-top">
          <div>
            <span className="cinema-kicker">The Lobelia arrival</span>
            <strong>{scenes[active].label}</strong>
          </div>
          <span>{scenes[active].number} / 09</span>
        </div>

        <div className="cinema-copy-stack">
          {scenes.map((scene) => (
            <div className="cinema-copy" key={scene.number}>
              <span>{scene.eyebrow}</span>
              <h2>{scene.title}</h2>
              <p>{scene.copy}</p>
            </div>
          ))}
        </div>

        <div className="cinema-bottom">
          <span>Scroll to move through the hotel</span>
          <div className="cinema-progress-track">
            <div className="cinema-progress" ref={progress} />
          </div>
          <span>{scenes[active].label}</span>
        </div>
      </div>
    </section>
  );
}
