import React from "react";
import styled from "@emotion/styled";
import programmingGirlImage01 from "../../images/programming_girl01.png";

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80vh;
    justify-content: space-around;
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
`

const TitleContainer = styled.div`
    text-align: center;
    padding: 0;
`

export default function Home() {
    return(
        <HomeContainer>
            <HomeImage src={programmingGirlImage01} alt="Foto de perfil" />
            <TitleContainer>
                <HomeTitle>Priscilla Correa</HomeTitle>
                <HomeSubtitle><span className="brackets">&lt;</span> Front End Developer <span className="brackets">/&gt;</span></HomeSubtitle>
            </TitleContainer>
        </HomeContainer>
    )
}