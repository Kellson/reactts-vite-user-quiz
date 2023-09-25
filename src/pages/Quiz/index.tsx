import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useCallback, useEffect, useRef, useState } from "react";
import { IQuizConfig, fakeData } from "../../common/utils/fake-data";
import { ModalFullContext } from "../../contexts/ModalContext";
import {
  Container,
  CustomButton,
  Question,
  QuestionContainer,
  QuizContainer,
  QuizList,
  QuizListContainer,
} from "./styles";

const QuizPage = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<IQuizConfig>();
  const [initialValues, setInitialValues] = useState<any>();
  const quizElement = useRef<HTMLDivElement>(null);
  const { ShowModal } = ModalFullContext();

  const handleSetQuiz = useCallback(
    (value: IQuizConfig) => {
      setSelectedQuiz(value);
      quizElement.current?.scrollIntoView();
    },
    [quizElement]
  );

  useEffect(() => {
    if (selectedQuiz)
      setInitialValues(
        selectedQuiz.questions.reduce(
          (a, _, i) => ({ ...a, [`radio-buttons-group-${i}`]: "" }),
          {}
        )
      );
  }, [selectedQuiz]);

  return (
    <Container>
      <div>
        <h1>Questionários</h1>
        <div></div>
      </div>
      <div>
        <QuizList>
          <h3>Matemática</h3>
          <QuizListContainer>
            {fakeData.quiz.math.map((x) => (
              <div key={`math-quiz-${x.title}`}>
                <p>{x.title}</p>
                <p>
                  <DoubleArrowIcon /> Dificuldade: {x.level}
                </p>
                <p>
                  <DoubleArrowIcon /> Questões: {x.quantity}
                </p>
                <button type="button" onClick={() => handleSetQuiz(x)}>
                  Iniciar
                </button>
              </div>
            ))}
          </QuizListContainer>
        </QuizList>
        <QuizList>
          <h3>Português</h3>
          <QuizListContainer>
            {fakeData.quiz.portuguese.map((x) => (
              <div key={`portuguese-quiz-${x.title}`}>
                <p>{x.title}</p>
                <p>
                  <DoubleArrowIcon /> Dificuldade: {x.level}
                </p>
                <p>
                  <DoubleArrowIcon /> Questões: {x.quantity}
                </p>
                <button type="button" onClick={() => handleSetQuiz(x)}>
                  Iniciar
                </button>
              </div>
            ))}
          </QuizListContainer>
        </QuizList>
        <QuizList>
          <h3>Ciências</h3>
          <QuizListContainer>
            {fakeData.quiz.sciences.map((x) => (
              <div key={`sciences-quiz-${x.title}`}>
                <p>{x.title}</p>
                <p>
                  <DoubleArrowIcon /> Dificuldade: {x.level}
                </p>
                <p>
                  <DoubleArrowIcon /> Questões: {x.quantity}
                </p>
                <button type="button" onClick={() => handleSetQuiz(x)}>
                  Iniciar
                </button>
              </div>
            ))}
          </QuizListContainer>
        </QuizList>
      </div>
      {initialValues && selectedQuiz ? (
        <QuizContainer ref={quizElement}>
          <a href="#selectedQuiz"></a>
          <h3>{selectedQuiz.title}</h3>
          <Formik
            initialValues={initialValues}
            enableReinitialize={true}
            onSubmit={async (values: any) => {
              try {
                let ok = 0;
                let wrong = 0;
                let notAnswered = 0;
                Object.values(values).forEach((x: any) => {
                  if (!x) return notAnswered++;
                  if (
                    selectedQuiz.questions.find(
                      (y) => y.rightOption === x.split("-")[1]
                    )
                  )
                    ok++;
                  else wrong++;
                });

                ShowModal("quizResultModal", {
                  ok,
                  wrong,
                  notAnswered,
                });
              } catch (e) {
                console.log("Error: ", e);
              }
            }}
          >
            {({ values, handleChange }) => (
              <Form>
                {selectedQuiz.questions.map((x, i) => (
                  <QuestionContainer
                    key={selectedQuiz.title + "-question-" + i}
                  >
                    <Question>
                      {i + 1} - {x.question}
                    </Question>
                    <RadioGroup
                      onChange={handleChange}
                      value={
                        (values as any)[`radio-buttons-group-${i}`] as string
                      }
                      name={`radio-buttons-group-${i}`}
                    >
                      <FormControlLabel
                        value={x.id + "-" + "a"}
                        control={<Field as={Radio} />}
                        label={x.a}
                      />
                      <FormControlLabel
                        value={x.id + "-" + "b"}
                        control={<Field as={Radio} />}
                        label={x.b}
                      />
                      <FormControlLabel
                        value={x.id + "-" + "c"}
                        control={<Field as={Radio} />}
                        label={x.c}
                      />
                    </RadioGroup>
                  </QuestionContainer>
                ))}
                <CustomButton type="submit">Finalizar</CustomButton>
              </Form>
            )}
          </Formik>
        </QuizContainer>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default QuizPage;
