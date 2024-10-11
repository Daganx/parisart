export default function PaintingDetails({ painting }) {
  return (
    <div className="painting-details">
      <h3>Details for {painting.title}</h3>
      <p>Type: {painting.type}</p>
      <p>Size: {painting.size}</p>
      <p>Created: {painting.created}</p>
      <p>Description: {painting.description}</p>

      <div className="images">
        {painting.image.map((image, index) => (
          <img key={index} src={image} alt={`Detail of ${painting.title}`} />
        ))}
      </div>
    </div>
  );
}
