import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
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

    const modalRef = useRef();
    
    // Subcomponent - placing it inside gives it direct access to primary component's props
    const Details = () => {

        // Used deconstruction to create variables for all stylist properties (except id) - it makes usage less clunky below
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

    // Subcomponent
    const Backdrop = () => {
        return <StyledBackdrop onClick={props.handleClose} />;
    }

    // Subcomponent
    const Modal = () => {
        return (
            <StyledModal>
                <Details />
                <StyledButton onClick={props.handleClose}>Close</StyledButton>
            </StyledModal>
        );
    }

    return (
        // Set Backdrop and Modal into portals as siblings of app-root
        <div ref={modalRef}>
            {props.show && createPortal(<Backdrop />, document.getElementById("backdrop-root"))}
            {props.show && createPortal(<Modal />, document.getElementById("modal-root"))}
        </div>
    );
};

StylistDetailsModal.propTypes = {
    stylist: PropTypes.object.isRequired,
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
}

export default StylistDetailsModal;