import React from 'react';
import styled from '@emotion/styled';

const LogoContainerStyles = styled.div`
  background-color: green;
`;

export default function Logo() {
  return (
    <LogoContainerStyles>
      <p>logotipo</p>
    </LogoContainerStyles>
  );
};