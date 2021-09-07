import React from 'react';
import styled from 'styled-components';

const boxSize = 240 + 'px';

const ShadowedBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: ${boxSize};
    height: ${boxSize};
    padding: 0px;
    margin: 0px 0px 30px;
    border: 5px solid white;
    box-shadow: 15px 15px darkmagenta;
`;

const PhotoBox = (props) => {

    return (
        <ShadowedBox>
            <img src={`images/${props.image}`} width={boxSize} height={boxSize} alt={props.name} />
        </ShadowedBox>
    );
};

export default PhotoBox