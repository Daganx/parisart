import "./contact.css";

export default function Contact({ isOpen, toggleModal }) {
  if (!isOpen) return null; // Si la modale n'est pas ouverte, on ne rend rien

  return (
    <div className="modal-overlay" onClick={toggleModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={toggleModal}>
          x
        </button>
        <h2>Contact Links</h2>
        <ul className="modal__links">
          <li>
            Email: <a href="mailto:parisArtMail@parisart.com">parisArtMail@paris.com</a>
          </li>
          <li>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/parisArt"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a
              href="https://github.com/daganx"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
