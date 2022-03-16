import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState } from "react";
import { Card } from "antd";
import CheckIcon from "@mui/icons-material/Check";

function ServiceDetail({
  setShowDetail,
  setService,
  service,
  iconStyle,
  emailAgree,
  setEmailAgree,
  snsAgree,
  setSnsAgree,
}) {
  return (
    <div className="serviceDetail">
      <div className="header">
        <CloseOutlinedIcon
          className="back-arrow"
          onClick={() => {
            setShowDetail(false);
          }}
          style={{ marginBottom: "10px" }}
        />
        <span className="title" style={{ marginRight: "20px" }}>
          약관 동의
        </span>
      </div>

      <Card style={{ width: 327, height: 48 }}>
        <span style={{ display: "flex", marginTop: "10px" }}>
          <CheckIcon
            className={iconStyle(service[1])}
            onClick={() => {
              setService([
                ...service.slice(0, 1),
                !service[1],
                ...service.slice(2),
              ]);
            }}
          />
          <span style={{ marginTop: "2px" }}>만 14세 이상입니다. (필수)</span>
        </span>
      </Card>

      <Card style={{ width: 327, height: 170, marginTop: 9 }}>
        <span style={{ display: "flex", marginTop: "8px" }}>
          <CheckIcon
            className={iconStyle(service[2])}
            onClick={() => {
              setService([
                ...service.slice(0, 2),
                !service[2],
                ...service.slice(3),
              ]);
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

      <Card style={{ width: 327, height: 180, marginTop: 9 }}>
        <span style={{ display: "flex", marginTop: "8px" }}>
          <CheckIcon
            className={iconStyle(service[3])}
            onClick={() => {
              setService([
                ...service.slice(0, 3),
                !service[3],
                ...service.slice(4),
              ]);
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
        <span style={{ display: "flex", marginTop: "8px" }}>
          <CheckIcon
            className={iconStyle(service[4])}
            onClick={() => {
              setService([
                ...service.slice(0, 4),
                !service[4],
                ...service.slice(5),
              ]);
              if (service[4]) {
                setEmailAgree(false);
                setSnsAgree(false);
              } else {
                setEmailAgree(true);
                setSnsAgree(true);
              }
            }}
          />
          <span style={{ marginTop: "2px" }}>마케팅 정보 수신 동의 (선택)</span>
        </span>

        <hr style={{ opacity: 0.2 }} />

        <span style={{ display: "flex", marginTop: 12 }}>
          <span>
            <div className="check" style={{ marginLeft: 20 }}>
              <img
                src={emailAgree ? "/images/check2.png" : "/images/check1.png"}
                onClick={() => {
                  setEmailAgree(!emailAgree);
                }}
                style={{
                  width: "18px",
                  height: "18px",
                  marginRight: "8px",
                }}
              />

              <p
                style={{
                  marginTop: 0,
                  marginBottom: 0,
                  color: "#C4C4C4",
                  fontSize: "12px",
                }}
              >
                이메일 수신 동의
              </p>
            </div>
          </span>

          <span>
            <div className="check" style={{ marginLeft: 20 }}>
              <img
                src={snsAgree ? "/images/check2.png" : "/images/check1.png"}
                onClick={() => {
                  setSnsAgree(!snsAgree);
                }}
                style={{
                  width: "18px",
                  height: "18px",
                  marginRight: "8px",
                }}
              />

              <p
                style={{
                  marginTop: 0,
                  marginBottom: 0,
                  color: "#C4C4C4",
                  fontSize: "12px",
                }}
              >
                SNS 수신 동의
              </p>
            </div>
          </span>
        </span>
      </Card>

      <button onClick={() => setShowDetail(false)} className="login-button">
        닫기
      </button>
      <br />
    </div>
  );
}

export default ServiceDetail;
