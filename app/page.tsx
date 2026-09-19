import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BookingBar from "@/components/BookingBar";
import ArrivalJourney from "@/components/ArrivalJourney";
import Rooms from "@/components/Rooms";
import Gallery from "@/components/Gallery";
import Amenities from "@/components/Amenities";
import BoleSection from "@/components/BoleSection";
import Contact from "@/components/Contact";
import PageMotion from "@/components/PageMotion";

export default function Home() {
  return (
    <main>
      <PageMotion />
      <Navigation />
      <Hero />
      <BookingBar />

      <section className="story section-pad" id="story">
        <div className="story-heading motion-up">
          <p className="eyebrow">A personal welcome</p>
          <h2>
            Small enough to know you.
            <em>Close enough to make travel easy.</em>
          </h2>
        </div>

        <div className="story-grid">
          <div className="story-portrait motion-image">
            <img
              src="https://www.hotellobeliaaddis.com/img/gallery/exterior--surroundings/4.jpg"
              alt="Hotel Lobelia exterior in Addis Ababa"
            />
            <span className="image-caption">Bole · Addis Ababa</span>
          </div>

          <div className="story-copy motion-up">
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

          <div className="story-detail motion-image">
            <img
              src="https://www.hotellobeliaaddis.com/img/gallery/lobby--reception-area/1.jpg"
              alt="Hotel Lobelia reception"
            />
            <span className="image-caption">A quieter welcome</span>
          </div>
        </div>
      </section>

      <ArrivalJourney />
      <Rooms />
      <Gallery />
      <Amenities />
      <BoleSection />

      <section className="statement">
        <img
          src="https://www.hotellobeliaaddis.com/img/gallery/lobby--reception-area/7.jpg"
          alt="Hotel Lobelia lounge"
        />
        <div className="statement-shade" />
        <div className="statement-copy motion-up">
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
