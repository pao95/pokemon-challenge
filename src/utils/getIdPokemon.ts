import { PokemonI } from "../context/listPokemons/ListPokemonContext";
export const getIdPokemon = (item: PokemonI) => {
  return item.url.split("pokemon")[1].replaceAll("/", "");
};
