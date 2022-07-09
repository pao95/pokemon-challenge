import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import ScaleIcon from "@mui/icons-material/Scale";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import StraightenIcon from "@mui/icons-material/Straighten";

interface ResumePokemonI {
  bgColor: string;
  name: string;
  base_experience: string;
  weight: string;
  height: string;
}
export const ResumePokemon = ({
  bgColor,
  name,
  base_experience,
  weight,
  height,
}: ResumePokemonI) => {
  return (
    <Grid item xs={12}>
      <Paper elevation={3} sx={{ padding: 2, margin: "-25px" }}>
        <Typography textAlign={"center"} variant="h4">
          {name}
        </Typography>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <HistoryEduIcon sx={{ color: bgColor }} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Experiencia" secondary={base_experience} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ScaleIcon sx={{ color: bgColor }} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Peso" secondary={weight} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <StraightenIcon sx={{ color: bgColor }} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Altura" secondary={height} />
          </ListItem>
        </List>
      </Paper>
    </Grid>
  );
};
