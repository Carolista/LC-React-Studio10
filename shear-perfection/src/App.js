import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Stylists from './components/Stylists';
import styled from 'styled-components';

const MainArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 30px 0px 0px;
`;

const App = () => {

    const [stylists, setStylists] = useState([]);

    const getStylists = async () => {
        const response = await fetch("data/stylistData.json");
        const data = await response.json();
        const stylistArray = data.map(obj => {
            return {
                id: obj.id,
                name: obj.name,
                image: obj.img
            };
        });
        setStylists(stylistArray);
    };

    useEffect(() => {
        getStylists();
    }, []);

    return (
        <React.Fragment>
            <Header />
            <MainArea>
                {stylists.length > 0 && <Stylists allStylists={stylists} />}
            </MainArea>
        </React.Fragment>
    );
};

export default App