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
