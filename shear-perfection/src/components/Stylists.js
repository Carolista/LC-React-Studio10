import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PhotoBox from './PhotoBox';
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

const Stylist = (props) => {

    const stylist = props.oneStylist;

    const [open, setOpen] = useState(false);

    const handleOpenModal = () => {
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };

    return (
        <>
            <PhotoBox id={`photo-box-${stylist.id}`} stylist={stylist} handleOpen={handleOpenModal} />;
            <StylistDetailsModal stylist={stylist} show={open} handleClose={handleCloseModal}/>
        </>
    );
}

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