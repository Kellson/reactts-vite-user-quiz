import { DialogActions } from "@mui/material";
import { Pie } from "react-chartjs-2";
import { ModalFullContext } from "../../../contexts/ModalContext";
import { ConfirmButton, Container, ContentBody, DialogBox } from "./styles";

const QuizResultModal = () => {
  const { GetModalInformations, HideModal } = ModalFullContext();

  const handleClose = () => {
    HideModal();
  };

  return (
    <DialogBox>
      <ContentBody style={{ padding: "0px !important" }}>
        Resultados
      </ContentBody>
      <DialogActions>
        <Container>
          <div>
            <div>
              <p>
                <span></span>Acertos: {GetModalInformations().informations.ok}
              </p>
              <p>
                <span></span>Erros: {GetModalInformations().informations.wrong}
              </p>
              <p>
                <span></span>Não respondidas:{" "}
                {GetModalInformations().informations.notAnswered}
              </p>
            </div>
            <div>
              <Pie
                width={100}
                height={100}
                data={{
                  datasets: [
                    {
                      data: [
                        GetModalInformations().informations.ok,
                        GetModalInformations().informations.wrong,
                        GetModalInformations().informations.notAnswered,
                      ],
                      backgroundColor: ["#61ff41", "#ff3838", "#fff638"],
                      borderWidth: 1,
                      borderColor: ["#fff"],
                    },
                  ],
                }}
              />
            </div>
          </div>
          <ConfirmButton onClick={handleClose} type="submit">
            Confirmar
          </ConfirmButton>
        </Container>
      </DialogActions>
    </DialogBox>
  );
};

export default QuizResultModal;
