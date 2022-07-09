import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/modal/modalSlice";
import { ReactNode } from "react";
import { RootState } from "../../redux/store";

interface ModalI {
  children: ReactNode;
  name?: string;
}

export const Modal = ({ children, name }: ModalI) => {
  const { isOpen, modalName } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal());
  };
  return (
    <div>
      <Dialog
        open={isOpen && modalName === name}
        onClose={handleClose}
        scroll={"paper"}
        maxWidth={"lg"}
      >
        <DialogContent dividers={true}>{children}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>cerrar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
