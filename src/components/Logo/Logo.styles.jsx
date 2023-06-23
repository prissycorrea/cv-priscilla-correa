import { css } from '@emotion/react';

const logoContainerStyles = css`
    width: 50px;
    height: 50px;
    border: 5px solid green;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
`


export default logoContainerStyles;