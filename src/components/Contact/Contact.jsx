import React from "react";
import styled from "@emotion/styled";
import linkedinIcon from "../../images/contact-icons/linkedin-round-svgrepo-com.svg"
import githubIcon from "../../images/contact-icons/github-142-svgrepo-com.svg"
import emailIcon from "../../images/contact-icons/mail-with-circle-svgrepo-com.svg"
import behanceIcon from "../../images/contact-icons/behance-round-svgrepo-com.svg"

const ContactContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    width: 60vw;
`

const ContactTitle = styled.h3`
    span {
        background-color: rgba(255, 255, 255, 0.09);
        border-radius: 10px;
        color: var(--hover-text-color);
        font-size: 1.4em;
        padding: 5px 10px;
    }
`;

const IconContactContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 20vh;
    width: 30vw;
`

const IconContact = styled.img` 
    opacity: 0.5;
    padding: 15px;
    width: 80px;
    transition: 0.3s;
    &:hover {
        opacity: 1;
    }
`

export default function Contact() {
    return (
        <ContactContainer>
            <ContactTitle>Contato</ContactTitle>
            <IconContactContainer>
                <IconContact src={linkedinIcon} />
                <IconContact src={githubIcon} />
                <IconContact src={emailIcon} />
                <IconContact src={behanceIcon} />
            </IconContactContainer>
        </ContactContainer>
    )
}