import React from "react";
import { useTranslation } from 'react-i18next';
import styled from "@emotion/styled";
import programmingGirlImage02 from "../../images/programming_girl02.png";
import { devices } from "../../utils/devicesSizes";

const AboutContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  margin: 0 auto;
  width: 60vw;
  @media ${devices.mobile} {
    flex-direction: column;
    width: 95vw;
  }
`;

const AboutImage = styled.img`
  border: 3px solid rgba(255, 255, 255, 0.08);
  height: 55%;
  width: 55%;
  @media ${devices.mobile} {
    display: none;
  }
`;

const AboutTextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const AboutTitle = styled.h3`
  span {
    background-color: rgba(255, 255, 255, 0.09);
    border-radius: 10px;
    color: var(--hover-text-color);
    font-size: 1.4em;
    padding: 5px 10px;
  }
`;

const AboutText = styled.p`
  font-size: 1.2em;
  margin-top: 10px;
  padding: 10px;
  text-align: justify;
`;

export default function About() {
  const { t } = useTranslation('about');

  return (
    <AboutContainer id="about">
      <AboutImage
        src={programmingGirlImage02}
        alt={t('about.whoAmI')}
      />
      <AboutTextsContainer>
        <AboutTitle>
          <span>{t('about.whoAmI')}</span>
        </AboutTitle>
        <AboutText>
          {t('about.description')}
        </AboutText>
      </AboutTextsContainer>
    </AboutContainer>
  );
}