import { Pagination } from "@mui/material";
import { useContext } from "react";
import { ListPokemonContext } from "../../../../context/listPokemons/ListPokemonContext";

export const PaginatorPokemon = () => {
  const { countPages, page, handleChangePaginator } =
    useContext(ListPokemonContext);
  return (
    <Pagination
      count={countPages}
      page={page}
      onChange={handleChangePaginator}
      siblingCount={1}
      size="small"
      color="primary"
    />
  );
};
