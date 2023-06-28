import MenuLink from "../MenuLink/MenuLink";
import styled from '@emotion/styled';

const MenuLinksContainerStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
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