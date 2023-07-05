import { useTranslation } from 'react-i18next';
import MenuLink from "../MenuLink/MenuLink";
import styled from '@emotion/styled';

const MenuLinksContainerStyles = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    width: 35vw;
`

export default function MenuLinksContainer() {
    const { t } = useTranslation('menuLinks');
    return (
        <MenuLinksContainerStyles>
            <MenuLink href="/home">{t('menuLinks.homeLink')}</MenuLink>
            <MenuLink href="/about">{t('menuLinks.aboutLink')}</MenuLink>
            <MenuLink href="/skills">{t('menuLinks.skillsLink')}</MenuLink>
            <MenuLink href="/portfolio">{t('menuLinks.portfolioLink')}</MenuLink>
            <MenuLink href="/contact">{t('menuLinks.contactLink')}</MenuLink>
        </MenuLinksContainerStyles>
    )
}
