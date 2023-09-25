import { ModalFullContext } from "../../contexts/ModalContext";
import QuizResultModal from "./QuizResultModal";
import { CustomDialog } from "./styles";

const Modal = () => {
  const { GetModalInformations, HideModal } = ModalFullContext();
  return (
    <CustomDialog open={!!GetModalInformations().id} onClose={HideModal}>
      {GetModalInformations().id === "quizResultModal" && <QuizResultModal />}
    </CustomDialog>
  );
};

export default Modal;
