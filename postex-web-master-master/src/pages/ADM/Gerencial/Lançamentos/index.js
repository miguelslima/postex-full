import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import InputMask from "react-input-mask";
import ScrollArea from "react-scrollbar";
import { ModalProvider } from "styled-react-modal";
import { Collapse } from "react-collapse";
import { MdSearch, MdCancel, MdEmail } from "react-icons/md";

import HeaderAdmSuporte from "../../../../components/HeaderAdmSuporte";

import { IoMdClose } from "react-icons/io";

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

export default function Lancamentos() {
  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const [lancamentos, setLancamentos] = useState([]);
  const [newFatura, setNewFatura] = useState({});

  const [object, setObject] = useState({ id: -1 });
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    async function loadFaturas() {
      const response = await axios
        .create()
        .get("http://localhost:3333/lancamentos");

      const newDesc = response.data.map((resp) => resp.descricao.split(", "));
      console.log(newDesc);
      console.log(response.data);

      let finalData = [];

      for (let x = 0; x < response.data.length; x++) {
        finalData.push({
          data: { ...response.data[x], newDesc: newDesc[x] },
        });
      }

      console.log(finalData);
      setLancamentos(finalData);
    }
    loadFaturas();
  }, [refresh]);

  async function handleSubmit(data) {
    data.preventDefault();
    try {
      await axios.create().post("http://localhost:3333/lancamentos", newFatura);

      console.log("Erro: Nem Entrega nem Coleta");

      setRefresh(true);
      setIsOpen(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <HeaderAdmSuporte />
      <Container>
        <AdminDiv>
          <PedidosHeader>
            <h4>Lançamentos</h4>
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
            <strong>Data</strong>
            <strong>Tipo</strong>
            <strong style={{ marginLeft: 80 }}>Franquia</strong>
            <strong style={{ marginRight: 55 }}>Descrição</strong>
          </TabelaHeader>

          <ScrollArea smoothScrolling={true}>
            <Tabela>
              {lancamentos
                .filter(
                  (lancamento) =>
                    filter === "" ||
                    lancamento.id.toString().includes(filter.toLowerCase()) ||
                    lancamento.cliente
                      .toLowerCase()
                      .includes(filter.toLowerCase()) ||
                    lancamento.situacao
                      .toLowerCase()
                      .includes(filter.toLowerCase())
                )
                .map((lancamento) => (
                  <Item
                    key={lancamento.data.id}
                    onClick={() => setObject(lancamento)}
                    status={lancamento.data.status}
                  >
                    <Attr style={{ width: 175 }}>
                      <span>{lancamento.data.data}</span>
                    </Attr>
                    <Attr>
                      <span>{lancamento.data.tipo}</span>
                    </Attr>
                    <Attr style={{ display: "flex", justifyContent: "center" }}>
                      <span>{lancamento.data.franquia}</span>
                    </Attr>
                    <Attr style={{ display: "flex", justifyContent: "center" }}>
                      <div>
                        {lancamento.data.newDesc.map((word) => (
                          <>
                            <span>{word}</span>
                            <br />
                          </>
                        ))}
                      </div>
                    </Attr>
                  </Item>
                ))}
            </Tabela>
          </ScrollArea>
        </AdminDiv>

        <DetalhesDiv object={object} visible={object.id > 0}>
          <DetalheHeader>
            <h4>Cadastro Faturas</h4>
            <button type="button" onClick={() => setObject({ id: -1 })}>
              <IoMdClose size={30} />
            </button>
          </DetalheHeader>

          <ScrollArea smoothScrolling={true}>
            <DetalheContent>
              <strong>Franquia responsável</strong>
              <input value={object.franquia} disabled />

              <strong>Mês</strong>
              <input value={object.mes} />
              <strong>Cliente</strong>
              <input />
              <strong>Vencimento</strong>
              <input />

              <h2>Itens</h2>
              <TabelaHeader style={{ backgroundColor: "#f2f2f2" }}>
                <strong>Data</strong>
                <strong>Código</strong>
                <strong>Valor</strong>
              </TabelaHeader>
              <Tabela>
                <Item>
                  <span>18/05/2020</span>
                  <span>123456789</span>
                  <span>26,00</span>
                </Item>
                <Item>
                  <span>18/05/2020</span>
                  <span>555</span>
                  <span>55,00</span>
                </Item>
              </Tabela>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h1>Total</h1>
                <h1>81,00</h1>
              </div>
              <div style={{ marginTop: 10 }}>
                {object.situacao === "Aberta" ? (
                  <>
                    <ActionButton
                      style={{ backgroundColor: "#192f9c", marginRight: 10 }}
                    >
                      Salvar
                    </ActionButton>
                    <ActionButton
                      style={{ backgroundColor: "#538257", marginRight: 10 }}
                    >
                      Baixar
                    </ActionButton>
                    <ActionButton
                      style={{ backgroundColor: "#f0ab32", marginRight: 10 }}
                    >
                      Cancelar
                    </ActionButton>
                  </>
                ) : null}
                {object.situacao !== "Aberta" ? (
                  <ActionButton
                    style={{ backgroundColor: "#538257", marginRight: 10 }}
                  >
                    Reabrir
                  </ActionButton>
                ) : null}
                <ActionButton
                  style={{ backgroundColor: "#73cce6", marginRight: 10 }}
                >
                  Imprimir
                </ActionButton>

                <ActionButton
                  style={{
                    backgroundColor: "#73cce6",
                    marginRight: 10,
                    alignItems: "center",
                  }}
                >
                  <MdEmail size={20} />
                  Enviar
                </ActionButton>
              </div>
            </DetalheContent>
          </ScrollArea>
        </DetalhesDiv>

        <ModalProvider>
          <StyledModal
            isOpen={isOpen}
            onBackgroundClick={() => setIsOpen(false)}
            onEscapeKeydown={() => setIsOpen(false)}
          >
            <ModalContainer>
              <ScrollArea>
                <form onSubmit={handleSubmit}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "50%" }}>
                      <strong>Código</strong>
                      <input
                        name="id"
                        onChange={(e) => {
                          setNewFatura({ ...newFatura, id: e.target.value });
                        }}
                        style={{ width: "80%", marginTop: 20 }}
                      />
                    </div>
                    <div style={{ width: "50%" }}>
                      <strong>Tipo</strong>
                      <select
                        style={{ width: "50%", margin: 0 }}
                        name="select"
                        onChange={(e) => {
                          setNewFatura({ ...newFatura, type: e.target.value });
                        }}
                      >
                        <option value="entrega">Entrega</option>
                        <option value="coleta">Coleta</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <strong>REMETENTE</strong>
                    <div id="remt">
                      <input
                        name="remetente"
                        onChange={(e) => {
                          setNewFatura({
                            ...newFatura,
                            remetente: e.target.value,
                          });
                        }}
                        placeholder="Nome do Remetente"
                      />

                      <strong>Endereço</strong>
                      <input
                        onChange={(e) => {
                          setNewFatura({
                            ...newFatura,
                            origem: { endereco: e.target.value },
                          });
                        }}
                        placeholder="Rua - Bairro"
                      />

                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <div style={{ width: "40%" }}>
                          <strong>Cidade</strong>
                          <input
                            onChange={(e) => {
                              setNewFatura({
                                ...newFatura,
                                origem: { cidade: e.target.value },
                              });
                            }}
                            placeholder="São Paulo"
                          />
                        </div>
                        <div style={{ width: "20%" }}>
                          <strong>Estado</strong>
                          <InputMask
                            placeholder="SP"
                            mask="aa"
                            onChange={(e) => {
                              setNewFatura({
                                ...newFatura,
                                origem: { estado: e.target.value },
                              });
                            }}
                          />
                        </div>
                        <div style={{ width: "40%" }}>
                          <strong>Telefone</strong>
                          <InputMask
                            name="origem.telefone"
                            placeholder="Telefone"
                            mask="(99) 99999-9999"
                            onChange={(e) => {
                              setNewFatura({
                                ...newFatura,
                                origem: { telefone: e.target.value },
                              });
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <strong>DESTINATÁRIO</strong>
                    <div id="dest">
                      <input
                        onChange={(e) => {
                          setNewFatura({
                            ...newFatura,
                            destinatario: e.target.value,
                          });
                        }}
                        placeholder="Nome do Destinatário"
                      />

                      <strong>Endereço</strong>
                      <input
                        onChange={(e) => {
                          setNewFatura({
                            ...newFatura,
                            destino: { endereco: e.target.value },
                          });
                        }}
                        placeholder="Rua - Bairro"
                      />

                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <div style={{ width: "40%" }}>
                          <strong>Cidade</strong>
                          <input
                            onChange={(e) => {
                              setNewFatura({
                                ...newFatura,
                                destino: { cidade: e.target.value },
                              });
                            }}
                            placeholder="São Paulo"
                          />
                        </div>
                        <div style={{ width: "20%" }}>
                          <strong>Estado</strong>
                          <InputMask
                            onChange={(e) => {
                              setNewFatura({
                                ...newFatura,
                                destino: { estado: e.target.value },
                              });
                            }}
                            placeholder="SP"
                            mask="aa"
                          />
                        </div>
                        <div style={{ width: "40%" }}>
                          <strong>Telefone</strong>
                          <InputMask
                            onChange={(e) => {
                              setNewFatura({
                                ...newFatura,
                                destino: { telefone: e.target.value },
                              });
                            }}
                            placeholder="Telefone"
                            mask="(99) 99999-9999"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="submit">Enviar</button>
                </form>
              </ScrollArea>
            </ModalContainer>
          </StyledModal>
        </ModalProvider>
      </Container>
    </>
  );
}
