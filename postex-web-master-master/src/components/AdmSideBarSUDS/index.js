import React, { useState } from "react";
import { Link } from "react-router-dom";

import {} from "react-icons";
import { slide as SlideMenu } from "react-burger-menu";

export default function AdmSideBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>BOTÃO</button>

      <SlideMenu isOpen={open} width={265}>
        <div style={{ backgroundColor: "black", height: 800 }} />
      </SlideMenu>
    </>
  );
}
