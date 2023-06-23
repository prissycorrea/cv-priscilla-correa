import navbar from "./Navbar.styles";
import Logo from "../Logo/Logo"
import MenuLinks from "../MenuLinksContainer/MenuLinksContainer";

const Navbar = () => {
    return (
      <div>
        <header css={navbar}>
            <Logo />
            <MenuLinks />
        </header>
      </div>
    );
  };
  

  export default Navbar;