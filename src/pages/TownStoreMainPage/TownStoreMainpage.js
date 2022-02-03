import React, { useState } from 'react';
import styled from "styled-components";

import { keywords } from "../../Tests";

function TownStoreMainPage() {
    const data = keywords.animals.all;

    return (
      <TownStoreMainContainer>
          <TownStoreMiddleBox>
              <TownStoreMiddleBoxleft>
                  <img src= {keywords.animals.all[0].img} />
              </TownStoreMiddleBoxleft>

              <TownStoreMiddleBoxright>
                  <h1>
                      {/* <img src={Location} /> */}
                      &nbsp; 내 근처에서 찾는<br />동네가게
                  </h1>
                  <h4>
                      우리 동네 가게를 찾고 있나요? <br />동네 주민이 남긴 진짜 후기를 함께 확인해보세요!
                  </h4>
                <TownStoreMiddleBoxButton>
                    <h3>
                        ★ 동네 설정하고 가게를 찾아보세요!
                    </h3>
                </TownStoreMiddleBoxButton>
              </TownStoreMiddleBoxright>
          </TownStoreMiddleBox>
          <TownStoreLastBox>
            <h1>우리동네 가게 소식</h1>
            <TownStoretitleList>
                <TownStoretitleListButton>
                    <a href="https://town.daangn.com/regions/6088/stores">
                    전체
                    </a>
                </TownStoretitleListButton>
                <TownStoretitleListButton>
                    <a href="https://town.daangn.com/regions/6088/stores?categoryId=1160">
                    카페
                    </a>
                </TownStoretitleListButton>
                <TownStoretitleListButton>
                    <a href="https://town.daangn.com/regions/6088/stores?categoryId=18">
                    휴대폰판매
                    </a>
                </TownStoretitleListButton>
                <TownStoretitleListButton>
                    <a href="https://town.daangn.com/regions/6088/stores?categoryId=267">
                    이사
                    </a>
                </TownStoretitleListButton>
                <TownStoretitleListButton>
                    <a href="https://town.daangn.com/regions/6088/stores?categoryId=224">
                    네일샵
                    </a>
                </TownStoretitleListButton>
                <TownStoretitleListButton>
                    <a href="https://town.daangn.com/regions/6088/stores?categoryId=265">
                    미용실
                    </a>
                </TownStoretitleListButton>
                <TownStoretitleListButton>
                    <a href="https://town.daangn.com/regions/6088/stores?categoryId=223">
                    피부관리
                    </a>
                </TownStoretitleListButton>
                <TownStoretitleListButton>
                    <a href="https://town.daangn.com/regions/6088/stores?categoryId=703">
                    기타학원
                    </a>
                </TownStoretitleListButton>
                <TownStoretitleListButton>
                    <a href="https://town.daangn.com/regions/328/stores?categoryId=212">
                    공인중개사
                    </a>
                </TownStoretitleListButton>
                <TownStoretitleListButton>
                    <a href="https://town.daangn.com/regions/328/stores?categoryId=244">
                    주택수리종합
                    </a>
                </TownStoretitleListButton>
            </TownStoretitleList>

            <TownStoreH3>
                다양한 동네가게를 볼 수 있어요.
            </TownStoreH3>
                {data.map((item) => (
                    <>
                        <img href={item.img} />
                        <p>{item.title}</p>
                        <p>{item.cost}</p>
                    </>))}
                <Nothing >
                </Nothing>
            </TownStoreLastBox>
      </TownStoreMainContainer>
      
    );
  }
  
export default TownStoreMainPage;




const TownStoreMainContainer = styled.div`
  width:1450px;
  height:2000px;

`;

const TownStoreMiddleBox = styled.div`
  margin : 150px 50px;;

  width:1440px;
  height:800px;
  text-align:center;
  display : flex;
  flexDirection: 'row' ;
  
`;
  

const TownStoreMiddleBoxleft = styled.div`
  margin: 20px;
  width : 700px;
  height : 800px;

  img {
      width: 100%;
  }
  
  
`;


const TownStoreMiddleBoxright = styled.div`
  float : right;
  
  margin: 20px;
  margin-top : 150px;
  width : 720px;
  height : 400px;

  h1{
    font-size: 2.8em;
  }

  img{
      width : 50px;
      
  }
  h4{
    font-size: 1.5em;
  }
  
`;





const TownStoreMiddleBoxButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size : 1.3em;
    margin-left: 100px;
    width: 520px;
    height: 70px;;
    border-radius: 40px;
    background-color: #f55b1e;
    color: white;
`;




const TownStoreLastBox = styled.div`
    width: 1440px;
    height: 1300px ;
    background-color: rgba(255, 239, 207, 0.55);
    padding : 30px 80px ;

    h1{
        font-size: 2.9em;
    }
`;





const TownStoretitleList = styled.div`

`;


  const TownStoretitleListButton = styled.button`
    font-size : 1.5em;
    margin : 14px;
    padding: 10px 10px;
    border-radius : 100px;
    background: white;
    

    a{
        text-decoration: none;
    }
    a: hover{
        text-decoration: underline;
        font-weight : bold;
        color: #f04124;
    }
    a:active{
        color: #f04124;
    }
    a:visited{
        color: black;
    }
  `;


  const TownStoreH3 = styled.h3`
    font-size : 1.5em;
    margin : 100px 20px 50px 20px;
  `;

  const TownStoreListDetail = styled.div`
    background-color: #fff;
    float: left;
    width: 300px;
    height: 300px;
    margin: 20px 30px;
    border-radius:5px;

    a{
        text-decoration: none;
    }
    
    a:visited{
        color: black;
    }

    img{
        border-radius:5px;
        width:100%;
        height: 50%;
    }

    h4{
        margin-left:10px;
        color: rgb(18, 116, 90);
    }
    h5{
        margin-left:10px;
    }

    p{
        margin-left:10px;
        font-size: 0.8em;
        color: rgb(145, 143, 143);
    }
  `;


  const TownStoreLastBoxButton = styled.div`
    margin : 830px 450px;
    width:550px;
    height : 60px;
    padding : 5px;
    font-size : 1.5em;
    background-color : #cdcdcd;
    display: flex;
    align-items: center;
    justify-content: center;
    a{
        text-decoration: none;
    }
    
    a:visited{
        color: black;
    }
    
    img{
        width : 35px;
    }
  `;


  const TownStorePostscript = styled.div`
  margin : 200px 70px;
  margin-bottom : 200px;
  padding-left : 20px;
  width : 1440px;
  height: 300px;
  h2{
      margin-left : 30px;
      font-size:2.5em;
  }
`;

const TownStorePostscriptDetail = styled.div`
    float: left;
    width: 400px;
    height: 350px;
    margin: 20px 40px;
    border-radius:5px;

    a{
        text-decoration: none;
    }
    
    a:visited{
        color: black;
    }

    h4{
        font-size: 1.5em;
    }

    img{
        width: 40px;
    }
`;

const TownStorePostscriptDetailText = styled.div`
    background-color : #DCEAFE;
    padding : 1px 10px;
    width:100%;
    height: 350px;
    line-height : 100%;

    h4{
        font-weight: bold;
        font-size: 2em;
        margin-left:10px;
        color: rgb(18, 116, 90);
    }
    
    p{
        margin-left:10px;
        font-size: 1.5em;
        color: rgb(145, 143, 143);
    }
    h5{
        margin-left:10px;
        font-size: 1.6em;
        line-height : 180%;
    }
`;



const Nothing = styled.div`
    height : 300px;
`;


