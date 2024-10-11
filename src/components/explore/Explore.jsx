import exploreImg from "../../assets/images/store.webp";
import { Link } from "react-router-dom";
import "./explore.css";

export default function Explore() {
  return (
    <section className="explore">
      <div className="explore__description">
        <p>ART COLLECTION</p>
        <h2>Hi! It's Paris.Art</h2>
        <h3>
          Elevate your space with an eclectic collection of original paintings.
          Art collection ignites the imagination and brings joy. Each piece
          blends craftsmanship with creative expression, infusing personality
          into any space.
        </h3>
        <Link to="/store" className="explore__button">
          EXPLORE STORE
        </Link>
      </div>
      <div className="explore__picture">
        <img src={exploreImg} alt="" />
      </div>
    </section>
  );
}
