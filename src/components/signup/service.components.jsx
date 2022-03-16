import { useState } from "react";
import { List } from "antd";
import CheckIcon from "@mui/icons-material/Check";
import "./service.components.css";
import ServiceDetail from "./serviceDetail.components";

function Service({
  service,
  setService,
  emailAgree,
  setEmailAgree,
  snsAgree,
  setSnsAgree,
}) {
  const [showDetail, setShowDetail] = useState(false);

  const iconStyle = (check) => (check ? "enabled" : "disabled");
  const serviceText = [
    "만 14세 이상입니다. (필수)",
    "서비스 이용약관 동의 (필수)",
    "개인정보 수집 및 이용 동의 (필수)",
  ];

  return (
    <>
      <div className="service">
        <p
          style={{
            fontFamily: "PretendardMedium",
            fontSize: "14px",
            marginLeft: "10px",
          }}
        >
          서비스 정책
        </p>
        <List size="small" bordered style={{ borderRadius: "4px" }}>
          <List.Item className="listItem">
            <CheckIcon
              className={iconStyle(service[0])}
              style={{ fontFamily: "PretendardRegular", fontSize: "19px" }}
              onClick={() => {
                if (service[0]) {
                  setService([false, false, false, false, false]);
                  setEmailAgree(false);
                  setSnsAgree(false);
                } else {
                  setService([true, true, true, true, true]);
                  setEmailAgree(true);
                  setSnsAgree(true);
                }
              }}
            />
            <span style={{ marginRight: "auto" }}>전체 동의</span>
          </List.Item>

          {serviceText.map((text, i) => (
            <List.Item
              className="listItem"
              style={{ borderBottom: "none" }}
              key={i}
            >
              <CheckIcon
                className={"checkIcon " + iconStyle(service[i + 1])}
                style={{ fontFamily: "PretendardRegular", fontSize: "19px" }}
                onClick={() => {
                  setService([
                    ...service.slice(0, i + 1),
                    !service[i + 1],
                    ...service.slice(i + 2),
                  ]);
                }}
              />
              <span style={{ marginRight: "auto" }}>{text}</span>
              <img
                src="/images/detail.png"
                style={{ marginLeft: "auto", width: "6px" }}
                onClick={() => {
                  setShowDetail(true);
                }}
              />
            </List.Item>
          ))}

          <List.Item className="listItem">
            <CheckIcon
              className={iconStyle(service[4])}
              style={{ fontFamily: "PretendardRegular", fontSize: "19px" }}
              onClick={() => {
                setService([...service.slice(0, 4), !service[4]]);
                if (service[4]) {
                  setEmailAgree(false);
                  setSnsAgree(false);
                } else {
                  setEmailAgree(true);
                  setSnsAgree(true);
                }
              }}
            />
            <span style={{ marginRight: "auto" }}>마케팅 수신 동의 (선택)</span>
            <img
              src="/images/detail.png"
              style={{ marginLeft: "auto", width: "6px" }}
              onClick={() => {
                setShowDetail(true);
              }}
            />
          </List.Item>
        </List>
      </div>

      {showDetail && (
        <ServiceDetail
          setShowDetail={setShowDetail}
          service={service}
          setService={setService}
          iconStyle={iconStyle}
          emailAgree={emailAgree}
          setEmailAgree={setEmailAgree}
          snsAgree={snsAgree}
          setSnsAgree={setSnsAgree}
        />
      )}
    </>
  );
}

export default Service;
