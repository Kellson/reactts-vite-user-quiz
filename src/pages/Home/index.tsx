import "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { fakeData } from "../../common/utils/fake-data";
import { CardList, Container, SubjectResponse } from "./styles";

const HomePage = () => {
  return (
    <Container>
      <div>
        <h1>Início</h1>
        <div></div>
      </div>
      <CardList>
        <div>
          <h3>Matemática</h3>
          <div>
            <SubjectResponse>
              <p>
                <span></span>Acertos: {fakeData.subjects.math.ok}
              </p>
              <p>
                <span></span>Erros: {fakeData.subjects.math.wrong}
              </p>
              <p>
                <span></span>Não respondidas:{" "}
                {fakeData.subjects.math.notAnswered}
              </p>
            </SubjectResponse>
            <div>
              <Pie
                width={120}
                height={120}
                data={{
                  datasets: [
                    {
                      data: [
                        fakeData.subjects.math.ok,
                        fakeData.subjects.math.wrong,
                        fakeData.subjects.math.notAnswered,
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
        </div>
        <div>
          <h3>Português</h3>
          <div>
            <SubjectResponse>
              <p>
                <span></span>Acertos: {fakeData.subjects.portuguese.ok}
              </p>
              <p>
                <span></span>Erros: {fakeData.subjects.portuguese.wrong}
              </p>
              <p>
                <span></span>Não respondidas:{" "}
                {fakeData.subjects.portuguese.notAnswered}
              </p>
            </SubjectResponse>
            <div>
              <Pie
                width={120}
                height={120}
                data={{
                  datasets: [
                    {
                      data: [
                        fakeData.subjects.portuguese.ok,
                        fakeData.subjects.portuguese.wrong,
                        fakeData.subjects.portuguese.notAnswered,
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
        </div>
        <div>
          <h3>Ciências</h3>
          <div>
            <SubjectResponse>
              <p>
                <span></span>Acertos: {fakeData.subjects.sciences.ok}
              </p>
              <p>
                <span></span>Erros: {fakeData.subjects.sciences.wrong}
              </p>
              <p>
                <span></span>Não respondidas:{" "}
                {fakeData.subjects.sciences.notAnswered}
              </p>
            </SubjectResponse>
            <div>
              <Pie
                width={120}
                height={120}
                data={{
                  datasets: [
                    {
                      data: [
                        fakeData.subjects.sciences.ok,
                        fakeData.subjects.sciences.wrong,
                        fakeData.subjects.sciences.notAnswered,
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
        </div>
      </CardList>
    </Container>
  );
};

export default HomePage;
