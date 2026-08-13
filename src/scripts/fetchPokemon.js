const CARD_COUNT = 18;
const POKEMON_COUNT = 151;

function getRandomIds(amount, maximum) {
  const ids = Array.from({ length: maximum }, (_, index) => index + 1);

  // Fisher–Yates shuffle
  for (let i = ids.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ids[i], ids[j]] = [ids[j], ids[i]];
  }

  return ids.slice(0, amount);
}

export default async function fetchPokemon() {
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

  return cards;
}
