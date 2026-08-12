import { useEffect, useState } from "react";
import fetchPokemon from "../../scripts/fetchPokemon";
import Card from "../Card/Card";
import shuffle from "../../scripts/shuffle";
import Scoreboard from "../Scoreboard/Scoreboard";

export default function Gameboard() {
  // TODO: Implement loading and failed to load functionality
  const [gameCards, setGameCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  const score = clickedCards.length;

  useEffect(() => {
    (async () => {
      const pokemonList = await fetchPokemon();
      setGameCards(pokemonList);
    })();
  }, []);

  const handleGameCardClick = (pokemonId) => {
    if (clickedCards.includes(pokemonId)) {
      setClickedCards([]);
      // TODO: Implement Duplicate Pokemon - Team Rocket Has Deceived You
    } else {
      const newClickedCards = [...clickedCards, pokemonId];
      const newScore = newClickedCards.length;

      setClickedCards(newClickedCards);
      setBestScore((previousBest) => Math.max(previousBest, newScore));

      if (newScore === gameCards.length) {
        // TODO: Add New Game And You Win Form
        alert("You Win");
      }
    }

    setGameCards((cards) => shuffle(cards));
  };

  return (
    <main className="gameboard">
      <Scoreboard score={score} bestScore={bestScore} />
      {gameCards.map((pokemon) => (
        <Card
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.image}
          handleCardClick={handleGameCardClick}
        ></Card>
      ))}
    </main>
  );
}
