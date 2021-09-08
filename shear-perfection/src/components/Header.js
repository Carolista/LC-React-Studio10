import React from 'react';
import styled from 'styled-components';

const StyledHeaderItems = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-width: 600px;
`;

const FauxNav = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    padding-right: 15px;
    border-right: 5px solid black;
`;

const FauxLink = styled.p`
    margin: 5px 0px;
`;

const CurrentPage = styled.span`
    color: darkmagenta;
    font-weight: 700;
`;

// PRIMARY COMPONENT
const Header = () => {

    return (
        <StyledHeaderItems>
            <img src="images/shear-perfection-logo.png" height="100px" alt="Shear Perfection logo" />
            <FauxNav>
                <FauxLink>List of Services</FauxLink>
                <FauxLink><CurrentPage>Our Stylists</CurrentPage></FauxLink>
                <FauxLink>Book an Appointment</FauxLink>
                <FauxLink>Testimonials</FauxLink>
            </FauxNav>
        </StyledHeaderItems>
    );
};

export default Header;