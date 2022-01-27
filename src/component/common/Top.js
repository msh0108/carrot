import React from 'react';
import { BrowserRouter, Link, Router } from "react-router-dom";
import styled from "styled-components";


function Top() {
  return (
  <BrowserRouter>
  <Body>
   <Header>
     <Top_head>
        <Link to = "/">
          <img src="img/main_logo.png" alt="메인로고" className='mainlogo' />
          </Link>
          <Top_search>
             <div className="search-box">
              <input type="text" className="search-txt" name=""placeholder="동네 이름, 물품명 등을 검색해보세요!" />
                <Link to = "/" className='search-btn'>
                <i className="fas fa-search"></i>
                </Link>
            </div>
        </Top_search>
        <Top_menu>
           <ul>
                <li><Link className='menus' to = "/">인기매물</Link></li>
                <li><Link className='menus' to = "/">동네정보</Link></li>
                <li><Link className='menus' to = "/"><img src="img/account.png" alt="계정" /> 나의당근</Link></li>
                <li><Link className='menus' to = "/"><img src="img/bell.png" alt="알람" /> 알림</Link></li>   
            </ul>
        </Top_menu>
     </Top_head>
   </Header> 
  </Body>
  </BrowserRouter>
  );
}

const Body = styled.body`
  margin: 0;
  padding: 0;
  background-color: #fff;
  min-width:1920px;
  font-family:'Nanum Gothic', sans-serif; 
  color:#333333;
ul,li{
  list-style:none; 
  float:left; 
  margin:0; 
  padding:0;
}
`;
const Header = styled.header`
  height:100px;
  border-bottom:1px solid #b4b9be;
  }
`;
const Top_head = styled.div`
  position:relative;
  width:1200px; 
  margin:0 auto;
  height:100px;
  div{
    float:left;
  }
  .mainlogo{
    float:left;
    line-height:100%;
  }
`;
const Top_search = styled.div`
.search-box{
  position:absolute;
  padding: 10px;
  top: 25%;
  left:20%;
  height: 30px;
  background-color: #fff;
  border: 1px solid #e9ecef;
  border-radius: 20px;
  width: 400px;
}
.search-btn{
  text-decoration: none;
  float: right;
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #b4b9be;
  font-size:16px;
}
.search-txt{
  display: flex;
  width: 280px;
  padding: 0 6px;
  border:none;
  background: none;
  outline: none;
  float: left;
  font-size: 1rem;
  line-height: 30px;
}
`;
const Top_menu = styled.div`
    height:100px;
    position:absolute;
    right:10px;

ul li{
    box-sizing: border-box;
    height:100px;
    line-height:100%;
    line-height: 95px;
    font-size:17px;
    margin-left:10px;
    position:relative;
    text-decotaion:none;
    color:black;
    
}
ul li::after{
  content: "|";
  margin-left:10px;
}
ul li:last-child::after{
  content:""
}
ul li :hover{
  color:#b4b9be;
}
ul li img{
  margin-top:0px;
}
.menus{
  text-decoration:none;
  color:#000;
}
.menus img{
  
}
`;

export default Top;


