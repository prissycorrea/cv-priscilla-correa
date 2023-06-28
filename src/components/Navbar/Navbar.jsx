import Logo from "../Logo/Logo";
import MenuLinks from "../MenuLinksContainer/MenuLinksContainer";
import styled from '@emotion/styled';

const NavbarContainer = styled.div`
  background-color: red;
  display: flex;
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