import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useTranslation } from 'react-i18next';

const MenuLinksContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 35vw;
`;

const StyledLink = styled(Link)`
  font-size: 1.2em;
  font-weight: 400;
  cursor: pointer;
`;

export default function MenuLinks() {
  const { t } = useTranslation('menuLinks');

  return (
    <MenuLinksContainer>
      <StyledLink to="/">{t('menuLinks.homeLink')}</StyledLink>
      <StyledLink to="/about">{t('menuLinks.aboutLink')}</StyledLink>
      <StyledLink to="/skills">{t('menuLinks.skillsLink')}</StyledLink>
      <StyledLink to="/portfolio">{t('menuLinks.portfolioLink')}</StyledLink>
      <StyledLink to="/contact">{t('menuLinks.contactLink')}</StyledLink>
    </MenuLinksContainer>
  );
};