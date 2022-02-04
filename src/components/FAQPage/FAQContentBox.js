import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

// 내부
import Management from "./QuestionsPage/Management";
import Acount from "./QuestionsPage/Acount";
import PurchaseSell from "./QuestionsPage/PurchaseSell";
import DealList from "./QuestionsPage/DealList";
import Manner from "./QuestionsPage/Manner";
import Event from "./QuestionsPage/Event";
import RestrictedUse from "./QuestionsPage/RestrictedUse";
import Neighbor from "./QuestionsPage/Neighbor";
import Coupon from "./QuestionsPage/Coupon";
import Chat from "./QuestionsPage/Chat";
import Authentication from "./QuestionsPage/Authentication";
import Etc from "./QuestionsPage/Etc";

function QnAnserBox() {
  return (
    <FAQWrap>
      <AnswerBox>
        <StyleLink to="Management">운영정책</StyleLink>
        <StyleLink to="Acount">계정/인증</StyleLink>
        <StyleLink to="PurchaseSell">구매/판매</StyleLink>
        <StyleLink to="DealList">거래품목</StyleLink>
        <StyleLink to="Manner">거래 매너</StyleLink>
        <StyleLink to="Event">이벤트/초대</StyleLink>
        <StyleLink to="RestrictedUse">이용제재</StyleLink>
        <StyleLink to="Neighbor">동네생활</StyleLink>
        <StyleLink to="Coupon">쿠폰</StyleLink>
        <StyleLink to="Chat">당근채팅</StyleLink>
        <StyleLink to="Authentication">본인인증</StyleLink>
        <StyleLink to="Etc">기타</StyleLink>
      </AnswerBox>
      <AnswerList>
        <Routes>
          <Route path=":Management" element={<Management />} />
          <Route path=":Acount" element={<Acount />} />
          <Route path=":PurchaseSell" element={<PurchaseSell />} />
          <Route path=":DealList" element={<DealList />} />
          <Route path=":Manner" element={<Manner />} />
          <Route path=":Event" element={<Event />} />
          <Route path=":RestrictedUse" element={<RestrictedUse />} />
          <Route path=":Neighbor" element={<Neighbor />} />
          <Route path=":Coupon" element={<Coupon />} />
          <Route path=":Chat" element={<Chat />} />
          <Route path=":Authentication" element={<Authentication />} />
          <Route path=":Etc" element={<Etc />} />
        </Routes>
      </AnswerList>
    </FAQWrap>
  );
}

export default QnAnserBox;
const FAQWrap = styled.div`
  margin: 0px;
  Routes {
    margin: 50px auto;
    width: 80%;
    overflow: hidden;
    height: auto;
    box-sizing: border-box;
  }
`;

const AnswerBox = styled.div`
  margin: 0 auto;
  width: 100%;
  height:300px;
  padding:30px;
  box-sizing: border-box;
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  }
`;
const AnswerList = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 10px 20px 40px 20px;
`;
const StyleLink = styled(Link)`
  margin: 0 auto;
  width: 33.33%;
  line-height:60px;
  text-align:center;
  border: 1px solid #ddd;
  color:#4d4d4d;
  font-size:2vh;
  font-weight:400;
  &: hover, 
  &: active, &:link, &:focus {
    color:#F04124;
    font-weight:bold;
  }
`;
