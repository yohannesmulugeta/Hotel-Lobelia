"use client";

import { useEffect, useState } from "react";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
          <span className="brand-copy">
            <strong>Hotel Lobelia</strong>
            <small>Addis Ababa</small>
          </span>
        </a>

        <nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="Primary">
          <a href="#story" onClick={close}>Story</a>
          <a href="#journey" onClick={close}>Experience</a>
          <a href="#rooms" onClick={close}>Rooms</a>
          <a href="#inside" onClick={close}>Gallery</a>
          <a href="#contact" onClick={close}>Contact</a>
        </nav>

        <div className="nav-actions">
          <a
            className="nav-book"
            href="https://hotellobeliaaddis.reserve-online.net/"
            target="_blank"
            rel="noreferrer"
          >
            Book now
            <span>↗</span>
          </a>

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
      </div>
    </header>
  );
}
