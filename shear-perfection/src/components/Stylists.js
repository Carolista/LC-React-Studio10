import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PhotoBox from './PhotoBox';
// TODO: Import the StylistDetailsModal component
import StylistDetailsModal from './StylistDetailsModal';

const PhotoGrid = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    justify-content: space-between;
    flex-wrap: wrap;
    transition: width 1s ease;
    @media (max-width: 900px) {
        width: 530px;
    }
    @media (min-width: 900px) {
        width: 810px;
    }
    @media (min-width: 1200px) {
        width: 1090px;
    }
`;

// Secondary component
const Stylist = (props) => {

    const stylist = props.oneStylist;

    // TODO: Add a state variable called open and initialize it to the boolean value false.
    const [open, setOpen] = useState(false);

    // TODO: Create an event handler function called handleOpenModal that sets 'open' to true.
    const handleOpenModal = () => {
        setOpen(true);
    };

    // TODO: Create an event handler function called handleCloseModal that sets 'open' back to false.
    const handleCloseModal = () => {
        setOpen(false);
    };

    return (
        // TODO: Add a fragment here so it can wrap and return both the PhotoBox and StylistDetailsModal components. Bonus: use the shorthand syntax!
        // TODO: On the <PhotoBox> component implementation, add the handleOpen prop as an attribute and pass in the event handler that opens the modal.
        // TODO: Implement the StylistDetailsModal once you've imported it at the top. Add attributes for the props stylist, show, and handleClose - then pass in the appropriate values from this component.
        <>
            <PhotoBox id={`photo-box-${stylist.id}`} stylist={stylist} handleOpen={handleOpenModal} />;
            <StylistDetailsModal stylist={stylist} show={open} handleClose={handleCloseModal}/>
        </>
    );
}

// PRIMARY COMPONENT
const Stylists = (props) => {

    const list = props.allStylists.map(aStylist => {
        return <Stylist key={aStylist.id} oneStylist={aStylist} />
    });
        
    return (
        <React.Fragment>
            <h2>MEET OUR TALENTED TEAM</h2>
            <PhotoGrid>
                {list}
            </PhotoGrid>
        </React.Fragment>
    );
};

Stylist.propTypes = {
    oneStylist: PropTypes.object.isRequired,
}

Stylists.propTypes = {
    allStylists: PropTypes.array.isRequired,
};

export default Stylists;