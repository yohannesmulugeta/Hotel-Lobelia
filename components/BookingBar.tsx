export default function BookingBar() {
  return (
    <section className="booking-bar" aria-label="Booking information">
      <div className="booking-bar-inner">
        <div className="booking-bar-title">
          <span>Plan your stay</span>
          <strong>Hotel Lobelia</strong>
        </div>

        <div className="booking-field">
          <span>Check in</span>
          <strong>Select date</strong>
        </div>

        <div className="booking-field">
          <span>Check out</span>
          <strong>Select date</strong>
        </div>

        <div className="booking-field">
          <span>Guests</span>
          <strong>2 guests</strong>
        </div>

        <a
          className="booking-submit"
          href="https://hotellobeliaaddis.reserve-online.net/"
          target="_blank"
          rel="noreferrer"
        >
          Check availability
          <span>↗</span>
        </a>
      </div>
    </section>
  );
}
