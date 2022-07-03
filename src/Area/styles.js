import styled, { css } from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;

  header {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
`;
export const LeftArea = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 5px;
  padding: 5px;
  gap: 5px;

  height: 600px;
  width: 150px;
`;
export const MainArea = styled.div`
  display: flex;
  height: 400px;
  width: 600px;
  flex: 2;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
`;

export const BoxArea = styled.div`
  width: "220px";
  height: "112px";
  position: "relative";

  background: "red";
  left: "-100px";
  top: "40px";

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-end;
  align-items: stretch;
  gap: 1px;
`;

export const Box = styled.div`
  border: 1px dashed black;
  background: #a98c6d;
`;
