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

      <section className="manifesto section-pad">
        <p className="eyebrow">Hotel Lobelia, reimagined</p>
        <h2>
          Not another hotel template.
          <span> A scroll-led journey through the stay.</span>
        </h2>
        <div className="manifesto-copy">
          <p>
            The redesign uses movement as navigation: exterior, entrance, shared spaces and room. Photography carries the experience while copy stays short.
          </p>
          <p className="amharic">እንኳን ወደ ሆቴል ሎቤሊያ በደህና መጡ።</p>
        </div>
      </section>

      <ArrivalJourney />
      <Rooms />
      <Gallery />
      <Amenities />

      <section className="statement">
        <img
          src="https://www.hotellobeliaaddis.com/img/gallery/lobby--reception-area/7.jpg"
          alt="Hotel Lobelia interior"
        />
        <div>
          <p>Close to where your trip begins.</p>
          <h2>Quiet enough to feel somewhere else.</h2>
        </div>
      </section>

      <Contact />
    </main>
  );
}
