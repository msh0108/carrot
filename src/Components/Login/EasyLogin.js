// 외부
import styled from "styled-components";

// 내부
import "./login.css";

function EasyLogin() {
  return (
    <EasyLoginWrap>
      <Title>
        <legend style={{ padding: "20px 15px", fontSize: "2vh" }}>
          간편가입
        </legend>
      </Title>
      <ul>
        <ImgList>
          <EasyLoginImg src="../kakaoLogo.png" alt="카카오톡간편가입" />
        </ImgList>
        <ImgList>
          <EasyLoginImg src="../naverLogo.png" alt="네이버간편가입" />
        </ImgList>
        <ImgList>
          <EasyLoginImg src="../facebookLogo.png" alt="페이스북간편가입" />
        </ImgList>
      </ul>
    </EasyLoginWrap>
  );
}

export default EasyLogin;

const EasyLoginWrap = styled.div`
  margin: 0 auto;
  width: 80%;
  padding-top: 20px;
`;
const Title = styled.fieldset`
  text-align: center;
  border-top: 1px solid #ccc;
`;
const ImgList = styled.li`
  display: inline-block;
`;
const EasyLoginImg = styled.img`
  padding: 1.5vh 3vh;
  width: 8vh;
`;
