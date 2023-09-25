import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  > div:first-of-type {
    width: 100%;
    > h1 {
      font-size: 2.6rem;
      padding-bottom: 10px;
      box-sizing: border-box;
    }
    > div {
      height: 2px;
      width: 100%;
      background-image: linear-gradient(
        to right,
        var(--primary),
        var(--primary-light),
        var(--primary)
      );
    }
  }
  > div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 900px) {
    > div:nth-of-type(2) {
      display: grid;
      grid-template-columns: repeat(2, calc(50% - 15px));
      grid-gap: 30px;
      flex-direction: initial;
      margin-top: 30px;
      > div {
        margin-top: 0px;
      }
    }
  }
`;

export const QuizList = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  background-color: var(--primary);
  width: 100%;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 20px;
  > h3 {
    color: #fff;
  }
`;

export const QuizListContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  margin-top: 16px;
  > div {
    position: relative;
    background-color: #fff;
    border-radius: 20px;
    padding: 14px;
    box-sizing: border-box;
    min-width: 180px;
    overflow: hidden;
    > p {
      color: var(--primary);
      font-weight: bold;
      > svg {
        color: var(--secondary);
      }
    }
    > p:first-of-type {
      text-align: center;
      font-size: 1.6rem;
      margin-bottom: 10px;
    }
    > p:last-of-type {
      margin-bottom: 30px;
    }
    > button {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      background-color: var(--secondary);
      color: #fff;
      font-size: 1.6rem;
      font-weight: bold;
      padding: 8px;
      box-sizing: border-box;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  }
  > div:not(:first-of-type) {
    margin-left: 16px;
  }
`;

export const QuizContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  > a {
    display: none;
  }
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  &:last-of-type {
    margin-bottom: 36px;
  }
  span {
    font-size: 1.4rem;
  }
`;

export const Question = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 6px;
`;

export const CustomButton = styled.button`
  width: 100%;
  background-color: var(--secondary);
  padding: 14px 0px;
  font-size: 1.6rem;
  color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
`;
