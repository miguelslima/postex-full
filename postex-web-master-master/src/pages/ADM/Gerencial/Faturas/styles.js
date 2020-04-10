import styled from "styled-components";
import Modal from "styled-react-modal";
import { darken } from "polished";

export const Container = styled.div`
  display: flex;
  height: 85vh;
  background-color: #fff;
`;

export const AdminDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 41.5vw;
  margin-left: 8.5vw;
  border-right: 2px solid black;
`;

export const DetalhesDiv = styled.div`
  display: ${(props) => (props.visible ? "flex" : "none")};
  width: 50vw;
  flex-direction: column;
`;

export const PedidosHeader = styled.div`
  display: flex;
  width: 100%;
  background-color: #b0b0b1;
  justify-content: space-between;

  h4 {
    margin-left: 10px;
    color: white;
  }
  button {
    color: white;
    background-color: #d93f3f;
    width: 80px;
    border-radius: 4px;
  }
`;

export const NovoBtn = styled.button``;

export const InputDiv = styled.div`
  display: flex;
  margin-top: 5px;

  input {
    margin-left: 10px;
  }

  button {
    margin-left: 40px;
    border-radius: 4px;
  }
`;

export const TabelaHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-top: 40px;
  border-bottom: 1px solid #ddd;

  strong {
    margin-left: 10px;
  }
  span {
    margin-left: 10px;
  }
`;
export const Tabela = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  min-height: 30px;
  border-bottom: 1px solid #ddd;
  background-color: #fff;

  span {
    margin-left: 10px;
  }

  :last-child {
    border: none;
  }

  :hover {
    cursor: pointer;
    background-color: ${darken(0.3, "#fff")};
  }
`;

export const Attr = styled.div`
  display: flex;
  width: 200px;

  svg {
    margin-left: 90px;
  }
`;

export const ModalContainer = styled.div`
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 600px;
  border-radius: 4px;
  word-break: break-all;
  padding: 30px 30px 15px;

  button {
    width: 540px;
    align-self: center;
    padding: 0 15px;
    height: 36px;
    background: #d93f3f;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: 0.2s;
  }

  div {
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      border: 1px solid #999;
      border-radius: 4px;
      margin-bottom: 10px;
      width: 80%;
      padding: 5px;
    }

    div > div {
      display: flex;
      flex-direction: column;
      border: 1px solid #dddddd;
      border-radius: 4px;
      padding: 10px 10px 0 10px;
    }
  }
`;

export const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DetalheHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #999;
  width: 100%;

  h4 {
    margin-left: 10px;
  }
`;

export const DetalheContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 15px;

  h1 {
    font-weight: 200;
  }

  h2 {
    margin-left: 45%;
    font-weight: 200;
  }

  h4 {
    font-size: 20px;
  }

  span {
    font-size: 16px;
  }

  input {
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 10px;
    width: 90%;
    padding: 5px;
  }
`;

export const Option = styled.div`
  display: flex;
  padding: 10px 15px;
  margin-top: 20px;
  border: 1px solid #ddd;
  background-color: ${(props) =>
    props.selected ? darken(0.1, "#f5f5f5") : "#f5f5f5"};
  border-radius: 4px;
  transition: 0.5s;

  :hover {
    cursor: pointer;
    background-color: ${darken(0.1, "#f5f5f5")};
  }

  strong {
    font-size: 16px;
    color: #12216b;
  }
`;

export const ClientDivCollapse = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px 15px;

  div > input {
    width: 10%;
  }

  input {
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 10px;
    width: 80%;
    padding: 5px;
    justify-content: flex-end;
  }
`;

export const ObjectDivCollapse = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px 15px;

  & > div {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
  }

  div {
    div {
      width: 50%;
    }
  }

  div > input {
    & + span {
      background-color: #ebebe4;
      padding: 8.5px 12px 7px 12px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
    }
  }

  input {
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 80%;
    padding: 5px;
    justify-content: flex-end;
  }
  input[type="radio"] {
    margin: 0;
  }
`;

export const ItemList = styled.ul`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #ebebe4;
`;

export const ValueDivCollapse = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px 15px;

  & > div {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
  }

  div {
    div {
      width: 50%;
    }
  }

  input {
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 10px;
    width: 80%;
    padding: 5px;
    justify-content: flex-end;
  }

  textarea {
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 10px 15px;
    background-color: #ebebe4;
  }
`;

export const SignatureButton = styled.button`
  align-self: center;
  border-radius: 4px;
  width: 150px;
  height: 34px;
  color: white;

  background-color: #73cce6;
`;

export const ActionButton = styled.button`
  border-radius: 4px;
  padding: 6px 12px;
  height: 34px;
  color: white;

  :hover,
  :disabled {
    opacity: 0.5;
  }
`;
