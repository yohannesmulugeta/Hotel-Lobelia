export default function BoleSection() {
  return (
    <section className="bole-section">
      <div className="bole-image">
        <img
          src="https://www.hotellobeliaaddis.com/img/gallery/exterior--surroundings/3.jpg"
          alt="Hotel Lobelia and its surroundings in Bole, Addis Ababa"
        />
        <div className="bole-image-shade" />

        <div className="bole-title">
          <p className="eyebrow">Step outside</p>
          <h2>
            Bole begins
            <em>at the door.</em>
          </h2>
        </div>
      </div>

      <div className="bole-panel">
        <div className="bole-panel-copy">
          <p className="eyebrow">In the neighbourhood</p>
          <p className="bole-lead">
            Stay close to the airport without feeling disconnected from Addis Ababa.
          </p>
          <p>
            Coffee, Ethiopian food, culture, shops and everyday conveniences are all nearby, making Hotel Lobelia an easy base for a short stop or a longer visit.
          </p>
        </div>

        <div className="bole-list">
          <div>
            <span>01</span>
            <div>
              <strong>Yod Abyssinia</strong>
              <small>Ethiopian food & culture</small>
            </div>
          </div>
          <div>
            <span>02</span>
            <div>
              <strong>Medhane Alem Cathedral</strong>
              <small>Landmark in central Bole</small>
            </div>
          </div>
          <div>
            <span>03</span>
            <div>
              <strong>Local coffee spots</strong>
              <small>Easy stops for coffee and conversation</small>
            </div>
          </div>
          <div>
            <span>04</span>
            <div>
              <strong>Bole International Airport</strong>
              <small>Only minutes from the hotel</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
