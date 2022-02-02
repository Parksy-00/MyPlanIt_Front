import { useState } from "react";
import "./onboard1.components.css";
import { useNavigate } from "react-router-dom";
import { Progress } from "antd";

function Onboard1() {
  let navigate = useNavigate();

  const [check, setCheck] = useState(false);

  return (
    <>
      <img
        src="/images/celebrate.png"
        style={{ width: "80px", marginTop: "200px", marginBottom: "28px" }}
      />
      <p
        className="txt1"
        style={{
          fontFamily: "PretendardRegular",
          fontSize: "22px",
          textAlign: "center",
          color: "black",
        }}
      >
        플랜잇님, 가입을 축하드려요!
      </p>
      <p
        className="txt2"
        style={{
          marginBottom: "310px",
          fontFamily: "PretendardRegular",
          fontSize: "16px",
          textAlign: "center",
          color: "#929292",
        }}
      >
        간단한 응답으로 딱 맞는 플랜을 추천 받을 수 있어요
      </p>
      <div className="check">
        {!check ? (
          <img
            src="/images/check1.png"
            onClick={() => {
              setCheck(!check);
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
              setCheck(!check);
            }}
            style={{
              width: "18px",
              height: "18px",
              marginRight: "8px",
            }}
          />
        )}

        <p
          style={{
            marginTop: 0,
            marginBottom: 0,
            color: "#C4C4C4",
            fontFamily: "PretendardRegular",
            fontSize: "14px",
            textAlign: "center",
          }}
        >
          다음에 할래요
        </p>
      </div>
      <Progress
        percent={33}
        strokeColor="black"
        showInfo={false}
        size="small"
        height="1px"
        style={{ width: "325px", marginTop: "25px", marginBottom: "30px" }}
      />
      <button
        onClick={() => {
          navigate("/onboard2");
        }}
        className="login-button"
        style={{
          marginTop: 0,
          fontFamily: "PretendardMedium",
          fontSize: "20px",
          textAlign: "center",
          color: "white",
        }}
      >
        다음
      </button>
    </>
  );
}
export default Onboard1;
