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
      gsap.from(".hero-kicker, .hero-title, .hero-copy, .hero-actions", {
        y: 34,
        opacity: 0,
        duration: 1.05,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.to(".hero-media", {
        scale: 1.14,
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".hero-content", {
        yPercent: -18,
        opacity: 0.25,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "35% top",
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
      <div className="hero-content">
        <p className="hero-kicker">Bole · Addis Ababa · Ethiopia</p>
        <h1 className="hero-title">
          Your arrival in Addis,
          <em> made effortless.</em>
        </h1>
        <p className="hero-copy">
          A family-owned hotel close to Bole International Airport. Scroll to move from the city into a quieter stay.
        </p>
        <div className="hero-actions">
          <a className="pill pill-bright" href="#journey">Enter the hotel ↓</a>
          <a
            className="pill pill-glass"
            href="https://hotellobeliaaddis.reserve-online.net/"
            target="_blank"
            rel="noreferrer"
          >
            Check availability ↗
          </a>
        </div>
      </div>

      <div className="hero-facts">
        <span><strong>03 min</strong> from Bole Airport</span>
        <span><strong>24/7</strong> welcome</span>
        <span><strong>Free</strong> airport shuttle</span>
      </div>
    </section>
  );
}
