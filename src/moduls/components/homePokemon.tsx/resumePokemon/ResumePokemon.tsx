import { Suspense } from "react";
import { Modal } from "../../../../components/modal/Modal";
import { Pokemon } from "../../detailPokemon/pokemon/Pokemon";
import { Loading } from "../../../../components/loading/Loading";

interface ResumePokemonI {
  idPokemon: number;
}
export const ResumePokemon = ({ idPokemon }: ResumePokemonI) => {
  return (
    <Suspense fallback={<Loading />}>
      <Modal name="modal-detail-pokemon">
        <Pokemon idPokemon={idPokemon} />
      </Modal>
    </Suspense>
  );
};
