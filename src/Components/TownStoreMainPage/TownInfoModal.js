import React from 'react';
import styled from "styled-components";
import Search from './Search.png'

const TownInfoModal = ({modalOpen}) => {
    const onCloseModal = (e) => {
        console.log('e.target: ', e.target)
        console.log('e.tarcurrentTargetget: ', e.currentTarget)
        if(e.target === e.currentTarget){
            modalOpen()
        }

    }
    return (
        <ModalContainer onClick={onCloseModal}>
            <SearchInfo>
                <img src = {Search} />
                <p>내 동네 이름(동,읍,면)으로 검색</p>
                <InfoModalButton onClick={modalOpen}> </InfoModalButton>
            </SearchInfo>
        </ModalContainer>
    )
}

export default TownInfoModal;


const ModalContainer = styled.div`
    position: fixed;
    background-color : white;
    width : 1440px;
    height : 800px;
    border : 1px solid red;
    
    left: 700px;
    top : 250px;
`;

const SearchInfo = styled.div`
    margin : 50px auto 50px auto;
    padding-left : 20px;
    width : 1000px;
    height : 80px;
    border : 1px solid #cdcdcd;
    border-radius : 10px;
    color : #cdcdcd;
    font-size : 1.8em;
    display: flex;
    align-items: center;
    justify-content: left;


`;

const InfoModalButton = styled.div`


`;
