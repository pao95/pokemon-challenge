import { useEffect, ReactNode } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { ErrorRedirect } from "../../components/error/ErrorRedirect";
import { useFetchSWR } from "../../hooks/useFetch";
import { setColorBg } from "../../redux/theme/themeSlice";
import { DetailPokemonContext } from "./DetailPokemonContext";

interface DetailPokemonProviderI {
  children: ReactNode;
  idPokemon?: number;
}

export const DetailPokemonProvider = ({
  children,
  idPokemon,
}: DetailPokemonProviderI) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [detail] = useFetchSWR(`pokemon/${idPokemon ? idPokemon : id}`, {});
  const [pokemonSpecies] = useFetchSWR(
    `pokemon-species/${idPokemon ? idPokemon : id}`,
    {}
  );
  /*TODO: Manejar mejor los errores */
  if (detail?.ok === false || pokemonSpecies?.ok === false)
    return <ErrorRedirect />;

  useEffect(() => {
    dispatch(setColorBg({ color: pokemonSpecies.color?.name }));
  }, []);

  const { front_default } = detail.sprites.other.dream_world;
  const { name, base_experience, weight, height, abilities, moves, stats } =
    detail;
  const { base_happiness, is_legendary, is_mythical } = pokemonSpecies;

  return (
    <DetailPokemonContext.Provider
      value={{
        image: front_default,
        name,
        base_experience,
        weight,
        height,
        abilities,
        moves,
        stats,
        base_happiness,
        is_legendary,
        is_mythical,
      }}
    >
      {children}
    </DetailPokemonContext.Provider>
  );
};
