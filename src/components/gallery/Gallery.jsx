import React from "react";
import { Link } from "react-router-dom";
import paintings from "../../data/paintings.json";
import "./gallery.css";

export default function Gallery() {
  return (
    <section className="gallery">
      {paintings.map((painting) => (
        <div key={painting.id} className="painting">
          <Link to={`/store/${painting.id}`}>
            <img src={painting.image[0]} alt={`Painting ${painting.title}`} />
            <h2>{painting.title}</h2>
          </Link>
        </div>
      ))}
    </section>
  );
}
