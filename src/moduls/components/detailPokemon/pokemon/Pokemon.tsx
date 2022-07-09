import { Grid } from "@mui/material";
import { DetailPokemonProvider } from "../../../../context/detailPokemon/DetailPokemonProvider";
import { DashboardPokemon } from "../dashboardPokemon/DashboardPokemon";
import { SidePokemon } from "../sidePokemon/SidePokemon";

interface PokemonI {
  idPokemon?: number;
}
export const Pokemon = ({ idPokemon }: PokemonI) => {
  return (
    <DetailPokemonProvider idPokemon={idPokemon}>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12} md={3}>
          <SidePokemon />
        </Grid>
        <Grid item xs={12} md={9}>
          <DashboardPokemon />
        </Grid>
      </Grid>
    </DetailPokemonProvider>
  );
};
