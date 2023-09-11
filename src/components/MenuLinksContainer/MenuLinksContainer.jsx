import React from 'react';
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
    padding-top: 30%;
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
`;

export default function MenuLinks() {
  const { t } = useTranslation('menuLinks');

  return (
    <MenuLinksContainer>
      <StyledLink to="/" data-testid="home-link">{t('menuLinks.homeLink')}</StyledLink>
      <StyledLink to="/about" data-testid="about-link">{t('menuLinks.aboutLink')}</StyledLink>
      <StyledLink to="/skills" data-testid="skills-link">{t('menuLinks.skillsLink')}</StyledLink>
      <StyledLink to="/portfolio" data-testid="portfolio-link">{t('menuLinks.portfolioLink')}</StyledLink>
      <StyledLink to="/contact" data-testid="contact-link">{t('menuLinks.contactLink')}</StyledLink>
    </MenuLinksContainer>
  );
};