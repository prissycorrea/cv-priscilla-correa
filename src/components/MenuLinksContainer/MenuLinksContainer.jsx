import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useTranslation } from 'react-i18next';
import { devices } from "../../utils/devicesSizes";

const MenuLinksContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 35vw;
  @media ${devices.mobile} {
    margin-top: 30%;
    flex-wrap: wrap;
    width: 90vw;
    }
`;

const StyledLink = styled(Link)`
  font-size: 1.2em;
  font-weight: 400;
  cursor: pointer;
  @media ${devices.mobile} {
    font-size: 1em;
    margin-bottom: 30px;
  }
  @media ${devices.tablet} {
    font-size: 1.2em;
  }
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