import axios from "axios";
import React, { useState, useEffect } from "react";

import InputMask from "react-input-mask";
import ScrollArea from "react-scrollbar";
import { Collapse } from "react-collapse";
import { MdSearch, MdCancel } from "react-icons/md";

import HeaderAdmSuporte from "../../../../components/HeaderAdmSuporte";

import {
  Container,
  AdminDiv,
  DetalhesDiv,
  NovoBtn,
  PedidosHeader,
  InputDiv,
  TabelaHeader,
  Tabela,
  Item,
  Attr,
  ModalContainer,
  StyledModal,
  DetalheHeader,
  DetalheContent,
  Option,
  SignatureButton,
  ClientDivCollapse,
  ObjectDivCollapse,
  ItemList,
  ValueDivCollapse,
  ActionButton,
} from "./styles";

export default function Franquias() {
  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const [franquias, setFranquias] = useState([]);

  const [object, setObject] = useState({ id: -1 });

  useEffect(() => {
    async function loadFranquias() {
      const response = await axios
        .create()
        .get("http://localhost:3333/franquias");

      setFranquias(response.data);
    }
    loadFranquias();
  }, []);

  return (
    <>
      <HeaderAdmSuporte />
      <Container>
        <AdminDiv>
          <PedidosHeader>
            <h4>Franquias</h4>
            <NovoBtn
              onClick={() => {
                setIsOpen(true);
              }}
            >
              Novo
            </NovoBtn>
          </PedidosHeader>
          <InputDiv>
            <input
              id="busca"
              name="busca"
              onChange={(e) =>
                (document.getElementById("busca").value = e.target.value)
              }
              type="text"
              placeholder="Pesquisar"
            />
            {visible && (
              <button
                style={{ marginLeft: 10 }}
                onClick={() => {
                  setFilter("");
                  document.getElementById("busca").value = "";
                  setVisible(!visible);
                }}
              >
                <MdCancel size={20} color="#0f1b58" />
              </button>
            )}
            <button
              onClick={() => {
                setFilter(document.getElementById("busca").value);
                setVisible(true);
              }}
            >
              <MdSearch size={20} color="#0f1b58" />
            </button>
          </InputDiv>

          <TabelaHeader>
            <strong>Sigla</strong>
            <strong>Localidade</strong>
            <strong>Telefone</strong>
            <strong>Situação</strong>
            <strong>Aprov.(%)</strong>
          </TabelaHeader>

          <ScrollArea smoothScrolling={true}>
            <Tabela>
              {franquias
                .filter(
                  (franquia) =>
                    filter === "" ||
                    franquia.id.toString().includes(filter.toLowerCase()) ||
                    franquia.remetente
                      .toLowerCase()
                      .includes(filter.toLowerCase()) ||
                    franquia.destinatario
                      .toLowerCase()
                      .includes(filter.toLowerCase())
                )
                .map((franquia) => (
                  <Item
                    key={franquia.id}
                    onClick={() => setObject(franquia)}
                    status={franquia.status}
                  >
                    <Attr>
                      <span>{franquia.id}</span>
                    </Attr>
                    <Attr>
                      <span>{franquia.localidade}</span>
                    </Attr>
                    <Attr>
                      <span>{franquia.telefone}</span>
                    </Attr>
                    <Attr style={{ display: "flex", justifyContent: "center" }}>
                      <span>{franquia.situacao}</span>
                    </Attr>
                    <Attr
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <span style={{ marginRight: 20 }}>{franquia.aprov}</span>
                    </Attr>
                  </Item>
                ))}
            </Tabela>
          </ScrollArea>
        </AdminDiv>

        <DetalhesDiv object={object}>
          <span>{object.id}</span>
        </DetalhesDiv>
      </Container>
    </>
  );
}
