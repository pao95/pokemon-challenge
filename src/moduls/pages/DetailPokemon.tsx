import { Suspense } from "react";
import { Loading } from "../../components/loading/Loading";
import { Pokemon } from "../components/detailPokemon/pokemon/Pokemon";

export const DetailPokemon = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Pokemon />
    </Suspense>
  );
};
