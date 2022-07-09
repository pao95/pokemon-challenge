import { useFetchSWR } from "../../hooks/useFetch";
import { ListPokemonContext, PokemonI } from "./ListPokemonContext";
import { usePaginator } from "../../hooks/usePaginator";
import { useEffect, ReactNode } from "react";
import { getIdPokemon } from "../../utils/getIdPokemon";

interface ListPokemonProviderI {
  children: ReactNode;
}
export const ListPokemonProvider = ({ children }: ListPokemonProviderI) => {
  const {
    setCountItem,
    handleChangePaginator,
    page,
    limit,
    offset,
    countPages,
  } = usePaginator(20);

  const [pokemons] = useFetchSWR(
    `pokemon/?limit=${limit}&offset=${offset}`,
    {}
  );
  const { results, count } = pokemons;

  useEffect(() => {
    setCountItem(count);
  }, []);

  const pokemonsCustom = results.map((item: PokemonI) => ({
    ...item,
    id: getIdPokemon(item),
    url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${getIdPokemon(
      item
    )}.svg`,
  }));

  return (
    <ListPokemonContext.Provider
      value={{
        handleChangePaginator,
        page,
        countPages,
        pokemons: pokemonsCustom,
      }}
    >
      {children}
    </ListPokemonContext.Provider>
  );
};
