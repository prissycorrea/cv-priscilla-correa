import React from "react";
import { useTranslation } from 'react-i18next';
import styled from "@emotion/styled";
import programmingGirlImage01 from "../../images/programming_girl01.png";

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    justify-content: center;
`

const HomeImage = styled.img`
    height: auto;
    margin-top: 100px;
    width: 30vw;
`

const HomeTitle = styled.h1`
    font-size: 3em;
`

const HomeSubtitle = styled.h2`
    color: #29def1;
    padding-bottom: 20px;
`

const TitleContainer = styled.div`
    text-align: center;
    padding: 0;
`

export default function Home() {
    const { t } = useTranslation('home');
    return(
        <HomeContainer id="home">
            <HomeImage src={programmingGirlImage01} alt="Girl wearing headset with hands on keyboard and mouse" />
            <TitleContainer>
                <HomeTitle>Priscilla Correa</HomeTitle>
                <HomeSubtitle><span className="brackets">&lt;</span> {t('home.subtitle')} <span className="brackets">/&gt;</span></HomeSubtitle>
            </TitleContainer>
        </HomeContainer>
    )
}