import { Grid } from "@mui/material";
import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { Card } from "../../../../components/card/Card";
import {
  ListPokemonContext,
  PokemonI,
} from "../../../../context/listPokemons/ListPokemonContext";
import { showModal } from "../../../../redux/modal/modalSlice";
import { ResumePokemon } from "../resumePokemon/ResumePokemon";

export const ListPokemons = () => {
  const { pokemons } = useContext(ListPokemonContext);
  const [idPokemonSelected, setIdPokemonSelected] = useState<number>(0);
  const dispatch = useDispatch();

  return (
    <Grid container spacing={2}>
      {pokemons.map(({ id, url, name }: PokemonI) => (
        <Grid item xs={12} sm={6} md={4} key={id}>
          <Card
            text={name}
            action={() => {
              setIdPokemonSelected(id);
              dispatch(showModal({ modalName: "modal-detail-pokemon" }));
            }}
          >
            <img
              src={url}
              style={{ height: "250px", maxWidth: "100%", zIndex: "100" }}
            />
          </Card>
        </Grid>
      ))}
      <ResumePokemon idPokemon={idPokemonSelected} />
    </Grid>
  );
};
