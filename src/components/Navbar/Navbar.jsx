import navbar from "./Navbar.styles";
import Logo from "../Logo/Logo";
import MenuLinks from "../MenuLinksContainer/MenuLinksContainer";

const Navbar = () => {
  return (
    <>
      <header css={navbar}>
        <Logo />
        <MenuLinks />
      </header>
    </>
  );
};

export default Navbar;
