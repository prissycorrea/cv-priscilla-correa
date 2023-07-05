import styled from '@emotion/styled';
import MenuLinks from "../MenuLinksContainer/MenuLinksContainer";
import ToggleLanguegeButton from "../ToggleTranslateButton/ToggleTranslateButton";

const NavbarContainer = styled.div`
  display: flex;
  height: 10vh;
  justify-content: center;
  padding: 10px;
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
};