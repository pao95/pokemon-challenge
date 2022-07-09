import { Grid, Paper, Typography } from "@mui/material";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { Card } from "../../../../components/card/Card";
import { DetailPokemonContext } from "../../../../context/detailPokemon/DetailPokemonContext";
import { RootState } from "../../../../redux/store";

export const Stats = () => {
  const { stats } = useContext(DetailPokemonContext);
  const { bgColor } = useSelector((state: RootState) => state.theme);

  return (
    <Paper elevation={3} sx={{ padding: 1 }}>
      <Typography textAlign={"center"} sx={{ padding: 2 }}>
        Estadisticas
      </Typography>
      <Grid container justifyContent={"center"} spacing={1}>
        {stats.map(({ base_stat, stat }, i) => (
          <Grid item xs={6} md={3} key={stat.name + i}>
            <Card text={stat.name}>
              <Typography
                textAlign={"center"}
                variant="h3"
                sx={{ padding: 2, color: bgColor }}
              >
                {base_stat}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};
