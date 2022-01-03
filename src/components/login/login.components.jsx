import { useState } from "react";
import "./login.components.css";
import { Button } from "@nextui-org/react";
import { Input, Switch } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function attemptLogin() {
    axios.post(
      "http://ec2-13-124-228-86.ap-northeast-2.compute.amazonaws.com/login",
      {
        email: email,
        password: password,
      }
    );
  }

  return (
    <div className="container">
      <img
        className="Logo"
        src="/images/logo.png"
        style={{ marginTop: "200px", width: "173px", marginBottom: "51px" }}
      />

      <Input
        className="email-input"
        size="large"
        placeholder="이메일 입력"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        style={{ width: "327px", marginBottom: "12px" }}
      />
      <Input.Password
        className="password-input"
        size="large"
        placeholder="비밀번호 입력"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        style={{ width: "327px", marginBottom: "19px" }}
      />
      <span className="switch">
        <Switch />
        <p
          style={{
            marginTop: "0px",
            marginBottom: "0px",
            marginLeft: "10px",
            color: "#C4C4C4",
            fontSize: "14.5px",
          }}
        >
          자동 로그인
        </p>
      </span>
      <button
        onClick={() => {
          console.log(email, password);
          attemptLogin();
        }}
        className="login-button"
      >
        로그인
      </button>
      <span
        className="button-group"
        style={{ marginTop: "8px", fontSize: "12px" }}
      >
        <p>
          <Link style={{ color: "black" }} to="/find-id">
            아이디 찾기
          </Link>
        </p>
        <p style={{ marginLeft: "12px", marginRight: "12px" }}>|</p>
        <p>
          <Link style={{ color: "black" }} to="/find-id">
            비밀번호 찾기
          </Link>
        </p>
        <p style={{ marginLeft: "12px", marginRight: "12px" }}>|</p>
        <p>
          <Link style={{ color: "black" }} to="/signup1">
            회원가입
          </Link>
        </p>
      </span>
    </div>
  );
}

export default Login;
