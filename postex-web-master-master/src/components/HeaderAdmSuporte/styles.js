import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 43px;
  background-color: #0f1b58;
  margin-top: 44px;
  align-items: flex-end;
  justify-content: space-around;

  div {
    display: flex;
    flex-direction: row;
  }

  h1 {
    font-size: 22px;
    color: white;
    margin-left: 10%;
  }

  img {
    border-radius: 50%;
  }
`;
