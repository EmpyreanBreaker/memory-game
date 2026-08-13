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
        <h2 id="game-result-title" className="game-result__title">
          {result}
        </h2>

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
