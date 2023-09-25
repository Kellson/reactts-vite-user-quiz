import styled from "styled-components";

export const DialogBox = styled.div`
  padding: 10px;
`;

export const ContentBody = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 20px;
  color: #022d54;
  font-size: 20px;
`;

export const ConfirmButton = styled.button`
  width: 100%;
  height: 41px;
  margin-top: 20px;
  border-radius: 11px;
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
  letter-spacing: 0px;
  background: #20b5bb;
  border-radius: 4px;
  color: #fff;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  > div:first-of-type {
    display: flex;
    align-items: center;
    > div:first-of-type {
      display: flex;
      flex-direction: column;
      margin-right: 15px;
      > p {
        display: flex;
        align-items: center;
        > span {
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 100%;
          margin-right: 6px;
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
    }
    > div:nth-of-type(2) {
      margin-left: 15px;
    }
  }
`;
