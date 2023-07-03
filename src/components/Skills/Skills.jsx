import React, { useState } from "react";
import styled from "@emotion/styled";
import html5 from "../../images/skill-icons/html-5-svgrepo-com.svg"
import css3 from "../../images/skill-icons/css-3-svgrepo-com.svg"
import javascript from "../../images/skill-icons/javascript-svgrepo-com.svg"
import figma from "../../images/skill-icons/figma-svgrepo-com.svg"
import git from "../../images/skill-icons/git-svgrepo-com.svg"
import gitlab from "../../images/skill-icons/gitlab-svgrepo-com.svg"
import react from "../../images/skill-icons/react-svgrepo-com.svg"
import sapui5 from "../../images/skill-icons/SAPUI5_orange_vertical.svg"
import azure from "../../images/skill-icons/azure-devops-svgrepo-com.svg"
import photoshop from "../../images/skill-icons/photoshop-svgrepo-com.svg"

const SkillsContainer = styled.div`
    display: flex;
`

const SkillsTextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const SkillsTitle = styled.h3`
  span {
    background-color: rgba(255, 255, 255, 0.09);
    border-radius: 10px;
    color: var(--hover-text-color);
    font-size: 1.4em;
    padding: 5px 10px;
  }
`;

const SkillsText = styled.p`
  font-size: 1.2em;
  margin-top: 10px;
  padding: 10px;
`;

const IconSkillContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 30vw;
`

const IconSkill = styled.img`
    padding: 10px;
    width: 80px;
`

export default function Skills() {
    const [skillTitle, setSkillTitle] = useState("");
    const [skillText, setSkillText] = useState("");

    const skillsInfo = {
        html5: { title: "HTML 5", text: "HTML 5 Description" },
        css3: { title: "CSS 3", text: "CSS 3 Description" },
        javascript: { title: "JavaScript", text: "JavaScript Description" },
        react: { title: "React", text: "React Description" },
        sapui5: {title: "SAP UI5", text: "SAP UI5 Description"},
        azure: {title: "Azure DevOps", text: "Azure DevOps Description"},
        git: {title: "Git", text: "Git Description"},
        gitlab: {title: "Gitlab", text: "Gitlab Description"},
        figma: {title: "Figma", text: "Figma Description"},
        photoshop: {title: "Adobe Photoshop", text: "Adobe Photoshop Description"}
    };

    const handleMouseOver = (skill) => {
        setSkillTitle(skillsInfo[skill].title);
        setSkillText(skillsInfo[skill].text);
    };
    return (
        <SkillsContainer>
            <SkillsTextsContainer>
                <SkillsTitle>{skillTitle}</SkillsTitle>
                <SkillsText>{skillText}</SkillsText>
            </SkillsTextsContainer>
            <IconSkillContainer>
                <IconSkill src={html5} onMouseOver={() => handleMouseOver("html5")} />
                <IconSkill src={css3} onMouseOver={() => handleMouseOver("css3")} />
                <IconSkill src={javascript} onMouseOver={() => handleMouseOver("javascript")} />
                <IconSkill src={react} onMouseOver={() => handleMouseOver("react")} />
                <IconSkill src={sapui5} onMouseOver={() => handleMouseOver("sapui5")} />
                <IconSkill src={azure} onMouseOver={() => handleMouseOver("azure")} />
                <IconSkill src={git} onMouseOver={() => handleMouseOver("git")} />
                <IconSkill src={gitlab} onMouseOver={() => handleMouseOver("gitlab")} />
                <IconSkill src={figma} onMouseOver={() => handleMouseOver("figma")} />
                <IconSkill src={photoshop} onMouseOver={() => handleMouseOver("photoshop")} />
            </IconSkillContainer>
        </SkillsContainer>
    )
}