import styled from "@emotion/styled";
import MenuLinks from "../MenuLinksContainer/MenuLinksContainer";
import ToggleLanguegeButton from "../ToggleTranslateButton/ToggleTranslateButton";

const NavbarContainer = styled.div`
  align-items: center;
  display: flex;
  height: 10vh;
  justify-content: center;
  padding: 10px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1; 
`;

export default function Navbar() {
  return (
    <>
      <NavbarContainer>
        <MenuLinks />
        <ToggleLanguegeButton />
      </NavbarContainer>
    </>
  );
}
