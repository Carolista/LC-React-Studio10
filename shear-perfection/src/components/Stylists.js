import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PhotoBox from './PhotoBox';

const PhotoGrid = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (max-width: 900px) {
        width: 530px;
        transition: 0.3s ease-in-out;
    }
    @media (min-width: 900px) {
        width: 810px;
        transition: 0.3s ease-in-out;
    }
    @media (min-width: 1200px) {
        width: 1090px;
        transition: 0.3s ease-in-out;
    }
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

Stylists.propTypes = {
    allStylists: PropTypes.array.isRequired,
};

export default Stylists;