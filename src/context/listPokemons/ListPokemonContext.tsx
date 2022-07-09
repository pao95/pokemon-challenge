import { createContext } from "react";

export interface PokemonI {
  id: number;
  url: string;
  name: string;
}

export interface DetailPokemonI {
  handleChangePaginator: (a: React.ChangeEvent<unknown>, c: number) => void;
  page: number;
  countPages: number;
  pokemons: PokemonI[];
}
export const ListPokemonContext = createContext<DetailPokemonI>({
  handleChangePaginator: () => {},
  page: 1,
  countPages: 0,
  pokemons: [
    {
      id: 1,
      url: "",
      name: "",
    },
  ],
});
