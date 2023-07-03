import React from "react";
import styled from "@emotion/styled";
import programmingGirlImage02 from "../../images/programming_girl02.png";

const AboutContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  margin: 0 auto;
  width: 60vw;
`;

const AboutImage = styled.img`
  border: 3px solid rgba(255, 255, 255, 0.08);
  height: 55%;
  width: 55%;
`;

const AboutTextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const AboutTitle = styled.h3`
  span {
    background-color: rgba(255, 255, 255, 0.09);
    border-radius: 10px;
    color: var(--hover-text-color);
    font-size: 1.4em;
    padding: 5px 10px;
  }
`;

const AboutText = styled.p`
  font-size: 1.2em;
  margin-top: 10px;
  padding: 10px;
`;

export default function About() {
  return (
    <AboutContainer>
      <AboutImage
        src={programmingGirlImage02}
        alt="Girl wearing headset sitting in front of computer programming"
      />
      <AboutTextsContainer>
        <AboutTitle>
          <span>About Me</span>
        </AboutTitle>
        <AboutText>
          Cursando Análise e Desenvolvimento de Sistemas, meu foco está no
          Desenvolvimento Front End. Tenho experiência com JavaScript e SAP UI5,
          além de familiaridade com ferramentas e linguagens como React, Git /
          Github, HTML / CSS, Adobe Photoshop, Figma e Bootstrap. Possuo
          certificações em Azure Fundamentals, Azure Data Fundamentals e Azure
          AI Fundamentals pela Microsoft, o que reflete meu compromisso com a
          constante evolução e aprendizado. Com habilidades em inglês no nível
          intermediário, estou preparada para enfrentar desafios e contribuir
          para projetos inovadores no campo do Desenvolvimento Front End.
        </AboutText>
      </AboutTextsContainer>
    </AboutContainer>
  );
}
