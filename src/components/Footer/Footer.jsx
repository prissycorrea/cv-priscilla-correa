import React from "react";
import styled from "@emotion/styled";
import { devices } from "../../utils/devicesSizes";

const FooterContainer = styled.div`
    background-color: #1C1C1C;
    display: flex;
    height: 10vh;
    width: 100%;
    @media ${devices.mobile} {
    display: none;
    }
`

export default function Footer() {
    return(
        <FooterContainer>
        </FooterContainer>
    )
}