import React, { useState } from "react";
import "./login.css";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const onChange = (event) => {
    console.log(event.target.name);
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <div>
        <img src="../carrotLogo.png" className="loginLogo" />
      </div>
      <div className="joinBox">
        <div className="userWrapBox">
          <p>아이디</p>
          <form onSubmit={onSubmit}>
            <input
              className="loginForm"
              name="id"
              type="text"
              placeholder="아이디를 입력해주세요"
              required
              value={id}
            />
            <p>비밀번호</p>
            <input
              className="loginForm"
              name="password"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              required
              value={password}
              onChange={onChange}
            />
            <button className="loginBox">로그인</button>
          </form>
          <div className="userInfoHelp">
            <ul>
              <li>아이디 찾기</li>
              <li>비밀번호 찾기</li>
              <li>회원가입</li>
            </ul>
          </div>
          <div>
            <p>간편 로그인</p>
            <div className="easyLogin">
              <div>
                <img src="../kakaoLogo.png" />
              </div>
              <div>
                <img src="../naverLogo.png" />
              </div>
              <div>
                <img src="../facebookLogo.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
