import { Grid } from "@mui/material";
import { Suspense } from "react";
import { Loading } from "../../components/loading/Loading";
import { Pokemons } from "../components/homePokemon.tsx/pokemons/Pokemons";
import { Search } from "../components/homePokemon.tsx/search/Search";

export const HomePokemon = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Search />
      </Grid>
      <Grid item xs={12}>
        <Suspense fallback={<Loading />}>
          <Pokemons />
        </Suspense>
      </Grid>
    </Grid>
  );
};
