import React from "react";
import styled from "@emotion/styled";
import logoImage from "../../images/coding.gif";

const LogoContainerStyles = styled.div`
  display: flex;
  width: 150px;
`;

const LogoImage = styled.img`
  height: auto;
  width: 60%;
`;

export default function Logo() {
  return (
    <LogoContainerStyles>
      <LogoImage src={logoImage} alt="Logotipo" />
    </LogoContainerStyles>
  );
}
