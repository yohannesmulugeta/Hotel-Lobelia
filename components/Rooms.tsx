const rooms = [
  {
    name: "Suite",
    type: "More space",
    text: "A generous stay for slower mornings, longer visits and room to settle in.",
    image: "https://www.hotellobeliaaddis.com/img/rooms/suite-room---rooms/1.jpg",
    className: "room-card-featured",
  },
  {
    name: "Deluxe Double",
    type: "Rest easy",
    text: "Comfortable proportions, a restful double bed and an easy sense of calm.",
    image: "https://www.hotellobeliaaddis.com/img/rooms/deluxe-king---rooms/3.jpg",
    className: "",
  },
  {
    name: "Standard Double",
    type: "Simple comfort",
    text: "Everything you need for a straightforward stay in central Bole.",
    image: "https://www.hotellobeliaaddis.com/img/rooms/standard-double---rooms/1.jpg",
    className: "",
  },
  {
    name: "Standard Twin",
    type: "Travel together",
    text: "Two beds and an uncomplicated base for friends, family or colleagues.",
    image: "https://www.hotellobeliaaddis.com/img/rooms/twin-room---rooms/1.jpg",
    className: "room-card-wide",
  },
];

export default function Rooms() {
  return (
    <section className="rooms section-pad" id="rooms">
      <div className="rooms-heading">
        <div>
          <p className="eyebrow">Rooms & suites</p>
          <h2>Choose your<br /><em>quiet corner.</em></h2>
        </div>

        <div className="rooms-intro">
          <p>
            Four room types, each designed around the same idea: make your stay feel easy from the moment you put your bags down.
          </p>
          <a
            href="https://hotellobeliaaddis.reserve-online.net/"
            target="_blank"
            rel="noreferrer"
            className="underlined-link"
          >
            See current availability ↗
          </a>
        </div>
      </div>

      <div className="room-grid">
        {rooms.map((room, index) => (
          <article className={`room-card ${room.className}`} key={room.name}>
            <img src={room.image} alt={`Hotel Lobelia ${room.name}`} />
            <div className="room-overlay" />

            <div className="room-index">0{index + 1}</div>
            <div className="room-meta">
              <span>{room.type}</span>
              <h3>{room.name}</h3>
              <p>{room.text}</p>
              <a
                href="https://hotellobeliaaddis.reserve-online.net/"
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${room.name} availability`}
              >
                Explore room <b>↗</b>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
