const items = [
  ["Breakfast", "Start the morning without planning another stop."],
  ["Airport shuttle", "A practical connection to nearby Bole International Airport."],
  ["Wi-Fi", "Stay connected for work, travel and everyday use."],
  ["Restaurant & bar", "A place to eat, meet or slow down."],
  ["Fitness", "Keep a routine while you travel."],
  ["Spa & steam", "A quieter reset after the city."],
];

export default function Amenities() {
  return (
    <section className="amenities section-pad">
      <div className="section-intro section-intro-dark">
        <p className="eyebrow">The useful things</p>
        <h2>Hospitality without clutter.</h2>
      </div>
      <div className="amenity-grid">
        {items.map(([title, copy], index) => (
          <article key={title}>
            <span>0{index + 1}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
