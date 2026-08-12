export default function Scoreboard({ score, bestScore }) {
  return (
    <div>
      <p>Score: {score}</p>
      <p>Current Best: {bestScore}</p>
    </div>
  );
}