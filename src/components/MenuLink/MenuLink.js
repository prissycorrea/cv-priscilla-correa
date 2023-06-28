import menuLinkStyles from "./MenuLink.styles.js";

const MenuLink = ({ children, href }) => {
    return(
        <a href={href} css={menuLinkStyles}>
            {children}
        </a>
    )
};

export default MenuLink;
