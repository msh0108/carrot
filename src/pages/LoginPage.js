import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import firebase from "../../firebase";
import styled from "styled-components";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await firebase
        .auth() // auth 서비스에 저장
        .signInWithEmailAndPassword(data.email, data.password);
      setLoading(false);
    } catch (error) {
      setErrorFromSubmit(error.message);
      setLoading(false);
      setTimeout(() => {
        setErrorFromSubmit("");
      }, 5000);
    }
  };

  return (
    <AuthWrapper>
      <div style={{ textAlign: "center" }}>
        <h3>로그인</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input
          name="email"
          type="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <p>This email field is required</p>}

        <label>Password</label>
        <input
          name="password"
          type="password"
          {...register("password", {
            required: true,
            minLength: 10,
            maxLength: 20,
            pattern: /^(?=.*[a-zA-Z])(?=.*[0-9]).{10,25}$/,
          })}
        />
        {errors.password && errors.password.type === "required" && (
          <p>This password field is required</p>
        )}
        {errors.password && <p>최소 10자 이상 적어주세요.</p>}
        {errors.password && errors.password.type === "pattern" && (
          <p>특수문자를 포함해주세요.</p>
        )}

        {errorFromSubmit && <p>{errorFromSubmit}</p>}
        <input type="submit" disabled={loading} />
        <Link style={{ color: "gray", textDecoration: "none" }} to="register">
          회원가입 바로가기
        </Link>
      </form>
    </AuthWrapper>
  );
}

export default LoginPage;

const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  form {
    width: 375px;
    margin: 0 auto;
  }
  .form {
    background: #0e101c;
    max-width: 400px;
    margin: 0 auto;
  }
  h1 {
    font-weight: 100;
    color: white;
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(79, 98, 148);
  }
  p {
    color: #bf1650;
  }
  p::before {
    display: inline;
    content: "⚠ ";
  }
  input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #000;
    padding: 10px 15px;
    margin-bottom: 10px;
    font-size: 14px;
  }
  label {
    line-height: 2;
    text-align: left;
    display: block;
    margin: 5px 0;
    font-size: 14px;
    font-weight: 200;
  }
  button[type="submit"],
  input[type="submit"] {
    background: #f04124;
    color: white;
    text-transform: uppercase;
    border: none;
    margin-top: 40px;
    padding: 20px;
    font-size: 16px;
    font-weight: 100;
    letter-spacing: 10px;
  }
`;
