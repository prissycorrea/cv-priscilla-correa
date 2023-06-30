import React from "react";
import styled from "@emotion/styled";
import devices from "../../images/devices.svg"

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80vh;
    justify-content: space-around;
`

const HomeImage = styled.img`
    height: auto;
    width: 40vw;
`

const HomeTitle = styled.h1`
    font-size: 3em;
`

const HomeSubtitle = styled.h2`
    font-size: 1.6em;
`

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default function Home() {
    return(
        <HomeContainer>
            <HomeImage src={devices} alt="Foto de perfil" />
            <TitleContainer>
                <HomeTitle>Priscilla Correa</HomeTitle>
                <HomeSubtitle>Front End Developer</HomeSubtitle>
            </TitleContainer>
        </HomeContainer>
    )
}