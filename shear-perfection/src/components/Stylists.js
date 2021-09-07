import React from 'react';
import styled from 'styled-components';
import PhotoBox from './PhotoBox';

const PhotoGrid = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 810px;
`;

const Stylists = (props) => {

    const Photos = () => {

        const list = props.allStylists.map(stylist => {
            return <PhotoBox key={stylist.id} name={stylist.name} image={stylist.image}  />;
        });
        
        return (
            <React.Fragment>
                {list}
            </React.Fragment>
        );
    };

    return (
        <React.Fragment>
            <h1>Meet Our Talented Team</h1>
            <PhotoGrid>
                <Photos />
            </PhotoGrid>
        </React.Fragment>
    );
};

export default Stylists