import { useState } from "react";
import { Button } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login() {
  let navigate = useNavigate();

  function attemptLogin() {
    axios
      .post(
        "https://myplanit.link/login",
        {
          email: "asdf@naver.com",
          password: "12341234",
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
        navigate("/main/todo");
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
      <img
        className="Logo"
        src="/images/logo.png"
        alt="Logo"
        style={{ marginTop: "200px", width: "173px", marginBottom: "60px" }}
      />
      <Button>로그인</Button>
      <Button style={{ height: "50px", width: "313px", marginTop: "20px"}}>구글로 시작하기</Button>
      <img
        src="/images/kakao_login.png"
        alt="kakaoLogin"
        style={{ height: "50px", marginTop: "20px" }}
        onClick={() => alert("카카오 로그인")}
      />
    </div>
  );
}

export default Login;
