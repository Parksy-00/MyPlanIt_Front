import { useState } from "react";
import { Button } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

function SocialLogin() {
  let navigate = useNavigate();

  function kakaoLogin() {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;
  }

  function googleLogin() {
    alert("구글 로그인");
  }

  return (
    <Container>
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
        <img
          src="/images/google_login.png"
          alt="googleLogin"
          style={{
            marginTop: "15px",
            border: "1px solid transparent",
            borderColor: "#d9d9d9",
            borderRadius: "4px",
          }}
          onClick={googleLogin}
        />
        <img
          src="/images/kakao_login.png"
          alt="kakaoLogin"
          style={{
            marginTop: "15px",
          }}
          onClick={kakaoLogin}
        />
      </LoginButtons>
    </Container>
  );
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #fbfbfb;
  position: relative;
  height: 100vh;
`;


const BackButton = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
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
  position: fixed;
  width: 330px;
  bottom: 95px;
`;

export default SocialLogin;
