import "./login.components.css";
import { Button } from "@nextui-org/react";
import { Input, Switch } from "antd";
import { Link } from "react-router-dom";

function Login() {
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
        style={{ width: "327px", marginBottom: "12px" }}
      />
      <Input.Password
        className="password-input"
        size="large"
        placeholder="비밀번호 입력"
        style={{ width: "327px", marginBottom: "19px" }}
      />
      <span className="switch">
        <Switch />
        <p
          style={{
            marginTop: "0px",
            marginBottom: "0px",
            marginLeft: "5px",
            color: "#C4C4C4",
            fontSize: "14px",
          }}
        >
          자동 로그인
        </p>
      </span>
      <form className="login-button">로그인</form>
      <span
        className="button-group"
        style={{ marginTop: "8px", fontSize: "12px" }}
      >
        <p>아이디 찾기</p>
        <p style={{ marginLeft: "12px", marginRight: "12px" }}>|</p>
        <p>비밀번호 찾기</p>
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
