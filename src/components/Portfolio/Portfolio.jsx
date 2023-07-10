import React from "react";
import { useTranslation } from 'react-i18next';
import styled from "@emotion/styled";

const PortfolioContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    width: 60vw;
`

const PortfolioTextsContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    padding: 20px;
    width: 100%;
`;

const PortfolioTextContainer = styled.div`
    align-items: center;
    border: 2px solid transparent;
    display: flex;
    flex-direction: column;
    height: 15vh;
    margin: 10px;
    padding: 20px;
    transition: 0.5s;
    width: 30vw;
    &:hover {
        border: 2px solid #986DFF;
        transition: 0.5s;
    }
`;

const PortfolioTitle = styled.h3`
    span {
        background-color: rgba(255, 255, 255, 0.09);
        border-radius: 10px;
        color: var(--hover-text-color);
        font-size: 1.4em;
        padding: 5px 10px;
    }
`;

const PortfolioSubtitle = styled.h3`
    font-size: 1.2em;
    margin-top: 10px;
    padding: 10px;
    text-align: justify;
`;

const PortfolioText = styled.p`
    font-size: 1.2em;
    margin-top: 10px;
    padding: 10px;
    text-align: justify;
`;

const PortfolioLink = styled.a`
    margin-top: 20px;
    text-decoration: none;
`

export default function Portfolio() {
    const { t } = useTranslation('portfolio');
    return (
        <PortfolioContainer id="portfolio">
            <PortfolioTitle>
                <span>{t('portfolio.title')}</span>
            </PortfolioTitle>
            <PortfolioTextsContainer>
                <PortfolioTextContainer>
                    <PortfolioSubtitle>{t('portfolio.project01.title')}</PortfolioSubtitle>
                    <PortfolioText>{t('portfolio.project01.description')}</PortfolioText>
                </PortfolioTextContainer>
            </PortfolioTextsContainer>
            <PortfolioLink>{t('portfolio.description')}</PortfolioLink>
        </PortfolioContainer>
    )
}