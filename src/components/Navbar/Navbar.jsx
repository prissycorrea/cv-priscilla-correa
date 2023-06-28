import Logo from "../Logo/Logo";
import MenuLinks from "../MenuLinksContainer/MenuLinksContainer";
import styled from '@emotion/styled';

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
        <Logo />
        <MenuLinks />
      </NavbarContainer>
    </>
  );
};