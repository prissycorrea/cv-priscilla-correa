import React, { useState } from "react";
import styled from "@emotion/styled";
import html5 from "../../images/skill-icons/html-5-svgrepo-com.svg"
import css3 from "../../images/skill-icons/css-3-svgrepo-com.svg"
import javascript from "../../images/skill-icons/javascript-svgrepo-com.svg"
import figma from "../../images/skill-icons/figma-svgrepo-com.svg"
import git from "../../images/skill-icons/git-svgrepo-com.svg"
import gitlab from "../../images/skill-icons/gitlab-svgrepo-com.svg"
import react from "../../images/skill-icons/react-svgrepo-com.svg"
import sapui5 from "../../images/skill-icons/SAPUI5_orange_vertical.png"
import azure from "../../images/skill-icons/azure-devops-svgrepo-com.svg"
import photoshop from "../../images/skill-icons/photoshop-svgrepo-com.svg"

const SkillsContainer = styled.div`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: space-between;
    width: 60vw;
`

const SkillsTextsContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 20vh;
    justify-content: flex-start;
    padding: 20px;
    width: 30vw;
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
`;

const IconSkillContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 20vh;
    width: 30vw;
`

const IconSkill = styled.img`
    opacity: 0.5;
    padding: 15px;
    width: 80px;
    transition: 0.3s;
    &:hover {
        opacity: 1;
    }
`

export default function Skills() {
    const [skillTitle, setSkillTitle] = useState("");
    const [skillText, setSkillText] = useState("");

    const skillsInfo = {
        html5: { title: "HTML 5", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla risus vitae vestibulum sagittis. Fusce feugiat est eros, ac tincidunt mi euismod nec. Ut luctus luctus purus, id laoreet lorem pulvinar at." },
        css3: { title: "CSS 3", text: "Curabitur non quam at risus ullamcorper gravida sed sit amet tortor. Nulla bibendum diam nec mauris aliquet, a bibendum arcu pretium. Vestibulum ultricies, massa in blandit luctus, lacus tortor semper lorem, eget interdum tortor arcu in nibh." },
        javascript: { title: "JavaScript", text: "Sed congue auctor condimentum. Phasellus dapibus congue nisl, in congue tellus feugiat vitae. Cras commodo lacus orci, id convallis ante pellentesque in. Mauris dapibus neque sem, nec laoreet mauris dictum id." },
        react: { title: "React", text: "Donec non purus pulvinar, interdum risus in, vestibulum magna. Aliquam erat volutpat. Maecenas tincidunt odio nec purus auctor, id luctus ante aliquet. Vestibulum fringilla neque eu metus feugiat, id iaculis diam consectetur." },
        sapui5: {title: "SAP UI5", text: "Proin accumsan, elit eu congue venenatis, mi magna maximus magna, vitae convallis est justo at neque. Cras egestas risus sed lacus cursus, vitae condimentum ex dapibus. Quisque porttitor scelerisque blandit."},
        azure: {title: "Azure DevOps", text: "Pellentesque sed odio at leo lobortis tincidunt at eget risus. Morbi nec dolor vulputate, aliquet neque id, luctus elit. Quisque lacinia elementum felis, at vestibulum magna bibendum sed."},
        git: {title: "Git", text: "Fusce consectetur orci elit, nec semper ex ultrices vel. Etiam imperdiet sem et dui dapibus, eget congue justo cursus. Vestibulum a egestas velit, at consequat metus. Donec pellentesque justo lorem, a viverra justo ornare in."},
        gitlab: {title: "Gitlab", text: "Aenean pellentesque, diam eget ullamcorper bibendum, leo lacus bibendum massa, eu pretium mauris diam id turpis. Quisque nec nisl pellentesque, lobortis nulla a, bibendum arcu. Morbi ac nisl ut odio dictum cursus."},
        figma: {title: "Figma", text: "Integer vel ligula id dui luctus consectetur vitae eu lectus. Pellentesque venenatis augue nec diam aliquet, non porta justo gravida. Aliquam mollis mi a ex dapibus, et dapibus lacus sagittis."},
        photoshop: {title: "Adobe Photoshop", text: "Ut sed nunc nec mi lacinia semper. Sed nec sem quis ipsum pharetra interdum. Curabitur a justo hendrerit, facilisis velit vitae, consectetur risus. Sed luctus tellus nec facilisis pellentesque."}
    };

    const handleMouseOver = (skill) => {
        setSkillTitle(skillsInfo[skill].title);
        setSkillText(skillsInfo[skill].text);
    };

    const handleMouseOut = () => {
        setSkillTitle("Skills");
        setSkillText("Passe o mouse sobre um ícone para obter mais informações.");
    };

    return (
        <SkillsContainer>
            <SkillsTextsContainer>
                <SkillsTitle><span>{skillTitle}</span></SkillsTitle>
                <SkillsText>{skillText}</SkillsText>
            </SkillsTextsContainer>
            <IconSkillContainer>
                <IconSkill src={html5} onMouseOver={() => handleMouseOver("html5")}  onMouseOut={handleMouseOut} />
                <IconSkill src={css3} onMouseOver={() => handleMouseOver("css3")}  onMouseOut={handleMouseOut} />
                <IconSkill src={javascript} onMouseOver={() => handleMouseOver("javascript")}  onMouseOut={handleMouseOut} />
                <IconSkill src={react} onMouseOver={() => handleMouseOver("react")}  onMouseOut={handleMouseOut} />
                <IconSkill src={sapui5} onMouseOver={() => handleMouseOver("sapui5")}  onMouseOut={handleMouseOut} />
                <IconSkill src={azure} onMouseOver={() => handleMouseOver("azure")}  onMouseOut={handleMouseOut} />
                <IconSkill src={git} onMouseOver={() => handleMouseOver("git")}  onMouseOut={handleMouseOut} />
                <IconSkill src={gitlab} onMouseOver={() => handleMouseOver("gitlab")}  onMouseOut={handleMouseOut} />
                <IconSkill src={figma} onMouseOver={() => handleMouseOver("figma")}  onMouseOut={handleMouseOut} />
                <IconSkill src={photoshop} onMouseOver={() => handleMouseOver("photoshop")}  onMouseOut={handleMouseOut} />
            </IconSkillContainer>
        </SkillsContainer>
    )
}