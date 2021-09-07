import React from 'react';
import styled from 'styled-components';
import PhotoBox from './PhotoBox';

const PhotoGrid = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 810px;
`;



const Stylists = (props) => {

    const Photos = () => {

        const list = props.stylists.map(stylist => {
            return <PhotoBox name={stylist.name} image={stylist.img}  />
        })

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
                <PhotoBox image="kaylee.jpg" name="Kaylee" />
                <PhotoBox image="joe.jpg" name="Joe" />
                <PhotoBox image="susannah.jpg" name="Susannah" />
                <PhotoBox image="tariq.jpg" name="Tariq" />
            </PhotoGrid>
        </React.Fragment>
    );
};

export default Stylists