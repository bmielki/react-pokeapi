import React from "react";

import { Container, NavbarLink } from "./styles";

export default function Navbar() {
  return (
    <Container>
      <NavbarLink to="/">Início</NavbarLink>
      <NavbarLink to="/contact">Contato</NavbarLink>
    </Container>
  );
}
