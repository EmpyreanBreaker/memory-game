import "./Card.css";

export default function Card({ id, name, image, handleCardClick, disabled }) {
  const buttonStyle = {
    "--card-image": `url("${image}")`,
  };

  return (
    <button
      id={id}
      className="card"
      style={buttonStyle}
      onClick={() => handleCardClick(id)}
      disabled={disabled}
      aria-label={`Choose ${name}`}
    >
      <span className="card__number">#{String(id).padStart(3, "0")}</span>
      <span className="card__artwork" aria-hidden="true"></span>
      <span className="card__name">{name}</span>
    </button>
  );
}
