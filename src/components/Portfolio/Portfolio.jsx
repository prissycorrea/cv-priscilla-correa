import React, { useState } from "react";
import styled from "@emotion/styled";

const PortfolioContainer = styled.div`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: space-between;
    width: 60vw;
`

const PortfolioTextsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 30vw;
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

const PortfolioText = styled.p`
    font-size: 1.2em;
    margin-top: 10px;
    padding: 10px;
    text-align: justify;
`;

const IconPortfolioContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 20vh;
    width: 30vw;
`

const IconPortfolio = styled.img`
    opacity: 0.5;
    padding: 15px;
    width: 80px;
    transition: 0.3s;
    &:hover {
        opacity: 1;
    }
`

export default function Portfolio() {
    return (
        <></>
    )
}