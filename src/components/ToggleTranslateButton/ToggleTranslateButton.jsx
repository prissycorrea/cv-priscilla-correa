import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from "@emotion/styled";
import brazilFlag from '../../images/language-flags/brazil-flag.png';
import ukFlag from '../../images/language-flags/uk-flag.png';

const SwitchContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 80px;
  
  &:hover {
    background-color: #7e58c2;
  }

  img {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    margin-right: 10px;
  }

  span {
    font-size: 1em;
    background-color: transparent;

    &:hover {
    color: #1C1C1C;
  }
  }
`;

export default function ToggleTranslateButton() {
    const { i18n } = useTranslation();
    const [isEnglish, setIsEnglish] = useState(false);

    const changeLanguage = () => {
        const language = isEnglish ? 'pt' : 'en';
        i18n.changeLanguage(language);
        setIsEnglish(!isEnglish);
    }

    return (
      <SwitchContainer>
        <Button onClick={changeLanguage}>
            <img src={isEnglish ? brazilFlag : ukFlag} alt="flag" />
            <span>{isEnglish ? 'PT' : 'EN'}</span>
        </Button>
      </SwitchContainer>
    )
}
