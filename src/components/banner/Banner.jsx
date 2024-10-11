import avatar from "../../assets/images/avatar.svg";
import "./banner.css";

export default function Banner() {
  return (
    <div className="banner">
      <img src={avatar} alt="Visage de Paris.Art" className="banner__face"></img>
    </div>
  );
}
