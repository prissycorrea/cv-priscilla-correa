import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { Link } from 'react-scroll';

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
            <Link to="home" smooth={true} duration={500}>{t('menuLinks.homeLink')}</Link>
            <Link to="about" smooth={true} duration={500}>{t('menuLinks.aboutLink')}</Link>
            <Link to="skills" smooth={true} duration={500}>{t('menuLinks.skillsLink')}</Link>
            <Link to="portfolio" smooth={true} duration={500}>{t('menuLinks.portfolioLink')}</Link>
            <Link to="contact" smooth={true} duration={500}>{t('menuLinks.contactLink')}</Link>
        </MenuLinksContainerStyles>
    )
}
