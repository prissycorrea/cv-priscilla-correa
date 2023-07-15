import React from "react";
import { useTranslation } from 'react-i18next';
import styled from "@emotion/styled";
import { devices } from "../../utils/devicesSizes";
import livePreview from "../../images/portfolio-icons/webpage-img-txt-svgrepo-com.svg";
import githubRepo from "../../images/portfolio-icons/code-programming-svgrepo-com.svg";

const PortfolioContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
    margin: auto;
    width: 80vw;
    @media ${devices.mobile} {
        margin: 0 auto;
    }
`

const PortfolioTextsContainer = styled.div`
    display: flex;
    gap: 90px;
    min-height: 50vh;
    justify-content: center;
    margin-top: 20px;
    padding: 20px;
    width: 95%;
    @media ${devices.mobile} {
        align-items: center;
        flex-direction: column;
        padding: 5px;
    }
`;

const PortfolioTextContainer = styled.div`
    align-items: center;
    border: 2px solid transparent;
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding: 20px;
    transition: 0.5s;
    width: 30vw;
    &:hover {
        border: 2px solid #986DFF;
        transition: 0.5s;
    }
    @media ${devices.mobile} {
        border: 2px solid #986DFF;
        margin: 0px;
        padding: 5px;
        width: 80vw;
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
    @media ${devices.mobile} {
        margin-top: 150px;
    }
`;

const PortfolioSubtitle = styled.h3`
    font-size: 1.3em;
    margin-top: 10px;
    padding: 10px;
    text-align: justify;
`;

const PortfolioText = styled.p`
    font-size: 1em;
    margin-top: 10px;
    padding: 10px;
    text-align: justify;
    @media ${devices.mobile} {
    font-size: 1em;
  }
`;

const PortfolioLink = styled.a`
    margin-top: 20px;
    text-decoration: underline;
`

const PortfolioIconContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    padding: 20px;
    width: 100%;
`;

const IconPortfolio = styled.img`
    height: 70px;
    opacity: 0.5;
    padding: 15px;
    transition: 0.3s;
    &:hover {
        opacity: 1;
    }
    @media ${devices.mobile} {
        height: 60px;
    }
`

const PortfolioLinkSeeMore = styled.a`
    border: 1px solid #986DFF;
    color:#29def1;
    font-size: 1.5em;
    margin-top: 20px;
    padding: 10px;
    @media ${devices.mobile} {
        margin-bottom: 100px;
    }
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
                    <PortfolioIconContainer>
                        <PortfolioLink href={t('portfolio.project01.live')}  target="_blank" rel="noopener noreferrer"><IconPortfolio src={livePreview} /></PortfolioLink>
                        <PortfolioLink href={t('portfolio.project01.git-repo')}  target="_blank" rel="noopener noreferrer"><IconPortfolio src={githubRepo} /></PortfolioLink>
                    </PortfolioIconContainer>
                </PortfolioTextContainer>
                <PortfolioTextContainer>
                    <PortfolioSubtitle>{t('portfolio.project02.title')}</PortfolioSubtitle>
                    <PortfolioText>{t('portfolio.project02.description')}</PortfolioText>
                    <PortfolioIconContainer>
                        <PortfolioLink href={t('portfolio.project02.live')}  target="_blank" rel="noopener noreferrer"><IconPortfolio src={livePreview} /></PortfolioLink>
                        <PortfolioLink href={t('portfolio.project02.git-repo')}  target="_blank" rel="noopener noreferrer"><IconPortfolio src={githubRepo} /></PortfolioLink>
                    </PortfolioIconContainer>
                </PortfolioTextContainer>
                <PortfolioTextContainer>
                    <PortfolioSubtitle>{t('portfolio.project01.title')}</PortfolioSubtitle>
                    <PortfolioText>{t('portfolio.project01.description')}</PortfolioText>
                    <PortfolioIconContainer>
                        <PortfolioLink href={t('portfolio.project01.live')}  target="_blank" rel="noopener noreferrer"><IconPortfolio src={livePreview} /></PortfolioLink>
                        <PortfolioLink href={t('portfolio.project01.git-repo')}  target="_blank" rel="noopener noreferrer"><IconPortfolio src={githubRepo} /></PortfolioLink>
                    </PortfolioIconContainer>
                </PortfolioTextContainer>
            </PortfolioTextsContainer>
            <PortfolioLinkSeeMore href={t('portfolio.github-url')} target="_blank" rel="noopener noreferrer">{t('portfolio.description')}</PortfolioLinkSeeMore>
        </PortfolioContainer>
    )
}