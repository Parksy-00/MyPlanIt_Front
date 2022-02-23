import { useEffect } from "react";
import axios from "axios";
import { Loading } from "@nextui-org/react";
import styled from "styled-components";

function Social() {
  useEffect(() => {
    const code = window.location.href.split("=")[1];
    axios
      .get("https://myplanit.link/login/kakao/callback/", {
        code: code,
      })
      .then((response) => {
        console.log(response);
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

export default Social;
