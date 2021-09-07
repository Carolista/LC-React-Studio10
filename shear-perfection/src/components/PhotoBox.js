import React from 'react';
import styled, { keyframes } from 'styled-components';

const boxSize = 240 + 'px';

const desaturate = keyframes`
    from { filter: grayscale(0%); }
    to { filter: grayscale(100%); }
`;

const colorize = keyframes`
    from { filter: grayscale(100%); }
    to { filter: grayscale(0%); }
`;

const appear = keyframes`
    from { opacity: 0; }
    to { opacity: 0.7 }
`;

const disappear = keyframes`
    from { opacity: 0.7; }
    to { opacity: 0 }
`;

const ShadowedBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: ${boxSize};
    height: ${boxSize};
    padding: 0px;
    margin: 0px 0px 40px;
    border: 3px solid white;
    cursor: pointer;
    animation: ${desaturate} 1s;
    box-shadow: 10px 10px darkmagenta;
    filter: grayscale(100%);
    &:hover {
        animation: ${colorize} 1s;
        filter: grayscale(0%);
    }
`;

const Overlay = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 16pt;
    color: white;
    background-color: black;
    width: ${boxSize};
    height: 45px;
    bottom: 15px;
    opacity: 0;
    z-index: 2;
    animation: ${disappear} 1s;
    ${ShadowedBox}:hover & {
        opacity: 0.7;
        animation: ${appear} 1s;
    }
`;

const PhotoBox = (props) => {

    return (
        <ShadowedBox>
            <Overlay>{props.name}</Overlay>
            <img src={`images/${props.image}`} width={boxSize} height={boxSize} alt={props.name} />
        </ShadowedBox>
    );
};

export default PhotoBox