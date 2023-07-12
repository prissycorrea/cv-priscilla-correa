import React from "react";
import styled from "@emotion/styled";
import ToggleLanguegeButton from "../ToggleTranslateButton/ToggleTranslateButton";
import MenuLinks from "../MenuLinksContainer/MenuLinksContainer";
import { devices } from "../../utils/devicesSizes"

const NavbarContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  height: 10vh;
  position: fixed;
  padding: 10px;
  top: 0;
  width: 55vw;
  @media ${devices.mobile} {
    flex-direction: column;
  }
`;

const NavbarMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Navbar = () => {
  return (
    <NavbarMenuContainer>
      <NavbarContainer>
        <MenuLinks />
        <ToggleLanguegeButton />
      </NavbarContainer>
    </NavbarMenuContainer>
  );
};

export default Navbar;
