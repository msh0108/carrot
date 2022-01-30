import React, { useState } from 'react';
import styled from "styled-components";
import Abc from '../components/1234.jpeg';
import Userdefault from '../components/userdefault.svg';


function TownStoreMainpage() {
    return (
      <TownStoreMainContainer>
          <TownStoreMiddleBox>
            <h1>내 근처에서 찾는<br />동네가게</h1>
            <h4>
                우리 동네 가게를 찾고 있나요? <br />동네 주민이 남긴 진짜 후기를 함께 확인해보세요!
            </h4>
          <TownStoreMiddleBoxButton>
            <h3>
                ★ 동네 설정하고 가게를 찾아보세요!
            </h3>
          </TownStoreMiddleBoxButton>
          </TownStoreMiddleBox>
          <TownStoreLastBox>
            <h1>우리동네 가게 소식</h1>
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

            <TownStoreH3>
                다양한 동네가게를 볼 수 있어요.
            </TownStoreH3>

            <TownStoreListDetail>
                <img src={Abc} />
                <h4>통신판매</h4>
                <h5>유플러스 방화점</h5>
                <p>서울특별시 도봉구 방학동</p>
            </TownStoreListDetail>
            <TownStoreListDetail>
                <img src={Abc} />
                <h4>통신판매</h4>
                <h5>유플러스 방화점</h5>
                <p>서울특별시 도봉구 방학동</p>
            </TownStoreListDetail>
            <TownStoreListDetail>
                <img src={Abc} />
                <h4>통신판매</h4>
                <h5>유플러스 방화점</h5>
                <p>서울특별시 도봉구 방학동</p>
            </TownStoreListDetail>
            <TownStoreListDetail>
                <img src={Abc} />
                <h4>통신판매</h4>
                <h5>유플러스 방화점</h5>
                <p>서울특별시 도봉구 방학동</p>
            </TownStoreListDetail>
            <TownStoreListDetail>
                <img src={Abc} />
                <h4>통신판매</h4>
                <h5>유플러스 방화점</h5>
                <p>서울특별시 도봉구 방학동</p>
            </TownStoreListDetail>
            <TownStoreListDetail>
                <img src={Abc} />
                <h4>통신판매</h4>
                <h5>유플러스 방화점</h5>
                <p>서울특별시 도봉구 방학동</p>
            </TownStoreListDetail>
            <TownStoreListDetail>
                <img src={Abc} />
                <h4>통신판매</h4>
                <h5>유플러스 방화점</h5>
                <p>서울특별시 도봉구 방학동</p>
            </TownStoreListDetail>
            <TownStoreListDetail>
                <img src={Abc} />
                <h4>통신판매</h4>
                <h5>유플러스 방화점</h5>
                <p>서울특별시 도봉구 방학동</p>
            </TownStoreListDetail>


          </TownStoreLastBox>


          <TownStorePostscript>
              <h2>동네주민의 진짜 후기를 찾아보세요.</h2>
              <TownStorePostscriptDetail>
                  <img src={Userdefault} />
                  <h4>대박살롱 님의 추천</h4>
                  <TownStorePostscriptDetailText>
                      <h4>밍스파</h4>
                      <p>대전광역시 서구 둔산동</p>
                      <h5>"엄마랑 커플마사지 받고 왔어요.. 다들 치절하시고 차근차근 잘해주셨어요!!"</h5>
                  </TownStorePostscriptDetailText>
              </TownStorePostscriptDetail>
              <TownStorePostscriptDetail>
                  <img src={Userdefault} />
                  <h4>대박살롱 님의 추천</h4>
                  <TownStorePostscriptDetailText>
                      <h4>밍스파</h4>
                      <p>대전광역시 서구 둔산동</p>
                      <h5>"엄마랑 커플마사지 받고 왔어요.. 다들 치절하시고 차근차근 잘해주셨어요!!"</h5>
                  </TownStorePostscriptDetailText>
              </TownStorePostscriptDetail>
              <TownStorePostscriptDetail>
                  <img src={Userdefault} />
                  <h4>대박살롱 님의 추천</h4>
                  <TownStorePostscriptDetailText>
                      <h4>밍스파</h4>
                      <p>대전광역시 서구 둔산동</p>
                      <h5>"엄마랑 커플마사지 받고 왔어요.. 다들 치절하시고 차근차근 잘해주셨어요!!"</h5>
                  </TownStorePostscriptDetailText>
              </TownStorePostscriptDetail>
          </TownStorePostscript>
          <Nothing />
      </TownStoreMainContainer>
      
    );
  }
  
export default TownStoreMainpage;




const TownStoreMainContainer = styled.div`
  width:1440px;
  height:2000px;

`;

const TownStoreMiddleBox = styled.div`
  width:1440px;
  height:600px;
  text-align:center;

  h1{
    font-size: 2.8em;
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
    margin-left: 470px;
    width: 520px;
    height: 70px;;
    border-radius: 40px;
    background-color: #f04324d2;
    color: white;
`;


const TownStoreLastBox = styled.div`
    width: 1440px;
    height: 1250px ;
    background-color: rgba(255, 239, 207, 0.55);
    padding : 30px 80px ;

    h1{
        font-size: 2.9em;
    }
`;



  const TownStoretitleListButton = styled.button`
    font-size : 1.5em;
    margin : 15px;
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
    margin : 100px 20px;
  `;

  const TownStoreListDetail = styled.div`
    background-color: #fff;
    float: left;
    width: 300px;
    height: 350px;
    margin: 20px 30px;
    border-radius:5px;

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
    
`