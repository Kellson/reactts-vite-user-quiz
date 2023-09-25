interface IQuestionResponse {
  ok: number;
  wrong: number;
  notAnswered: number;
}

interface IFakeData {
  subjects: {
    math: IQuestionResponse;
    portuguese: IQuestionResponse;
    sciences: IQuestionResponse;
  };
}

export const fakeData: IFakeData = {
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
