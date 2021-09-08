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
    min-width: 600px;
`;

const App = () => {

    const [stylists, setStylists] = useState([]);

    // Use async and await to handle fetch and response of JSON
    const getStylists = async () => {
        const response = await fetch("data/stylistData.json");
        const data = await response.json();
        const stylistArray = data.map(obj => {
            return {
                id: obj.id,
                name: obj.name,
                image: obj.image,
                experience: obj.experience,
                clientele: obj.clientele,
                specialties: obj.specialties,
                schedule: obj.schedule,
                from: obj.from,
                faveSTL: obj.faveSTL,
                loves: obj.loves
            };
        });
        setStylists(stylistArray);
    };

    // Initiate fetch function
    useEffect(() => {
        getStylists();
    }, []);

    // Send all regular page content to 'root' in index.html
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