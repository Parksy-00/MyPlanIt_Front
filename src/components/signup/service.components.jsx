import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { List, Typography, Divider, Card } from "antd";
import CheckIcon from "@mui/icons-material/Check";
import "./service.components.css";

function Service({
  service1,
  service2,
  service3,
  service4,
  service5,
  setService1,
  setService2,
  setService3,
  setService4,
  setService5,
  iconStyle1,
  iconStyle2,
  iconStyle3,
  iconStyle4,
  iconStyle5,
  setIconStyle1,
  setIconStyle2,
  setIconStyle3,
  setIconStyle4,
  setIconStyle5,
  setEmailAgree,
  setSnsAgree,
}) {
  let navigate = useNavigate();
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  return (
    <>
      <div className="header">
        <ArrowBackIosIcon
          className="back-arrow"
          onClick={() => {
            navigate("/signup1");
          }}
          style={{ marginRight: "120px", marginBottom: "10px" }}
        />
        <span className="title" style={{ marginRight: "20px" }}>
          약관 동의
        </span>
      </div>
      <Card style={{ width: 327, height: 48 }}>
        <span style={{ display: "flex" }}>
          <CheckIcon
            onClick={() => {
              if (iconStyle2 === "enabled") {
                setIconStyle2("disabled");
              } else {
                setIconStyle2("enabled");
              }
              setService2(!service2);
            }}
            className={iconStyle2}
          />
          <span style={{ marginTop: "2px" }}>만 14세 이상입니다. (필수)</span>
        </span>
      </Card>
      <Card style={{ width: 327, height: 170, marginTop: 9 }}>
        <span style={{ display: "flex" }}>
          <CheckIcon
            className={iconStyle3}
            onClick={() => {
              if (iconStyle3 === "enabled") {
                setIconStyle3("disabled");
              } else {
                setIconStyle3("enabled");
              }
              setService3(!service3);
            }}
          />
          <span style={{ marginTop: "2px" }}>서비스 이용 약관 동의 (필수)</span>
        </span>
        <hr style={{ opacity: 0.2 }} />
        <span>
          <h4 style={{ fontSize: "13px", marginBottom: 5 }}>제 1조 (총칙)</h4>
          <h5 style={{ fontSize: "11px", marginBottom: 8 }}>제 1조 (목적)</h5>
          <p style={{ fontSize: "9px", marginTop: 4, opacity: 0.5 }}>
            이 약관은 "마이플래닛 컴퍼니"(이하 “회사”라 함)가 운영하는
            “마이플래닛” (이하 “마이플래닛”이라 함)에서 제공하는 모든
            서비스(이하 “서비스”라 함) 를 이용함에 있어 이용자의 권리 및 의무,
            기타 부수 사항에 관하여 규정함을 목적으로 합니다.
          </p>
        </span>
      </Card>
      <Card style={{ width: 327, height: 170, marginTop: 9 }}>
        <span style={{ display: "flex" }}>
          <CheckIcon
            className={iconStyle4}
            onClick={() => {
              if (iconStyle4 === "enabled") {
                setIconStyle4("disabled");
              } else {
                setIconStyle4("enabled");
              }
              setService4(!service4);
            }}
          />
          <span style={{ marginTop: "2px" }}>
            개인정보 수집 및 이용 동의 (필수)
          </span>
        </span>
        <hr style={{ opacity: 0.2 }} />
        <span>
          <h4 style={{ fontSize: "13px", marginBottom: 5 }}>제 1조 (총칙)</h4>
          <h5 style={{ fontSize: "11px", marginBottom: 8 }}>제 1조 (목적)</h5>
          <p style={{ fontSize: "9px", marginTop: 4, opacity: 0.5 }}>
            수집하는 개인정보 항목 (이력서 양식 내용 일체) : 성명, 주민등록번호,
            전화번호, 주소, 이메일, 가족관계, 학력사항, 경력 사항, 자격사항 등과
            그 외 이력서 기재 내용 일체 - 개인정보의 이용 목적 : 수집된
            개인정보를 사업장 신규 채용 서류 심사 및 인사서 류로 활용하며, 목적
            외의 용도로는 사용하지 않습니다.
          </p>
        </span>
      </Card>
      <Card style={{ width: 327, height: 96, marginTop: 9 }}>
        <span style={{ display: "flex" }}>
          <CheckIcon
            className={iconStyle5}
            onClick={() => {
              if (iconStyle5 === "enabled") {
                setIconStyle5("disabled");
              } else {
                setIconStyle5("enabled");
              }
              setService5(!service5);
              setCheck1(!check1);
              setCheck2(!check2);
            }}
          />
          <span style={{ marginTop: "2px" }}>마케팅 정보 수신 동의 (선택)</span>
        </span>
        <hr style={{ opacity: 0.2 }} />
        <span style={{ display: "flex", marginTop: 12 }}>
          <span>
            <div className="check" style={{ marginLeft: 20 }}>
              {!check1 ? (
                <img
                  src="/images/check1.png"
                  onClick={() => {
                    setCheck1(!check1);
                    setEmailAgree(1);
                  }}
                  style={{
                    width: "18px",
                    height: "18px",
                    marginRight: "8px",
                  }}
                />
              ) : (
                <img
                  src="/images/check2.png"
                  onClick={() => {
                    setCheck1(!check1);
                    setEmailAgree(0);
                  }}
                  style={{
                    width: "18px",
                    height: "18px",
                    marginRight: "8px",
                  }}
                />
              )}

              <p style={{ marginTop: 0, marginBottom: 0, color: "#C4C4C4" }}>
                이메일 수신 동의
              </p>
            </div>
          </span>
          <span>
            <div className="check" style={{ marginLeft: 20 }}>
              {!check2 ? (
                <img
                  src="/images/check1.png"
                  onClick={() => {
                    setCheck2(!check2);
                    setSnsAgree(1);
                  }}
                  style={{
                    width: "18px",
                    height: "18px",
                    marginRight: "8px",
                  }}
                />
              ) : (
                <img
                  src="/images/check2.png"
                  onClick={() => {
                    setCheck2(!check2);
                    setSnsAgree(0);
                  }}
                  style={{
                    width: "18px",
                    height: "18px",
                    marginRight: "8px",
                  }}
                />
              )}

              <p style={{ marginTop: 0, marginBottom: 0, color: "#C4C4C4" }}>
                SNS 수신 동의
              </p>
            </div>
          </span>
        </span>
      </Card>
      {service2 && service3 && service4 ? (
        <>
          <button
            onClick={() => {
              navigate("/signup1");
            }}
            className="login-button"
          >
            닫기
          </button>
          <br />
        </>
      ) : (
        <>
          <button disabled className="login-button" style={{ opacity: "0.5" }}>
            닫기
          </button>
          <br />
        </>
      )}
    </>
  );
}

export default Service;
