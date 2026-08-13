import "./GameResultDialog.css";

export default function GameResultDialog({ isGameOver, result, handlePlayAgain }) {
  if (!isGameOver) return null;

  return (
    <div className="game-result__backdrop">
      <section
        className="game-result"
        role="dialog"
        aria-modal="true"
        aria-labelledby="game-result-title"
      >
        <span className="game-result__badge" aria-hidden="true">
          {result === "You Win!" ? "★" : "×"}
        </span>
        <h2 id="game-result-title" className="game-result__title">
          {result}
        </h2>
        {result === "You Win!" ? (
          <p className="game-result__message">
            <span>Outstanding memory, Trainer!</span>
            <span>You caught them all.</span>
          </p>
        ) : (
          <p className="game-result__message">
            <span>That Pokémon was already chosen.</span>
            <span>Ready for another round?</span>
          </p>
        )}

        <button
          className="game-result__restart"
          type="button"
          onClick={handlePlayAgain}
        >
          Play Again
        </button>
      </section>
    </div>
  );
}
