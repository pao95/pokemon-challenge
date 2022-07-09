import { Grid } from "@mui/material";

interface ImagePokemonI {
  image: string;
}
export const ImagePokemon = ({ image }: ImagePokemonI) => {
  return (
    <Grid
      item
      xs={12}
      sx={{ display: "flex", height: "250px", justifyContent: "center" }}
    >
      <img
        src={image}
        height={"auto"}
        style={{ height: "auto", maxWidth: "100%", zIndex: "100" }}
      />
    </Grid>
  );
};
