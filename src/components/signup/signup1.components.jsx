import "./signup1.components.css";
import { Button } from "@nextui-org/react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CheckIcon from "@mui/icons-material/Check";
import { Input, Switch } from "antd";
import { List, Typography, Divider } from "antd";

function Signup1() {
  const data = [
    "전체 동의",
    "만 14세 이상입니다. (필수)",
    "서비스 이용약관 동의 (필수)",
    "개인정보 수집 및 이용 동의 (필수)",
    "마케팅 수신 동의 (선택)",
  ];
  return (
    <>
      <div className="header">
        <ArrowBackIosIcon className="back-arrow" />
        <span className="title">회원가입 (1/2)</span>
      </div>
      <div className="main">
        <div className="id-input">
          <p style={{ marginLeft: "10px" }}>아이디 (이메일)</p>
          <Input
            className="email-input"
            size="large"
            placeholder="자주 사용하는 이메일 입력"
            style={{ width: "327px", marginBottom: "12px" }}
          />
        </div>
        <div className="pw-input">
          <p style={{ marginLeft: "10px" }}>비밀번호</p>
          <Input.Password
            className="password-input"
            size="large"
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            style={{ width: "327px", marginBottom: "12px" }}
          />
        </div>
        <div className="pw-check">
          <p style={{ marginLeft: "10px" }}>비밀번호 확인</p>
          <Input
            className="password-check"
            size="large"
            placeholder="입력한 비밀번호와 일치하는지 확인"
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
            style={{
              width: "327px",
              marginBottom: "12px",
              borderRadius: "5px",
            }}
          />
        </div>
        <div className="num-input">
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
        </div>
        <div className="service">
          <p>서비스 정책</p>
          <List
            size="small"
            bordered
            dataSource={data}
            renderItem={(item) => (
              <List.Item
                style={{ display: "flex", justifyContent: "flex-start" }}
              >
                <CheckIcon style={{ marginRight: "10px" }} />
                {item}
              </List.Item>
            )}
          />
        </div>
        <button
          onClick={() => {
            alert("alert");
          }}
          className="login-button"
        >
          다음
        </button>
        <br />
      </div>
    </>
  );
}

export default Signup1;
