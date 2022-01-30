import React from 'react';
import { BrowserRouter, Link, Router } from "react-router-dom";
import styled from "styled-components";

function Talk() {
    return (
    <BrowserRouter>
    <Body>
        <Section>
            <Talk_plus>
                    <img src="img/talk.png" alt="당근채팅" />
            </Talk_plus>
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
  const Talk_plus = styled.div`
    position:fixed;
    right:10%;
    bottom:40px;
    z-index:50;
  `;
  
  
  export default Talk;
  
  
  
