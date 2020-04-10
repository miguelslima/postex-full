import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdSearch, MdCancel } from "react-icons/md";
import { ModalProvider } from "styled-react-modal";
import InputMask from "react-input-mask";
import ScrollArea from "react-scrollbar";
import { Collapse } from "react-collapse";
import { IoIosArrowDown, IoIosArrowUp, IoMdClose } from "react-icons/io";
import HeaderAdmSuporte from "../../../../components/HeaderAdmSuporte";
import TabelaPedidos from "../../../../components/PedidoSeeMore";

import {
  Container,
  PedidosDiv,
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

export default function Pedidos() {
  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const [pedidos, setPedidos] = useState([]);
  const [coletas, setColetas] = useState([]);
  const [newPedido, setNewPedido] = useState({});
  //
  const [object, setObject] = useState({ id: -1 });
  const [openClient, setOpenClient] = useState(false);
  const [openObject, setOpenObject] = useState(false);
  const [openValueControl, setOpenValueControl] = useState(false);
  const [openHistory, setOpenHistory] = useState(false);

  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    async function loadPedidos() {
      const response = await axios
        .create()
        .get("http://localhost:3333/pedidos");

      setPedidos(response.data);
    }

    async function loadColetas() {
      const response = await axios
        .create()
        .get("http://localhost:3333/coletas");

      setColetas(response.data);
    }
    Promise.all([loadPedidos(), loadColetas()]);
  }, [refresh]);

  useEffect(() => {
    console.log(object);
    console.log(object > 0);
  }, [object]);

  async function handleSubmit(data) {
    data.preventDefault();
    try {
      switch (newPedido.type) {
        case "entrega":
          await axios.create().post("http://localhost:3333/pedidos", newPedido);
          break;
        case "coleta":
          await axios.create().post("http://localhost:3333/coletas", newPedido);
          break;
        default:
          console.log("Erro: Nem Entrega nem Coleta");
      }
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
        <PedidosDiv>
          <PedidosHeader>
            <h4>Pedidos</h4>
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
            <strong>Código</strong>
            <strong>Remetente</strong>
            <strong>Destinatário</strong>
            <strong />
            <strong />
          </TabelaHeader>

          <ScrollArea smoothScrolling={true}>
            <Tabela>
              {pedidos
                .filter(
                  (pedido) =>
                    filter === "" ||
                    pedido.id.toString().includes(filter.toLowerCase()) ||
                    pedido.remetente
                      .toLowerCase()
                      .includes(filter.toLowerCase()) ||
                    pedido.destinatario
                      .toLowerCase()
                      .includes(filter.toLowerCase())
                )
                .map((pedido) => (
                  <Item
                    key={pedido.id}
                    onClick={() => {
                      setObject({ ...pedido, entrega: true });
                    }}
                    status={pedido.status}
                  >
                    <Attr>
                      <span>{pedido.id}</span>
                    </Attr>
                    <Attr>
                      <span>{pedido.remetente}</span>
                    </Attr>
                    <Attr>
                      <span style={{ marginLeft: 30 }}>
                        {pedido.destinatario}
                      </span>
                    </Attr>
                    <TabelaPedidos pedido={pedido} />
                  </Item>
                ))}
            </Tabela>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#ddd",
                height: 40,
                marginBottom: 15,
              }}
            >
              <IoIosArrowUp size={30} />
              <span style={{ fontSize: 20 }}>Entregas / Coletas</span>
              <IoIosArrowDown size={30} />
            </div>

            <Tabela>
              {coletas
                .filter(
                  (coleta) =>
                    filter === "" ||
                    coleta.id.toString().includes(filter.toLowerCase()) ||
                    coleta.remetente
                      .toLowerCase()
                      .includes(filter.toLowerCase()) ||
                    coleta.destinatario
                      .toLowerCase()
                      .includes(filter.toLowerCase())
                )
                .map((coleta) => (
                  <Item
                    key={coleta.id}
                    onClick={() => {
                      setObject(coleta);
                    }}
                    coleta
                    status={coleta.status}
                  >
                    <Attr>
                      <span>{coleta.id}</span>
                    </Attr>
                    <Attr>
                      <span>{coleta.remetente}</span>
                    </Attr>
                    <Attr>
                      <span style={{ marginLeft: 30 }}>
                        {coleta.destinatario}
                      </span>
                    </Attr>
                    <TabelaPedidos pedido={coleta} />
                  </Item>
                ))}
            </Tabela>
          </ScrollArea>
        </PedidosDiv>

        <DetalhesDiv object={object}>
          <DetalheHeader>
            <h4>Cadastro Pedidos</h4>
            <button type="button" onClick={() => setObject({ id: -1 })}>
              <IoMdClose size={30} />
            </button>
          </DetalheHeader>

          <ScrollArea smoothScrolling={true}>
            <DetalheContent visible={object.id > 0}>
              <h4>{`Código: ${object.id}`}</h4>
              <span>Chave DANFE: akdjakdlajsdlaj</span>

              <Option onClick={() => setOpenClient(!openClient)}>
                <strong>Clientes</strong>
              </Option>
              <Collapse isOpened={openClient}>
                <ClientDivCollapse>
                  <strong>Remetente</strong>
                  <input value={object.remetente} disabled />
                  <strong>Franquia de coleta</strong>
                  <input value="Alguma coisa" disabled />
                  <strong>Destinatário</strong>
                  <input value={object.destinatario} disabled />
                  <strong>Franquia de entrega</strong>
                  <input value="Alguma outra coisa" disabled />
                  <strong>Pagador</strong>
                  <div>
                    Remetente
                    <input
                      type="radio"
                      value="remetente"
                      name="pagador"
                      disabled
                      checked={true}
                    />
                    Destinatário
                    <input
                      type="radio"
                      value="destinatario"
                      name="pagador"
                      disabled
                      checked={false}
                    />
                  </div>
                </ClientDivCollapse>
              </Collapse>

              <Option onClick={() => setOpenObject(!openObject)}>
                <strong>Objetos</strong>
              </Option>
              <Collapse isOpened={openObject}>
                <ObjectDivCollapse>
                  <div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <strong>Volumes</strong>
                      <input value="2" disabled />
                    </div>
                    <div>
                      <strong>Peso real</strong>
                      <div>
                        <input value="2" disabled />
                        <span>Kg</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div>
                      <strong>Valor declarado/NF</strong>
                      <input value={1000.0} disabled />
                    </div>

                    <div>
                      <strong>Com seguro</strong>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        Sim
                        <input
                          type="radio"
                          value={true}
                          name="seguro"
                          disabled
                          checked={true}
                        />
                        Não
                        <input
                          type="radio"
                          value={false}
                          name="seguro"
                          disabled
                          checked={false}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <strong>Largura</strong>
                      <div>
                        <input value="20" disabled />
                        <span>cm</span>
                      </div>
                    </div>
                    <div>
                      <strong>Altura</strong>
                      <div>
                        <input value="20" disabled />
                        <span>cm</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <strong>Comprimento</strong>
                      <div>
                        <input value="20" disabled />
                        <span>cm</span>
                      </div>
                    </div>
                    <div>
                      <strong>Peso cúbico</strong>
                      <div>
                        <input value="20" disabled />
                        <span>Kg</span>
                      </div>
                    </div>
                  </div>

                  <strong>Descrição</strong>
                  <ScrollArea smoothScrolling={true}>
                    <ItemList>
                      {
                        //pra cada Item um <span>
                      }
                      <li>EXEMPLOS</li>
                      <li>EXEMPLOS</li>
                      <li>EXEMPLOS</li>
                      <li>EXEMPLOS</li>
                    </ItemList>
                  </ScrollArea>
                </ObjectDivCollapse>
              </Collapse>

              <Option onClick={() => setOpenValueControl(!openValueControl)}>
                <strong>Valores/Controle</strong>
              </Option>
              <Collapse isOpened={openValueControl}>
                <ValueDivCollapse>
                  <strong>Número de NF</strong>
                  <input value="4444" disabled />
                  <strong>Produto</strong>
                  <input value="POSTEX" disabled />
                  <div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <strong>Taxa de coleta</strong>
                      <input value="0,00" disabled />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <strong>Total</strong>
                      <input value="20,00" disabled />
                    </div>
                  </div>
                  <strong>Localização de Status</strong>
                  <input value="4444" disabled />
                  <strong>Motorista responsável</strong>
                  <input value="POSTEX" disabled />
                  <strong>Observação</strong>
                  <textarea rows="8">
                    INFO INFO INFO INFO INFO INFO INFO INFO INFO INFO INFO INFO
                    INFO INFO INFO INFO INFO INFO INFO INFO INFO INFO INFO INFO
                    INFO INFO INFO INFO INFO INFO INFO INFO INFO INFO INFO INFO
                    INFO INFO INFO INFO INFO INFO INFO INFO INFO INFO INFO INFO
                    INFO INFO INFO INFO INFO INFO INFO INFO
                  </textarea>
                </ValueDivCollapse>
              </Collapse>

              {object.entrega ? (
                <>
                  <strong style={{ marginTop: 10 }}>Recebedor</strong>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <input placeholder="Nome" disabled />
                    <input placeholder="Sobrenome" disabled />
                  </div>
                  <SignatureButton type="button">
                    Inserir Assinatura
                  </SignatureButton>
                </>
              ) : null}

              <div style={{ marginTop: 10 }}>
                <ActionButton
                  style={{ backgroundColor: "#192f9c", marginRight: 10 }}
                >
                  Salvar
                </ActionButton>
                <Link>
                  <ActionButton style={{ backgroundColor: "#538257" }}>
                    {object.entrega ? "Entrega" : "Coleta"}
                  </ActionButton>
                </Link>
                <Link>
                  <ActionButton style={{ backgroundColor: "#f0ab32" }}>
                    Cancelar
                  </ActionButton>
                </Link>
                {object.entrega ? (
                  <>
                    <Link>
                      <ActionButton style={{ backgroundColor: "#73cce6" }}>
                        Etiqueta
                      </ActionButton>
                    </Link>
                    <Link>
                      <ActionButton style={{ backgroundColor: "#73cce6" }}>
                        Recibo
                      </ActionButton>
                    </Link>
                  </>
                ) : null}
              </div>

              <Option onClick={() => setOpenHistory(!openHistory)}>
                <strong>Historico</strong>
              </Option>
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
                          setNewPedido({ ...newPedido, id: e.target.value });
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
                          setNewPedido({ ...newPedido, type: e.target.value });
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
                          setNewPedido({
                            ...newPedido,
                            remetente: e.target.value,
                          });
                        }}
                        placeholder="Nome do Remetente"
                      />

                      <strong>Endereço</strong>
                      <input
                        onChange={(e) => {
                          setNewPedido({
                            ...newPedido,
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
                              setNewPedido({
                                ...newPedido,
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
                              setNewPedido({
                                ...newPedido,
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
                              setNewPedido({
                                ...newPedido,
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
                          setNewPedido({
                            ...newPedido,
                            destinatario: e.target.value,
                          });
                        }}
                        placeholder="Nome do Destinatário"
                      />

                      <strong>Endereço</strong>
                      <input
                        onChange={(e) => {
                          setNewPedido({
                            ...newPedido,
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
                              setNewPedido({
                                ...newPedido,
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
                              setNewPedido({
                                ...newPedido,
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
                              setNewPedido({
                                ...newPedido,
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
