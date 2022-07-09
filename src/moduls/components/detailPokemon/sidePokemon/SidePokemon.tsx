import { Grid, Paper } from "@mui/material";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { DetailPokemonContext } from "../../../../context/detailPokemon/DetailPokemonContext";
import { RootState } from "../../../../redux/store";
import { ResumePokemon } from "./ResumePokemon";
import { ImagePokemon } from "./ImagePokemon";

export const SidePokemon = () => {
  const { bgColor } = useSelector((state: RootState) => state.theme);
  const { image, name, base_experience, weight, height } =
    useContext(DetailPokemonContext);
  return (
    <Paper elevation={3} sx={{ backgroundColor: bgColor, padding: 2 }}>
      <Grid container>
        <ImagePokemon image={image} />
        <ResumePokemon
          bgColor={bgColor}
          name={name}
          base_experience={base_experience}
          weight={weight}
          height={height}
        />
      </Grid>
    </Paper>
  );
};
