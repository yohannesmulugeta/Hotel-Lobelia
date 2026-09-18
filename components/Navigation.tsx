"use client";

import { useEffect, useState } from "react";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`site-nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#top" className="brand" onClick={close} aria-label="Hotel Lobelia home">
          <span className="brand-mark">L</span>
          <span>Hotel Lobelia</span>
        </a>

        <nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="Primary">
          <a href="#journey" onClick={close}>Journey</a>
          <a href="#rooms" onClick={close}>Rooms</a>
          <a href="#inside" onClick={close}>Inside</a>
          <a href="#contact" onClick={close}>Contact</a>
          <a
            className="pill pill-bright"
            href="https://hotellobeliaaddis.reserve-online.net/"
            target="_blank"
            rel="noreferrer"
            onClick={close}
          >
            Book your stay ↗
          </a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "×" : "☰"}
        </button>
      </div>
    </header>
  );
}
