// TODO: Add the useRef hook to the import from 'react'
import React from 'react';
// TODO: Import the createPortal method from 'react-dom'

import PropTypes from 'prop-types';
import styled from 'styled-components';

const accentColor = "darkmagenta";

const StyledBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: black;
    opacity: 0.8;
    width: 100vw;
    height: 100vh;
    z-index: 10;
`;

const StyledModal = styled.div`
    position: fixed;
    top: 230px;
    left: calc(50% - 300px);
    background-color: white;
    color: #222;
    width: 560px;
    padding: 25px;
    overflow: hidden;
    z-index: 50;   
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 0px;
`;

const Header = styled.h2`
    color: ${accentColor};
    margin: 0px 0px -5px;
`;

const Subheader = styled.p`
    font-weight: 700;
    margin: 20px 0px -5px;
`;

const StyledImage = styled.img`
    border: 3px solid ${accentColor};
`;

const StyledButton = styled.button`
    background-color: ${accentColor}; 
    color: white;
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    float: right;
    padding: 6px 10px;
    border: none;
    outline: none;  
    cursor: pointer;
`;

// PRIMARY COMPONENT
const StylistDetailsModal = (props) => {

    // TODO: Create a ref called 'modalRef' to identify a unique instance of this component as the one that should be displayed when its corresponding PhotoBox instance is clicked. Don't forget to add the necessary hook to the import from 'react'

    
    // Subcomponent - placing it inside gives it direct access to the primary component's props
    const Details = () => {

        // Deconstruction is utilized here to create variables for each of the stylist properties (except id) - it makes usage less clunky below
        const { name, image, experience, clientele, specialties, schedule, from, faveSTL, loves } = props.stylist;

        return (
            <Content>
                <div>
                    <Header>MEET THE STYLIST</Header>
                    <p>{`${name} has ${experience} years of experience as a stylist and primary serves ${clientele.join(" and ")}. Originally from ${from}, you will likely find ${name} in or around ${faveSTL} on weekends. Favorite activities include ${loves}.`}</p>

                    <Subheader>SPECIALTIES:</Subheader> 
                    <p>{specialties.join(", ")}</p>

                    <Subheader>SCHEDULE:</Subheader> 
                    <p>{schedule}</p>
                </div>   
                <StyledImage src={`images/${image}`} alt={`${name}`} height="250px"/>
            </Content>
        )
    }

    // Subcomponent - has access to primary component's props
    const Backdrop = () => {
        // TODO: Add an onClick attribute and pass in the 'handleClose' prop that is received from the Stylists component
        return <StyledBackdrop/>;
    }

    // Subcomponent - has access to primary component's props
    const Modal = () => {
        // TODO: Add an onClick attribute to <StyledButton> and pass in the 'handleClose' prop that is received from the Stylists component
        return (
            <StyledModal>
                <Details />
                <StyledButton>Close</StyledButton>
            </StyledModal>
        );
    }

    return (
        // TODO: Give the div a ref attribute with the value modalRef that you created above.
        // TODO: Set Backdrop and Modal into portals that are linked to the siblings of app-root you created in index.html. Make sure each one displays conditionally - only if the 'show' prop is true. Also make sure you've imported the createPortal method from 'react-DOM' at the top!
        <div>

        </div>
    );
};

StylistDetailsModal.propTypes = {
    stylist: PropTypes.object.isRequired,
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
}

export default StylistDetailsModal;