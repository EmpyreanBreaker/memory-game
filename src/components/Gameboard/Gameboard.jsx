import { useEffect } from "react";
import getRandomIds from "../../scripts/fetchPokemon";

const CARD_COUNT = 16;
const POKEMON_COUNT = 151;

export default function Gameboard() {
  useEffect(() => {
    async function loadPokemon() {
      try {
        const ids = getRandomIds(CARD_COUNT, POKEMON_COUNT);

        const responses = await Promise.all(
          ids.map((id) => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)),
        );

        if (responses.some((response) => !response.ok)) {
          throw new Error("Failed to fetch Pokemon");
        }

        const results = await Promise.all(
          responses.map((response) => response.json()),
        );

        const cards = results.map((pokemon) => ({
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.sprites.other["official-artwork"].front_default,
        }));

        // const cards = results.map((pokemon) => ({
        //   id: pokemon.id,
        //   name: pokemon.name,
        //   image: pokemon.sprites.other["official-artwork"].front_default,
        // }));

        console.log(cards);
      } catch (error) {
        console.error("Failed to fetch Pokemon:", error);
      }
    }

    loadPokemon();
  }, []);

  return <div></div>;
}
