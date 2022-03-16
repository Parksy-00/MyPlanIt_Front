import { useState } from "react";
import "./signup1.components.css";
import { Input } from "antd";
import validator from "validator";
import Visibility from "./visibility.conponents";
import Service from "./service.components";

function Signup1({
  email,
  setEmail,
  password,
  setPassword,
  name,
  setName,
  equalPw,
  setEqualPw,
  setStep,
  emailCheck,
  setEmailCheck,
  pwCheck,
  setPwCheck,
  nameCheck,
  setNameCheck,
  service,
  setService,
  emailAgree,
  setEmailAgree,
  snsAgree,
  setSnsAgree,
}) {
  const [visible, setVisible] = useState(false);
  const passwordValidator = require("password-validator");
  let schema = new passwordValidator();
  schema.is().min(8).has().digits(1);

  const canGoNext =
    nameCheck &&
    emailCheck &&
    equalPw == password &&
    pwCheck &&
    service[1] &&
    service[2] &&
    service[3];

  const validateEmail = (e) => {
    const email = e.target.value;
    setEmail(email);

    if (validator.isEmail(email)) {
      setEmailCheck(true);
    } else {
      setEmailCheck(false);
    }
  };

  const validatePassword = (e) => {
    const pw = e.target.value;
    setPassword(pw);

    if (schema.validate(pw)) {
      setPwCheck(true);
    } else {
      setPwCheck(false);
    }
  };

  const checkIcon = (check) =>
    check ? (
      <img src="/images/greentick.png" style={{ width: "18px" }} />
    ) : (
      <span />
    );

  return (
    <>
      <div className="main">
        <div className="id-input">
          <p className="inputLabel">아이디 (이메일)</p>
          <Input
            id="inputID"
            className="email-input inputText"
            size="large"
            placeholder="자주 사용하는 이메일 입력"
            value={email}
            onChange={(e) => validateEmail(e)}
            suffix={checkIcon(emailCheck)}
          />
        </div>
        <div className="pw-input">
          <p className="inputLabel">비밀번호</p>
          <Input
            id="inputID"
            className="password-input inputText"
            type={visible ? "text" : "password"}
            size="large"
            value={password}
            onChange={(e) => validatePassword(e)}
            suffix={
              <>
                {checkIcon(pwCheck)}
                <Visibility visible={visible} setVisible={setVisible} />
              </>
            }
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
          />
        </div>
        <div className="pw-check">
          <p className="inputLabel">비밀번호 확인</p>
          <Input
            id="inputID"
            type="password"
            className="password-check inputText"
            size="large"
            placeholder="입력한 비밀번호와 일치하는지 확인"
            value={equalPw}
            onChange={(e) => setEqualPw(e.target.value)}
            suffix={checkIcon(equalPw === password && equalPw.length > 0)}
          />
        </div>
        <div className="nm-input">
          <p className="inputLabel">이름</p>
          <Input
            id="inputID"
            className="name-input inputText"
            size="large"
            placeholder="실명 입력"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setNameCheck(true);
            }}
            suffix={checkIcon(nameCheck)}
          />
        </div>

        <Service
          service={service}
          setService={setService}
          emailAgree={emailAgree}
          setEmailAgree={setEmailAgree}
          snsAgree={snsAgree}
          setSnsAgree={setSnsAgree}
        />

        <button
          disabled={!canGoNext}
          className="login-button"
          style={{ opacity: canGoNext ? "1" : "0.5" }}
          onClick={() => setStep(2)}
        >
          다음
        </button>
        <br />
      </div>
    </>
  );
}

export default Signup1;

/* <div className="num-input">
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
        </div> */
