import React, { useState } from "react";
import styled from "styled-components";

import EasyLogin from "../Login/EasyLogin";

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
      <Logo />
      <JoinBox>
        <UserWrapBox>
          <label htmlFor="id">아이디</label>
          <br />
          <form onSubmit={onSubmit}>
            <LoginForm
              name="id"
              type="text"
              placeholder="아이디를 입력해주세요"
              required
              // value={id}
            />
            <label htmlFor="password">비밀번호</label>
            <br />
            <LoginForm
              name="password"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              required
              // value={password}
              onChange={onChange}
            />
            <LoginButton>로그인</LoginButton>
          </form>
          <UserInfoHelp>
            <ul>
              <li>
                <a href="#">아이디 찾기</a>
              </li>
              <li>
                <a href="#">비밀번호 찾기</a>
              </li>
              <li>
                <a href="#">회원가입</a>
              </li>
            </ul>
          </UserInfoHelp>
          <EasyLogin />
        </UserWrapBox>
      </JoinBox>
    </div>
  );
}

export default Login;

const Logo = styled.img`
  margin: 0 auto;
  width: 200px;
  height: 92px;
  background: url("../carrotLogo.png") no-repeat;
  background-size: contain;
  display: flex;
`;

const JoinBox = styled.div`
  margin: 0 auto;
  width: 70%;
  .userWrapBox {
    margin: 50px auto;
    width: 90%;
    padding: 20px;
    display: block;
    border: 1px solid #c4c4c4;
  }
`;
const UserWrapBox = styled.div`
  margin: 50px auto;
  width: 90%;
  padding: 20px;
  display: block;
  border: 1px solid #c4c4c4;
  label {
    padding: 40px 0 10px; 0;
    float: left;
    font-weight: bold;
  }
`;
const LoginForm = styled.input`
  mrgin-bottom: 10px;
  padding: 10px;
  width: 100%;
  height: 50px;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  float: left;
`;
const LoginButton = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 50px;
  background-color: #f04124;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 23px;
`;
const UserInfoHelp = styled.div`
  margin: 15px auto;
  display: block;
  ul,
  li {
    display: flex;
    justify-content: center;
    flex-direction: colurm;
    text-align: center;
    padding-right: 12px;
    margin-right: 12px;
  }
  ul > li:first-child,
  ul > li:nth-child(2) {
    border-right: 1px solid #e5e5e5;
  }
`;
