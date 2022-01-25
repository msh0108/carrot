import styled from "styled-components";

function HelpBox() {
  return (
    <HelpBoxWrap>
      <p>그래도 해결이 안되시나요?</p>

      <span as="a" href="#">
        고객센터 문의하기
      </span>
    </HelpBoxWrap>
  );
}

export default HelpBox;

const HelpBoxWrap = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 15vh;
  background-color: #eee;
  p {
    font-size: 1.8vh;
    font-weight: bold;
    line-height: 9vh;
  }
  span {
    color: #f04124;
    font-weight: bold;
  }
`;
