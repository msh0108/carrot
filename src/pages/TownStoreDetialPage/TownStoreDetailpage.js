import React, { useState } from 'react';
import styled from "styled-components";

import Market from '../components/TownStoreDetialPage/market.svg';
import Phone from '../components/TownStoreDetialPage/phone.svg';
import Location from '../components/TownStoreDetialPage/location.svg';
import Clock from '../components/TownStoreDetialPage/clock.svg';
import Mapsample from '../components/TownStoreDetialPage/mapsample.png';

function TownStoreDetailPage() {

    const [Customer, Customers] = useState(0);


    return (
      <TownStoreDetailPageBox>
        <TownStoreDetailpageContainer>

          <TownStoreDetailpageimg>
            <img src= "http://placeimg.com/640/480/any"></img>
          </TownStoreDetailpageimg>

          <TownStoreDetailpageTextbox>

            <TownStoreDetailpageTitlebox>

              <TownStoreDetailpageRound>
                프로필사진
              </TownStoreDetailpageRound>

              <TownStoreDetailpageTitle>
                <h3>대패상회 사당역점</h3>
                <p> &nbsp;지역&nbsp; |   &nbsp;단골👨‍👩‍👧‍👦&nbsp;{Customer}</p>
              </TownStoreDetailpageTitle>

              <TownStoreDetailpageTitleButton onClick={ ()=>{ Customers( Customer + 1 
          ) } }> + 단골맺기</TownStoreDetailpageTitleButton>

            </TownStoreDetailpageTitlebox>

            <TownStoreDetailpageList>
                <ul>
                  <li>
                    <img src={Market} /> &nbsp; 사당역 대패삼겹살 맛집🥰🥰< br /> 
                    &nbsp; &nbsp; 삼겹살집인데 카페같은 인테리어, < br />
                    &nbsp; &nbsp; 청결하고,친절한곳 가장중요한 맛있는집
                  </li>
                  <li>
                    <img src={Clock} /> &nbsp; 
                    10:00 ~ 22:00, 평일
                  </li>
                  <li>
                    <img src={Phone} /> &nbsp; 
                    02-588-0666 
                  </li>
                  <li>
                    <img src={Location} /> &nbsp;
                    <span>서울 동작구 동작대로7길 65 1층</span>
                  </li>
                </ul>
            </TownStoreDetailpageList>
            <MapModal>
              <img src= {Mapsample} />
            </MapModal>
          </TownStoreDetailpageTextbox>
        </TownStoreDetailpageContainer>
      </TownStoreDetailPageBox>
    );
  }
  
  export default TownStoreDetailPage;



  const TownStoreDetailPageBox = styled.div`
    width : 100%;
    height : 100%;
    background-color : rgba(238, 106, 84, 0.18);
    `;
  
  const TownStoreDetailpageContainer = styled.div`
    border: 1px solid black;
    background: white;
    width :800px;
    height : 1200px;
    margin : 100px;
    
    `;

  const TownStoreDetailpageimg = styled.div`
    width: 100%;
    height : 300px;
    img{
      width: 100%;
      height : 100%;
    }
  `;

  const TownStoreDetailpageTextbox = styled.div`
    
    width: 100%;
    height : 700px;

  `;

  const TownStoreDetailpageTitlebox = styled.div`
    width: 700px;
    height : 100px;
    margin : 50px;
    padding-bottom : 10px;
    border-bottom : 2px solid #cdcdcd;
    display : flex;
    flexDirection: 'row' ;
  `;


  const TownStoreDetailpageRound = styled.div`
  
    width: 100px;
    height: 100px;
    border-radius:100px;
    background-color: #C4C4C4;
    display: flex;
    align-items: center;
    justify-content: center;
  `

  const TownStoreDetailpageTitle = styled.div`
    float : left;
    width: 350px;
    height: 100px;
    margin-left 50px;
    h3{
      font-size:22px;
    }
    p{
      font-size: 14px;
    }
  `;

  const TownStoreDetailpageTitleButton = styled.button`
    width: 100px;
    height: 40px;
    margin: 45px 0px 0px 80px;
    color: white;
    background-color : #F14124;
  `;


  const TownStoreDetailpageList = styled.div`
    width: 650px;
    height : 320px;
    margin : 10px;
    padding-top : 5px;
    padding-left : 0;
    font-size : 17px;
    line-height: 300%;
    

    li{
      list-style-type:none;
    }
    span{
      color: #F14124;
      font-weight:bold;
    }
  `;


  const MapModal = styled.div`
    width: 650px;
    height : 300px;
    margin : 0 75px;
    background : #eee;
    
    img{
      width: 100%;
      height : 100%;
    }
  `;



