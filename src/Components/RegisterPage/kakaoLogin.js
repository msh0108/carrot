import KakaoLogin from "react-kakao-login";

const { Kakao } = window;
const loginWithKakao = () => {
  console.log("hello");
  Kakao.Auth.authorize({
    redirectUri: "http://localhost:3000/kakaoLogin",
  });
};
// 카카오에서 제공해주는 REST API키
const CLIENT_ID = "fa2cdffbe1942d6554204f17f04032bd";
const REDIRECT_URI = "http://localhost:3000/kakaoLogin";

function kakaoLogin() {
  return (
    <div>
      <a id="custom-login-btn" onClick={loginWithKakao}>
        <img
          src="//k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
          width="222"
        />
      </a>
    </div>
  );
}
export default kakaoLogin;
