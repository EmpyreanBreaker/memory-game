import { useEffect, useState } from "react";
import fetchPokemon from "../../scripts/fetchPokemon";
import Card from "../Card/Card";
import shuffle from "../../scripts/shuffle";
import Scoreboard from "../Scoreboard/Scoreboard";
import Spinner from "../Spinner/Spinner";
import GameResultDialog from "../GameResultDialog/GameResultDialog";
import "./Gameboard.css";

export default function Gameboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [gameCards, setGameCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);

  const [bestScore, setBestScore] = useState(0);
  const score = clickedCards.length;

  const [isGameOver, setIsGameOver] = useState(false);
  const [result, setResult] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(null);
        const pokemonList = await fetchPokemon();
        setGameCards(pokemonList);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const handleGameCardClick = (pokemonId) => {
    if (clickedCards.includes(pokemonId)) {
      setClickedCards([]);
      setIsGameOver(true);
      setResult("You Lose!");
    } else {
      const newClickedCards = [...clickedCards, pokemonId];
      const newScore = newClickedCards.length;

      setClickedCards(newClickedCards);
      setBestScore((previousBest) => Math.max(previousBest, newScore));

      if (newScore === gameCards.length) {
        setIsGameOver(true);
        setResult("You Win!");
      }
    }

    setGameCards((cards) => shuffle(cards));
  };

  const handlePlayAgain = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const pokemonList = await fetchPokemon();

      setGameCards(pokemonList);
      setClickedCards([]);
      setIsGameOver(false);
      setResult("");
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <main className="gameboard">
        <Spinner />
        <p className="gameboard__status">Loading Pokémon...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="gameboard">
        <p className="gameboard__status gameboard__status--error">
          Could not load Pokémon. Please try again.
        </p>
      </main>
    );
  }

  return (
    <main className="gameboard">
      <Scoreboard score={score} bestScore={bestScore} />
      <section className="gameboard__cards" aria-label="Pokémon cards">
        {gameCards.map((pokemon) => (
          <Card
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            handleCardClick={handleGameCardClick}
            disabled={isGameOver}
          />
        ))}
      </section>
      <GameResultDialog
        isGameOver={isGameOver}
        result={result}
        handlePlayAgain={handlePlayAgain}
      />
    </main>
  );
}
