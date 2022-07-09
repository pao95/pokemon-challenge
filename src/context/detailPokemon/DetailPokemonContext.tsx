import { createContext } from "react";

export interface AbilityPokemonI {
  name: string;
}
export interface AbilitiesPokemonI {
  ability: AbilityPokemonI;
  slot: number;
}
export interface MovePokemonI {
  name: string;
}
export interface MovesPokemonI {
  move: MovePokemonI;
}
export interface StatPokemonI {
  name: string;
}
export interface StatsPokemonI {
  base_stat: string;
  stat: StatPokemonI;
}

export interface DetailPokemonI {
  image: string;
  name: string;
  base_experience: string;
  weight: string;
  height: string;
  abilities: AbilitiesPokemonI[];
  moves: MovesPokemonI[];
  stats: StatsPokemonI[];
  base_happiness: string;
  is_legendary: boolean;
  is_mythical: boolean;
}

export const DetailPokemonContext = createContext<DetailPokemonI>({
  image: "",
  name: "",
  base_experience: "",
  weight: "",
  height: "string",
  base_happiness: "",
  is_legendary: false,
  is_mythical: false,
  abilities: [{ ability: { name: "" }, slot: 0 }],
  moves: [
    {
      move: {
        name: "",
      },
    },
  ],
  stats: [
    {
      base_stat: "",
      stat: {
        name: "",
      },
    },
  ],
});
