import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Attr = styled.div`
  display: flex;
  width: 198px;

  button {
    margin-left: 90px;
  }
`;

export const Address = styled.div`
  display: ${props => (props.visible ? "flex" : "none")};
  flex-direction: row;
  position: relative;
  margin-left: -600px;
  height: 300px;
  width: 798px;
  background-color: #ebebe4;
  border: 1px solid #333;
  border-radius: 4px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;

  strong {
    margin: 10px 0 0 30px;
  }

  p {
    margin-left: 30px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 4px;
    margin-left: 80px;
    margin-top: 50px;
    border: 1px solid black;
    width: 200px;
    height: 32px;
  }
`;
