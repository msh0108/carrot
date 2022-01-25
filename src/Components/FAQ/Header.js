import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import "../login.css";

export default withRouter(({ location: { pathname } }) => {
  return (
    <SHeader>
      <QnABox>
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
      </QnABox>
    </SHeader>
  );
});
// export default Header;
const SHeader = styled.header`
  margin: 0 auto;
  border: 1px solid #000;
`;
const QnABox = styled.div`
  margin: 0 auto;
  width: 80%;
`;

const StyleLink = styled(Link)`
  margin: 0 auto;
  width: 33.3%;
  padding: 10px;
  float: left;
  box-sizing: border-box;
  border-collapse: collapse;
  border: 1px solid #c4c4c4;
  color: ${(props) => (props.current ? "#0050ff" : "gray")};
  ${(props) => (props.current ? "#0050ff" : "transparent")};
`;
