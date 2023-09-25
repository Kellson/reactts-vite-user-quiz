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
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    max-width: 360px;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
    margin: 10px 0px;
    border-radius: 10px;
    background-color: var(--primary);
    > h3 {
      color: #fff;
    }
    > div {
      display: flex;
      justify-content: space-between;
    }
  }
  > div:first-of-type {
    margin-top: 30px;
  }
  @media (min-width: 900px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    > div {
      margin: 36px 18px !important;
    }
  }
`;

export const SubjectResponse = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > p {
    color: #fff;
    font-size: 1.2rem;
    display: flex;
    align-items: center;

    > span {
      display: block;
      width: 6px;
      height: 6px;
      border-radius: 100%;
    }
  }
  > p:first-of-type {
    > span {
      background-color: #61ff41;
    }
  }
  > p:nth-of-type(2) {
    > span {
      background-color: #ff3838;
    }
  }
  > p:nth-of-type(3) {
    > span {
      background-color: #fff638;
    }
  }
`;
