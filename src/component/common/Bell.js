import React, { component } from 'react';
import { useState } from "react";
import { BrowserRouter, Link, Routes ,Route , Router } from "react-router-dom";
import styled from "styled-components";

export const Bell = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleModal = () => {
      setIsOpen(!isOpen)
    };

    return (
        <>
        <ModalContainer>
        <ModalBtn onClick={handleModal}>
        {isOpen === false ?  <img src="img/bell.png" alt="알람" /> : <img src="img/bell2.png" alt="알람2"/>}
        </ModalBtn>
    
        {isOpen ===false ?
          null
        : <ModalBackdrop>
        <ModalView>
        
          <Bell_about>
                <div class="bell_list_top">
                      <h1>알림</h1>
                </div>
                    <ul>
                        <li><img src="img/talkuser.png" alt="" className="talk_user" /><p>신촌 이웃을 사로잡은 금주의 인기매물, 지금 만나보세요!<span>6일전</span></p></li>
                        <li><img src="img/talkuser.png" alt="" className="talk_user" /><p>000님이 "~" 글에 제안을 했습니다.[30,000원]<span>8일전</span></p></li>
                        <li><img src="img/talkuser.png" alt="" className="talk_user" /><p>000님이 "~" 글에 제안을 했습니다.[30,000원]<span>10일전</span></p></li>
                        <li><img src="img/talkuser.png" alt="" className="talk_user" /><p>신촌 이웃을 사로잡은 금주의 인기매물, 지금 만나보세요!<span>14일전</span></p></li>
                    </ul>
            </Bell_about>
            
        </ModalView>
      </ModalBackdrop>
        }
    
        </ModalContainer>
        </>
      );
    };

const ModalBtn = styled.div`
  background-color: none;
  text-decoration: none;
  border: none;
   display: flex;
    justify-content: center;
    align-items: center;
    float:left;
    
    margin-right:5px;
  color: white;
  border-radius: 30px;
  cursor: pointer;
  .talk_logo{
      position:absolute;
      top:-500px;
      right:10%;
  }
`;
const ModalContainer = styled.div`
  position:relative;
  margin-top:33px;
  

  `;
  const ModalBackdrop = styled.div`

  `;
  const ModalView = styled.div`
  
  `;
  const Bell_about = styled.div`
    position:absolute;
    right:-190%;
    top:150%;
    clear:both;
    width:280px;
    height:360px;
    border:1px solid #ff772b;
    border-radius:20px;
    box-sizing:border-box;
    background-color:#fff;
    ::after{
        border-color: #ffffff transparent;
        border-style: solid;
        border-width: 0 6px 8px 6.5px;
        content: '';
        display: block;
        right: 60px;
        position: absolute;
        top: -7px;
        width: 0;
        z-index: 1;  
    }
    ::before {
        border-color: #ff772b transparent;
        border-style: solid;
        border-width: 0 6px 8px 6.5px;
        content: '';
        display: block;
        right: 60px;
        position: absolute;
        top: -8px;
        width: 0;
        z-index: 0;
      }
      .talk_user{
        border:1px solid black;
        border-radius:100%;
        width:30px;
      }
      ul li:after{
        content:""
    }
    .bell_list_top, ul{
        box-sizing: border-box;
        float:left;
    }
    .bell_list_top{  
        border-bottom:1px solid #e5e5e5;
        line-height:normal;
        width:100%;
        height:45px;
        padding:0 15px;
        
    }
    .bell_list_top h1{
        line-height:30px;
        font-size: 15px;
    }
    // .bell_list_top h1:hover{
    //     color:#000;
    // }
    ul{
        width:100%;
        height:313px;
    }
    ul li{
        line-height: normal;
        float: left;
        margin-top:15px;
        height:54px;
        
        
    }
    ul li img, ul li p{
        float:left;
    }
    ul li p{
        width:200px;
        margin-left:10px;
        font-size: 13px;
        margin-top:0;
    }
    ul li span{
        display:block;
        color:#a0a0a0;
    }

  `;
  

  
export default Bell;