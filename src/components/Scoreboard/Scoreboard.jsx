import "./Scoreboard.css";

export default function Scoreboard({ score, bestScore }) {
  return (
    <section className="scoreboard" aria-label="Scoreboard">
      <div className="scoreboard__display">
        <span className="scoreboard__label">Current score</span>
        <strong className="scoreboard__value">{score}</strong>
      </div>
      <div className="scoreboard__divider" aria-hidden="true"></div>
      <div className="scoreboard__display">
        <span className="scoreboard__label">Trainer best</span>
        <strong className="scoreboard__value">{bestScore}</strong>
      </div>
    </section>
  );
}
