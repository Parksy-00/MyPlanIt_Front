import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Loading } from "@nextui-org/react";
import styled from "styled-components";

function GoogleSocial() {
  const navigate = useNavigate();
  useEffect(() => {
    const code = window.location.href.split("=")[1].slice(0, -6);
    console.log(code);
    axios
      .get(`https://myplanit.link/auth/google?code=${code}`)
      .then((response) => {
        const data = response.data;
        const status = response.status;
        sessionStorage.setItem("access", data.django_token.access);
        sessionStorage.setItem("refresh", data.django_token.refresh);
        navigate("/todo");
      })
      .catch((error) => {
        console.log(error.message);
      });
  });

  return (
    <LoadingIcon>
      <Loading color="secondary" />
    </LoadingIcon>
  );
}

const LoadingIcon = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default GoogleSocial;
