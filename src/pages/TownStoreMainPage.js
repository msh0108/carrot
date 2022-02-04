import React, { useState } from 'react';
import styled from "styled-components";

import TownInfoBox from '../components/TownStoreMainPage/TownInfoBox'
import TownStoreInfoBox from '../components/TownStoreMainPage/TownStoreInfoBox'
import TownPostscript from '../components/TownStoreMainPage/TownPostscript'



// 승혁님
import Top from "../components/Top";


function TownStoreMainPage() {
    

    return (
        <TownStoreMainContainer>
            <Top />
            <TownInfoBox />
            <TownStoreInfoBox />
            <TownPostscript />
            <Nothing />

        </TownStoreMainContainer>

    );
}


export default TownStoreMainPage;


const TownStoreMainContainer = styled.div`
    margin : 0 auto;
  width:1440px;
  height:3000px;
`;

const Nothing = styled.div`
    height : 900px;
`;


