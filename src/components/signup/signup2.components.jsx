import { useState } from "react";
import axios from "axios";
import "./signup2.components.css";
import { Input } from "antd";
import { useNavigate } from "react-router-dom";

function Signup2({ email, password, name, emailAgree, snsAgree }) {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  function attemptSignup() {
    axios
      .post(
        `https://myplanit.link/signup`,
        {
          email: email,
          password: password,
          realname: name,
          username: username,
          email_agree: emailAgree,
          sns_agree: snsAgree,
        },
        {
          withCredentials: true,
        }
      )
      .then(function (response) {
        console.log({
          email: email,
          password: password,
          realname: name,
          username: username,
          email_agree: emailAgree,
          sns_agree: snsAgree,
        });
        if (response.status === 201) {
          sessionStorage.setItem("username", username);
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

  return (
    <>
      <p
        className="text1"
        style={{
          fontFamily: "PretendardRegular",
          fontSize: "18px",
          color: "black",
        }}
      >
        마이플랜잇에 오신 것을 환영합니다!
      </p>
      <p
        className="text2"
        style={{
          fontFamily: "PretendardRegular",
          fontSize: "14px",
          color: "#929292",
        }}
      >
        사용하실 닉네임을 입력해주시면 회원가입이 완료돼요
      </p>
      <div className="nn-input">
        <p
          style={{
            marginLeft: "10px",
            marginBottom: "12px",
            marginTop: "100px",
            fontFamily: "PretendardRegular",
            fontSize: "16px",
            color: "black",
          }}
        >
          닉네임
        </p>
        <Input
          id="inputID"
          className="nickname-input inputText"
          size="large"
          placeholder="plan-it"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          style={{
            marginBottom: "200px",
          }}
        />
      </div>
      <button
        onClick={() => {
          attemptSignup();
        }}
        className="login-button"
        style={{
          fontFamily: "PretendardMedium",
          fontSize: "18px",
          color: "white",
        }}
      >
        가입 완료
      </button>
    </>
  );
}

export default Signup2;
