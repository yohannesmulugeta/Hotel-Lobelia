const rooms = [
  {
    name: "Suite",
    text: "More breathing room for longer stays, work and slower mornings.",
    image: "https://www.hotellobeliaaddis.com/img/rooms/suite-room---rooms/1.jpg",
  },
  {
    name: "Deluxe Double",
    text: "A generous double room designed around rest and simplicity.",
    image: "https://www.hotellobeliaaddis.com/img/rooms/deluxe-king---rooms/3.jpg",
  },
  {
    name: "Standard Double",
    text: "A clean, comfortable base in one of Addis Ababa’s most convenient areas.",
    image: "https://www.hotellobeliaaddis.com/img/rooms/standard-double---rooms/1.jpg",
  },
  {
    name: "Standard Twin",
    text: "Two beds for friends, colleagues or family travelling together.",
    image: "https://www.hotellobeliaaddis.com/img/rooms/twin-room---rooms/1.jpg",
  },
];

export default function Rooms() {
  return (
    <section className="rooms section-pad" id="rooms">
      <div className="section-intro section-intro-dark">
        <p className="eyebrow">Stay your way</p>
        <h2>Rooms with nothing to prove.</h2>
        <p>Clean composition, large photography and just enough information to help a guest choose.</p>
      </div>

      <div className="room-grid">
        {rooms.map((room, index) => (
          <article className="room-card" key={room.name}>
            <img src={room.image} alt={`Hotel Lobelia ${room.name}`} />
            <div className="room-overlay" />
            <div className="room-meta">
              <span>0{index + 1}</span>
              <div>
                <h3>{room.name}</h3>
                <p>{room.text}</p>
              </div>
              <a
                href="https://hotellobeliaaddis.reserve-online.net/"
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${room.name} availability`}
              >
                ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
