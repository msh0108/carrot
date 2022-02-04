// 외부 파일
import React, { useState } from "react";
import styled from "styled-components";

function SignPage() {
  // 이름, 이메일, 비밀번호, 비밀번호, 동의여부 확인
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [term, setTerm] = useState(false);

  // 오류메시지 상태 저장
  const [passwordMessage, setPasswordMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [termError, setTermError] = useState(false);

  // 유효성 검사
  const [isId, setIsId] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isEmail, setIsEmail] = useState(false);

  ////////////////////
  const onSubmit = (event) => {
    event.preventDefault();
    /** 검증 로직
     *  비밀번호와 비밀번호 체크가 다른경우
     * 약관 동의여부
     */

    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log({
      id,
      password,
      passwordCheck,
      term,
    });
  };
  const onChangeId = (event) => {
    setId(event.target.value);
  };
  const onChangePassword = (event) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{10,25}$/;
    const passwordCurrent = event.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage("숫자+영문자 조합으로 10자리 이상 입력해주세요!");
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호입니다.");
      setIsPassword(true);
    }
  };
  const onChangePasswordCheck = (event) => {
    // 패스워드 일치여부 검사
    setPasswordError(event.target.value !== password);
    setPasswordCheck(event.target.value);
  };
  const onChangeTerm = (event) => {
    // 체크박스 초기화
    setTermError(false);
    setTerm(event.target.checked);
  };
  const onChangeEmail = (event) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = event.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("이메일 형식이 틀렸습니다. 다시 확인해주세요.");
      setIsEmail(false);
    } else {
      setEmailMessage("올바른 이메일 형식입니다");
      setIsEmail(true);
    }
  };

  // 모달창
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  // 버튼

  return (
    <>
      <JoinInputWrap onSubmit={onSubmit}>
        <div className="joinForm">
          <Label htmlFor="userId">아이디</Label>
          <br />
          <Input
            name="userId"
            type="text"
            placeholder="아이디입력"
            required
            onChange={onChangeId}
          />
        </div>
        <div>
          <Label htmlFor="userPassword">비밀번호</Label>
          <br />
          <Input
            name="userPassword"
            type="password"
            placeholder="영문과 숫자 포함하여 10자리 이상"
            required
            onChange={onChangePassword}
          />
          {password.length > 0 && (
            <span className={`message ${isPassword ? "success" : "error"}`}>
              {passwordMessage}
            </span>
          )}
          <Input
            name="userPasswordCheck"
            type="password"
            placeholder="비밀번호 확인"
            required
            onChange={onChangePasswordCheck}
          />
          {passwordError && (
            <div style={{ color: "red" }}>비밀번호가 일치하지 않습니다</div>
          )}
        </div>
        <div>
          <Label htmlFor="userEmail">이메일</Label>
          <Input
            onChange={onChangeEmail}
            name="userEmail"
            type="email"
            placeholder="이메일 입력"
            required
          />
          {email.length > 0 && (
            <span className={`message ${isEmail ? "success" : "error"}`}>
              {emailMessage}
            </span>
          )}
        </div>
        <div style={{ float: "left", textAlign: "left" }}>
          <CheckInput
            type="checkbox"
            value={term}
            onChange={onChangeTerm}
            onClick={openModal}
          />
          <CheckLabel>개인정보 수집 이용동의(필수)</CheckLabel>
          {termError && (
            <div style={{ color: "red" }}>약관에 동의하셔야 합니다</div>
          )}
          <br />
          <CheckInput
            type="checkbox"
            value={term}
            onChange={onChangeTerm}
            onClick={openModal}
          />
          {/* <Modal open={modalOpen} close={closeModal} header="약관확인"></Modal> */}
          <CheckLabel>
            당근마켓 <i>이용약관</i>(필수)
          </CheckLabel>
          {termError && (
            <div style={{ color: "red" }}>약관에 동의하셔야 합니다</div>
          )}
          <br />
          <CheckInput
            type="checkbox"
            id="checked"
            onChange={onChangeTerm}
            onClick={openModal}
          />
          {/* <Modal open={modalOpen} close={closeModal} header="약관확인"></Modal> */}
          <CheckLabel hrmlFor="checked">
            마케팅 활용 및 광고성 정보 수신 동의(선택)
          </CheckLabel>
          <br />
          <CheckInput
            type="checkbox"
            value={term}
            onChange={onChangeTerm}
            onClick={openModal}
          />
          {/* <Modal open={modalOpen} close={closeModal} header="약관확인"></Modal> */}
          <CheckLabel>만 14세 미만 가입 제한(필수)</CheckLabel>
          {termError && (
            <div style={{ color: "red" }}>약관에 동의하셔야 합니다</div>
          )}
        </div>
        <div>
          <JoinButton
            type="submit"
            disabled={!(isId && isEmail && isPassword && isPasswordConfirm)}
          >
            가입하기
          </JoinButton>
        </div>
      </JoinInputWrap>
    </>
  );
}

export default SignPage;

const JoinInputWrap = styled.div`
  margin: 0 auto;
  padding: 5vh;
  width: 80%;
  height: auto;
  // overflow: hidden;
`;
const Input = styled.input`
  margin-bottom: 10px;
  padding-left: 10px;
  width: 100%;
  height: 5vh;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  &:focus {
    border: none;
    outline: 1px solid #f04124;
  }
`;
const Label = styled.label`
  float: left;
  font-weight: bold;
  padding-bottom: 1.5vh;
`;
const JoinButton = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 15px;
  color: #fff;
  font-size: 2vh;
  background-color: #f04124;
  border-radius: 10px;
`;
const CheckInput = styled.input`
  display: inline-block;
  margin: 0 auto;
  padding-botton: 30px;
  float: left;
  position: relative;
  top: 8px;
`;
const CheckLabel = styled.label`
  position: relative;
  top: -1.5px;
  left: 10px;
  line-height: 200%;
`;
