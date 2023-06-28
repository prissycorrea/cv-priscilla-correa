import styled from '@emotion/styled';

const MenuLinkStyles = styled.a`
    font-size: 1.2em;
`

export default function MenuLink({ children, href }) {
    return(
        <MenuLinkStyles className="underline__center--animation" href={href}>
            {children}
        </MenuLinkStyles>
    )
};
