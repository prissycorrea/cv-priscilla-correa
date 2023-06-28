import MenuLink from "../MenuLink/MenuLink";
import styled from '@emotion/styled';

const MenuLinksContainerStyles = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    width: 35vw;
`

export default function MenuLinksContainer() {
    return (
        <MenuLinksContainerStyles>
            <MenuLink href="/home">Home</MenuLink>
            <MenuLink href="/about">About</MenuLink>
            <MenuLink href="/skills">Skills</MenuLink>
            <MenuLink href="/portfolio">Portfolio</MenuLink>
            <MenuLink href="/contact">Contact</MenuLink>
        </MenuLinksContainerStyles>
    )
}