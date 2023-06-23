import menuLinkStyles from "./MenuLink.styles";

const MenuLink = ({ children, href }) => {
    return(
        <a href={href} css={menuLinkStyles}>
            {children}
        </a>
    )
};

export default MenuLink;
