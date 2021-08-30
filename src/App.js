import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Routes from "./routes";

import GlobalStyle, { Container } from "./styles";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Container>
        <Navbar />
        <Routes />
      </Container>
    </BrowserRouter>
  );
}
