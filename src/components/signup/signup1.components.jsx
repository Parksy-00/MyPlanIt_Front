import { useState } from "react";
import "./signup1.components.css";
import { Button } from "@nextui-org/react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CheckIcon from "@mui/icons-material/Check";
import { Input, Switch } from "antd";
import { List, Typography, Divider } from "antd";
import { useNavigate } from "react-router-dom";
import validator from "validator";

function Signup1() {
  let navigate = useNavigate();
  let passwordValidator = require("password-validator");
  let schema = new passwordValidator();
  schema.is().min(8).has().digits(1);

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState(" ");
  const [equalPw, setEqualPw] = useState("");
  const [name, setName] = useState("");

  const [emailCheck, setEmailCheck] = useState(null);
  const [pwCheck, setPwCheck] = useState(null);
  const [nameCheck, setNameCheck] = useState(null);

  const [service1, setService1] = useState(false);
  const [service2, setService2] = useState(false);
  const [service3, setService3] = useState(false);
  const [service4, setService4] = useState(false);
  const [service5, setService5] = useState(false);

  const [iconStyle1, setIconStyle1] = useState("disabled");
  const [iconStyle2, setIconStyle2] = useState("disabled");
  const [iconStyle3, setIconStyle3] = useState("disabled");
  const [iconStyle4, setIconStyle4] = useState("disabled");
  const [iconStyle5, setIconStyle5] = useState("disabled");

  const validateEmail = (e) => {
    let email = e.target.value;
    if (validator.isEmail(email)) {
      setEmailCheck(true);
      setEmail(email);
    } else {
      setEmailCheck(false);
    }
  };
  const validatePassword = (e) => {
    let pw = e.target.value;

    if (schema.validate(pw)) {
      setPwCheck(true);
      setPw(pw);
    } else {
      setPwCheck(false);
    }
  };

  return (
    <>
      <div className="header">
        <ArrowBackIosIcon
          className="back-arrow"
          onClick={() => {
            navigate("/");
          }}
        />
        <span className="title">회원가입 (1/2)</span>
      </div>
      <div className="main">
        <div className="id-input">
          <p style={{ marginLeft: "10px" }}>아이디 (이메일)</p>
          <Input
            className="email-input"
            size="large"
            placeholder="자주 사용하는 이메일 입력"
            onChange={(e) => validateEmail(e)}
            suffix={
              emailCheck ? (
                <img src="/images/greentick.png" style={{ width: "18px" }} />
              ) : (
                <span />
              )
            }
            style={{ width: "327px", marginBottom: "12px" }}
          />
        </div>
        <div className="pw-input">
          <p style={{ marginLeft: "10px" }}>비밀번호</p>
          <Input
            type="password"
            className="password-input"
            size="large"
            onChange={(e) => {
              validatePassword(e);
            }}
            suffix={
              pwCheck ? (
                <img src="/images/greentick.png" style={{ width: "18px" }} />
              ) : (
                <span />
              )
            }
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            style={{ width: "327px", marginBottom: "12px" }}
          />
        </div>
        <div className="pw-check">
          <p style={{ marginLeft: "10px" }}>비밀번호 확인</p>
          <Input
            type="password"
            className="password-check"
            size="large"
            placeholder="입력한 비밀번호와 일치하는지 확인"
            onChange={(e) => {
              setEqualPw(e.target.value);
            }}
            suffix={
              equalPw === pw ? (
                <img src="/images/greentick.png" style={{ width: "18px" }} />
              ) : (
                <span />
              )
            }
            style={{
              width: "327px",
              marginBottom: "12px",
              borderRadius: "5px",
            }}
          />
        </div>
        <div className="nm-input">
          <p style={{ marginLeft: "10px" }}>이름</p>
          <Input
            className="name-input"
            size="large"
            placeholder="실명 입력"
            onChange={(e) => {
              setName(e.target.value);
              setNameCheck(true);
            }}
            suffix={
              name ? (
                <img src="/images/greentick.png" style={{ width: "18px" }} />
              ) : (
                <span />
              )
            }
            style={{
              width: "327px",
              marginBottom: "12px",
              borderRadius: "5px",
            }}
          />
        </div>
        {/* <div className="num-input">
          <p style={{ marginLeft: "10px" }}>휴대폰 번호</p>
          <div style={{ display: "flex" }}>
            <Input
              className="number-input"
              size="large"
              placeholder="01012345678"
              style={{
                width: "235px",
                marginBottom: "12px",
                borderRadius: "5px",
              }}
            />
            <Button disabled auto style={{ marginLeft: "5px" }}>
              인증받기
            </Button>
          </div>
        </div>
        <div className="cd-input">
          <p style={{ marginLeft: "10px" }}>인증번호</p>
          <Input
            className="code-input"
            size="large"
            placeholder="인증번호 4자리"
            style={{
              width: "327px",
              marginBottom: "12px",
              borderRadius: "5px",
            }}
          />
        </div> */}
        <div className="service">
          <p>서비스 정책</p>
          <List size="small" bordered>
            <List.Item
              style={{ display: "flex", justifyContent: "flex-start" }}
            >
              <CheckIcon
                className={iconStyle1}
                onClick={() => {
                  if (iconStyle1 === "enabled") {
                    setIconStyle1("disabled");
                    setIconStyle2("disabled");
                    setIconStyle4("disabled");
                    setIconStyle5("disabled");
                    setIconStyle3("disabled");
                  } else {
                    setIconStyle1("enabled");
                    setIconStyle2("enabled");
                    setIconStyle3("enabled");
                    setIconStyle4("enabled");
                    setIconStyle5("enabled");
                  }
                  setService1(true);
                  setService2(true);
                  setService3(true);
                  setService4(true);
                  setService5(true);
                }}
              />
              전체 동의
            </List.Item>
            <List.Item
              style={{ display: "flex", justifyContent: "flex-start" }}
            >
              <CheckIcon
                className={iconStyle2}
                onClick={() => {
                  if (iconStyle2 === "enabled") {
                    setIconStyle2("disabled");
                  } else {
                    setIconStyle2("enabled");
                  }
                  setService2(true);
                }}
              />
              만 14세 이상입니다. (필수)
            </List.Item>
            <List.Item
              style={{ display: "flex", justifyContent: "flex-start" }}
            >
              <CheckIcon
                className={iconStyle3}
                onClick={() => {
                  if (iconStyle3 === "enabled") {
                    setIconStyle3("disabled");
                  } else {
                    setIconStyle3("enabled");
                  }
                  setService3(true);
                }}
              />
              서비스 이용약관 동의 (필수)
              <img
                src="/images/detail.png"
                style={{ marginLeft: "auto", width: "10px" }}
                onClick={() => {
                  navigate("/service");
                }}
              />
            </List.Item>
            <List.Item
              style={{ display: "flex", justifyContent: "flex-start" }}
            >
              <CheckIcon
                className={iconStyle4}
                onClick={() => {
                  if (iconStyle4 === "enabled") {
                    setIconStyle4("disabled");
                  } else {
                    setIconStyle4("enabled");
                  }
                  setService4(true);
                }}
              />
              개인정보 수집 및 이용 동의 (필수)
              <img
                src="/images/detail.png"
                style={{ marginLeft: "auto", width: "10px" }}
                onClick={() => {
                  navigate("/service");
                }}
              />
            </List.Item>
            <List.Item
              style={{ display: "flex", justifyContent: "flex-start" }}
            >
              <CheckIcon
                className={iconStyle5}
                onClick={() => {
                  if (iconStyle5 === "enabled") {
                    setIconStyle5("disabled");
                  } else {
                    setIconStyle5("enabled");
                  }
                  setService5(true);
                }}
              />
              마케팅 수신 동의 (선택)
              <img
                src="/images/detail.png"
                style={{ marginLeft: "auto", width: "10px" }}
                onClick={() => {
                  navigate("/service");
                }}
              />
            </List.Item>
          </List>
        </div>
        {nameCheck &&
        emailCheck &&
        pwCheck &&
        service2 &&
        service3 &&
        service4 ? (
          <>
            <button
              onClick={() => {
                navigate("/signup2");
              }}
              className="login-button"
            >
              다음
            </button>
            <br />
          </>
        ) : (
          <>
            <button
              disabled
              className="login-button"
              style={{ opacity: "0.5" }}
            >
              다음
            </button>
            <br />
          </>
        )}
      </div>
    </>
  );
}

export default Signup1;
