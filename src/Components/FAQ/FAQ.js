// 외부
import styled from "styled-components";

// 내부

import FAQContentBox from "./FAQContentBox";
import HelpBox from "./HelpBox";

function FAQ() {
  return (
    <div>
      <QnAWrapping>
        <FAQContentBox />
        <HelpBox />
      </QnAWrapping>
    </div>
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
