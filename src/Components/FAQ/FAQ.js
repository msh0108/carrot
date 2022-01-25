// 외부
import styled from "styled-components";

// 내부

import QnAnswer from "./QnAnswer";
import HelpBox from "./HelpBox";

function FAQ() {
  return (
    <>
      <QnAWrapping>
        <h3 className="title">마이페이지</h3>
        <QnASubTitleBox>
          <div className="subTitle">자주 묻는 질문</div>
        </QnASubTitleBox>
        <QnAnswer />
        <HelpBox />
      </QnAWrapping>
    </>
  );
}

export default FAQ;

const QnAWrapping = styled.div`
  margin: 0 auto;
  width: 80%;
  .title {
    padding: 15px 30px;
    text-align: left;
    font-weight: bold;
    font-size: 3.5vh;
  }
`;

const QnASubTitleBox = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0;
  border-top: 1px solid #c4c4c4;
  border-bottom: 1px solid #c4c4c4;
  .subTitle {
    margin: 0 auto;
    width: 25%;
    padding: 10px;
    color: #fff;
    font-size: 2.3vh;
    font-weight: 600;
    background-color: #f04124;
    border-radius: 10px;
    border: 1px solid #f04124;
  }
`;
