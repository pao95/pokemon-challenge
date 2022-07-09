import { Grid } from "@mui/material";
import { ListPokemonProvider } from "../../../../context/listPokemons/ListPokemonProvider";
import { ListPokemons } from "./ListPokemons";
import { PaginatorPokemon } from "./PaginatorPokemon";

export const Pokemons = () => {
  return (
    <ListPokemonProvider>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ListPokemons />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent={"center"}>
          <PaginatorPokemon />
        </Grid>
      </Grid>
    </ListPokemonProvider>
  );
};
