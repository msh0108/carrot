// 외부
import styled from "styled-components";
import KakaoLogin from "react-kakao-login";

// 내부
import kakaoLogin from "../RegisterPage/kakaoLogin";

function EasyLogin() {
  //   responseKaKao = (res) => {
  //     const { data } = this.state;
  //     this.setState({
  //       data: res,
  //     });
  //     fetch(`${API_URL_LOGIN}/user/signin/kakao`, {
  //       //
  //       method: "GET",
  //       headers: {
  //         // 받아오는 response객체의 access_token을 통해 유저 정보를 authorize한다.
  //         Authorizatioin: res.response.access_token,
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then(
  //         (res) => localStorage.setItem("token", res.token),
  //         // 백엔드에서 요구하는 key값(token)으로 저장 => localStorage에 저장
  //         // console.log(res)해서 들어오는 access_token 값을 백엔드에 전달 및 저장 절차가 있음.
  //         alert("로그인 성공하였습니다.")
  //       );
  //   };

  return (
    <EasyLoginWrap>
      <Title>
        <div></div>
        <div>간편가입</div>
        <div></div>
      </Title>
      <LoginBtnWrap>
        <KaKaoBtn
          // styled component 통해 style 적용
          // 카카오에서 주는 jsKey
          jsKey={"5b07d7c9d72ce875e175ee5c0a7deeae"}
          // 로그인 버튼 text
          buttonText="카카오 계정으로 로그인"
          // 성공했을 때 불러올 함수 fetch -> localStorage에 저장
          getProfile={true}
        />
      </LoginBtnWrap>
    </EasyLoginWrap>
  );
}

export default EasyLogin;

const EasyLoginWrap = styled.div`
  margin: 0 auto;
  width: 80%;
  padding-top: 20px;
`;
const Title = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  font-size: 1.3rem;
  div:first-child,
  div:last-child {
    width: 40%;
    height: 1px;
    background-color: #ccc;
  }
`;
const LoginBtnWrap = styled.div`
  padding: 3rem;
  display: flex;
  justify-content: center;
  flex-direction: conlumn;
`;
const KaKaoBtn = styled(KakaoLogin)`
  padding: 0;
  width: 100%;
  height: 45px;
  line-height: 44px;
  color: #783c00;
  background-color: #ffeb00;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  font-align: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;
