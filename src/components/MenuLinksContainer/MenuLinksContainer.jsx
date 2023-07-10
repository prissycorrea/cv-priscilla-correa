import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import MenuLink from '../MenuLink/MenuLink';

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
            <MenuLink to="home" smooth={true} duration={500}>{t('menuLinks.homeLink')}</MenuLink>
            <MenuLink to="about" smooth={true} duration={500}>{t('menuLinks.aboutLink')}</MenuLink>
            <MenuLink to="skills" smooth={true} duration={500}>{t('menuLinks.skillsLink')}</MenuLink>
            <MenuLink to="portfolio" smooth={true} duration={500}>{t('menuLinks.portfolioLink')}</MenuLink>
            <MenuLink to="contact" smooth={true} duration={500}>{t('menuLinks.contactLink')}</MenuLink>
        </MenuLinksContainerStyles>
    )
}
