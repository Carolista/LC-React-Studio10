import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

const boxSize = 240 + 'px';
const accentColor = 'darkmagenta';

const ShadowedBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: ${boxSize};
    height: ${boxSize};
    padding: 0px;
    margin: 0px 0px 35px;
    border: 3px solid white;
    cursor: pointer;
    box-shadow: 10px 10px ${accentColor};
    filter: grayscale(100%);
    transition: all 1s;
    &:hover {
        filter: grayscale(0%);
        transition: all 1s;
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
    transition: all 1s;
    ${ShadowedBox}:hover & {
        opacity: 0.7;
        transition: all 1s;
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

PhotoBox.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default PhotoBox;