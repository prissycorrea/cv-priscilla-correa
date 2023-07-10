import styled from '@emotion/styled';
import { Link } from 'react-scroll';

const MenuLinkStyles = styled(Link)`
    font-size: 1.2em;
    font-weight: 400;
`;

export default function MenuLink({ children, to, smooth, duration }) {
    return(
        <MenuLinkStyles 
            to={to}
            smooth={smooth}
            duration={duration}
            spy={true}
            exact='true'
            offset={-70}
            className="underline__center--animation"
        >
            {children}
        </MenuLinkStyles>
    );
}
