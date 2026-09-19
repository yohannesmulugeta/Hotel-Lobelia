import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ArrivalJourney from "@/components/ArrivalJourney";
import Rooms from "@/components/Rooms";
import Gallery from "@/components/Gallery";
import Amenities from "@/components/Amenities";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />

      <section className="story section-pad" id="story">
        <div className="story-heading">
          <p className="eyebrow">A personal welcome</p>
          <h2>
            Small enough to know you.
            <em>Close enough to make travel easy.</em>
          </h2>
        </div>

        <div className="story-grid">
          <div className="story-portrait">
            <img
              src="https://www.hotellobeliaaddis.com/img/gallery/exterior--surroundings/4.jpg"
              alt="Hotel Lobelia exterior in Addis Ababa"
            />
          </div>

          <div className="story-copy">
            <p className="story-lead">
              Hotel Lobelia brings a familiar sense of home to one of Addis Ababa’s most convenient neighbourhoods.
            </p>
            <p>
              Stay minutes from Bole International Airport, with restaurants, coffee, banks and city life nearby—then return to somewhere quieter.
            </p>

            <div className="story-facts">
              <div><strong>3 min</strong><span>from Bole Airport</span></div>
              <div><strong>24/7</strong><span>front desk welcome</span></div>
              <div><strong>Free</strong><span>airport shuttle</span></div>
            </div>

            <p className="amharic">እንኳን ወደ ሆቴል ሎቤሊያ በደህና መጡ።</p>
          </div>

          <div className="story-detail">
            <img
              src="https://www.hotellobeliaaddis.com/img/gallery/lobby--reception-area/1.jpg"
              alt="Hotel Lobelia reception"
            />
          </div>
        </div>
      </section>

      <ArrivalJourney />
      <Rooms />
      <Gallery />
      <Amenities />

      <section className="statement">
        <img
          src="https://www.hotellobeliaaddis.com/img/gallery/lobby--reception-area/7.jpg"
          alt="Hotel Lobelia lounge"
        />
        <div className="statement-shade" />
        <div className="statement-copy">
          <p>Welcome to Addis Ababa</p>
          <h2>
            Arrive close.
            <em>Feel far from the rush.</em>
          </h2>
        </div>
      </section>

      <Contact />
    </main>
  );
}
