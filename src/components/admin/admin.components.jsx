import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Admin() {
  let navigate = useNavigate();

  const [pw, setPw] = useState("");

  function attemptLogin() {
    axios
      .post(
        "https://myplanit.link/manager",
        {
          username: pw,
          password: pw,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const data = response.data;
        sessionStorage.setItem("access", data.django_token.access);
        sessionStorage.setItem("refresh", data.django_token.refresh);
        navigate("/todo");
      })
      .catch((error) => {
        if (error.response.status === 400) {
          alert("존재하지 않는 이메일입니다");
        } else if (error.response.status === 401) {
          alert("비밀번호가 틀렸습니다");
        } else {
          alert("오류");
        }
      });
  }

  return (
    <Container>
      <input
        onChange={(e) => {
          setPw(e.target.value);
        }}
        style={{ marginBottom: "10px" }}
        placeholder="아이디 입력"
      />
      <button onClick={attemptLogin}>로그인</button>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Admin;
