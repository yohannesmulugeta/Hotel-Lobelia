"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!root.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-reveal", {
        y: 44,
        opacity: 0,
        duration: 1.25,
        stagger: 0.11,
        ease: "power4.out",
      });

      gsap.to(".hero-media", {
        scale: 1.12,
        yPercent: 7,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(".hero-main", {
        yPercent: -16,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "42% top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="top" ref={root}>
      <div className="hero-media" aria-hidden="true" />
      <div className="hero-shade" aria-hidden="true" />

      <div className="hero-main">
        <div className="hero-topline hero-reveal">
          <span>Bole · Addis Ababa</span>
          <span>Boutique hospitality</span>
        </div>

        <div className="hero-heading-wrap">
          <p className="hero-eyebrow hero-reveal">Three minutes from Bole International Airport</p>
          <h1 className="hero-title hero-reveal">
            A softer arrival
            <em>in Addis.</em>
          </h1>
        </div>

        <div className="hero-lower">
          <p className="hero-copy hero-reveal">
            A warm, quietly comfortable stay in the heart of Bole—close to your flight, restaurants, coffee and the rhythm of the city.
          </p>

          <div className="hero-actions hero-reveal">
            <a
              className="pill pill-bright"
              href="https://hotellobeliaaddis.reserve-online.net/"
              target="_blank"
              rel="noreferrer"
            >
              Check availability <span>↗</span>
            </a>
            <a className="text-action" href="#story">
              Discover Lobelia <span>↓</span>
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-cue" aria-hidden="true">
        <span>Scroll to enter</span>
        <i />
      </div>
    </section>
  );
}
