import {
  Grid,
  LinearProgress,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { DetailPokemonContext } from "../../../../context/detailPokemon/DetailPokemonContext";
import AddTaskIcon from "@mui/icons-material/AddTask";

interface AbilitiesI {
  bgColor: string;
}
export const Abilities = ({ bgColor }: AbilitiesI) => {
  const { abilities } = useContext(DetailPokemonContext);

  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography textAlign={"center"} sx={{ padding: 2 }}>
        Habilidades
      </Typography>
      {abilities.map(({ ability, slot }, i) => (
        <Grid container key={ability.name + i}>
          <Grid item xs={6}>
            <ListItem>
              <ListItemIcon>
                <AddTaskIcon sx={{ color: bgColor }} />
              </ListItemIcon>
              <ListItemText primary={ability.name} />
            </ListItem>
          </Grid>
          <Grid item xs={12} md={6} sx={{ marginTop: 3 }}>
            <LinearProgress
              sx={{ color: bgColor }}
              color="inherit"
              variant="determinate"
              value={slot === 3 ? 100 : slot === 2 ? 66 : 33}
            />
          </Grid>
        </Grid>
      ))}
    </Paper>
  );
};
