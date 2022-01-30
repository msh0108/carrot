import React, { useState } from 'react';
import styled from "styled-components";

import Userdefault from '../components/TownStoreMainPage/userdefault.svg';
import TownTop from '../components/TownStoreMainPage/TownTop.png';
import Location from '../components/TownStoreMainPage/location.svg';
import StorePicture1 from '../components/TownStoreMainPage/store1.png';
import StorePicture2 from '../components/TownStoreMainPage/store2.png';
import StorePicture3 from '../components/TownStoreMainPage/store3.png';
import StorePicture4 from '../components/TownStoreMainPage/store4.svg';
import StorePicture5 from '../components/TownStoreMainPage/store5.png';
import StorePicture6 from '../components/TownStoreMainPage/store6.png';
import StorePicture7 from '../components/TownStoreMainPage/store7.png';
import StorePicture8 from '../components/TownStoreMainPage/store8.png';
import PostscriptClick from '../components/TownStoreMainPage/PostscriptClick.png';

function TownStoreMainPage() {
    return (
      <TownStoreMainContainer>
          <TownStoreMiddleBox>
              <TownStoreMiddleBoxleft>
                  <img src= {TownTop} />
              </TownStoreMiddleBoxleft>

              <TownStoreMiddleBoxright>
                  <h1>
                      <img src={Location} />
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

            <TownStoreListDetail>
                <a href='https://town.daangn.com/bp/1379688'>
                    <img src={StorePicture1} />
                    <h4>여성의류전문점</h4>
                    <h5>지니샵</h5>
                    <p>전라남도 영암군 삼호읍</p>
                </a>
            </TownStoreListDetail>
            <TownStoreListDetail>
                <a href='https://town.daangn.com/bp/1379690'>
                    <img src={StorePicture2} />
                    <h4>카페</h4>
                    <h5>봉명동내커피</h5>
                    <p>광주광역시 동구 금남로2가</p>
                </a>
            </TownStoreListDetail>
            <TownStoreListDetail>
                <a href='https://town.daangn.com/bp/1379692'>
                    <img src={StorePicture3} />
                    <h4>네일샵</h4>
                    <h5>쌍촌동 다예네일</h5>
                    <p>광주광역시 서구 쌍촌동</p>
                    </a>
            </TownStoreListDetail>
            <TownStoreListDetail>
                <a href='https://town.daangn.com/bp/1379697'>
                    <img src={StorePicture4} />
                    <h4>십자수/뜨개</h4>
                    <h5>뜨개지니</h5>
                    <p>경기도 양주시 만송동</p>
                    </a>
            </TownStoreListDetail>
            <TownStoreListDetail>
                <a href='https://town.daangn.com/bp/1379698'>
                    <img src={StorePicture5} />
                    <h4>일반중식점</h4>
                    <h5>라땅쟈 마라탕</h5>
                    <p>경기도 시흥시 정왕동</p>
                    </a>
            </TownStoreListDetail>
            <TownStoreListDetail>
                <a href='https://town.daangn.com/bp/1379700'>
                    <img src={StorePicture6} />
                    <h4>카페/디저트</h4>
                    <h5>설빙장림점</h5>
                    <p>부산광역시 사하구 장림동</p>
                    </a>
            </TownStoreListDetail>
            <TownStoreListDetail>
                <a href='https://town.daangn.com/bp/1379707'>
                    <img src={StorePicture7} />
                    <h4>가스설비</h4>
                    <h5>경동나비엔 음성중앙점</h5>
                    <p>충청북도 음성군 대소면</p>
                    </a>
            </TownStoreListDetail>
            <TownStoreListDetail>
                <a href='https://town.daangn.com/bp/1379897'>
                    <img src={StorePicture8} />
                    <h4>김치판매</h4>
                    <h5>권여사김치찜</h5>
                    <p>경기도 수원시 장안구 정자동</p>
                    </a>
            </TownStoreListDetail>

            <TownStoreLastBoxButton>
                <a href='https://town.daangn.com/'>
                    <h3>
                        내 동네 설정하고 우리동네 가게 찾기  &nbsp;
                        <img src={PostscriptClick} />
                    </h3>
                </a>
              </TownStoreLastBoxButton>

          </TownStoreLastBox>


          <TownStorePostscript>
              <h2>동네주민의 진짜 후기를 찾아보세요.</h2>
              <TownStorePostscriptDetail>
                  <a href='https://town.daangn.com/bp/330711'>
                    <img src={Userdefault} />
                    <h4>대박살롱 님의 추천</h4>
                    <TownStorePostscriptDetailText>
                        <h4>밍스파</h4>
                        <p>대전광역시 서구 둔산동</p>
                        <h5>"엄마랑 커플마사지 받고 왔어요.. 다들 치절하시고 차근차근 잘해주셨어요!!"</h5>
                    </TownStorePostscriptDetailText>
                  </a>
              </TownStorePostscriptDetail>
              <TownStorePostscriptDetail>
                  <a href='https://town.daangn.com/bp/977771'>
                    <img src={Userdefault} />
                    <h4>비우는중 님의 추천</h4>
                    <TownStorePostscriptDetailText>
                        <h4>카페하인츠 삼거리점</h4>
                        <p>충청남도 천안시 동남구 청룡동</p>
                        <h5>"쿠폰은 발급 했지만, 누구나 사용할 수 있는건 아니에요 문의등록 해야 사용하실 수 있어요!</h5>
                    </TownStorePostscriptDetailText>
                  </a>
              </TownStorePostscriptDetail>
              <TownStorePostscriptDetail>
                  <a href='https://town.daangn.com/bp/330711'>
                    <img src={Userdefault} />
                    <h4>재정오빠 님의 추천</h4>
                    <TownStorePostscriptDetailText>
                        <h4>GO익스프레스</h4>
                        <p>대전광역시 달서구 성당동</p>
                        <h5>"♥♥ 일단 한 번 가보세요 ! ♥♥ "</h5>
                    </TownStorePostscriptDetailText>
                  </a>
              </TownStorePostscriptDetail>
          </TownStorePostscript>
          <Nothing >
              
          </Nothing>
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


