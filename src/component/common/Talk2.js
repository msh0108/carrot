import React from 'react';
import { BrowserRouter, Link, Router } from "react-router-dom";
import styled from "styled-components";

import Modal from "./Modal";

function Talk2() {
    return (
    <BrowserRouter>
    <Body>
        <Section>
            <Talk_plus2>
                <Modal />
                {/* <Button></Button> */}
                    {/* <img src="img/talk2.png" alt="당근채팅" />
                <div className="talk_about">
               <h1>채팅</h1>
               <div className="talk-search-box">
                 <a className="talk-search-btn" href="#">
                      <i className="fas fa-search"></i>
                  </a> 
                  <input type="text" className="talk-search-txt" name=""placeholder="Search" />
               </div>
                <ul>
                    <li>
                        <img src="img/talkuser.png" alt="talk_user" className="talk_user" />
                        <div className="talk_room">
                        <h2>당근이</h2><p>우리 동네 '신촌'을 인증하고 근처...</p>
                        </div>
                        <img src="img/talkbellIcon.png" alt="talkbell" className="talk_bell" />
                    </li>
                    <li>
                        <img src="img/talkuser.png" alt="talk_user" className="talk_user" />
                        <div className="talk_room">
                        <h2>당근이</h2><p>우리 동네 '신촌'을 인증하고 근처...</p>
                        </div>
                        <img src="img/talkbellIcon.png" alt="talkbell" className="talk_bell" />
                    </li>
                    <li>
                        <img src="img/talkuser.png" alt="talk_user" className="talk_user"  />
                        <div className="talk_room">
                        <h2>당근이</h2><p>우리 동네 '신촌'을 인증하고 근처...</p>
                        </div>
                        <img src="img/talkbellIcon.png" alt="talkbell" className="talk_bell" />
                    </li>
                </ul>
            </div> */}
            </Talk_plus2>
        </Section>
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
  const Section = styled.div`
  width:1200px;
  height:800px;
  margin:0 auto;
  position:relative;
  `;
  const Talk_plus2 = styled.div`
  position:fixed;
  right:10%;
  bottom:6%;
  z-index:50;
  `;
  
  
  export default Talk2;
  
  
  
