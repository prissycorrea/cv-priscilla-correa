import MenuLink from "../MenuLink/MenuLink";
import menuLinksContainerStyles from "./MenuLinksContainer.styles";

const MenuLinksContainer = () => {
    return (
        <div css={menuLinksContainerStyles}>
            <MenuLink href="/home">Home</MenuLink>
            <MenuLink href="/about">About</MenuLink>
            <MenuLink href="/skills">Skills</MenuLink>
            <MenuLink href="/portfolio">Portfolio</MenuLink>
            <MenuLink href="/contact">Contact</MenuLink>
        </div>
    )
}

export default MenuLinksContainer;