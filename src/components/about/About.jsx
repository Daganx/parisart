import exploreImg from "../../assets/images/paintings/Green/explore1.webp";
import "./about.css";

export default function About() {
  return (
    <section className="about">
      <div className="about__picture">
        <img src={exploreImg} alt="" />
      </div>
      <div className="about__description">
        <p>ABOUT</p>
        <h2>Hi! It's Paris.Art</h2>
        <h3>
          An artistic graphic designer specializing in visual identities,
          packaging design, and illustration, with a focus on sustainability,
          wellness and cultural projects.
        </h3>
        <h4>Let's get in touch!</h4>
      </div>
    </section>
  );
}
