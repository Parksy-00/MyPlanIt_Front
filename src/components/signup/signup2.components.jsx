import { useState } from "react";
import axios from "axios";
import "./signup2.components.css";
import { Button } from "@nextui-org/react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CheckIcon from "@mui/icons-material/Check";
import { Input, Switch } from "antd";
import { List, Typography, Divider } from "antd";
import { useNavigate } from "react-router-dom";

function Signup2({
  email,
  password,
  realname,

  emailAgree,
  snsAgree,
}) {
  const [username, setUsername] = useState("");

  function attemptSignup() {
    console.log({
      email: email,
      password: password,
      realname: realname,

      username: username,
      email_agree: emailAgree,
      sns_agree: snsAgree,
    });
    axios
      .post(
        `https://myplanit.link/signup`,
        {
          email: email,
          password: password,
          realname: realname,
          username: username,
          email_agree: emailAgree,
          sns_agree: snsAgree,
        },
        {
          withCredentials: true,
        }
      )
      .then(function (response) {
        if (response.status === 201) {
          navigate("/onboard1");
        } else if (response.status === 200) {
          alert("이미 존재하는 이메일입니다");
        } else if (response.status === 202) {
          alert("이미 존재하는 닉네임입니다");
        } else if (response.status === 207) {
          alert("이미 존재하는 이메일과 닉네임입니다");
        } else {
          alert("오류");
        }
      });
  }

  let navigate = useNavigate();
  return (
    <>
      <div className="header">
        <ArrowBackIosIcon
          className="back-arrow"
          onClick={() => {
            navigate("/signup1");
          }}
        />
        <span className="title">회원가입 (2/2)</span>
      </div>
      <p className="text1">플랜잇에 오신 것을 환영합니다!</p>
      <p className="text2">
        사용하실 닉네임을 입력해주시면 회원가입이 완료돼요
      </p>
      <div className="nn-input">
        <p
          style={{
            marginLeft: "10px",
            marginBottom: "12px",
            marginTop: "60px",
          }}
        >
          닉네임
        </p>
        <Input
          className="nickname-input"
          size="large"
          placeholder="plan-it"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          style={{
            width: "327px",
            marginBottom: "320px",
            borderRadius: "5px",
          }}
        />
      </div>
      <button
        onClick={() => {
          attemptSignup();
        }}
        className="login-button"
      >
        가입 완료
      </button>
    </>
  );
}

export default Signup2;
