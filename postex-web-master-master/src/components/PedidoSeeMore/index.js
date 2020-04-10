import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";

import { Container, Attr, Address, Info } from "./styles";

export default function TabelaPedidos({ pedido }) {
  const [seeMore, setSeeMore] = useState(false);

  useEffect(() => {}, []);

  return (
    <Container>
      <Attr>
        <button
          type="button"
          onClick={() => {
            setSeeMore(!seeMore);
          }}
        >
          {seeMore ? (
            <IoIosArrowUp size={20} color="#333" />
          ) : (
            <IoIosArrowDown size={20} color="#333" />
          )}
        </button>
      </Attr>

      <Address visible={seeMore}>
        <Info>
          <strong>Origem</strong>
          <p>
            {pedido.origem.endereco}
            <br />
            {pedido.origem.cidade + "/" + pedido.origem.estado}
            <br />
            {"Tel: " + pedido.origem.telefone}
          </p>

          <button type="button" onClick={() => {}}>
            <MdLocationOn size={20} />
            Ver local de coleta
          </button>
        </Info>
        <Info>
          <strong>Destino</strong>
          <p>
            {pedido.destino.endereco}
            <br />
            {pedido.destino.cidade + "/" + pedido.destino.estado}
            <br />
            {"Tel: " + pedido.destino.telefone}
          </p>

          <button type="button" onClick={() => {}}>
            <MdLocationOn size={20} />
            Ver local de coleta
          </button>
        </Info>
      </Address>
    </Container>
  );
}
