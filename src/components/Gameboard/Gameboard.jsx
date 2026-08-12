import { useEffect, useState } from "react";
import fetchPokemon from "../../scripts/fetchPokemon";
import Card from "../Card/Card";
import shuffle from "../../scripts/shuffle";
import Scoreboard from "../Scoreboard/Scoreboard";

export default function Gameboard() {
  const [gameCards, setGameCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    (async () => {
      const pokemonList = await fetchPokemon();
      setGameCards(pokemonList);
    })();
  }, []);

  const handleGameCardClick = (pokemonId) => {
    console.log(pokemonId);
    clickedCards.includes(pokemonId)
      ? console.log("Gameover")
      : setClickedCards([...clickedCards, pokemonId]);
    console.log(clickedCards.length);
    console.log(clickedCards);
    setGameCards(shuffle(gameCards));
  };

  return (
    <main className="gameboard">
      <Scoreboard />
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
