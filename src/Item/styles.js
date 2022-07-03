import styled, { css } from "styled-components";

export const Moviment = styled.div`
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  /* border: 1px solid; */
  cursor: pointer;
  background: black;
  div {
    display: flex;
    flex-direction: column;
    div {
      width: 30px;
      height: 30px;
    }
  }
`;

export const Container = styled.div`
  cursor: move;
  display: flex;
  flex-direction: column;
  border-radius: 0.5em;
  border: 1px dashed black;
  padding: 2px;
`;
