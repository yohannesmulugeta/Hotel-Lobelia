export default function Contact() {
  return (
    <section className="contact section-pad" id="contact">
      <div className="contact-copy">
        <p className="eyebrow">Your room in Addis awaits</p>
        <h2>Stay close.<br /><em>Stay cared for.</em></h2>
        <div className="hero-actions">
          <a
            className="pill pill-bright"
            href="https://hotellobeliaaddis.reserve-online.net/"
            target="_blank"
            rel="noreferrer"
          >
            Book your stay ↗
          </a>
          <a className="pill pill-glass" href="tel:+251116673850">Call the hotel</a>
        </div>
      </div>

      <div className="contact-details">
        <div><span>Address</span><p>Bole Sub-City, Addis Ababa, Ethiopia</p></div>
        <div><span>Phone</span><a href="tel:+251116673850">+251 11 667 3850</a></div>
        <div><span>Email</span><a href="mailto:reservations@hotellobeliaaddis.com">reservations@hotellobeliaaddis.com</a></div>
      </div>

      <footer>
        <span>Hotel Lobelia · Addis Ababa</span>
        <span>Scrolling redesign concept</span>
      </footer>
    </section>
  );
}
