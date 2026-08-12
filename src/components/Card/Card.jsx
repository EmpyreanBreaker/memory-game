export default function Card({ id, name, image, handleCardClick }) {
  const buttonStyle = {
    backgroundImage: `url("${image}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minWidth: "10rem",
    minHeight: "10rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <button
      id={id}
      className="card"
      style={buttonStyle}
      onClick={() => handleCardClick(id)}
    >
      <p className="card__name">{name}</p>
    </button>
  );
}
