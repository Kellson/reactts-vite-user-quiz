interface IQuestionResponse {
  ok: number;
  wrong: number;
  notAnswered: number;
}

export interface IQuestion {
  id: number;
  question: string;
  a: string;
  b: string;
  c: string;
  rightOption: "a" | "b" | "c";
}
export interface IQuizConfig {
  title: string;
  level: string;
  quantity: number;
  subjectKey: string;
  questions: IQuestion[];
}

interface IRankingUser {
  id: number;
  name: string;
  ok: number;
}

interface IFakeData {
  ranking: IRankingUser[];
  quiz: {
    math: IQuizConfig[];
    portuguese: IQuizConfig[];
    sciences: IQuizConfig[];
  };
  subjects: {
    math: IQuestionResponse;
    portuguese: IQuestionResponse;
    sciences: IQuestionResponse;
  };
}

export const fakeData: IFakeData = {
  ranking: [
    {
      id: 1,
      name: "Nome 1",
      ok: 50,
    },
    {
      id: 2,
      name: "Nome 2",
      ok: 49,
    },
    {
      id: 3,
      name: "Nome 3",
      ok: 51,
    },
    {
      id: 4,
      name: "Nome 4",
      ok: 101,
    },
    {
      id: 5,
      name: "Nome 5",
      ok: 100,
    },
    {
      id: 6,
      name: "Nome 6",
      ok: 27,
    },
    {
      id: 7,
      name: "Nome 7",
      ok: 88,
    },
    {
      id: 8,
      name: "Nome 8",
      ok: 30,
    },
    {
      id: 9,
      name: "Nome 9",
      ok: 63,
    },
    {
      id: 10,
      name: "Nome 10",
      ok: 135,
    },
    {
      id: 11,
      name: "Nome 11",
      ok: 56,
    },
    {
      id: 12,
      name: "Nome 12",
      ok: 29,
    },
    {
      id: 13,
      name: "Nome 13",
      ok: 99,
    },
    {
      id: 14,
      name: "Nome 14",
      ok: 91,
    },
    {
      id: 15,
      name: "Nome 15",
      ok: 75,
    },
  ],
  quiz: {
    math: [
      {
        title: "Questionário 1 - Matemática",
        level: "Fácil",
        quantity: 2,
        subjectKey: "math",
        questions: [
          {
            id: 1,
            question: "Pergunta 1",
            a: "Resposta A",
            b: "Resposta B",
            c: "Resposta C",
            rightOption: "a",
          },
          {
            id: 2,
            question: "Pergunta 2",
            a: "Resposta A",
            b: "Resposta B",
            c: "Resposta C",
            rightOption: "a",
          },
        ],
      },
      {
        title: "Questionário 2 - Matemática",
        level: "Fácil",
        quantity: 3,
        subjectKey: "math",
        questions: [
          {
            id: 3,
            question: "Pergunta 1",
            a: "Resposta A",
            b: "Resposta B",
            c: "Resposta C",
            rightOption: "a",
          },
          {
            id: 4,
            question: "Pergunta 2",
            a: "Resposta A",
            b: "Resposta B",
            c: "Resposta C",
            rightOption: "a",
          },
          {
            id: 5,
            question: "Pergunta 3",
            a: "Resposta A",
            b: "Resposta B",
            c: "Resposta C",
            rightOption: "a",
          },
        ],
      },
      {
        title: "Questionário 3 - Matemática",
        level: "Difícil",
        quantity: 2,
        subjectKey: "math",
        questions: [
          {
            id: 6,
            question: "Pergunta 1",
            a: "Resposta A",
            b: "Resposta B",
            c: "Resposta C",
            rightOption: "a",
          },
          {
            id: 7,
            question: "Pergunta 2",
            a: "Resposta A",
            b: "Resposta B",
            c: "Resposta C",
            rightOption: "a",
          },
        ],
      },
    ],
    portuguese: [
      {
        title: "Questionário 1 - Português",
        level: "Médio",
        quantity: 3,
        subjectKey: "portuguese",
        questions: [
          {
            id: 8,
            question: "Pergunta 1",
            a: "Resposta A",
            b: "Resposta B",
            c: "Resposta C",
            rightOption: "a",
          },
          {
            id: 9,
            question: "Pergunta 2",
            a: "Resposta A",
            b: "Resposta B",
            c: "Resposta C",
            rightOption: "a",
          },
          {
            id: 10,
            question: "Pergunta 3",
            a: "Resposta A",
            b: "Resposta B",
            c: "Resposta C",
            rightOption: "a",
          },
        ],
      },
      {
        title: "Questionário 2 - Português",
        level: "Médio",
        quantity: 4,
        subjectKey: "portuguese",
        questions: [
          {
            id: 11,
            question: "Pergunta 1",
            a: "Resposta A",
            b: "Resposta B",
            c: "Resposta C",
            rightOption: "a",
          },
          {
            id: 12,
            question: "Pergunta 2",
            a: "Resposta A",
            b: "Resposta B",
            c: "Resposta C",
            rightOption: "a",
          },
          {
            id: 13,
            question: "Pergunta 3",
            a: "Resposta A",
            b: "Resposta B",
            c: "Resposta C",
            rightOption: "a",
          },
          {
            id: 14,
            question: "Pergunta 4",
            a: "Resposta A",
            b: "Resposta B",
            c: "Resposta C",
            rightOption: "a",
          },
        ],
      },
    ],
    sciences: [
      {
        title: "Questionário 1 - Ciências",
        level: "Fácil",
        quantity: 2,
        subjectKey: "sciences",
        questions: [
          {
            id: 15,
            question: "Pergunta 1",
            a: "Resposta A",
            b: "Resposta B",
            c: "Resposta C",
            rightOption: "a",
          },
          {
            id: 16,
            question: "Pergunta 2",
            a: "Resposta A",
            b: "Resposta B",
            c: "Resposta C",
            rightOption: "a",
          },
        ],
      },
      {
        title: "Questionário 2 - Ciências",
        level: "Fácil",
        quantity: 2,
        subjectKey: "sciences",
        questions: [
          {
            id: 17,
            question: "Pergunta 1",
            a: "Resposta A",
            b: "Resposta B",
            c: "Resposta C",
            rightOption: "a",
          },
          {
            id: 18,
            question: "Pergunta 2",
            a: "Resposta A",
            b: "Resposta B",
            c: "Resposta C",
            rightOption: "a",
          },
        ],
      },
    ],
  },
  subjects: {
    math: {
      ok: 15,
      wrong: 4,
      notAnswered: 2,
    },
    portuguese: {
      ok: 20,
      wrong: 5,
      notAnswered: 3,
    },
    sciences: {
      ok: 12,
      wrong: 5,
      notAnswered: 5,
    },
  },
};
