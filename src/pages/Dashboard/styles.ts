import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: 100vh;
  background-color: #fff;
  position: relative;
  @media (min-width: 900px) {
    flex-direction: row;
    background-color: var(--primary);
  }
`;

export const LeftContainer = styled.div`
  display: none;
  z-index: 2;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100px;
  padding: 10px;
  position: fixed;
  height: 100vh;
  box-sizing: border-box;
  @media (min-width: 900px) {
    width: initial;
    display: flex;
    background-color: var(--primary);
    > div:first-of-type {
      > img {
        width: 60px;
      }
    }
    > div:nth-of-type(2) {
      max-width: 380px;
      display: flex;
      flex-direction: column;
      position: relative;
      height: 360px;
      width: 100%;

      > button {
        transition: 0.3s;
        position: absolute;
        width: 56px;
        height: 56px;
        border-radius: 16px;
        > svg {
          width: 30px;
          height: 30px;
        }
      }

      > button:nth-of-type(1) {
        top: 0px;
      }

      > button:nth-of-type(2) {
        top: 120px;
      }

      > button:nth-of-type(3) {
        top: 240px;
      }
    }
  }
`;

export const BodyContent = styled.div`
  display: flex;
  overflow: auto;
  background-color: #fff;
  width: 100%;
  padding: 40px;
  box-sizing: border-box;
  flex: 1;
  padding-bottom: 100px;
  box-sizing: border-box;
  @media (min-width: 900px) {
    padding-bottom: 40px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    margin-left: 80px;
  }
`;

interface INavbarButton {
  activePath: boolean;
}

export const NavbarButton = styled.button<INavbarButton>`
  background-color: ${(c) => (c.activePath ? "#fff" : "rgba(0, 0, 0, 0)")};
  box-shadow: ${(c) =>
    c.activePath ? "0 0 10px rgba(0, 0, 0, 0.15)" : "initial"};
  top: ${(c) => (c.activePath ? "-36px" : "0px")};
  > svg {
    color: ${(c) =>
      c.activePath ? "var(--secondary)" : "rgba(255, 255, 255, .2)"};
  }

  @media (min-width: 900px) {
    left: ${(c) => (c.activePath ? "36px" : "0px")};
  }
`;

export const BottomContainer = styled.div`
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  width: 100%;
  height: 80px;
  padding: 20px;
  box-sizing: border-box;
  background-color: var(--primary);
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;

  > div {
    max-width: 380px;
    display: flex;
    position: relative;
    width: 100%;
    height: 48px;

    > button {
      transition: 0.3s;
      position: absolute;
      width: 48px;
      height: 48px;
      border-radius: 16px;
      > svg {
        width: 30px;
        height: 30px;
      }
    }

    > button:nth-of-type(1) {
      left: 0px;
    }

    > button:nth-of-type(2) {
      left: calc(50% - 24px);
    }

    > button:nth-of-type(3) {
      left: calc(100% - 48px);
    }
  }

  @media (min-width: 900px) {
    display: none;
  }
`;
