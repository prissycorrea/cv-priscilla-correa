import React from "react";
import styled from "@emotion/styled";
import Navbar from "./components/Navbar/Navbar.jsx"
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx"
import Skills from "./components/Skills/Skills.jsx";

const GlobalStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <GlobalStyles>
      <Navbar />
      <Home />
      <About />
      <Skills />
    </GlobalStyles>
  );
}

export default App;