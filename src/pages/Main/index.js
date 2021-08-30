import React from "react";
import { Container, Title } from "./styles";

import Pokedex from "../../components/Pokedex";

export default function Main() {
  return (
    <Container>
      <Title>Main</Title>
      <Pokedex />
    </Container>
  );
}
