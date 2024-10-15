import "./paintingsDetails.css";

export default function PaintingDetails({ painting }) {
  return (
    <div className="painting-details">
      <div className="painting-details__container">
        <h3>Details for {painting.title}</h3>
        <p>Type: {painting.type}</p>
        <p>Size: {painting.size}</p>
        <p>Created: {painting.created}</p>
        <p>
          Description:<br></br> {painting.description}
        </p>
      </div>

      <div className="painting__container">
        {painting.image.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Detail of ${painting.title}`}
            className="painting__image"
          />
        ))}
      </div>
    </div>
  );
}
