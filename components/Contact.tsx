export default function Contact() {
  return (
    <section className="contact section-pad" id="contact">
      <div className="contact-top">
        <p className="eyebrow">Stay in the heart of Bole</p>
        <h2>
          Close to your flight.
          <em>Closer to feeling at home.</em>
        </h2>
      </div>

      <div className="contact-bottom">
        <div className="contact-cta">
          <p>Ready when you are.</p>
          <a
            className="pill pill-bright"
            href="https://hotellobeliaaddis.reserve-online.net/"
            target="_blank"
            rel="noreferrer"
          >
            Book your stay <span>↗</span>
          </a>
        </div>

        <div className="contact-details">
          <div>
            <span>Find us</span>
            <p>Bole Sub-City, Kebele 03/05, Bldg No. 2241<br />Addis Ababa, Ethiopia</p>
          </div>
          <div>
            <span>Call</span>
            <a href="tel:+251116673850">+251 11 667 3850 / 51 / 52 / 53</a>
          </div>
          <div>
            <span>Email</span>
            <a href="mailto:reservations@hotellobeliaaddis.com">reservations@hotellobeliaaddis.com</a>
          </div>
        </div>
      </div>

      <footer className="site-footer">
        <div className="footer-brand">
          <span className="brand-mark">L</span>
          <span>Hotel Lobelia</span>
        </div>
        <div className="footer-links">
          <a href="https://www.instagram.com/hotellobelia/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.facebook.com/HotelLobelia/" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://www.tripadvisor.com/Hotel_Review-g293791-d6905105-Reviews-Hotel_Lobelia-Addis_Ababa.html" target="_blank" rel="noreferrer">Tripadvisor</a>
        </div>
      </footer>
    </section>
  );
}
