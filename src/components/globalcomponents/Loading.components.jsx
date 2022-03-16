import { Loading } from "@nextui-org/react";
import styled from "styled-components";

function LoadingScreen() {
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

export default LoadingScreen;
