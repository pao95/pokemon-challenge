import { Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { Card } from "../../../../components/card/Card";
import { DetailPokemonContext } from "../../../../context/detailPokemon/DetailPokemonContext";
import { Abilities } from "./Abilities";
import { Moves } from "./Moves";
import { Stats } from "./Stats";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import BedtimeOffIcon from "@mui/icons-material/BedtimeOff";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

export const DashboardPokemon = () => {
  const { bgColor } = useSelector((state: RootState) => state.theme);
  const { base_happiness, is_legendary, is_mythical } =
    useContext(DetailPokemonContext);
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={4}>
        <Card text="Felicidad" hideTextMobile={true}>
          <Typography sx={{ fontSize: 30, color: bgColor }}>
            {base_happiness}
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card text="Legendario" hideTextMobile={true}>
          {is_legendary ? (
            <SentimentVerySatisfiedIcon
              color={"primary"}
              sx={{ fontSize: 40, color: bgColor }}
            />
          ) : (
            <SentimentVeryDissatisfiedIcon
              sx={{ fontSize: 40, color: bgColor }}
            />
          )}
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card text="Místico" hideTextMobile={true}>
          {is_mythical ? (
            <BedtimeIcon sx={{ fontSize: 40, color: bgColor }} />
          ) : (
            <BedtimeOffIcon sx={{ fontSize: 40, color: bgColor }} />
          )}
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Abilities bgColor={bgColor} />
      </Grid>
      <Grid item xs={12}>
        <Moves bgColor={bgColor} />
      </Grid>
      <Grid item xs={12} md={12}>
        <Stats />
      </Grid>
    </Grid>
  );
};
