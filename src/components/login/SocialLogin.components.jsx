import { useState } from "react";
import { Button } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Login() {
  let navigate = useNavigate();

  function attemptLogin() {
    axios
      .post(
        "https://myplanit.link/login",
        {
          email: "1@1.com",
          password: "test1234",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        sessionStorage.removeItem("token");
        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem("email", response.data.email);
        sessionStorage.setItem("password", response.data.password);
        navigate("/todo");
      })
      .catch((error) => {
        if (error.response.status === 400) {
          alert("존재하지 않는 이메일입니다");
        } else if (error.response.status === 401) {
          alert("비밀번호가 틀렸습니다");
        } else {
          alert("오류");
        }
      });
  }

  return (
    <div className="container">
      <BackButton>
        <img
          src="/images/cross.png"
          onClick={() => {
            navigate("/");
          }}
        />
      </BackButton>
      <LoginText>
        빠르고 간편한 로그인으로 마이플랜잇의 다양한 혜택을 누려 보세요!
      </LoginText>
      <LoginButtons>
        <Button
          onClick={() => {
            attemptLogin();
          }}
        >
          테스트 로그인
        </Button>
        <img
          src="/images/google_login.png"
          alt="googleLogin"
          style={{ marginTop: "15px" }}
          onClick={() => alert("구글 로그인")}
        />

        <img
          src="/images/kakao_login.png"
          alt="kakaoLogin"
          style={{ marginTop: "15px" }}
          onClick={() => alert("카카오 로그인")}
        />
      </LoginButtons>
    </div>
  );
}

const BackButton = styled.div`
  position: absolute;
  width: 14px;
  height: 14px;
  left: 0px;
  top: 30px;
`;

const LoginText = styled.span`
  width: 258px;
  height: 108px;
  margin-right: 60px;
  margin-top: 100px;
  font-family: "PretendardMedium";
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.01em;
`;

const LoginButtons = styled.span`
  position: absolute;
  bottom: 95px;
`;

export default Login;
