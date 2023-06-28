import styled from '@emotion/styled';

const MenuLinkStyles = styled.a`
    text-decoration: none;
`

export default function MenuLink({ children, href }) {
    return(
        <MenuLinkStyles href={href}>
            {children}
        </MenuLinkStyles>
    )
};
