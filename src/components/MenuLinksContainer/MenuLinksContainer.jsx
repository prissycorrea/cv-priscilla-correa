import MenuLink from "../MenuLink/MenuLink";
import menuLinksStyles from "./MenuLinksContainer.style";

const MenuLinksContainer = () => {
    return (
        <menuLinksStyles>
            <MenuLink href="/home">Home</MenuLink>
            <MenuLink href="/about">About</MenuLink>
            <MenuLink href="/skills">Skills</MenuLink>
            <MenuLink href="/portfolio">Portfolio</MenuLink>
            <MenuLink href="/contact">Contact</MenuLink>
        </menuLinksStyles>
    )
}

export default MenuLinksContainer;