const items = [
  ["01", "Breakfast", "Start the day downstairs, without planning another stop."],
  ["02", "Airport shuttle", "A complimentary connection to nearby Bole International Airport."],
  ["03", "Wi-Fi", "Stay connected for work, travel and everyday use."],
  ["04", "Restaurant & bar", "Coffee, breakfast, meals and an easy place to meet."],
  ["05", "Fitness centre", "Keep your routine while you are away."],
  ["06", "Spa & steam", "A slower ending after a long day in the city."],
  ["07", "Meeting hall", "A practical space for small business gatherings."],
  ["08", "24-hour welcome", "Support whenever your flight brings you in."],
];

export default function Amenities() {
  return (
    <section className="amenities section-pad">
      <div className="amenities-heading">
        <p className="eyebrow">Everything within reach</p>
        <h2>The things that make<br />a stay feel <em>easy.</em></h2>
      </div>

      <div className="amenity-list">
        {items.map(([number, title, copy]) => (
          <article key={title}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
