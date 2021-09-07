import React, { useState } from 'react';
import Header from './components/Header';
import Stylists from './components/Stylists';
import styled from 'styled-components';

const MainArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: top;
    margin: 40px 0px 0px;
`;

const App = () => {

    const [stylists, setStylists] = useState([]);

    return (
        <React.Fragment>
            <Header />
            <MainArea>
                <Stylists stylists={stylists} />
            </MainArea>
        </React.Fragment>
    );
};

export default App