import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import html5 from "../../images/skill-icons/html-5-svgrepo-com.svg";
import css3 from "../../images/skill-icons/css-3-svgrepo-com.svg";
import javascript from "../../images/skill-icons/javascript-svgrepo-com.svg";
import figma from "../../images/skill-icons/figma-svgrepo-com.svg";
import git from "../../images/skill-icons/git-svgrepo-com.svg";
import gitlab from "../../images/skill-icons/gitlab-svgrepo-com.svg";
import react from "../../images/skill-icons/react-svgrepo-com.svg";
import sapui5 from "../../images/skill-icons/SAPUI5_orange_vertical.png";
import azure from "../../images/skill-icons/azure-devops-svgrepo-com.svg";
import photoshop from "../../images/skill-icons/photoshop-svgrepo-com.svg";
import { devices } from "../../utils/devicesSizes";

const SkillsContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: space-between;
  margin: auto;
  width: 60vw;
  @media ${devices.mobile} {
    align-items: center;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    width: 95vw;
  }
`;

const SkillsTextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 40vh;
  justify-content: center;
  padding: 25px;
  width: 30vw;
  @media ${devices.mobile} {
    width: 92vw;
  }
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
  text-align: justify;
  @media ${devices.mobile} {
    font-size: 1em;
  }
`;

const IconSkillContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 20vh;
  width: 30vw;
  @media ${devices.mobile} {
    width: 92vw;
  }
`;

const IconSkill = styled.img`
  opacity: 0.5;
  padding: 15px;
  width: 100px;
  transition: 0.3s;
  &:hover {
    opacity: 1;
  }
  @media ${devices.mobile} {
    width: 45px;
  }
`;

export default function Skills() {
  const { t } = useTranslation("skills");
  const initialSkillTitle = t("skills.title");
  const initialSkillText = t("skills.description");
  const [skillTitle, setSkillTitle] = useState(initialSkillTitle);
  const [skillText, setSkillText] = useState(initialSkillText);

  const skillsInfo = {
    html5: {
      title: t("skills.html5.title"),
      text: t("skills.html5.description"),
    },
    css3: { title: t("skills.css3.title"), text: t("skills.css3.description") },
    javascript: {
      title: t("skills.javascript.title"),
      text: t("skills.javascript.description"),
    },
    react: {
      title: t("skills.javascript.title"),
      text: t("skills.javascript.description"),
    },
    sapui5: {
      title: t("skills.sapui5.title"),
      text: t("skills.sapui5.description"),
    },
    azure: {
      title: t("skills.azure.title"),
      text: t("skills.azure.description"),
    },
    git: { title: t("skills.git.title"), text: t("skills.git.description") },
    gitlab: {
      title: t("skills.gitlab.title"),
      text: t("skills.gitlab.description"),
    },
    figma: {
      title: t("skills.figma.title"),
      text: t("skills.figma.description"),
    },
    photoshop: {
      title: t("skills.photoshop.title"),
      text: t("skills.photoshop.description"),
    },
  };

  const handleMouseOver = (skill) => {
    setSkillTitle(skillsInfo[skill].title);
    setSkillText(skillsInfo[skill].text);
  };

  const handleMouseOut = () => {
    setSkillTitle(t("skills.title"));
    setSkillText(t("skills.description"));
  };

  return (
    <SkillsContainer id="skills">
      <SkillsTextsContainer>
        <SkillsTitle>
          <span>{skillTitle}</span>
        </SkillsTitle>
        <SkillsText>{skillText}</SkillsText>
      </SkillsTextsContainer>
      <IconSkillContainer>
        <IconSkill
          src={html5}
          onMouseOver={() => handleMouseOver("html5")}
          onMouseOut={handleMouseOut}
        />
        <IconSkill
          src={css3}
          onMouseOver={() => handleMouseOver("css3")}
          onMouseOut={handleMouseOut}
        />
        <IconSkill
          src={javascript}
          onMouseOver={() => handleMouseOver("javascript")}
          onMouseOut={handleMouseOut}
        />
        <IconSkill
          src={react}
          onMouseOver={() => handleMouseOver("react")}
          onMouseOut={handleMouseOut}
        />
        <IconSkill
          src={sapui5}
          onMouseOver={() => handleMouseOver("sapui5")}
          onMouseOut={handleMouseOut}
        />
        <IconSkill
          src={azure}
          onMouseOver={() => handleMouseOver("azure")}
          onMouseOut={handleMouseOut}
        />
        <IconSkill
          src={git}
          onMouseOver={() => handleMouseOver("git")}
          onMouseOut={handleMouseOut}
        />
        <IconSkill
          src={gitlab}
          onMouseOver={() => handleMouseOver("gitlab")}
          onMouseOut={handleMouseOut}
        />
        <IconSkill
          src={figma}
          onMouseOver={() => handleMouseOver("figma")}
          onMouseOut={handleMouseOut}
        />
        <IconSkill
          src={photoshop}
          onMouseOver={() => handleMouseOver("photoshop")}
          onMouseOut={handleMouseOut}
        />
      </IconSkillContainer>
    </SkillsContainer>
  );
}
