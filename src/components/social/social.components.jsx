import { useEffect } from "react";
import axios from "axios";
import { Loading } from "@nextui-org/react";
import styled from "styled-components";

function Social() {
  useEffect(() => {
    const code = window.location.href.split("=")[1];
    console.log(code);
    axios
      .get("https://myplanit.link/login/kakao/", {
        code: code,
      })
      .then((response) => {
        console.log(response);
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

export default Social;
