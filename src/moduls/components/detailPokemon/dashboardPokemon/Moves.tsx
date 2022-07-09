import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { DetailPokemonContext } from "../../../../context/detailPokemon/DetailPokemonContext";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
interface MovesI {
  bgColor: string;
}
export const Moves = ({ bgColor }: MovesI) => {
  const { moves } = useContext(DetailPokemonContext);
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Movimientos</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={1}>
          {moves.map(({ move }, i) => (
            <Grid item key={move.name + i}>
              <Chip
                label={move.name}
                sx={{ color: bgColor }}
                variant="outlined"
              />
            </Grid>
          ))}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};
