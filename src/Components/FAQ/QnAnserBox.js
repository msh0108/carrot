import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

// 내부ㅜ
import Management from "./Management";
import Acount from "./Acount";
import Manner from "./Manner";
import Sell from "./Sell";
import SellingList from "./SellingList";
import EventInvite from "./EventInvite";
import LimitUsage from "./LimitUsage";
import Neighbor from "./Neighbor";
import Coupon from "./Coupon";
import Chat from "./Chat";
import Authentication from "./Authentication";
import Etc from "./Etc";

function QnAnserBox() {
  return (
    <BrowserRouter>
      <Routes>
        <SHeader>
          <QnANavBox>
            <StyleLink to="/Management">운영정책</StyleLink>
            <StyleLink to="/Acount">계정/인증</StyleLink>
            <StyleLink to="/Sell">구매/판매</StyleLink>
            <StyleLink to="SellingList">거래품목</StyleLink>
            <StyleLink to="Manner">거래 매너</StyleLink>
            <StyleLink to="EventInvite">이벤트/초대</StyleLink>
            <StyleLink to="LimitUsage">이용제재</StyleLink>
            <StyleLink to="Neighbor">동네생활</StyleLink>
            <StyleLink to="Coupon">쿠폰</StyleLink>
            <StyleLink to="Chat">당근채팅</StyleLink>
            <StyleLink to="Authentication">본인인증</StyleLink>
            <StyleLink to="Etc">기타</StyleLink>
          </QnANavBox>
          <QnAnswerBox>
            {/* <Route path="/" component={QnHome} /> */}
            <Route path="/management" component={Management} />
            <Route exact path="/acount" component={Acount} />
            <Route exact path="/sell" component={Sell} />
            <Route exact path="/sellinglist" component={SellingList} />
            <Route exact path="/manner" component={Manner} />
            <Route exact path="/eventinvite" component={EventInvite} />
            <Route exact path="/limitusage" component={LimitUsage} />
            <Route exact path="/neighbor" component={Neighbor} />
            <Route exact path="/coupon" component={Coupon} />
            <Route exact path="/chat" component={Chat} />
            <Route exact path="/authentication" component={Authentication} />
            <Route exact path="/etc" component={Etc} />
          </QnAnswerBox>
        </SHeader>
      </Routes>
    </BrowserRouter>
  );
}

export default QnAnserBox;
const SHeader = styled.div`
  margin: 0 auto;
`;
const QnANavBox = styled.ul`
  margin: 50px auto;
  width: 80%;
  overflow:hidden;
  height: auto;
  box-sizing: border-box;
  }
`;
const QnAnswerBox = styled.ul`
  margin: 0 auto;
  width: 80%;
  padding:30px;
  box-sizing: border-box;
  }
`;
const StyleLink = styled(Link)`
  margin: 0 auto;
  width: 33.3%;
  padding: 13px;
  float: left;
  box-sizing: border-box;
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
